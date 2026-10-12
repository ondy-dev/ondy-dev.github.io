/*
  Builds docs/decision-map.html, the map of every path through the game: each moment,
  what the player can do there, every case of every branch, and every fact the game
  checks. It reads game/story.js and game/game.js directly, so it can't drift from the
  game. Run it after changing the story:

      node tomorrow/tools/decision-map.js
*/

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

// Load the story and the engine's rules without a browser (startGame() needs a page, so it's left out).
const code = read("game/story.js") + "\n" + read("game/game.js").replace(/startGame\(\);\s*$/, "");
const { STORY, FIXES, FIXES_NEEDED } = new Function("console", code + "\nreturn { STORY, FIXES, FIXES_NEEDED };")({
  warn() {},
  log() {},
});

/* ---------------- plain names for things ---------------- */

// What each fact means, in a few words. The code name is shown next to it.
const FACT_NAMES = {
  relived: "that today is a repeat",
  reason: "why Maya is going",
  why_secret: "why Maya never told her",
  tried_to_tell: "that Maya tried to tell her on Thursday",
  read: "that she left Maya's text on Read",
  nobody_laughed: "that nobody at the diner was laughing at her",
  mom: "that Mom knew",
  out_loud: "that she told Mom out loud",
  photo: "the fourth frame of the photo strip",
  august: "the night in August on the tower",
  sketch: "what's in Maya's sketchbook",
  march: "that the letter came in March",
  feelings: "how she feels about Maya",
  ready: "that the way out is open",
  peace: "the peace fix (a goodbye without a fight)",
  keep: "the keep fix (asking her to stay)",
  confess: "the confess fix (telling her)",
  sorry: "the sorry fix (knocking)",
  station: "the station fix (getting on the bus)",
  permission: "the permission fix (telling her about the loop)",
};

// What a player would naturally type for each branch, shown as the example.
const EXAMPLES = {
  phone: "check my phone", photos: "look through the photos", remember: "remember", hide: "stay in bed",
  house: "go to her house", mom: "ask mom what lourdes said", "screen door": "finish her sentence",
  breathe: "breathe", theo: "talk to theo", turn: "turn around", hold: "hold my breath", kind: "it's not your fault",
  "say what": "say something", tower: "go to the tower", text: "text maya", goodbye: "say goodbye",
  stay: "please stay", confess: "i love you", knock: "knock", bus: "run for the bus", jacket: "can i have my jacket back",
  loop: "i've lived today before", go: "you should go", watch: "watch the bus go from the tower", wave: "see her off",
};

const PLACES = {
  wake: "Your room",
  kitchen: "The kitchen",
  diner: "Dot's Diner",
  street: "Main Street",
  driveway: "The Reyeses' driveway",
  porch: "Her porch",
  home: "Home, with the bus idling",
};

/* ---------------- helpers ---------------- */

const esc = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const list = (value) => [value].flat(Infinity).filter(Boolean);
const tagsOf = (line) => (String(line).match(/^\[([^\]]*)\]/) || [, ""])[1];

// A line of the story as the player would read it, cut to a readable length.
// Story text is shown in italics, the way the game shows emphasis, without extra quote marks.
function quote(line, max = 160) {
  let text = String(line).replace(/^\[[^\]]*\]\s*/, "").replace(/^(# |~ |_ |> )/, "").replace(/ \| /g, " ");
  if (text.length > max) text = text.slice(0, max - 1).trimEnd() + "…";
  if ((text.match(/\*/g) || []).length % 2) text = text.replace(/\*([^*]*)$/, "$1"); // cut mid-italics
  text = esc(text).replace(/\*(.+?)\*/g, "<b>$1</b>").replace(/\{enter\}/g, "ENTER");
  return `<i class="game">${text}</i>`;
}

const factName = (fact) => `${esc(FACT_NAMES[fact] || fact)} <code>${esc(fact)}</code>`;

// "a, b and c"
function joined(items) {
  if (items.length <= 1) return items.join("");
  return items.slice(0, -1).join(", ") + " and " + items.at(-1);
}

const casesOf = (name) => STORY.branches[name].map((c) => ({ needs: [], learn: [], fix: null, night: null, ...c }));
const anchor = (name) => "b-" + name.replace(/\s+/g, "-");
const placed = new Set(); // branches already given an anchor, so each id is used once

// Where each branch can be reached from.
const reachedFrom = {};
for (const moment of STORY.moments) {
  for (const [action, branch] of Object.entries(moment.changes || {})) {
    if (branch !== "let it happen") (reachedFrom[branch] ||= []).push(moment.id);
  }
}

/* ---------------- one case, in plain sentences ---------------- */

function describeCase(c, index, cases) {
  const parts = [];
  const first = list(c.text).find((line) => !/day two/.test(tagsOf(line)));

  let condition = "";
  if (c.needs.length) condition = `If Nell knows ${joined(c.needs.map(factName))}: `;
  else if (cases.length > 1) condition = index === 0 ? "" : "Otherwise: ";
  parts.push(`${condition}${quote(first)}`);

  if (c.learn.length) parts.push(`She learns ${joined(c.learn.map(factName))}.`);
  if (c.fix) parts.push(`This counts as ${esc(FACT_NAMES[c.fix] || c.fix)}.`);
  if (c.scene) parts.push(`It's the same scene as <a href="#${anchor(c.scene)}">${esc(c.scene)}</a>, so doing both counts as a repeat.`);

  if (c.wayOut) {
    parts.push(`<strong>This ends the loop</strong> as ${esc(STORY.endings[c.wayOut].name)}.`);
  } else if (c.night) {
    const night = list(c.night).find((line) => !line.startsWith("# "));
    parts.push(`The day ends. That night: ${quote(night, 120)}`);
  } else {
    parts.push("The day doesn't end. The moment stays open and she can still choose.");
  }
  return parts.join(" ");
}

function describeBranch(name) {
  const cases = casesOf(name);
  if (cases.length === 1) return describeCase(cases[0], 0, cases);
  return `<ul class="cases">${cases.map((c, i) => `<li>${describeCase(c, i, cases)}</li>`).join("")}</ul>`;
}

/* ---------------- sections ---------------- */

function intro() {
  return `<header>
  <h1>TOMORROW</h1>
  <p class="sub">The decision map</p>
  <p>This is every path through the game: what the player can do at each of the seven moments, what each choice leads to, and what Nell has to know for some of them to work. I generate it from <code>game/story.js</code>, so it always matches what's actually in the game.</p>
  <p>A few words I use throughout. A <strong>moment</strong> is one of the seven places the day stops and waits. A <strong>change</strong> is the one thing the player can do differently each day, and it usually ends the day. A <strong>fact</strong> is something Nell finds out. Facts are the only thing that survives the loop. A <strong>fix</strong> is a change that tries to repair the day, and the way out needs ${FIXES_NEEDED} different ones.</p>
  <nav>
    <a href="#rules">How a turn works</a>
    <a href="#endings">How the loop ends</a>
    <a href="#day">The seven moments</a>
    <a href="#facts">What Nell can know</a>
    <a href="#words">Words the game listens for</a>
  </nav>
  </header>`;
}

function rules() {
  return `<section id="rules">
  <h2>How a turn works</h2>
  <p>Each time the player presses ENTER, the game goes down this list and stops at the first thing that fits.</p>
  <ol>
    <li><strong>RESTART</strong> opens the restart menu. "Back to the first Tuesday" makes Nell forget everything but keeps the endings found and the colors. "Erase everything" clears those too.</li>
    <li><strong>A few things are answered anywhere</strong>, even at night: thoughts of self-harm get the 988 line, and "make it stop" or "what's the point" get their own replies.</li>
    <li><strong>HELP, LOOK, THINK and inventory</strong> never use up the day. THINK lists what Nell knows.</li>
    <li><strong>An empty ENTER</strong> lets the moment happen the way it happened, and the day moves on.</li>
    <li><strong>On day one</strong>, nothing can change. The game says what Nell meant to do, then it happens the old way.</li>
    <li>The game finds the <strong>action</strong> in what was typed. It checks the moment's own words first, then the global list, and the first match wins.</li>
    <li>If it's <strong>what Nell actually did</strong> ("eat", "keep walking", "fine, then go"), the moment happens.</li>
    <li>Anything starting with <strong>"look at"</strong> is free, at every moment.</li>
    <li>On the second Tuesday, <strong>hiding in bed</strong> gets one warning first.</li>
    <li>If the action is a <strong>change</strong> at this moment, it plays. The branch picks its first case whose facts Nell knows.</li>
    <li>If there's a <strong>free reply</strong> for it, at this moment or anywhere, it answers and the moment stays open.</li>
    <li>If it's a change that belongs to <strong>another moment</strong>, the game says "Not yet." or "That moment's already gone."</li>
    <li>Otherwise it's a miss, and after two misses the game gives a hint.</li>
  </ol>
  <p>When a change plays, making the same fix twice doesn't count. Nell gets "Why does it sound like you practiced that?" and nothing is learned. If a fact completes the sketchbook, or both the photo strip and August, Nell admits her feelings on her own. Any change on the second Tuesday adds "And just like that, it's a different day."</p>
  <p>Each moment is told one of three ways, depending on one fact. Before Nell knows it, the day is told the way she felt it, and reality warps. After she knows it, the truth shows through. On the last day, once the way out is open, it's told the way it really was, and only with what she actually found out.</p>
  </section>`;
}

function endings() {
  const knowing = STORY.endings.knowing;
  const withoutKnowing = STORY.endings.withoutKnowing;
  return `<section id="endings">
  <h2>How the loop ends</h2>
  <p>At the end of a day where the player let all seven moments happen, the game checks these in order.</p>
  <ol>
    <li><strong>Day one</strong> always leads to the first night. ${quote(STORY.nights.first.at(-2))}</li>
    <li><strong>${esc(withoutKnowing.name)}.</strong> On the second Tuesday, if Nell changed nothing and learned nothing, the loop ends here. She never finds out why, she gets up anyway, and the epilogue jumps ten years later to Dot's Diner. This is the only way to see the epilogue.</li>
    <li><strong>${esc(knowing.name)}.</strong> If Nell has made ${FIXES_NEEDED} different fixes and knows why Maya never told her, the day is told honestly and the loop ends. The night the way out opens, the game says ${quote(STORY.thinner)} On a ready day, watching the bus leave from the tower at 8:40 ends it the same way.</li>
    <li>Otherwise the day loops, and the night says what's missing:
      <ul>
        <li>She hasn't found out anything yet: ${quote(STORY.nights.tooSoon.noFacts[1])}</li>
        <li>She knows things but hasn't tried a fix: ${quote(STORY.nights.tooSoon.noFixes[1])}</li>
        <li>She's tried fewer than ${FIXES_NEEDED} fixes: ${quote(STORY.nights.tooSoon.someFixes[1])}</li>
        <li>She has the fixes but not the why: ${quote(STORY.nights.tooSoon.noWhy[1])}</li>
      </ul>
    </li>
  </ol>
  <p>The six fixes are ${joined(FIXES.map((fix) => `<a href="#f-${fix}">${esc(fix)}</a>`))}. The bar at the top of the game counts the endings found, and that count survives a restart.</p>
  </section>`;
}

function moment(m) {
  const header = list(m.tell).find((line) => line.startsWith("# "));
  const time = header ? header.slice(2).replace(" | ", " · ").split(" · ")[1] : "after “Then go.”";
  const enter = list(m.letItHappen).find((line) => !/day two/.test(tagsOf(line)));
  const dayTwo = list(m.tell).concat(list(m.letItHappen)).filter((line) => /day two/.test(tagsOf(line)));
  const changes = Object.entries(m.changes || {}).filter(([, branch]) => branch !== "let it happen");
  const frees = Object.keys(m.freeReplies || {}).flatMap((key) => key.split(",").map((k) => k.trim()));

  // Several actions can lead to the same branch here ("tower" and "talk" both climb the tower).
  const byBranch = {};
  for (const [action, branch] of changes) {
    const words = (m.words && m.words[action]) || STORY.words[action] || [];
    (byBranch[branch] ||= []).push(...words.filter((w) => !w.startsWith("=")));
  }

  const items = Object.entries(byBranch)
    .map(([branch, words]) => {
      const example = EXAMPLES[branch] || words[0] || branch;
      const others = words.filter((w) => w !== example);
      const id = placed.has(branch) ? "" : ` id="${anchor(branch)}"`;
      placed.add(branch);
      return `<li${id}><p class="action">Type <kbd>${esc(example)}</kbd>${others.length ? ` <span class="also">(also: ${joined(others.slice(0, 4).map((w) => `“${esc(w)}”`))})</span>` : ""}</p>
        <div class="result">${describeBranch(branch)}</div></li>`;
    })
    .join("");

  return `<article class="moment" id="m-${m.id}">
    <h3 class="hdr">TUESDAY${time ? ` | ${esc(time)}` : ""}<br><span>${esc(PLACES[m.id] || m.id)}</span></h3>
    <p>${m.truth ? `How it's told depends on whether Nell knows ${factName(m.truth)}.` : "It's told the same way every time."} ${enter ? `If the player presses ENTER: ${quote(enter)}` : "If the player presses ENTER, it happens the way it happened."}</p>
    ${dayTwo.length ? `<p class="note">On the second Tuesday the game pushes: ${dayTwo.map((line) => quote(line, 120)).join(" ")}</p>` : ""}
    <p class="note">On day one, anything typed here gets ${quote(m.dayOne)}</p>
    <ul class="changes">${items}</ul>
    ${frees.length ? `<p class="note">Free to try here, without using up the day: ${joined(frees.map(esc))}.</p>` : ""}
  </article>`;
}

function day() {
  return `<section id="day">
  <h2>The seven moments</h2>
  <p>The day runs top to bottom. At each moment the player can press ENTER or make one change. A change that ends the day sends Nell to 11:52 PM and back to 7:14 the next morning.</p>
  ${STORY.moments.map(moment).join("")}
  </section>`;
}

function facts() {
  const learned = {};
  const needed = {};
  const lines = {};
  for (const [name, cases] of Object.entries(STORY.branches)) {
    for (const c of cases) {
      for (const f of c.learn || []) (learned[f] ||= new Set()).add(name);
      if (c.fix) (learned[c.fix] ||= new Set()).add(name);
      for (const f of c.needs || []) (needed[f] ||= new Set()).add(name);
    }
  }
  (function scan(value) {
    if (typeof value === "string") {
      for (const tag of tagsOf(value).split(",")) {
        const match = tag.trim().match(/^if (not )?(.+)$/);
        if (match) lines[match[2]] = (lines[match[2]] || 0) + 1;
      }
    } else if (value && typeof value === "object") Object.values(value).forEach(scan);
  })(STORY);

  const set = {
    feelings: "on her own, after the sketchbook, or after both the photo strip and August",
    relived: "on every day after the first",
    ready: `once she has ${FIXES_NEEDED} different fixes and knows why Maya never told her`,
  };
  const link = (name) => `<a href="#${anchor(name)}">${esc(name)}</a>`;
  const names = Object.keys(FACT_NAMES);

  const entries = names
    .map((f) => {
      const how = set[f] ? `Nell knows this ${set[f]}.` : learned[f] ? `Learned in ${joined([...learned[f]].map(link))}.` : "Never learned.";
      const needs = needed[f] ? ` Needed for ${joined([...needed[f]].map(link))}.` : "";
      const truth = STORY.moments.filter((m) => m.truth === f).map((m) => PLACES[m.id].toLowerCase());
      const told = truth.length ? ` Changes how ${joined(truth)} is told.` : "";
      const count = lines[f] ? ` It changes ${lines[f]} line${lines[f] > 1 ? "s" : ""} of the story.` : "";
      const think = STORY.think.facts[f] ? `<span class="think">THINK: ${quote(list(STORY.think.facts[f]).join(" "))}</span>` : "";
      return `<div class="fact" id="f-${f}"><dt>${esc(FACT_NAMES[f])} <code>${esc(f)}</code></dt><dd>${how}${needs}${told}${count} ${think}</dd></div>`;
    })
    .join("");

  return `<section id="facts">
  <h2>What Nell can know</h2>
  <p>Facts are the only thing that carries from one Tuesday to the next. Some open new choices, some change how a moment is told, and some just change a line or two. The fixes count as facts too, so the story can react to what Nell has already tried.</p>
  <dl>${entries}</dl>
  </section>`;
}

function words() {
  const rows = Object.entries(STORY.words)
    .map(([action, words]) => {
      let where;
      if (STORY.anywhere[action]) where = "answered anywhere";
      else if (STORY.replies[action]) where = "a free reply";
      else {
        const at = STORY.moments.filter((m) => m.changes && m.changes[action]).map((m) => PLACES[m.id]);
        where = at.length ? joined(at) : "nowhere yet";
      }
      return `<tr><td><code>${esc(action)}</code></td><td>${esc(where)}</td><td class="words">${words.map((w) => esc(w.replace(/^=/, ""))).join(", ")}</td></tr>`;
    })
    .join("");
  return `<section id="words">
  <h2>Words the game listens for</h2>
  <p>This is the global list. Each moment can add its own words, and those are checked first. The game goes top to bottom and takes the first match, so more specific phrases sit above general ones. A word that only counts as the whole input (like "wait") is shown here without its marker.</p>
  <div class="scroll"><table>
    <thead><tr><th>Action</th><th>Where it does something</th><th>Words</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  </section>`;
}

/* ---------------- the page ---------------- */

const page = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Tomorrow Decision Map</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
  /* The game's own look: one dark terminal column, IBM Plex Mono, dashed scene headers. */
  :root {
    --bg: #0d0d0c;
    --fg: #d8d4cb;
    --dim: #868279;
    --bright: #f1ede4;
    --rule: #3a3833;
    --light: #e9b872; /* the bus light from the cover, used only for ways out */
    --mono: "IBM Plex Mono", ui-monospace, Menlo, Consolas, monospace;
    color-scheme: dark;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: var(--bg); color: var(--fg); }
  body { font-family: var(--mono); font-size: 15px; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  main { max-width: 720px; margin: 0 auto; padding-block: 56px 96px; padding-inline: 16px; }
  h1 { font-size: 1.7rem; font-weight: 500; letter-spacing: 0.3em; color: var(--bright); margin: 8vh 0 0; }
  .sub { color: var(--dim); font-style: italic; margin: 0.2em 0 2em; }
  h2 { font-size: 1rem; font-weight: 500; color: var(--bright); letter-spacing: 0.12em; text-transform: uppercase; margin: 3.5em 0 1em; }
  p, li, dd { max-width: 66ch; }
  p { margin: 0 0 1em; }
  strong { color: var(--bright); font-weight: 500; }
  a { color: var(--bright); text-decoration-color: var(--rule); text-underline-offset: 3px; }
  a:hover, a:focus-visible { text-decoration-color: var(--bright); }
  code { color: var(--dim); font-size: 0.85em; }
  kbd { font-family: var(--mono); color: var(--bright); }
  kbd::before { content: "> "; color: var(--dim); }
  .game { font-style: italic; color: var(--bright); }
  .game b { font-weight: 500; }
  em { font-style: italic; }
  nav { display: flex; flex-wrap: wrap; gap: 0.4em 1.6em; margin: 1.6em 0 0; }
  nav a { color: var(--dim); }
  nav a:hover { color: var(--bright); }
  ol, ul { padding-left: 1.4em; }
  li { margin-bottom: 0.6em; }
  ol li::marker { color: var(--dim); }
  .note { color: var(--dim); }
  .note .game { color: var(--fg); }
  .hdr { margin: 3em 0 1.2em; padding: 0.6em 0; border-top: 1px dashed var(--rule); border-bottom: 1px dashed var(--rule); font-size: 1em; font-weight: 400; letter-spacing: 0.12em; color: var(--bright); }
  .hdr span { color: var(--dim); letter-spacing: 0; font-style: italic; }
  .changes { list-style: none; padding: 0; margin: 1.4em 0; }
  .changes > li { margin-bottom: 1.4em; padding-left: 1em; border-left: 1px solid var(--rule); }
  .action { margin: 0 0 0.3em; }
  .also { color: var(--dim); font-size: 0.9em; }
  .result { color: var(--fg); }
  .cases { padding-left: 1.2em; margin: 0.3em 0 0; }
  .cases li { margin-bottom: 0.7em; }
  .result strong { color: var(--light); }
  dl { margin: 0; }
  .fact { margin-bottom: 1.4em; }
  dt { color: var(--bright); }
  dd { margin: 0.2em 0 0 1em; }
  .think { display: block; color: var(--dim); margin-top: 0.3em; }
  .think .game { color: var(--dim); }
  .scroll { overflow-x: auto; }
  table { border-collapse: collapse; width: 100%; font-size: 0.85em; }
  th, td { text-align: left; vertical-align: top; padding: 0.5em 0.7em 0.5em 0; border-bottom: 1px dashed var(--rule); }
  th { color: var(--dim); font-weight: 400; }
  td.words { color: var(--dim); min-width: 22em; }
  footer { margin-top: 4em; color: var(--dim); font-size: 0.85em; border-top: 1px dashed var(--rule); padding-top: 1em; }
</style>

<main>
  ${intro()}
  ${rules()}
  ${endings()}
  ${day()}
  ${facts()}
  ${words()}
  <footer>Generated from the game's own files. After changing the story, rebuild it with <code>node tomorrow/tools/decision-map.js</code>.</footer>
</main>
`;

const out = path.join(root, "docs", "decision-map.html");
fs.writeFileSync(out, page);
const cases = Object.values(STORY.branches).reduce((n, c) => n + c.length, 0);
console.log(`wrote ${path.relative(process.cwd(), out)}: ${STORY.moments.length} moments, ${Object.keys(STORY.branches).length} branches, ${cases} cases`);
