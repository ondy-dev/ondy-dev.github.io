/*
  Smoke test: plays the real game (story.js + game.js) without a browser and checks
  the rules of the loop. Run it from the repo folder with:

      node tomorrow/test/test.js
*/

const fs = require("fs");
const path = require("path");
const assert = require("assert");

/* ---------------- a pretend browser page ---------------- */

const warnings = []; // anything the game warns about while reading story.js

// Just enough of a page for game.js to run. Everything shown is collected as plain text.
// Returns ways to play it: type() a command, slide() the mood sliders, begin() the game.
function startGame() {
  let shownLines = [];
  let clock = 0;
  let reloaded = false;
  let cleared = false; // the screen was cleared during the last input
  const colors = {}; // the page's color tokens, as the mood sets them

  function fakeElement(extra = {}) {
    return {
      value: "",
      placeholder: "",
      textContent: "",
      hidden: false,
      listeners: {},
      classList: { toggle() {} },
      focus() {},
      scrollIntoView() {},
      addEventListener(type, handler) {
        this.listeners[type] = handler;
      },
      append(child) {
        shownLines.push(child.innerHTML.replace(/<[^>]+>/g, ""));
      },
      set innerHTML(html) {
        if (html === "") {
          shownLines = []; // the game cleared the screen
          cleared = true;
        }
      },
      ...extra,
    };
  }

  const sliders = ["happy", "sad", "angry", "anxious"].map((name) => fakeElement({ name, value: "0" }));
  const elements = {
    out: fakeElement(),
    line: fakeElement(),
    cmd: fakeElement(),
    status: fakeElement(),
    bar: fakeElement(),
    term: fakeElement(),
    endings: fakeElement(),
    restart: fakeElement(),
    mood: fakeElement({ querySelectorAll: () => sliders }),
    // The restart menu answers with `choice`, as if the player clicked it.
    "restart-menu": fakeElement({
      choice: "restart",
      showModal() {
        this.returnValue = this.choice;
        this.listeners.close();
      },
    }),
  };
  const savedData = {};

  const browser = {
    document: {
      getElementById: (id) => elements[id],
      querySelectorAll: () => [], // no data-ui words to fill in
      createElement: () => ({ scrollIntoView() {}, getBoundingClientRect: () => ({ top: 0 }) }),
      addEventListener() {},
      documentElement: {
        style: {
          setProperty: (token, value) => (colors[token] = value),
          removeProperty: (token) => delete colors[token],
        },
      },
    },
    window: {
      matchMedia: () => ({ matches: false }), // not a phone
      scrollTo() {},
      getSelection: () => "",
      location: { reload: () => (reloaded = true) },
    },
    localStorage: {
      getItem: (key) => savedData[key] ?? null,
      setItem: (key, value) => (savedData[key] = value),
      removeItem: (key) => delete savedData[key],
    },
    performance: { now: () => (clock += 1000) }, // time passes between inputs
    console: { warn: (message) => warnings.push(message), log: console.log }, // story.js typos land here
  };

  // Run story.js and game.js as if the page had loaded them.
  const code = ["story.js", "game.js"].map((file) => fs.readFileSync(path.join(__dirname, "..", "game", file), "utf8")).join("\n");
  new Function(...Object.keys(browser), code)(...Object.values(browser));

  const input = elements.cmd;
  const pressEnter = () => elements.line.listeners.submit({ preventDefault() {} });

  return {
    elements,
    savedData,
    wasReloaded: () => reloaded,

    // Types a command and presses ENTER, then turns pages until the game waits for a choice.
    // Returns everything shown, as one string.
    type(command) {
      const before = shownLines.length;
      cleared = false;
      input.value = command;
      pressEnter();
      while (input.placeholder.includes("continue")) pressEnter();
      return (cleared ? shownLines : shownLines.slice(before)).join("\n");
    },

    // The first screen: moves the sliders (0 to 10), then begins.
    slide(amounts) {
      for (const slider of sliders) slider.value = String(amounts[slider.name] || 0);
    },
    begin: () => elements.mood.listeners.submit({ preventDefault() {} }),
    colors: () => ({ ...colors }), // the page's colors, as the mood set them
  };
}

// WCAG contrast between two "oklch(L C H)" colors (OKLab to linear sRGB, by Björn Ottosson).
function contrast(first, second) {
  const luminance = (color) => {
    const [L, C, H] = color.match(/[\d.]+/g).map(Number);
    const a = C * Math.cos((H * Math.PI) / 180);
    const b = C * Math.sin((H * Math.PI) / 180);
    const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
    const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
    const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
    const clip = (value) => Math.min(1, Math.max(0, value));
    const red = clip(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
    const green = clip(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
    const blue = clip(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  };
  const [lighter, darker] = [luminance(first), luminance(second)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
}

/* ---------------- the checks ---------------- */

const game = startGame();
const type = game.type;

// story.js has no typos (misspelled tags, facts, parts or branch names).
assert.deepStrictEqual(warnings, [], "story.js warnings:\n" + warnings.join("\n"));

// The first screen asks how the player feels; beginning colors the page by it.
function colorsFor(mix) {
  const someone = startGame();
  someone.slide(mix);
  someone.begin();
  return someone.colors();
}

// Feelings change the colors, and every mix keeps the text readable
// (WCAG: 7:1 for the text, 4.5:1 for the dim notes).
const mixes = [{ happy: 10 }, { sad: 10 }, { angry: 10 }, { anxious: 10 }, { sad: 10, anxious: 10 }, { happy: 2 }];
mixes.push({ happy: 10, sad: 10, angry: 10, anxious: 10 });
for (const mix of mixes) {
  const colors = colorsFor(mix);
  assert.ok(contrast(colors["--fg"], colors["--bg"]) >= 7, JSON.stringify(mix));
  assert.ok(contrast(colors["--bright"], colors["--bg"]) >= 7, JSON.stringify(mix));
  assert.ok(contrast(colors["--dim"], colors["--bg"]) >= 4.5, JSON.stringify(mix));
}
assert.notStrictEqual(colorsFor({ angry: 10 })["--bg"], colorsFor({ happy: 10 })["--bg"]);
assert.deepStrictEqual(colorsFor({}), {}); // no feelings: the default colors

game.slide({ sad: 6, anxious: 3 });
game.begin();
assert.ok(game.colors()["--bg"]); // the mood's colors, once the game begins

// Plays one day until night falls: `moves` are typed at the first moments, ENTER at the rest.
function playDay(...moves) {
  const shown = [];
  for (let moment = 0; moment < 7; moment++) {
    shown.push(type(moves[moment] || ""));
    if (shown.join("\n").includes("11:52 PM")) break;
  }
  return shown.join("\n");
}

type(""); // the title screen

// Day one: typing changes nothing.
let shown = playDay("i love you", "why didnt you tell me?");
assert.match(shown, /You mean to say “I love you\.”/);
assert.match(shown, /You mean to say “Why didnt you tell me\.”/); // a question is speech too
assert.match(shown, /Tomorrow will be different/);

type(""); // wake up on day two

// Help, free replies, LOOK, and actions from the wrong moment never use up the day.
assert.match(type("?"), /Today happens the way it happened/);
assert.match(type("knock"), /She isn’t here\. Not yet\./);
assert.match(type("look at the ceiling"), /Ohio/);
assert.match(type("look at the corkboard"), /you and Maya, you and Maya/); // free, even at 7:14
assert.match(type("make it stop"), /doesn’t stop because you ask/); // answered anywhere

// Fix 1: the tower. It also teaches why Maya never told her. On the second Tuesday,
// any change is felt: it's a different day now.
shown = type("go to the tower");
assert.match(shown, /Hey, Nellie/);
assert.match(shown, /a different day/);
type(""); // wake up

// Texting her leads to the same tower scene, so it's a repeat now.
assert.match(type("text maya"), /practiced that/);
type("");

// Asking for the jacket back finds the letter in the pocket.
assert.match(playDay("", "", "", "", "can i have my jacket back"), /dated March/);
type("");

// "Don't let her go" is a plea to stay, not letting her go. Fix 2: keep.
assert.match(playDay("", "", "", "", "dont let her go"), /Stay/);
type("");

// Fix 3: knock. That opens the way out.
shown = playDay("", "", "", "", "", "knock");
assert.match(shown, /I meant some of it/);
assert.match(shown, /Thinner/);
type("");

// Making the same change twice counts for nothing.
assert.match(playDay("", "", "", "", "", "knock"), /practiced that/);
type("");

// Letting every moment happen now ends the loop, told honestly: only what Nell found out.
shown = playDay();
assert.match(shown, /You never did find out who it was/);
assert.match(shown, /She should have told you, too/);
assert.match(shown, /WEDNESDAY/);
assert.match(type("go back to sleep"), /slept enough/);
shown = type("get up");
assert.match(shown, /You do\.[\s\S]*Tuesdays/);
assert.match(shown, /ending found: Knowing \(1 of 2\)/);
assert.match(shown, /the very next day/); // points at the other ending

// RESTART, back to the first Tuesday: Nell forgets what she learned, but the endings found
// and the colors stay.
// It skips day one and wakes Nell on the second Tuesday.
const restarted = type("restart");
assert.match(restarted, /Again\./);
assert.doesNotMatch(restarted, /You mean to/);
// Knowing was found, so now the second Tuesday is the other way out.
let secondTuesday = restarted + playDay();
assert.match(secondTuesday, /Knock\. Just knock\./); // the pushes
assert.match(secondTuesday, /You still don’t know why she didn’t tell you/); // no truth
assert.match(type("look out the window"), /First you have to get up/); // only getting up goes on
secondTuesday = type("get up");
assert.match(secondTuesday, /You get up anyway/);
assert.match(secondTuesday, /ten years later/); // the epilogue
assert.match(secondTuesday, /Two Tuesdays/);
assert.match(secondTuesday, /ending found: Without Knowing \(2 of 2\)/);
assert.ok(game.savedData["tomorrow-mood"]);

// RESTART, erase everything: the endings and the colors go too, and the page starts over.
game.elements["restart-menu"].choice = "erase";
type("restart");
assert.ok(game.wasReloaded());
assert.deepStrictEqual(Object.keys(game.savedData), []);

// A new player: the second Tuesday can't be the way out until Knowing has been found.
const newGame = startGame();
newGame.begin(); // feeling nothing in particular
const typeInNewGame = newGame.type;
typeInNewGame(""); // the title screen
for (let moment = 0; moment < 7; moment++) typeInNewGame(""); // day one
typeInNewGame(""); // wake up on day two

// On a first run, pressing ENTER through the second Tuesday is not letting go: nothing was tried.
let firstRun = "";
for (let moment = 0; moment < 7; moment++) firstRun += typeInNewGame("") + "\n";
assert.match(firstRun, /Knock\. Just knock\./); // the pushes still come
assert.match(firstRun, /never once picked up/);
assert.doesNotMatch(firstRun, /WEDNESDAY|ending found/);

// After finding Knowing, a restart makes the same day the way out.

// Another game: on the second Tuesday, hiding warns once. The third morning remembers nothing
// almost-let-go, since she hid at 7:14. Then the tower, a stay, and Permission open the way out,
// and watching the bus go from the tower is a way out too.
const third = startGame();
third.begin();
const play = third.type;
play("");
for (let moment = 0; moment < 7; moment++) play(""); // day one
play(""); // the second Tuesday
assert.match(play("hide"), /Last Tuesday you didn’t/);
assert.match(play("hide"), /You pull the blanket up anyway/);
play("");
assert.match(play("go to the tower"), /Hey, Nellie/);
play("");
function playThird(...moves) {
  let out = "";
  for (let moment = 0; moment < 7; moment++) {
    out += play(moves[moment] || "") + "\n";
    if (/11:5\d PM/.test(out)) break;
  }
  return out;
}
assert.match(playThird("", "", "", "", "please stay"), /Please\. Stay/); // keep
play("");
assert.match(playThird("", "", "", "", "ive lived today before"), /That part’s mine/); // permission
play("");
shown = playThird("", "", "", "", "", "", "watch the bus go from the tower");
assert.match(shown, /You’ve never seen 11:53 before/);
assert.match(shown, /WEDNESDAY/);
assert.match(play("get up"), /ending found: Knowing/);

// Nothing went wrong while playing either.
assert.deepStrictEqual(warnings, [], "warnings while playing:\n" + warnings.join("\n"));

console.log("ok: all checks passed");
