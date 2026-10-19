"use strict";

/*
  TOMORROW: the engine
  ====================
  All of the writing lives in story.js (the STORY object). This file reads it and
  shows it, so changing the story should never mean changing this file.

  How the game works:
    - The same Tuesday replays as seven moments (STORY.moments).
    - At each moment the player presses ENTER to let it happen, or types one change.
    - A change plays a branch (STORY.branches), which ends the day.
    - The day resets. What the player has learned (Progress) doesn't.
    - There are two ways out (STORY.endings). Without Knowing: on the second Tuesday,
      let every moment happen again without learning anything, then an epilogue.
      Knowing: try to fix the day until Nell understands it, then let every moment happen.

  The code is split into small classes, each with one job:
    Line       one line of story text, and the tags that say when it shows
    Story      the STORY object, with defaults filled in and checked for typos
    Saved      the browser's storage, which a private window may not have
    Progress   what Nell has learned and tried; saved between visits
    Command    one thing the player typed, and what it might mean
    Terminal   shows text a page at a time, and the prompt line under it
    Mood       the colors, from how the player feels today
    Game       the day itself: moments, changes, nights and the ending
*/

const FIXES = ["peace", "keep", "confess", "sorry", "station", "permission"];
const FIXES_NEEDED = 3; // different fixes to try before letting the day happen can end the loop
const SAVE_KEY = "tomorrow-save-v4";
const PAGE_LENGTH = 520; // about one screen of text, in characters
const ENTER_GUARD_MS = 700; // an ENTER this soon after a moment appears is ignored
const PAGE_TOP_MARGIN = 64; // px above each new page: the bar at the top, plus some room
const ENDINGS_KEY = "tomorrow-endings"; // the endings found, kept apart so RESTART keeps them
const MOOD_KEY = "tomorrow-mood"; // how the player felt, which picks the colors; RESTART keeps it

function warn(message) {
  console.warn("story.js: " + message);
}

function clamp(value, low, high) {
  return Math.min(high, Math.max(low, value));
}

/* ================================================================
   Line
   ================================================================ */

// One line of story text, like "[clear, if read] Maya texted last night."
// The tags in brackets say when it shows (see TAGS at the top of story.js).
class Line {
  constructor(source) {
    const tagged = source.match(/^\[([^\]]*)\]\s*(.*)$/);
    this.text = tagged ? tagged[2] : source;

    this.honesty = []; // felt, heal, clear
    this.replay = null; // true: only on replays. false: only the first time. null: either.
    this.ifs = []; // facts Nell must (or must not) know
    this.from = []; // moments the change must have been made at
    this.dayTwo = null; // true: only on the second Tuesday. false: never on it. null: either.

    const tags = tagged ? tagged[1].split(",").map((tag) => tag.trim()) : [];
    for (const tag of tags) this.addTag(tag, source);
  }

  addTag(tag, source) {
    if (["felt", "heal", "clear"].includes(tag)) this.honesty.push(tag);
    else if (tag === "first time") this.replay = false;
    else if (tag === "replay") this.replay = true;
    else if (tag.startsWith("if not ")) this.ifs.push({ fact: tag.slice(7), known: false });
    else if (tag.startsWith("if ")) this.ifs.push({ fact: tag.slice(3), known: true });
    else if (tag.startsWith("from ")) this.from.push(tag.slice(5));
    else if (tag === "day two") this.dayTwo = true;
    else if (tag === "not day two") this.dayTwo = false;
    else warn(`unknown tag [${tag}] in: ${source}`);
  }

  // `situation` is { honesty, isReplay, isDayTwo, changedAt, knows(fact) }.
  // The line shows when every one of its tags fits.
  showsIn(situation) {
    if (this.dayTwo !== null && this.dayTwo !== situation.isDayTwo) return false;
    if (this.honesty.length > 0 && !this.honesty.includes(situation.honesty)) return false;
    if (this.replay !== null && this.replay !== situation.isReplay) return false;
    if (this.from.length > 0 && !this.from.includes(situation.changedAt)) return false;
    return this.ifs.every((condition) => situation.knows(condition.fact) === condition.known);
  }
}

/* ================================================================
   Story
   ================================================================ */

// The STORY object from story.js, with the parts a moment or branch can leave out
// filled in, and everything checked for typos.
class Story {
  constructor(data) {
    Object.assign(this, data);
    this.moments = data.moments.map((moment) => Story.withDefaults(moment));

    this.branches = {};
    for (const [name, cases] of Object.entries(data.branches)) {
      this.branches[name] = cases.map((branchCase) => ({ needs: [], learn: [], fix: null, night: null, ...branchCase }));
    }

    this.checkForTypos();
  }

  // Fills in a moment's optional parts, and splits "ceiling, stain" free replies in two.
  static withDefaults(moment) {
    const freeReplies = {};
    for (const [phrases, reply] of Object.entries(moment.freeReplies || {})) {
      for (const phrase of phrases.split(",")) freeReplies[phrase.trim()] = reply;
    }
    return { truth: null, words: {}, changes: {}, ...moment, freeReplies };
  }

  // Warns about names that don't match anything: usually a typo in story.js.
  checkForTypos() {
    const learnable = new Set(["feelings", "relived", "ready", ...FIXES]);
    const factsUsed = Object.keys(this.think.facts);
    const momentIds = this.moments.map((moment) => moment.id);

    for (const [name, cases] of Object.entries(this.branches)) {
      for (const branchCase of cases) {
        branchCase.learn.forEach((fact) => learnable.add(fact));
        factsUsed.push(...branchCase.needs);
        if (branchCase.fix && !FIXES.includes(branchCase.fix)) {
          warn(`branch "${name}" has fix "${branchCase.fix}", which isn't one of: ${FIXES.join(", ")}`);
        }
      }
    }

    for (const moment of this.moments) {
      if (moment.truth) factsUsed.push(moment.truth);
      for (const [action, branch] of Object.entries(moment.changes)) {
        if (branch !== "let it happen" && !this.branches[branch]) {
          warn(`in moment "${moment.id}", ${action}: "${branch}" names a branch that doesn't exist`);
        }
      }
    }

    // Every tagged line anywhere in the story.
    for (const text of allTextIn(this)) {
      if (!text.startsWith("[")) continue;
      const line = new Line(text); // warns about unknown tags
      factsUsed.push(...line.ifs.map((condition) => condition.fact));
      for (const id of line.from) {
        if (!momentIds.includes(id)) warn(`[from ${id}] doesn't match any moment`);
      }
    }

    for (const fact of new Set(factsUsed)) {
      if (!learnable.has(fact)) warn(`the fact "${fact}" is never learned. Is it misspelled?`);
    }
  }
}

// Every string inside a value, however deep it sits in lists and objects.
function allTextIn(value) {
  if (typeof value === "string") return [value];
  if (value && typeof value === "object") return Object.values(value).flatMap(allTextIn);
  return [];
}

/* ================================================================
   Saved
   ================================================================ */

// The browser's storage. A private window or a blocked frame may not have any: then the
// game still works, it just forgets everything when the page closes.
class Saved {
  static load(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (error) {
      return fallback;
    }
  }

  static save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // No storage: nothing to do.
    }
  }

  static erase(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // No storage: nothing to erase.
    }
  }
}

/* ================================================================
   Progress
   ================================================================ */

// What Nell has learned and tried. It survives the loop, and is saved in the browser.
class Progress {
  constructor(saved = {}) {
    this.days = 0; // Tuesdays lived so far
    this.facts = {}; // what Nell has learned, e.g. { reason: true }
    this.fixes = {}; // which of the six fixes she has tried, e.g. { peace: true }
    this.branchesPlayed = {}; // which scenes she has changed the day with, to notice a repeat
    this.dayTwoChangedAt = null; // where the second Tuesday stopped being let go, if it did
    this.timesSeen = {}; // how often each moment has been told, for shorter replays
    this.readySince = null; // the day the way out opened
    this.finished = false; // how the loop ended: "knowing" or "withoutKnowing"
    Object.assign(this, saved);
  }

  static load() {
    return new Progress(Saved.load(SAVE_KEY, {}));
  }

  static erase() {
    Saved.erase(SAVE_KEY);
  }

  save() {
    Saved.save(SAVE_KEY, this);
  }

  fixesTried() {
    return FIXES.filter((fix) => this.fixes[fix]).length;
  }

  // The way out opens after three different fixes, once Nell also knows why Maya never told her.
  isReady() {
    return this.fixesTried() >= FIXES_NEEDED && this.knows("why_secret");
  }

  // A fact is something Nell has learned, or the name of a fix she has tried.
  knows(fact) {
    if (fact === "ready") return this.isReady();
    if (fact === "relived") return this.days > 0;
    return Boolean(this.facts[fact] || this.fixes[fact]);
  }

  // How honestly a moment is told: felt, heal or clear (see TAGS in story.js).
  honestyFor(truth) {
    if (this.isReady()) return "clear";
    if (this.knows(truth)) return "heal";
    return "felt";
  }

  // Records new facts. Returns true if this is when Nell admits her feelings
  // (after the sketchbook, or after both the photo strip and the August memory).
  learn(facts) {
    for (const fact of facts) this.facts[fact] = true;

    const seenEnough = this.knows("sketch") || (this.knows("photo") && this.knows("august"));
    if (seenEnough && !this.knows("feelings")) {
      this.facts.feelings = true;
      return true;
    }
    return false;
  }

  recordFix(scene, fix) {
    this.fixes[fix] = true;
    this.branchesPlayed[scene] = true;
  }

  hasMade(scene) {
    return Boolean(this.branchesPlayed[scene]);
  }

  // Counts one telling of a moment. Returns true if it had been told before.
  markSeen(key) {
    const timesBefore = this.timesSeen[key] || 0;
    this.timesSeen[key] = timesBefore + 1;
    return timesBefore > 0;
  }
}

/* ================================================================
   Command
   ================================================================ */

// One thing the player typed.
class Command {
  constructor(text) {
    this.text = text; // exactly as typed
    // Lowercased without punctuation: "Maya's house!" becomes "mayas house".
    this.clean = text
      .toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // ENTER on an empty line.
  isEmpty() {
    return this.text === "";
  }

  // Only punctuation or emoji, like "?!".
  isGibberish() {
    return this.text !== "" && this.clean === "";
  }

  is(...commands) {
    return commands.includes(this.clean);
  }

  // True if the input contains any of these words or phrases, as whole words.
  // A word that starts with "=" must be the whole input, e.g. "=wait".
  mentions(words) {
    return words.some((word) => {
      if (word.startsWith("=")) return this.clean === word.slice(1);
      return (" " + this.clean + " ").includes(" " + word + " ");
    });
  }

  // The first action whose words the player typed. Each word list is checked in order.
  findAction(...wordLists) {
    for (const wordList of wordLists) {
      for (const [action, words] of Object.entries(wordList)) {
        if (this.mentions(words)) return action;
      }
    }
    return null;
  }
}

/* ================================================================
   Terminal
   ================================================================ */

// The page: text appears a page at a time. A page ends at a scene header or after
// about a screen of text, then waits for ENTER (or a tap), so the player reads at
// their own pace. The prompt line says whether ENTER turns a page or makes a choice.
class Terminal {
  constructor(ui) {
    this.ui = ui;
    this.output = document.getElementById("out");
    this.form = document.getElementById("line");
    this.input = document.getElementById("cmd");
    this.screenReaderStatus = document.getElementById("status");
    this.endingsCounter = document.getElementById("endings");
    this.restartMenu = document.getElementById("restart-menu");
    this.onPhone = window.matchMedia("(pointer: coarse)").matches;

    this.queue = []; // lines waiting to be shown
    this.pageIsFull = false; // a page is showing and more is waiting
    this.nextStartsPage = true; // scroll the next line to the top of the screen
    this.pageShownAt = 0; // when the last page finished appearing
  }

  add(text) {
    this.queue.push(text);
  }

  showPage() {
    let length = 0;
    while (this.queue.length > 0) {
      const line = this.queue[0];
      // A header starts a new page, unless only a line or two came before it.
      const headerBreak = line.startsWith("# ") && length > 160;
      const pageTooLong = length + line.length > PAGE_LENGTH;
      if (length > 0 && (headerBreak || pageTooLong)) break;

      this.showLine(this.queue.shift());
      length += line.length;
    }
    this.pageIsFull = this.queue.length > 0;
    if (!this.pageIsFull) this.pageShownAt = performance.now();
  }

  turnPage() {
    this.nextStartsPage = true;
    this.showPage();
  }

  // An ENTER right as a moment appears is probably a page turn, not a choice.
  justShowedPage() {
    return performance.now() - this.pageShownAt < ENTER_GUARD_MS;
  }

  clear() {
    this.output.innerHTML = "";
    this.queue = []; // a restart halfway through a page drops the rest
    this.pageIsFull = false;
    this.nextStartsPage = true;
    window.scrollTo(0, 0);
  }

  showTitle(text) {
    this.addElement("h1", "title", this.toHtml(text));
  }

  showEndingsCounter(text) {
    this.endingsCounter.textContent = text;
  }

  // RESTART asks first: back to the first Tuesday, or erase everything (see startGame).
  showRestartMenu() {
    this.restartMenu.returnValue = "";
    this.restartMenu.showModal();
  }

  // Repeats what the player typed, at the top of a new page.
  echo(text) {
    this.input.value = "";
    this.nextStartsPage = true;
    this.addElement("p", "echo", this.toHtml("> " + (text || "(enter)")));
  }

  // `playersMove`: the game is waiting for a choice, so the prompt says what ENTER does.
  updatePrompt(playersMove) {
    const yourMove = playersMove && !this.pageIsFull;

    if (this.pageIsFull) {
      this.input.placeholder = this.onPhone ? this.ui.continueOnPhone : this.ui.continue;
    } else if (yourMove) {
      this.input.placeholder = this.withKeyNames(this.ui.yourMove);
    } else {
      this.input.placeholder = "";
    }

    this.form.classList.toggle("busy", this.pageIsFull);
    if (this.pageIsFull) this.screenReaderStatus.textContent = "More. Press ENTER.";
    else if (yourMove) this.screenReaderStatus.textContent = "Your move.";
    else this.screenReaderStatus.textContent = "";

    // shortcut: ignores the on-screen keyboard's height; use visualViewport if phones hide the prompt.
    this.form.scrollIntoView({ block: "nearest" });
  }

  // The marker at the start of a line picks its style (see LINES in story.js).
  showLine(line) {
    const markers = { "# ": "hdr", "~ ": "warp", "_ ": "dim", "> ": "msg" };
    const style = markers[line.slice(0, 2)];
    if (style) line = line.slice(2);
    const tag = style === "hdr" ? "h2" : "p";
    this.addElement(tag, style || "", this.toHtml(line));
  }

  addElement(tag, className, html) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = html;
    this.output.append(element);
    // Scrolls only this page. scrollIntoView would also scroll itch.io's page around the game.
    if (this.nextStartsPage) window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - PAGE_TOP_MARGIN);
    this.nextStartsPage = false;
  }

  // {enter} becomes the name of the key on this device.
  withKeyNames(text) {
    return text.replace(/\{enter\}/g, this.onPhone ? "return" : "ENTER");
  }

  toHtml(text) {
    return this.withKeyNames(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*(.+?)\*/g, "<em>$1</em>") // *italics*
      .replace(/ \| /g, "<br>"); // a line break in a header
  }
}

/* ================================================================
   Mood
   ================================================================ */

// How the player feels today picks the game's colors. The science behind it:
//   Hue: across 30 countries, people link joy with yellow, anger with red, sadness with
//     grey and fear with black (Jonauskaite et al., 2020, Psychological Science).
//   Lightness and saturation: brighter colors feel more pleasant, and more saturated ones
//     more stirring (Valdez & Mehrabian, 1994): pleasure = .69B + .22S, arousal = -.31B + .60S.
// Each feeling has a place on Russell's circle of emotions: how pleasant, how stirred up.
// The mix of feelings gives one pleasure and arousal, and Valdez & Mehrabian's equations,
// solved the other way, turn them into brightness (B) and saturation (S). The colors are
// OKLCH, where lightness is what the eye sees, so the text stays readable in every mood.
const FEELINGS = {
  happy: { pleasure: 0.8, arousal: 0.4, hue: 85 }, // yellow
  sad: { pleasure: -0.7, arousal: -0.5, hue: 250 }, // grey, with a cool cast
  angry: { pleasure: -0.6, arousal: 0.8, hue: 25 }, // red
  anxious: { pleasure: -0.6, arousal: 0.6, hue: 115 }, // dark like fear; green-yellow, the least pleasant hue to Valdez & Mehrabian
};

class Mood {
  constructor(feelings = {}) {
    this.feelings = feelings; // how much of each, from 0 to 1, e.g. { sad: 0.7, anxious: 0.3 }
  }

  // The colors for the tokens in style.css, or null to keep the default ones.
  colors() {
    let total = 0;
    let pleasure = 0;
    let arousal = 0;
    let x = 0; // the hues, added up as arrows around the color wheel
    let y = 0;
    for (const [name, amount] of Object.entries(this.feelings)) {
      const feeling = FEELINGS[name];
      if (!feeling) continue;
      const angle = (feeling.hue * Math.PI) / 180;
      total += amount;
      pleasure += amount * feeling.pleasure;
      arousal += amount * feeling.arousal;
      x += amount * Math.cos(angle);
      y += amount * Math.sin(angle);
    }
    if (total === 0) return null;

    // A little of one feeling makes a little color. A lot of several makes their average.
    pleasure /= Math.max(1, total);
    arousal /= Math.max(1, total);

    // Valdez & Mehrabian's two equations, solved for brightness and saturation.
    const brightness = (0.6 * pleasure - 0.22 * arousal) / 0.4822;
    const saturation = (0.69 * arousal + 0.31 * pleasure) / 0.4822;

    // Feelings that pull toward different hues cancel out into grey.
    const hue = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
    const agreement = Math.hypot(x, y) / total;
    const strength = Math.min(1, total) * agreement * clamp(1 + 0.6 * saturation, 0.2, 2);

    const background = clamp(0.165 + 0.035 * brightness, 0.11, 0.22);
    const color = (lightness, chroma) =>
      `oklch(${lightness.toFixed(3)} ${(chroma * strength).toFixed(3)} ${hue.toFixed(1)})`;
    return {
      "--bg": color(background, 0.026),
      "--rule": color(background + 0.13, 0.04),
      "--dim": color(0.66, 0.04),
      "--fg": color(0.88, 0.02),
      "--bright": color(0.95, 0.06),
    };
  }

  // Paints the page. With no feelings, the default colors come back.
  apply() {
    const colors = this.colors();
    for (const token of ["--bg", "--rule", "--dim", "--fg", "--bright"]) {
      if (colors) document.documentElement.style.setProperty(token, colors[token]);
      else document.documentElement.style.removeProperty(token);
    }
  }
}

/* ================================================================
   Game
   ================================================================ */

class Game {
  constructor(story, terminal) {
    this.story = story;
    this.terminal = terminal;
    this.progress = new Progress();

    this.mode = "title"; // title | moment | night | wednesday | end
    this.momentIndex = 0; // which of the seven moments
    this.isReplay = false; // the current moment has been told before
    this.changedAt = null; // the moment where the player made a change
    this.missCount = 0; // inputs the game didn't understand today
    this.learnedToday = false; // a change today taught something (so it wasn't let go)
    this.warnedAboutHiding = false; // the second Tuesday warns once before hiding
    this.endingsFound = Saved.load(ENDINGS_KEY, []); // RESTART keeps these
  }

  /* ---------------- input ---------------- */

  start() {
    this.showEndingsCounter();
    this.showTitle();
    this.showPage();
  }

  // The player pressed ENTER with this text in the prompt.
  enter(text) {
    if (this.terminal.pageIsFull) return this.turnPage();
    if (text === "" && this.mode === "moment" && this.terminal.justShowedPage()) return;

    this.terminal.echo(text);
    this.handle(new Command(text));
    this.showPage();
  }

  turnPage() {
    this.terminal.turnPage();
    this.updatePrompt();
  }

  handle(command) {
    // These work anywhere.
    if (command.mentions(["restart"])) return this.terminal.showRestartMenu();
    const anywhere = this.story.anywhere[command.findAction(this.story.words)];
    if (anywhere) return this.say(anywhere);

    if (this.mode === "title") {
      this.terminal.clear();
      this.startDay();
    } else if (this.mode === "moment") {
      this.playerMove(command);
    } else if (this.mode === "night") {
      this.nightMove(command);
    } else if (this.mode === "wednesday") {
      this.wednesdayMove(command);
    } else if (this.mode === "end") {
      this.say(this.story.ui.playAgain);
    }
  }

  /* ---------------- text ---------------- */

  // Adds story text to the page, keeping only the lines whose tags fit right now.
  say(text, isReplay = false) {
    const moment = this.currentMoment();
    const situation = {
      honesty: this.progress.honestyFor(moment ? moment.truth : null),
      isReplay,
      isDayTwo: this.progress.days === 1,
      changedAt: this.changedAt,
      knows: (fact) => this.progress.knows(fact),
    };

    for (const source of [text].flat(Infinity)) {
      if (!source) continue;
      const line = new Line(source);
      if (line.showsIn(situation)) this.terminal.add(line.text.replace("{n}", this.progress.days));
    }
  }

  showPage() {
    this.terminal.showPage();
    this.updatePrompt();
  }

  updatePrompt() {
    this.terminal.updatePrompt(this.mode === "moment");
  }

  /* ---------------- the day ---------------- */

  currentMoment() {
    return this.story.moments[this.momentIndex];
  }

  showTitle() {
    this.terminal.clear();
    this.progress = Progress.load();

    // They already got out of the loop: leave them on their Wednesday.
    if (this.progress.finished) {
      this.mode = "wednesday";
      return this.say(this.wednesday().morning);
    }

    this.mode = "title";
    const [heading, ...rest] = this.story.title;
    this.terminal.showTitle(heading);
    this.say(rest);
    this.say(this.progress.days > 0 ? this.story.ui.resume : this.story.ui.begin);
  }

  startDay() {
    this.mode = "moment";
    this.momentIndex = 0;
    this.missCount = 0;
    this.learnedToday = false;
    this.warnedAboutHiding = false;
    if (this.progress.isReady() && this.progress.readySince === null) {
      this.progress.readySince = this.progress.days;
    }
    this.progress.save();
    this.tellMoment();
  }

  tellMoment() {
    const moment = this.currentMoment();

    // Replays are told short. The honest telling counts separately, so its first time is in full.
    const key = this.progress.isReady() ? moment.id + ":clear" : moment.id;
    this.isReplay = this.progress.markSeen(key);

    this.say(moment.tell, this.isReplay);
    if (this.momentIndex === 0 && this.progress.days > 0) this.say(this.againLines());
  }

  // The line after the alarm, which changes as the loop goes on.
  againLines() {
    const again = this.story.again;
    if (this.progress.isReady()) {
      const daysSinceReady = this.progress.days - this.progress.readySince;
      return again.ready[Math.min(daysSinceReady, again.ready.length - 1)];
    }
    if (this.progress.days === 1) return again.first;

    // The morning after the second Tuesday remembers how far she got, without saying why it mattered.
    if (this.progress.days === 2) return [again.almost[this.progress.dayTwoChangedAt], again.more[0]];

    // "more" has one line per morning, used in turn.
    return again.more[(this.progress.days - 2) % again.more.length];
  }

  // ENTER at a moment: it happens the way it happened, and the day moves on.
  letItHappen() {
    this.say(this.currentMoment().letItHappen, this.isReplay);
    this.momentIndex++;
    if (this.momentIndex < this.story.moments.length) this.tellMoment();
    else this.endOfDay();
  }

  // The player let every moment of the day happen.
  endOfDay() {
    const nights = this.story.nights;
    if (this.progress.days === 0) return this.startNight([nights.first, this.story.ui.nightHint]);

    // The second Tuesday, lived again exactly as it was: closure without the truth. Only after
    // Knowing, so it's a choice to let go and not just pressing ENTER through a first run.
    const canLetGoWithoutKnowing = this.endingsFound.includes("knowing") && !this.learnedToday;
    if (this.progress.days === 1 && canLetGoWithoutKnowing) return this.finish("withoutKnowing");
    if (this.progress.isReady()) return this.finish("knowing");

    // The way out isn't open yet. The night says what's still missing.
    const fixesTried = this.progress.fixesTried();
    const knowsNothing = Object.keys(this.progress.facts).length === 0;
    if (knowsNothing) this.startNight(nights.tooSoon.noFacts);
    else if (fixesTried === 0) this.startNight(nights.tooSoon.noFixes);
    else if (fixesTried < FIXES_NEEDED) this.startNight(nights.tooSoon.someFixes);
    else this.startNight(nights.tooSoon.noWhy);
  }

  /* ---------------- the player's move at a moment ---------------- */

  playerMove(command) {
    const moment = this.currentMoment();

    // Commands that never change anything.
    if (command.is("help", "h", "how do i play") || command.text === "?") return this.say(this.story.help);
    if (command.is("look", "l", "look around", "where am i")) return this.say(moment.look);
    if (command.is("think", "notes", "what do i know")) return this.showThoughts();
    if (command.is("i", "inv", "inventory")) return this.say(this.story.ui.inventory);

    // An empty ENTER lets the moment happen. Typing only "?!" or an emoji doesn't.
    if (command.isEmpty()) return this.letItHappen();
    if (command.isGibberish()) return this.didntUnderstand();

    // Day one already happened. Whatever they type, it goes the same way.
    if (this.progress.days === 0) {
      this.say([this.whatYouMeant(command), moment.dayOne]);
      return this.letItHappen();
    }

    const action = command.findAction(moment.words, this.story.words);
    const branch = moment.changes[action];
    const freeReply = this.freeReply(moment, command, action);

    // They typed what Nell actually did.
    if (action === "nothing" || branch === "let it happen") {
      this.say(moment.whatNellDid);
      return this.letItHappen();
    }

    // Looking at things is always free. ("Check my phone" is still a change.)
    const looking = command.clean.startsWith("look at ") || command.clean.startsWith("look around");
    if (looking) return this.say(freeReply || moment.look);

    // On the second Tuesday, hiding gets one warning: staying in bed isn't letting it happen.
    if (branch === "hide" && this.progress.days === 1 && !this.warnedAboutHiding) {
      this.warnedAboutHiding = true;
      return this.say(this.story.hideWarning);
    }

    if (branch) return this.changeMoment(branch);
    if (freeReply) return this.say(freeReply);
    if (action) return this.notNow(action);
    this.didntUnderstand();
  }

  // A reply that doesn't use up the day: the one the moment's words point to, one whose phrase
  // was typed, or one that works at any moment (STORY.replies).
  freeReply(moment, command, action) {
    const replies = moment.freeReplies;
    if (replies[action]) return replies[action];
    const phrase = Object.keys(replies).find((p) => command.mentions([p]));
    if (phrase) return replies[phrase];
    return this.story.replies[action] || null;
  }

  // The player tried something that belongs to a different moment.
  notNow(action) {
    const moments = this.story.moments;
    const isLater = moments.slice(this.momentIndex + 1).some((m) => m.changes[action]);
    const isEarlier = moments.slice(0, this.momentIndex).some((m) => m.changes[action]);
    const ui = this.story.ui;

    if (isLater) return this.say(this.story.aimedAtMaya.includes(action) ? ui.herNotYet : ui.notYet);
    if (isEarlier) return this.say(ui.gone);
    this.didntUnderstand();
  }

  didntUnderstand() {
    const misses = this.story.ui.misses;
    this.say(misses[this.missCount % misses.length]);
    this.missCount++;
    if (this.missCount >= 2) this.say(this.story.ui.missHint);
  }

  // Day one repeats back what the player tried: "You mean to *knock*."
  whatYouMeant(command) {
    let text = command.text.replace(/[.!?]+$/, "").slice(0, 70).toLowerCase();
    text = text.replace(/\b(maya|chicago|calder|theo|dot)\b/g, (name) => name[0].toUpperCase() + name.slice(1));

    // Sentences like "i love you" or "why didn't you tell me?" are things to say, not things to do.
    const speechStarts = /^(i|im|i'm|you|we|it|its|it's|please|sorry|no|yes|dont|don't|maya|hey|hi|ok|okay|fine|whatever|cool|nice|what|whats|what's|why|when|where|how|who|would|could|can|will|did|are|is|do|does)\b/;
    const isSpeech = speechStarts.test(text) || command.text.trim().endsWith("?");
    if (isSpeech) text = text[0].toUpperCase() + text.slice(1);
    else text = text.replace(/\bmy\b/g, "your").replace(/\bmyself\b/g, "yourself").replace(/\bme\b/g, "you");

    const template = isSpeech ? this.story.ui.meantSay : this.story.ui.meantDo;
    return template.replace("{what}", text);
  }

  /* ---------------- changing a moment ---------------- */

  changeMoment(branchName) {
    this.changedAt = this.currentMoment().id;

    // A branch is a list of cases. Play the first one whose `needs` Nell knows.
    const cases = this.story.branches[branchName];
    const chosen = cases.find((branchCase) => branchCase.needs.every((fact) => this.progress.knows(fact)));
    const scene = chosen.scene || branchName; // e.g. texting her leads to the same tower scene

    // Making the exact same change again counts for nothing.
    if (chosen.fix && this.progress.hasMade(scene)) {
      this.say(this.story.repeat.text);
      return this.startNight(this.story.repeat.night);
    }

    this.say(chosen.text);
    if (chosen.learn.length > 0) this.learnedToday = true;
    const admitsFeelings = this.progress.learn(chosen.learn);
    if (admitsFeelings) this.say(this.story.feelings);

    // No night: it was only a reply, and the moment stays open.
    if (!chosen.night) return;

    // The second Tuesday was the one day she could have let go without knowing. Felt, not explained.
    if (this.progress.days === 1) {
      this.say(this.story.differentDay);
      this.progress.dayTwoChangedAt = this.changedAt;
    }

    if (chosen.wayOut) return this.finish(chosen.wayOut, chosen.night);
    if (chosen.fix) this.progress.recordFix(scene, chosen.fix);
    this.startNight(chosen.night);
  }

  /* ---------------- nights and the end ---------------- */

  startNight(text) {
    this.mode = "night";
    this.progress.days++;
    this.say(["# TUESDAY | 11:52 PM", text]);

    const wayOutJustOpened = this.progress.isReady() && this.progress.readySince === null;
    if (wayOutJustOpened) this.say(this.story.thinner);
    this.progress.save();
  }

  nightMove(command) {
    if (command.is("help", "h")) return this.say(this.story.help);
    if (command.is("think")) return this.showThoughts();

    this.startDay();
    // A command typed at night is meant for the morning.
    if (!command.isEmpty()) this.playerMove(command);
  }

  // The loop ends, one of two ways (see the top of this file). Then it's Wednesday.
  // `night` is the last night, when a branch tells it its own way (watching the bus go).
  finish(wayOut, night = this.story.nights.final) {
    this.progress.days++;
    this.progress.finished = wayOut;
    this.progress.save();

    this.mode = "wednesday";
    const lastNight = wayOut === "withoutKnowing" ? this.story.withoutKnowing.night : night;
    this.say([lastNight, this.wednesday().morning]);
  }

  // The Wednesday after the loop: after Knowing, or after letting go without knowing.
  wednesday() {
    return this.progress.finished === "withoutKnowing" ? this.story.withoutKnowing : this.story.wednesday;
  }

  // On Wednesday the only way on is to get up.
  wednesdayMove(command) {
    const wednesday = this.wednesday();
    if (command.isEmpty()) return this.say(wednesday.replies.enter);

    const reply = command.findAction(this.story.wednesday.words) || "other";
    if (reply !== "end") return this.say(wednesday.replies[reply]);

    if (this.progress.finished === "withoutKnowing") {
      this.say([wednesday.getUp, wednesday.epilogue]);
      return this.showEnding("withoutKnowing");
    }
    this.showEnding("knowing");
  }

  // An end card, then the ending's name, how many endings the player has found, and the way back in.
  showEnding(id) {
    if (!this.endingsFound.includes(id)) this.endingsFound.push(id);
    Saved.save(ENDINGS_KEY, this.endingsFound);
    this.showEndingsCounter();

    const ending = this.story.endings[id];
    this.mode = "end";
    this.say([ending.card, this.withCount(this.story.ui.endingFound).replace("{name}", ending.name), ending.again]);
  }

  showEndingsCounter() {
    this.terminal.showEndingsCounter(this.withCount(this.story.ui.endingsCounter));
  }

  // {found} of {total}: the endings found so far, out of all of them.
  withCount(text) {
    const total = Object.keys(this.story.endings).length;
    return text.replace("{found}", this.endingsFound.length).replace("{total}", total);
  }

  // THINK: every line whose fact Nell knows.
  showThoughts() {
    const facts = this.story.think.facts;
    const thoughts = Object.keys(facts)
      .filter((fact) => this.progress.knows(fact))
      .map((fact) => facts[fact]);
    this.say(thoughts.length > 0 ? thoughts : this.story.think.nothing);
  }

  // Back to the first Tuesday. Nell forgets what she learned; the endings found and the colors stay.
  restart() {
    Progress.erase();
    this.showTitle();
  }

  // Everything, endings and colors too: back to "How do you feel today?"
  eraseEverything() {
    for (const key of [SAVE_KEY, ENDINGS_KEY, MOOD_KEY]) Saved.erase(key);
    window.location.reload();
  }
}

/* ================================================================
   Start: connect the game to the page
   ================================================================ */

// The words on the page around the story (the bar, the restart menu, the first screen)
// come from STORY.ui too. index.html marks each place with data-ui="...".
function fillInWords() {
  for (const element of document.querySelectorAll("[data-ui]")) {
    const text = element.dataset.ui.split(".").reduce((part, key) => part?.[key], STORY.ui);
    if (typeof text === "string") element.textContent = text;
    else warn(`ui.${element.dataset.ui} is missing`);
  }
}

// The first screen asks how the player feels, in the default colors. Once they begin, the
// title appears and the page slowly fades into the colors of their mood (style.css, :root).
function askHowTheyFeel(then) {
  const form = document.getElementById("mood");
  const sliders = [...form.querySelectorAll("input[type=range]")];
  const gameParts = [document.getElementById("bar"), document.getElementById("term")];
  const feelings = () => Object.fromEntries(sliders.map((slider) => [slider.name, slider.value / 10]));

  gameParts.forEach((part) => (part.hidden = true));
  form.hidden = false;
  sliders[0].focus();

  // ENTER on a slider begins, the same as the button. That ENTER is used up here, so it
  // doesn't also reach the game's prompt and skip the title.
  form.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.target.type !== "range") return;
    event.preventDefault();
    form.requestSubmit();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.hidden) return; // already begun
    const mood = new Mood(feelings());
    Saved.save(MOOD_KEY, mood.feelings);
    form.hidden = true;
    gameParts.forEach((part) => (part.hidden = false));
    then();
    mood.apply();
  });
}

function startGame() {
  fillInWords();
  const terminal = new Terminal(STORY.ui);
  const game = new Game(new Story(STORY), terminal);

  // ENTER (or "return" on a phone keyboard).
  terminal.form.addEventListener("submit", (event) => {
    event.preventDefault();
    game.enter(terminal.input.value.trim());
  });

  // Space and Escape also turn the page.
  document.addEventListener("keydown", (event) => {
    const isTurnKey = event.key === "Escape" || (event.key === " " && terminal.input.value === "");
    if (terminal.pageIsFull && isTurnKey && !terminal.restartMenu.open) {
      event.preventDefault();
      game.turnPage();
    }
  });

  // The restart menu opens from the button up top, or by typing RESTART (see Game.handle).
  // It works at any time, even halfway through a page.
  document.getElementById("restart").addEventListener("click", () => terminal.showRestartMenu());
  terminal.restartMenu.addEventListener("close", () => {
    const choice = terminal.restartMenu.returnValue;
    if (choice === "erase") return game.eraseEverything();
    if (choice === "restart") game.restart();
    if (!terminal.pageIsFull) game.showPage();
    terminal.input.focus({ preventScroll: true });
  });

  // A tap or click anywhere turns the page, unless the player was selecting text or using a menu.
  let wasSelecting = false;
  const hasSelection = () => String(window.getSelection()) !== "";

  document.addEventListener("pointerdown", () => {
    wasSelecting = hasSelection();
  });

  document.addEventListener("click", (event) => {
    if (wasSelecting || hasSelection() || event.target.closest(".bar, dialog, #mood")) return;

    const turnedPage = terminal.pageIsFull;
    if (turnedPage) game.turnPage();

    // On phones, a tap that only turns a page shouldn't raise the keyboard over the text.
    const tappedPrompt = event.target.closest("#line");
    if (!terminal.onPhone || !turnedPage || tappedPrompt) terminal.input.focus({ preventScroll: true });
  });

  // The colors come from how the player feels today. It's asked once; only "erase everything" asks again.
  const begin = () => {
    game.start();
    terminal.input.focus({ preventScroll: true });
  };
  const feelings = Saved.load(MOOD_KEY, null);
  if (feelings) {
    new Mood(feelings).apply();
    begin();
  } else {
    askHowTheyFeel(begin);
  }
}

startGame();
