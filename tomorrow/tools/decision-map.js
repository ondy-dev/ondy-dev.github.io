/*
  Builds docs/decision-map.html: every moment, every action, every case of every branch,
  and every knowledge check, read straight from game/story.js and game/game.js.
  Run it after changing the story:

      node tomorrow/tools/decision-map.js
*/

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

// Load the story and the engine's rules without a browser (startGame() needs a page, so it's left out).
const code = read("game/story.js") + "\n" + read("game/game.js").replace(/startGame\(\);\s*$/, "");
const { STORY, FIXES, FIXES_NEEDED } = new Function(
  "console",
  code + "\nreturn { STORY, FIXES, FIXES_NEEDED };",
)({ warn() {}, log() {} });

/* ---------------- helpers ---------------- */

const esc = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// A story line without its [tags] and markers, with *italics*, cut to a readable length.
function plain(line, max = 150) {
  let text = String(line).replace(/^\[[^\]]*\]\s*/, "").replace(/^(# |~ |_ |> )/, "").replace(/ \| /g, " ");
  if (text.length > max) text = text.slice(0, max - 1).trimEnd() + "…";
  return esc(text).replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/\{enter\}/g, "ENTER");
}

const tagsOf = (line) => (String(line).match(/^\[([^\]]*)\]/) || [, ""])[1];
const list = (value) => [value].flat(Infinity).filter(Boolean);
const chip = (kind, text) => `<span class="chip ${kind}">${esc(text)}</span>`;
const facts = (names, kind) => names.map((name) => chip(kind, name)).join(" ");

// Every string in the story, with where it lives, e.g. "moments › diner › tell".
function* stringsIn(value, where) {
  if (typeof value === "string") yield { text: value, where };
  else if (Array.isArray(value)) for (const item of value) yield* stringsIn(item, where);
  else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) yield* stringsIn(item, where ? `${where} › ${key}` : key);
  }
}

/* ---------------- what the story contains ---------------- */

const moments = STORY.moments;
const branchNames = Object.keys(STORY.branches);
const casesOf = (name) => STORY.branches[name].map((c) => ({ needs: [], learn: [], fix: null, night: null, ...c }));

// Which moments lead to each branch, and through which action.
const reachedFrom = {};
for (const moment of moments) {
  for (const [action, branch] of Object.entries(moment.changes || {})) {
    if (branch === "let it happen") continue;
    (reachedFrom[branch] ||= []).push({ moment: moment.id, action });
  }
}

// Every fact: where it's learned, and every place that checks it.
const factInfo = {};
const fact = (name) => (factInfo[name] ||= { learnedBy: [], neededBy: [], lines: [], truthOf: [] });
for (const name of branchNames) {
  casesOf(name).forEach((c, i) => {
    c.learn.forEach((f) => fact(f).learnedBy.push(`${name} (case ${i + 1})`));
    c.needs.forEach((f) => fact(f).neededBy.push(`${name} (case ${i + 1})`));
    if (c.fix) fact(c.fix).learnedBy.push(`${name} (case ${i + 1}), as a fix`);
  });
}
for (const moment of moments) if (moment.truth) fact(moment.truth).truthOf.push(moment.id);
for (const { text, where } of stringsIn(STORY, "")) {
  for (const tag of tagsOf(text).split(",").map((t) => t.trim())) {
    const match = tag.match(/^if (not )?(.+)$/);
    if (match) fact(match[2]).lines.push({ where, not: Boolean(match[1]), text });
  }
}
fact("feelings").learnedBy.push("set by the game: after sketch, or after both photo and august");
fact("relived").learnedBy.push("set by the game: every day after the first");
fact("ready").learnedBy.push(`set by the game: ${FIXES_NEEDED} different fixes, and knowing why_secret`);

/* ---------------- sections ---------------- */

function legend() {
  const items = [
    ["need", "needs", "a fact Nell must know for this case"],
    ["learn", "learns", "a fact this case teaches"],
    ["fix", "fix", "counts toward the way out"],
    ["end", "ends the day", "the night, then 7:14 again"],
    ["free", "free", "the moment stays open"],
    ["out", "way out", "ends the loop"],
  ];
  return `<div class="legend">${items.map(([kind, name, what]) => `<span class="item">${chip(kind, name)} ${what}</span>`).join("")}</div>`;
}

function rulesSection() {
  return `<section id="rules">
  <h2>How the game decides</h2>
  <p>Every time the player presses ENTER, the game checks these in order and stops at the first that fits.</p>
  <ol class="steps">
    <li><b>RESTART</b>, anywhere: the restart menu. <i>Back to the first Tuesday</i> erases what Nell learned and keeps the endings found and the colors. <i>Erase everything</i> also erases those and asks how you feel again.</li>
    <li><b>Answers that work anywhere</b> (<code>STORY.anywhere</code>): ${Object.keys(STORY.anywhere).map((k) => `<code>${k}</code>`).join(", ")}. Safety first, in every mode, even at night.</li>
    <li><b>HELP, LOOK, THINK, inventory</b>: free. THINK lists every fact Nell knows.</li>
    <li><b>ENTER on an empty line</b>: the moment happens the way it happened (its <code>letItHappen</code>), and the day moves on. An ENTER within 0.7s of a new page is ignored.</li>
    <li><b>Only punctuation or emoji</b>: not understood.</li>
    <li><b>Day one</b>: nothing can change. The game repeats back what was meant (“You mean to…”), then the moment happens anyway.</li>
    <li><b>Find the action</b>: the moment's own <code>words</code> first, then the global <code>words</code>, top to bottom. The first match wins.</li>
    <li><b>What Nell actually did</b> (<code>nothing</code>, or a change marked “let it happen”): the moment happens.</li>
    <li><b>“look at …” / “look around”</b>: always free. The moment's reply for that thing, or LOOK.</li>
    <li><b>Hiding on the second Tuesday</b>: warned once (“Last Tuesday you didn’t”). The second try hides.</li>
    <li><b>A change</b>: the branch. Its first case whose <code>needs</code> Nell knows plays. See below.</li>
    <li><b>A free reply</b>: the moment's own, then the global <code>replies</code>. The moment stays open.</li>
    <li><b>An action from another moment</b>: “Not yet.” (or “She isn’t here. Not yet.” for Maya) if it comes later, “That moment’s already gone.” if it came earlier.</li>
    <li><b>Anything else</b>: one of the three misses, and from the second miss on, a hint.</li>
  </ol>

  <h3>When a change plays</h3>
  <ol class="steps">
    <li>The first case whose <code>needs</code> are all known is chosen.</li>
    <li>If that case is a fix and this scene was already used for a fix (<code>scene</code> lets text and tower count as one), it's a <b>repeat</b>: “Why does it sound like you practiced that?” and the night says to try something else. Nothing is learned.</li>
    <li>Otherwise its text plays and its facts are learned. If that completes <code>sketch</code>, or <code>photo</code> + <code>august</code>, Nell admits her feelings (learns <code>feelings</code>).</li>
    <li>No <code>night</code>: it was a reply, and the moment stays open.</li>
    <li>On the second Tuesday: “And just like that, it’s a different day.” The next morning remembers how far she got, if it was the street or later.</li>
    <li><code>wayOut</code>: the loop ends here (watching the bus go, on a ready day). Otherwise the fix is recorded and the night begins.</li>
  </ol>

  <h3>When every moment is let happen</h3>
  <table>
    <thead><tr><th>When</th><th>Checks</th><th>Result</th></tr></thead>
    <tbody>
      <tr><td>Day one</td><td>always</td><td>The first night. Tomorrow will be different.</td></tr>
      <tr><td>The second Tuesday</td><td>nothing was learned today</td><td>${chip("out", "Without Knowing")} The night, a Wednesday where only “get up” goes on, then ten years later.</td></tr>
      <tr><td>Any later day</td><td>ready: ${FIXES_NEEDED} of ${FIXES.length} fixes and <code>why_secret</code></td><td>${chip("out", "Knowing")} The day is told honestly (only what Nell found out), the last night, Wednesday, “get up”.</td></tr>
      <tr><td>Not ready</td><td>no facts at all</td><td>${plain(STORY.nights.tooSoon.noFacts[1])}</td></tr>
      <tr><td>Not ready</td><td>facts, but no fix</td><td>${plain(STORY.nights.tooSoon.noFixes[1])}</td></tr>
      <tr><td>Not ready</td><td>fewer than ${FIXES_NEEDED} fixes</td><td>${plain(STORY.nights.tooSoon.someFixes[1])}</td></tr>
      <tr><td>Not ready</td><td>${FIXES_NEEDED}+ fixes, no <code>why_secret</code></td><td>${plain(STORY.nights.tooSoon.noWhy[1])}</td></tr>
    </tbody>
  </table>

  <h3>How honestly each moment is told</h3>
  <p>Each moment has a <code>truth</code> fact. Lines tagged <code>[felt]</code> show before Nell knows it (reality warps), <code>[heal]</code> after she knows it, and <code>[clear]</code> on the honest last day, once the way out is open. <code>[day two]</code> lines (the pushes to change something) show only on the second Tuesday.</p>
  </section>`;
}

function caseRow(name, c, index) {
  const what = c.wayOut ? chip("out", `way out: ${c.wayOut}`) : c.night ? chip("end", "ends the day") : chip("free", "reply, stays open");
  const firstLine = list(c.text).find((line) => !/^\[day two\]/.test(line)) || "";
  const night = c.night ? list(c.night).find((line) => !line.startsWith("# ")) : null;
  return `<tr>
    <td class="num">${index + 1}</td>
    <td>${c.needs.length ? facts(c.needs, "need") : '<span class="dim">otherwise</span>'}</td>
    <td>${facts(c.learn, "learn") || '<span class="dim">—</span>'}</td>
    <td>${c.fix ? chip("fix", c.fix) : '<span class="dim">—</span>'}${c.scene ? `<div class="dim small">same scene as ${esc(c.scene)}</div>` : ""}</td>
    <td>${what}<div class="line">“${plain(firstLine)}”</div>${night ? `<div class="line night">night: “${plain(night)}”</div>` : ""}</td>
  </tr>`;
}

function branchTable(name) {
  return `<table class="cases">
    <thead><tr><th>#</th><th>Needs</th><th>Learns</th><th>Fix</th><th>Result</th></tr></thead>
    <tbody>${casesOf(name).map((c, i) => caseRow(name, c, i)).join("")}</tbody>
  </table>`;
}

function momentSection(moment, index) {
  const header = list(moment.tell).find((line) => line.startsWith("# "));
  const time = header ? plain(header) : moment.id;
  const pokes = list(moment.tell).concat(list(moment.letItHappen)).filter((line) => /day two/.test(tagsOf(line)));
  const changes = Object.entries(moment.changes || {});
  const ownWords = moment.words || {};
  const replies = Object.keys(moment.freeReplies || {});

  const changeRows = changes
    .map(([action, branch]) => {
      const words = ownWords[action] || STORY.words[action] || [];
      const result =
        branch === "let it happen"
          ? '<span class="dim">what Nell did: the moment happens</span>'
          : `<a href="#b-${esc(branch.replace(/\s/g, "-"))}">${esc(branch)}</a>`;
      return `<tr><td class="mono">${esc(action)}</td><td class="words">${words.slice(0, 12).map(esc).join(" · ")}${words.length > 12 ? " …" : ""}</td><td>${result}</td></tr>`;
    })
    .join("");

  return `<section class="moment" id="m-${moment.id}">
    <h3><span class="idx">${index + 1}</span> ${time} <span class="dim">· ${moment.id}</span></h3>
    <dl class="facts">
      <dt>Truth</dt><dd>${moment.truth ? chip("need", moment.truth) + " decides felt / heal / clear" : '<span class="dim">none: told the same way</span>'}</dd>
      <dt>ENTER</dt><dd>${list(moment.letItHappen).map((line) => `<div class="line">${tagsOf(line) ? `<span class="tag">[${esc(tagsOf(line))}]</span> ` : ""}“${plain(line)}”</div>`).join("") || '<span class="dim">the moment happens</span>'}</dd>
      ${moment.whatNellDid ? `<dt>Typing what she did</dt><dd>“${plain(moment.whatNellDid)}”</dd>` : ""}
      <dt>Day one</dt><dd>“${plain(moment.dayOne)}”</dd>
      ${pokes.length ? `<dt>Second Tuesday</dt><dd>${pokes.map((line) => `<div class="line">“${plain(line)}”</div>`).join("")}</dd>` : ""}
      <dt>Free here</dt><dd class="words">${replies.map(esc).join(" · ") || '<span class="dim">none</span>'}</dd>
    </dl>
    <table class="changes">
      <thead><tr><th>Action</th><th>Words that trigger it (this moment's first)</th><th>Goes to</th></tr></thead>
      <tbody>${changeRows}</tbody>
    </table>
  </section>`;
}

function branchesSection() {
  return `<section id="branches">
  <h2>Every branch, case by case</h2>
  <p>Cases are checked top to bottom. The first whose <b>needs</b> Nell knows is the one that plays.</p>
  ${branchNames
    .map((name) => {
      const from = (reachedFrom[name] || []).map((r) => `${r.moment} <span class="dim">(${esc(r.action)})</span>`).join(", ");
      return `<div class="branch" id="b-${esc(name.replace(/\s/g, "-"))}">
        <h3>${esc(name)}</h3>
        <p class="from">Reached from: ${from || '<span class="dim">no moment</span>'}</p>
        ${branchTable(name)}
      </div>`;
    })
    .join("")}
  </section>`;
}

function factsSection() {
  const order = [
    ...Object.keys(STORY.think.facts).filter((f) => f !== "relived" && f !== "ready"),
    "relived",
    "ready",
  ];
  const names = [...new Set([...order, ...Object.keys(factInfo)])];
  const rows = names
    .map((name) => {
      const info = factInfo[name] || { learnedBy: [], neededBy: [], lines: [], truthOf: [] };
      const lineSummary = info.lines.length
        ? `${info.lines.length} line${info.lines.length > 1 ? "s" : ""} in ${[...new Set(info.lines.map((l) => l.where.split(" › ").slice(0, 3).join(" › ")))].slice(0, 6).map(esc).join("; ")}${info.lines.length > 6 ? "…" : ""}`
        : '<span class="dim">—</span>';
      return `<tr>
        <td>${chip(FIXES.includes(name) ? "fix" : "learn", name)}</td>
        <td>${info.learnedBy.map(esc).join("<br>") || '<span class="dim">—</span>'}</td>
        <td>${info.neededBy.map(esc).join("<br>") || '<span class="dim">—</span>'}${info.truthOf.length ? `<div>truth of: ${info.truthOf.map(esc).join(", ")}</div>` : ""}</td>
        <td class="small">${lineSummary}</td>
        <td class="small">${STORY.think.facts[name] ? plain(list(STORY.think.facts[name]).join(" ")) : '<span class="dim">—</span>'}</td>
      </tr>`;
    })
    .join("");
  return `<section id="facts">
  <h2>Every fact: where it's learned, what checks it</h2>
  <p>Knowledge is what survives the loop. <b>Needed by</b> means a branch case won't play without it. <b>Lines</b> are <code>[if …]</code> or <code>[if not …]</code> tags, which change what's said. The fixes count as facts too.</p>
  <div class="scroll"><table>
    <thead><tr><th>Fact</th><th>Learned by</th><th>Needed by</th><th>Changes these lines</th><th>THINK says</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  </section>`;
}

function anywhereSection() {
  const wordRows = Object.entries(STORY.words)
    .map(([action, words]) => {
      const where = STORY.anywhere[action]
        ? chip("free", "anywhere")
        : STORY.replies[action]
          ? chip("free", "free reply")
          : moments.filter((m) => m.changes && m.changes[action]).map((m) => m.id).join(", ") || '<span class="dim">no moment</span>';
      return `<tr><td class="mono">${esc(action)}</td><td class="words">${words.map(esc).join(" · ")}</td><td>${where}</td></tr>`;
    })
    .join("");
  return `<section id="words">
  <h2>Every word the game listens for</h2>
  <p>The global list, checked after each moment's own words. The first match wins, so the order matters.</p>
  <div class="scroll"><table>
    <thead><tr><th>Action</th><th>Words</th><th>Changes the day at / answers</th></tr></thead>
    <tbody>${wordRows}</tbody>
  </table></div>
  </section>`;
}

function endingsSection() {
  return `<section id="endings">
  <h2>The two endings</h2>
  <div class="two">
    <div class="card">
      <h3>${esc(STORY.endings.knowing.name)}</h3>
      <p><b>Opens:</b> ${FIXES_NEEDED} different fixes out of ${FIXES.map((f) => chip("fix", f)).join(" ")}, and ${chip("need", "why_secret")}. The night it opens: “${plain(STORY.thinner)}”</p>
      <p><b>Then:</b> let all seven moments happen, told honestly. Or, on a ready day, watch the bus go from the tower at 8:40.</p>
      <p><b>Ends:</b> the last night, Wednesday, “get up”. ${plain(STORY.endings.knowing.card.filter((l) => l.startsWith("_ "))[1] || "")}</p>
    </div>
    <div class="card">
      <h3>${esc(STORY.endings.withoutKnowing.name)}</h3>
      <p><b>Opens:</b> only on the second Tuesday, and only if nothing is learned that day.</p>
      <p><b>Then:</b> resist every push to change something, and let all seven moments happen.</p>
      <p><b>Ends:</b> “${plain(STORY.withoutKnowing.night.at(-1))}” Wednesday, “get up”, then ten years later at Dot’s.</p>
    </div>
  </div>
  <p class="dim">The endings found are counted in the bar at the top and survive RESTART.</p>
  </section>`;
}

/* ---------------- the page ---------------- */

const caseCount = branchNames.reduce((n, name) => n + STORY.branches[name].length, 0);
const page = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Tomorrow Decision Map</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>
  /* One reading column; wide tables scroll inside their own box. Dark-first, like the game's terminal. */
  :root {
    --bg: #0f0f0e; --fg: #dad6cd; --dim: #8a867c; --rule: #34322e; --panel: #171716;
    --learn: #7cc3b6; --fix: #e2a95e; --need: #b8a6e0; --end: #a9a49a; --out: #e58f8f;
    --font-mono: "IBM Plex Mono", ui-monospace, Menlo, Consolas, monospace;
    --font-body: "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
    color-scheme: dark;
  }
  @media (prefers-color-scheme: light) {
    :root:not([data-theme="dark"]) {
      --bg: #f5f3ee; --fg: #1f1e1b; --dim: #6c685f; --rule: #d9d5cc; --panel: #ecebe5;
      --learn: #1d7f72; --fix: #a9641a; --need: #5d47a3; --end: #5c5850; --out: #b23b3b; color-scheme: light;
    }
  }
  :root[data-theme="light"] {
    --bg: #f5f3ee; --fg: #1f1e1b; --dim: #6c685f; --rule: #d9d5cc; --panel: #ecebe5;
    --learn: #1d7f72; --fix: #a9641a; --need: #5d47a3; --end: #5c5850; --out: #b23b3b; color-scheme: light;
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font-family: var(--font-body); font-size: 15px; line-height: 1.55; }
  main { max-width: 1040px; margin: 0 auto; padding-block: 40px 80px; padding-inline: 16px; }
  h1, h2, h3 { font-family: var(--font-mono); font-weight: 500; line-height: 1.25; text-wrap: balance; }
  h1 { font-size: 1.6rem; letter-spacing: 0.08em; margin: 0 0 0.3em; }
  h2 { font-size: 1.15rem; margin: 2.6em 0 0.6em; padding-top: 0.8em; border-top: 1px dashed var(--rule); }
  h3 { font-size: 0.98rem; margin: 1.8em 0 0.5em; }
  p { max-width: 70ch; margin: 0 0 1em; }
  a { color: inherit; text-decoration-color: var(--dim); }
  code, .mono { font-family: var(--font-mono); font-size: 0.88em; }
  code { background: var(--panel); padding: 0.05em 0.35em; border-radius: 3px; }
  .lede { color: var(--dim); font-family: var(--font-mono); font-size: 0.9rem; }
  .stats { display: flex; flex-wrap: wrap; gap: 0.4em 1.6em; font-family: var(--font-mono); font-size: 0.85rem; color: var(--dim); margin: 1em 0 1.6em; font-variant-numeric: tabular-nums; }
  .stats b { color: var(--fg); font-weight: 500; }
  nav { display: flex; flex-wrap: wrap; gap: 0.3em 1.2em; font-family: var(--font-mono); font-size: 0.85rem; margin-bottom: 1.4em; }
  .legend .item { display: inline-flex; gap: 0.4em; align-items: baseline; }
  .legend { display: flex; flex-wrap: wrap; gap: 0.5em 1.2em; align-items: center; font-size: 0.82rem; color: var(--dim); margin: 0 0 1.2em; }
  .chip { display: inline-block; font-family: var(--font-mono); font-size: 0.74rem; padding: 0.05em 0.45em; border: 1px solid currentColor; border-radius: 3px; white-space: nowrap; margin: 0.1em 0; }
  .chip.learn { color: var(--learn); }
  .chip.fix { color: var(--fix); background: color-mix(in srgb, var(--fix) 14%, transparent); }
  .chip.need { color: var(--need); }
  .chip.end { color: var(--end); border-style: dashed; }
  .chip.free { color: var(--dim); }
  .chip.out { color: var(--out); background: color-mix(in srgb, var(--out) 14%, transparent); }
  .steps { padding-left: 1.6em; max-width: 78ch; }
  .steps li { margin-bottom: 0.45em; }
  .steps li::marker { font-family: var(--font-mono); color: var(--dim); }
  table { border-collapse: collapse; width: 100%; font-size: 0.84rem; margin: 0.4em 0 1em; }
  .scroll { overflow-x: auto; }
  th, td { text-align: left; vertical-align: top; padding: 0.45em 0.6em; border-bottom: 1px solid var(--rule); }
  th { font-family: var(--font-mono); font-weight: 500; font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--dim); }
  td.num { font-family: var(--font-mono); color: var(--dim); font-variant-numeric: tabular-nums; }
  td.words, dd.words { font-family: var(--font-mono); font-size: 0.78rem; color: var(--dim); }
  .line { font-size: 0.86rem; margin-top: 0.2em; }
  .line.night { color: var(--dim); font-style: italic; }
  .tag { font-family: var(--font-mono); font-size: 0.75rem; color: var(--need); }
  .dim { color: var(--dim); }
  .small { font-size: 0.8rem; }
  .moment, .branch { border: 1px solid var(--rule); border-radius: 6px; background: var(--panel); padding: 0.2em 1em 0.6em; margin: 1em 0; overflow-x: auto; }
  .moment h3, .branch h3 { margin-top: 0.8em; }
  .idx { display: inline-block; min-width: 1.6em; color: var(--dim); }
  .from { font-size: 0.85rem; color: var(--dim); margin-bottom: 0.4em; }
  dl.facts { display: grid; grid-template-columns: 9.5em 1fr; gap: 0.3em 1em; margin: 0.4em 0 0.8em; font-size: 0.88rem; }
  dl.facts dt { font-family: var(--font-mono); font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--dim); padding-top: 0.15em; }
  dl.facts dd { margin: 0; min-width: 0; }
  .two { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1em; }
  .card { border: 1px solid var(--rule); border-radius: 6px; padding: 0.2em 1em 0.4em; background: var(--panel); }
  @media (max-width: 560px) { dl.facts { grid-template-columns: 1fr; } dl.facts dt { padding-top: 0.6em; } }
</style>

<main>
  <h1>TOMORROW · DECISION MAP</h1>
  <p class="lede">every moment, action, case and knowledge check, generated from game/story.js</p>
  <div class="stats">
    <span><b>${moments.length}</b> moments</span>
    <span><b>${branchNames.length}</b> branches</span>
    <span><b>${caseCount}</b> cases</span>
    <span><b>${FIXES.length}</b> fixes, ${FIXES_NEEDED} needed</span>
    <span><b>${Object.keys(factInfo).length}</b> facts</span>
    <span><b>2</b> endings</span>
  </div>
  <nav>
    <a href="#rules">how it decides</a><a href="#endings">endings</a><a href="#day">the day</a>
    <a href="#branches">branches</a><a href="#facts">facts</a><a href="#words">words</a>
  </nav>
  ${legend()}
  ${rulesSection()}
  ${endingsSection()}
  <section id="day">
    <h2>The day, moment by moment</h2>
    <p>One change per day. Everything listed under <b>Free here</b> answers without using up the day, and so does any “look at …”.</p>
    ${moments.map(momentSection).join("")}
  </section>
  ${branchesSection()}
  ${factsSection()}
  ${anywhereSection()}
  <p class="dim small">Rebuild with <code>node tomorrow/tools/decision-map.js</code> after changing the story.</p>
</main>
`;

const out = path.join(root, "docs", "decision-map.html");
fs.writeFileSync(out, page);
console.log(`wrote ${path.relative(process.cwd(), out)}: ${moments.length} moments, ${branchNames.length} branches, ${caseCount} cases`);
