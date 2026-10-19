# Accessibility review

I tested Tomorrow from seven angles. The players I had in mind were screen reader users (VoiceOver and NVDA), keyboard-only players, low-vision players at 200 to 400% zoom and 320 px wide, color-blind players, players with vestibular disorders, migraine or photosensitive epilepsy, players with cognitive, learning and attention differences (including people new to text games), and players with motor impairments, switch or voice control, or a phone. These were AI-simulated playtests. Each one read the code, ran the scripted harness, and used headless Chrome for measurements, screenshots and accessibility-tree dumps. No real disabled players took part, and no real screen reader, phone or voice-control software was used.

The verdict is that every group can play the game start to finish. Nothing is timed, nothing can be failed, nothing flashes, and text contrast is high in every mood palette. The problems are in the edges. The restart menu is easy to trigger by accident. The first Tuesday teaches new players that typing doesn't work. The warp animation runs too long with no way to stop it. Some screens never say what to do next. Most of the fixes are a line or two each.

Note: game.js and story.js changed while the tests ran. Restart now wakes Nell on the second Tuesday, and the button says "Start the loop over" where it used to say "Back to the first Tuesday". Some lenses quote the old wording. Line numbers are approximate.

## Fix first

### 1. Some self-harm phrasings get echoed back as dialogue
Found by: cognitive.

"i want to die" and "i want to hurt myself" correctly get the 988 line. "i dont want to live" (typed without the apostrophe, the way most people type it) came back as "You mean to say “I dont want to live.”", and the day went on. "kms" got "You mean to *kms*." A struggling player gets their words quoted back to them with no support. 988 also only works in the US, and itch.io players come from everywhere.

- WCAG: none. This is player safety.
- Where: story.js `words.unsafe`; game.js `whatYouMeant`.
- Fix: add "dont want to live", "kms", "kill me", "want to be dead" and "no reason to live" to `words.unsafe`. Change the reply to "…call or text 988 (US), or find a line near you at findahelpline.com."

### 2. The restart menu opens with focus on the button that loses progress
Found by: keyboard, motor, cognitive.

The restart dialog autofocuses "Start the loop over". The whole game trains the player to press ENTER over and over, so one more ENTER after opening the menu restarts the loop and wipes what Nell has learned, with no undo. The menu can open by accident in several ways. A tremor tap can hit the small restart link at the top. Typing anything that contains "restart" opens it too, even "should i restart?". A switch user's select press does the same as ENTER. The keyboard lens confirmed it in Chrome: Enter on the restart link, then Enter again, restarted the day.

- WCAG: 3.3.4 Error Prevention (in spirit, since the dialog is technically the confirmation); 3.2.2 On Input.
- Where: index.html:41, `<button value="restart" … autofocus>`; game.js Game.handle (`command.mentions(['restart'])`).
- Fix: move `autofocus` to the "Keep playing" button. A player who means to restart just presses Tab once more.

### 3. On the first Tuesday, anything typed uses up the moment and nothing says why
Found by: cognitive. The motor lens raised the same thing about restart.

The title screen says to type changes like GO TO THE TOWER. A new player does exactly that and gets "You mean to *go to the tower*. But it’s Tuesday, and Tuesday already knows how it goes." Then the day moves on. Requests for help go the same way. In the harness, "what do i do", "instructions", "commands", "options", "what are my choices", "menu", "undo" and "back" all turned into "You mean to…" and moved the day forward. Nothing says plainly that this day can't be changed. The first lesson the game teaches an anxious or new player is that typing doesn't work. This is also what I hit myself when restart used to send me back to the first Tuesday. The second-Tuesday restart fixes that part, but a new player still lands here on their first day.

- WCAG: 3.3.2 Labels or Instructions; 3.2.2 On Input (in spirit).
- Where: game.js:748-751 (the `days===0` branch); the title line in story.js; each moment's dayOne line.
- Fix: after the first "You mean to…" on day one, add one dim note, once per day: "_ (This first Tuesday already happened. Press {enter} to live it through. Tomorrow you can change it.)" Also treat input ending in "?" or starting with "what do i" / "how do i" like HELP, so it doesn't use up the moment.

### 4. The warp animation runs for 21 seconds and can't be stopped in the game
Found by: vestibular, low vision, cognitive.

`#out .warp` skews and blurs the line for 7 seconds, three times. It only stops for players who turned on reduced motion in their operating system, and most players haven't, especially on itch.io. Warp lines show up 7 times on every loop where Nell hasn't learned the truth yet. The diner and the driveway each get a block of three on one page, so about a third of the screen sways at once. The bus ending puts three on its final page. At 400% zoom the 0.5 px blur becomes a 2-device-pixel smear right on the line being read. Blurred, moving letters are hard to decode for dyslexic readers, and the motion pulls attention away for ADHD and anxious players.

- WCAG: 2.2.2 Pause, Stop, Hide (A); 2.3.3 Animation from Interactions (AAA).
- Where: style.css:213-216 (`animation: warp 7s ease-in-out 3`) and the keyframes. The only off switch is the `prefers-reduced-motion` block at :230-235.
- Fix: the smallest fix is to drop the blur and run the animation once instead of three times (under 5 s if shortened to 4s). Better is a small motion on/off toggle in the top bar, or a typed MOTION command listed in HELP. It would set `document.documentElement.dataset.motion = 'off'`, save the choice with the existing Saved helper, and reuse the reduced-motion CSS: `:root[data-motion=off] #out .warp { animation: none; font-style: italic; }`. That's about 10 lines.

### 5. The title screen and the nights never say what to do next
Found by: screen reader, cognitive, motor.

`Terminal.updatePrompt` only fills the status line and the placeholder when a page is full or a moment is waiting. On the title screen and at night both are blank. For a screen reader user it's worse. The title page is written into the log in the same tick the log is unhidden (or before the screen reader attaches, for returning players), so it is very likely never announced. After pressing begin they hear "Type what you want to do, edit text" and never hear "Press ENTER to begin" or "Your Tuesday is still waiting". At night only the first night shows "(Press ENTER.)". After "Tomorrow, then." on any later night the prompt is empty, and a player who took a break or a phone player has no cue that ENTER (or tap, then return) moves on.

- WCAG: 4.1.3 Status Messages; 1.3.2 Meaningful Sequence; 3.3.2 Labels or Instructions.
- Where: game.js Terminal.updatePrompt, about lines 416-430 (the final else sets status to ""); askHowTheyFeel about 994-997; startGame `begin()` on page load.
- Fix: in that final else branch, set the status to a key-aware string from story.ui (e.g. "Press ENTER to go on.") and the placeholder to something like `withKeyNames("{enter} for tomorrow")` whenever the game is waiting. Optionally run the first showPage in a requestAnimationFrame after unhiding #term, so the log is in the tree before its text arrives. The screen reader lens could only infer that the title is missed. It needs a check with real VoiceOver.

### 6. The restart menu switches who "you" means
Found by: cognitive, color vision. The motor lens raised it as an aside.

All story long "you" is Nell. The restart note then says "Nell forgets everything she’s learned. You don’t." (now "…You’ll still remember it."), and "you" suddenly means the person at the keyboard. A literal or anxious reader can take it as a contradiction (does she forget or not?). Some new players don't even know the character is called Nell, because her name only comes up in dialogue. The same switch is in the help line (story.js:206) and in the Knowing ending's "again" line (story.js:477). The same note says "your colors stay". With achromatopsia all four moods look like the same near-black, and with deuteranopia angry and anxious are almost identical, so these players have no idea which colors it means.

- WCAG: 3.3.2 Labels or Instructions; 3.1.5 Reading Level (AAA, advisory).
- Where: story.js `ui.restartMenu.restartNote` and `eraseNote` (about lines 125-127); help line 206.
- Fix: say it literally. "Start the loop over. You wake up on the second Tuesday, and everything Nell found out is forgotten. Your endings and mood colors stay." Erase note: "Endings and your mood colors too. You’ll be asked how you feel again." Help: "_ RESTART starts the loop over (Nell forgets what she found out)." Keep "You’ll still remember it" only on the Knowing end card, where the story has earned it.

### 7. On Wednesday, ENTER does nothing and a guess is told to wait
Found by: cognitive.

ENTER is the safe move for the whole game. On the last screen it only repeats "The alarm keeps going." The placeholder and status are blank, and a guess like "ok" gets "Not yet. Soon, though.", which tells the player to wait. They have to guess a verb (get up, wake, open…). A player new to text games, or one with ADHD who has been pressing ENTER on autopilot, can get stuck right before the ending.

- WCAG: 3.3.2 Labels or Instructions; 3.3.3 Error Suggestion.
- Where: story.js `wednesday.replies.enter` / `other`; game.js updatePrompt (blank in wednesday mode).
- Fix: after the second ENTER or the first miss, add a dim "_ (Type GET UP.)". Or set the placeholder to "type what you do" in wednesday mode.

### 8. Space on the focused restart button turns the page
Found by: keyboard.

While a page is waiting, the document keydown handler catches Space and turns the page, even when focus is on the restart button. Space is the standard key for a button, so the menu doesn't open and the story jumps a page for no visible reason. Enter on the same button works.

- WCAG: 2.1.1 Keyboard.
- Where: game.js:1014-1019 (`isTurnKey` / `preventDefault`).
- Fix: at the top of the handler, `if (event.target.closest('button, input[type=range]')) return;`.

### 9. At 400% zoom each new page opens at its end
Found by: low vision.

`updatePrompt` scrolls the prompt into view after `addElement` has already scrolled the page start to the top. At 400% (a 320x180 CSS px viewport) the first line of the new diner page sat at y = -253 and only the last paragraph and the prompt were on screen. The player reads the end first and has to scroll up to find where the page began. In phone landscape the page start lands inside the bar's shadow. In a same-origin wrapper the same `scrollIntoView` also scrolled the outer page about 87 px each time (see the smaller fixes).

- WCAG: 1.4.10 Reflow; 2.4.3 Focus Order (related).
- Where: game.js:433 `this.form.scrollIntoView({ block: "nearest" })`, which runs after the page-top scroll at game.js:451.
- Fix: remember the page's first element in addElement. Skip the prompt scroll when it would push that element above `PAGE_TOP_MARGIN`. When you do scroll, use `window.scrollBy` like addElement does, not `scrollIntoView`. The player then scrolls down to the prompt, which is the normal reading direction.

### 10. The moment instruction gets cut off at 320 px
Found by: low vision.

At 320 CSS px the placeholder reads "type, or ENTER to let it pas", and with the WCAG text-spacing overrides it reads "type, or ENTER to let". It's the only text on screen that says what ENTER does at a moment, and a placeholder can't wrap. #cmd is 269 px wide, and the 29-character string needs about 278.

- WCAG: 1.4.10 Reflow; 1.4.12 Text Spacing.
- Where: story.js `ui.yourMove`, shown as #cmd's placeholder (game.js:422).
- Fix: shorten it to about 26 characters, e.g. "type, or ENTER to skip". Add a test that asserts `yourMove.length <= 26`.

### 11. The phone keyboard may cover the prompt and the end of the page (unconfirmed)
Found by: motor.

On a phone the keyboard's return key is the only way to let a moment happen, so the keyboard is up for most of the game. A full page plus the prompt doesn't fit in the roughly 450 px left above an iOS or Android keyboard, and the scroll math ignores the keyboard. The code's own comment says so. The last line of a moment and the input can end up hidden. Not reproduced, because headless Chrome can't show an on-screen keyboard.

- WCAG: 2.4.11 Focus Not Obscured (Minimum).
- Where: game.js:432-433 (the "shortcut: ignores the on-screen keyboard's height" comment), 451, and the `focus({preventScroll:true})` calls at 1047/1053.
- Fix: in updatePrompt, if the form's bottom is below `visualViewport.offsetTop + visualViewport.height`, scroll by the difference. Also call updatePrompt on visualViewport `resize`. Test on a real phone first.

## Smaller fixes

| Problem | WCAG | Where | Fix |
|---|---|---|---|
| The prompt input has no focus indicator except the caret (keyboard, low vision) | 2.4.7 | style.css:256-266 `#cmd { outline: 0 }` | `#line:focus-within .prompt { text-decoration: underline }` or a `--dim` bottom border that turns `--bright` on focus |
| First mood slider has no focus ring on load (keyboard) | 2.4.7 | game.js askHowTheyFeel `sliders[0].focus()` | `.mood input[type=range]:focus { outline: 2px solid var(--bright); outline-offset: 4px }` |
| Button names start with "> ", read as "greater than begin" (screen reader) | 2.5.3, 1.3.1 | style.css:156-160 `::before { content: "> " }` | `content: "> " / "";` with the plain line kept first as a fallback |
| Dialog notes aren't linked to their buttons, so Erase is heard without its warning (screen reader) | 1.3.1, 3.3.2 | index.html:41-45 | ids on the notes, `aria-describedby` on the buttons |
| Every empty ENTER adds "> (enter)" to the live log (screen reader) | none | game.js:409-413 Terminal.echo | `aria-hidden="true"` on the echo when the text is empty |
| Mood question and note are skipped, slider values are bare numbers (screen reader) | 1.3.1, 4.1.2 | index.html:16-23; game.js:980 | `role="group"` + `aria-labelledby` on the question, `aria-describedby` on the note; optional `aria-valuetext` "3 of 10" |
| Status strings say "Press ENTER" on phones and sit outside story.ui (screen reader) | 3.3.2 | game.js:428-429 | move them into story.ui and pass through `withKeyNames` |
| The mood screen never says the sliders set the colors (color vision, cognitive) | 3.3.2 | story.js `mood.note` | "Slide each one as far as it’s true. It only picks the colors." |
| The reduced-motion fallback is plain italics, which look like remembered speech and emphasis, and screen readers get nothing (vestibular, cognitive, screen reader) | 1.3.1 | style.css:233; game.js:465 | add a second cue, e.g. a dotted `--rule` or `--dim` left border and dim color; optionally wrap warp lines in `<em>` or a hidden "(as Nell felt it)" |
| `--dim` notes and placeholder are only AA (5.1:1), and they carry the key instructions (low vision) | 1.4.6 (AAA) | `--dim` in style.css and Mood | raise to about `#a39f95` (7.36:1), mood dim L about 0.72, raise the test.js assert to >= 7 |
| Message lines and the dialog edge use `--rule` borders at 1.2 to 1.7:1 (low vision, color vision) | 1.4.11 | style.css `#out .msg`, `dialog` | use `var(--dim)` for both borders |
| Fixed `PAGE_TOP_MARGIN` puts the first line under the bar with text-only zoom (low vision) | 1.4.4, 2.4.11 | game.js:34 | use `bar.offsetHeight + 22` instead of 64 |
| `body { font-size: 16px }` ignores the browser's default size setting (low vision) | 1.4.4 | style.css body | `font-size: 100%` |
| `updatePrompt`'s `scrollIntoView` also scrolls the page around the game, e.g. itch.io (low vision, motor) | 3.2.1 (related) | game.js:433 | the same `window.scrollBy` as addElement; do it with fix 9 |
| Miss reply "Then you let it go." sounds like a pass, and the hint never changes (cognitive) | 3.3.3 | story.js `ui.misses[2]`, `ui.missHint` | "You can't quite picture doing that."; hint with GO, ASK, TEXT, LOOK and {enter} |
| Help reads as one change per moment, not one per day (cognitive) | 3.3.2 | story.js help[0-1] | "You get one change a day. Make it, and the day goes from there to that night." |
| No content note before the game (cognitive) | none | story.js title; itch.io page | "_ Content: grief, a panic attack, a painful goodbye, coming out." |
| On phones every choice is two actions, tap then return (motor) | usability | game.js:1039-1048 | an empty tap on #line acts as ENTER, or a small "let it happen ▸" button on coarse pointers |
| The parser doesn't forgive typos like "phne" or "twoer" (motor) | none (3.3.5 AAA) | game.js:314-319 Command.mentions | optional edit-distance-1 match for words of 4+ letters, or say in HELP that single words work |
| Restart link is 22.4 px tall (motor) | 2.5.8 (passes by spacing) | style.css `.restart` | `padding: 8px 4px`; do it with fix 2 |
| Mood sliders are 16 px tall (motor) | 2.5.8 (passes by spacing) | style.css `.mood input` | `min-height: 32px` |

## Nice to have

- A motion-off toggle. Worth it. It is the real fix for item 4 and helps three groups. About 10 lines, reusing the reduced-motion CSS. While I'm there, the 5-second palette fade should also respect reduced motion and the toggle (`transition: none`).
- A readable-font option. The cognitive lens suggested swapping the monospace for a system sans-serif, since monospace prose is slower for many dyslexic readers. Worth it if the toggle already exists, since it's one more class on the same row. Otherwise later.
- A text-size control. No lens asked for one. The `font-size: 100%` change in the table lets the browser's own setting work, and zoom already reflows well. Not worth building.
- End card: "Type RESTART, or use restart up top, to start the loop over." (keyboard)
- Enter on a mood slider starts the game with the other sliders at 0. Could move focus to the next slider. Fine to leave. (keyboard)
- Two quick taps can skip a page. Ignore a tap page turn within about 300 ms of the last one. (motor)
- The 700 ms ENTER guard gives no feedback. Could dim the prompt during it or shorten it to 400 ms. Fine to keep. (cognitive)
- The 92vh spacer under the prompt looks like more content when zoomed. Needed for the page-top scroll, so leave it. (low vision)
- The input's visible label is ">", but its accessible name is "Type what you want to do". Voice users can still say "click text field". No change needed. (motor)
- On itch.io, turn on "Mobile friendly" and "Click to launch in fullscreen". (motor)

## What already works

- No time limits, no fail states and endless retries. Nothing flashes, so 2.3.1 passes. Text comes a page at a time on the player's own input.
- `<html lang="en">`, a page title, and main labelled "Tomorrow, a text game".
- The story is a polite `role=log` that only reads new text. Scene headers are h2s and the title is h1, so heading navigation jumps between scenes. A separate `role=status` says "More. Press ENTER." or "Your move." during play.
- Endings add an "ending found: X (n of total)" line to the log, so the counter doesn't need to be live.
- The restart dialog uses native `showModal` with `aria-labelledby`. The page behind it is inert, Escape closes it, focus returns to the prompt, and nothing traps focus anywhere. Typing RESTART opens the same menu from the prompt.
- Space and Escape turn pages only when a page is full and the input is empty. Page turns also work by tap, but not on the bar, the dialog or the mood screen, or with text selected. A tap that only turns a page doesn't raise the phone keyboard. `touch-action: manipulation` stops double-tap zoom.
- The 700 ms ENTER guard stops a doubled ENTER from using up a moment. Unrecognized input costs nothing, and a hint appears from the second miss.
- Short commands (z, l, h, i, think, and single nouns like phone, tower, mom). Capitals and punctuation are ignored, so dictated "Phone." works.
- No horizontal scroll at 320 px, even with the WCAG text-spacing overrides. Pinch zoom is allowed. Everything but the body font size is in em.
- Contrast holds in every mood palette and under every simulated color-vision type: body text at least 12.75:1, bright at least 14.75:1, dim at least 5.08:1. Hue never carries meaning on its own, and the default palette is effectively grey.
- `prefers-reduced-motion` turns the warp off and keeps a visible substitute. The warp stops after three cycles, so old pages hold still. Scrolling is instant, never smooth.
- Sliders, buttons and dialog buttons keep a visible focus ring. Dialog and restart buttons are underlined on `:focus-visible`. Dialog buttons, begin and the prompt are at least 24 px tall.
- THINK is a notebook of what Nell has learned, LOOK lists what's around, and the nights say what's still missing without spelling it out. Wrong-moment choices get gentle replies ("Not yet.", "That moment’s already gone."). The second-Tuesday hide warning asks before an irreversible-feeling choice.
- Restarting on the second Tuesday stops returning players from replaying the locked first day. The 988 reply exists and fires for the most common phrasings.

## Not checked

- Real VoiceOver, NVDA, braille displays, or NVDA with Firefox. Screen reader findings came from Chrome's accessibility tree and the harness. Whether the title is announced, whether a repeated "Your move." is re-read, and how log and status announcements queue all need a real screen reader.
- Real phones: the on-screen keyboard, the visual viewport, `preventScroll`, touch-dragging the sliders, and how the warp feels on a small screen.
- Real Voice Control, Dragon or Switch Control.
- The real itch.io embed: whether the game gets keyboard focus without a click, whether itch's fullscreen takes Escape, whether scrolling leaks into itch's page across origins, and which embed settings are on.
- Browsers other than headless Chrome. Firefox and Safari handle Space on buttons and Tab order differently. Real browser zoom and real text-only zoom were simulated, not used.
- Windows High Contrast / forced-colors mode. The CSS has no rules for it.
- The warp animation and the 5-second color fade were never watched live. Whether the fade replays on every reload, and contrast at the fade's midpoints, are unverified. Reduced motion couldn't be emulated, so the fallback was checked in code only.
- Live color-vision rendering in a browser and gameplay screenshots in non-default palettes. Those were computed.
- Screen magnifiers (ZoomText, macOS Zoom) following focus.
- A full playthrough to every ending in the browser. Wednesday was reached with a seeded save, and the 700 ms guard couldn't be timed in the harness.
- game.js and story.js changed during testing, so some quoted strings and line numbers are from the older version.
