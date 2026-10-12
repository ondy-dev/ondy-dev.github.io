# Review decisions

_One list, merged from the three playtest reports, for deciding what to change next. Sources: **sim** = `nell-simulation.md` (its P1…P17), **var** = `nell-variants-synthesis.md` (by temperament: frozen, perfectionist, steady, joker, angry, romantic, detective, pleaser, runner, numb), **atlas** = `endings-atlas.md` (by Nell: dreamer, schemer, brave, meta, mourner). When several sources reached the same idea, it appears here once, with every source cited._

_**DATA** = `story.js` words, tags or lines. **ENGINE** = `game.js`. **S** = a few lines, **M** = a branch or about 10–30 lines, **L** = more._

**Already decided (left out):** texting stays the fastest way to Knowing, with no `read`/`feelings` in the lock. The endings are **Knowing** and **Without Knowing**. Being built now: the top bar (endings counter, restart button), ending names on end cards, the Knowing replay nudge, and the new end-card line. The itch.io scrolling fix is done.

---

## A. Do first: safety

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| A1 | Passive self-harm phrasing misses the 988 line: `i dont want to wake up`, `never wake up`, `i want to disappear`, `wish i wasnt here`, `i dont want to be here`. | Add these, plus `dont want to exist` and `better off without me`, to `words.unsafe`. The existing reply fits. | DATA S | var (numb) |
| A2 | Hopeless inputs get agreement or a promise. `whats the point` → "It doesn't feel like the kind of thing that would change anything." `i dont want to get up` → "…no room for." `make it stop` → "Not yet." (it boards the bus at 8:40). | Global `stop` and `tired` lists, answered everywhere like `unsafe` (2 lines in `handle`), with the var §4 replies (*"It doesn't stop because you ask it to…"*, *"You're tired… The day waits anyway."*). Reword or reorder `ui.misses` so the first miss isn't a verdict (*"You don't know how to do that here."*). | DATA + ENGINE S | var (numb, plus 5 who read the misses as verdicts) |
| A3 | `i'm gay`, `i like girls` get "It doesn't feel like the kind of thing that would change anything." The atlas calls it the one reply that could really hurt someone. | A global `out` reply above `confess`, never a verdict: `[if not feelings]` *"The word comes around the corner. You cross the street."* At the driveway with `feelings`: *"Okay. Nellie. Is that the whole sentence?"* The full scene is D3. | DATA + ENGINE S | atlas (brave); sim |
| A4 | Without Knowing can be reached by inertia, and nothing in it admits that might be exhaustion. | In `withoutKnowing.night`: *"You don't know if you let it go or just let it happen. Maybe the first time, it's both."* Change "another one" to "another Tuesday". The larger fix is C7. | DATA S | var (numb); sim §5 |

---

## B. Just fix: bugs and misroutes

Grouped by moment. None of these changes a rule.

### Anywhere

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| B1 | Day one answers speech as an action: *"You mean to why didn't you tell me."* | Widen `isSpeech` (question words, `cool`, `whatever`, a trailing "?"). Swap my→your. Capitalize Chicago, Calder, Theo. | ENGINE S | var (9 of 10) |
| B2 | Negations trigger the thing negated: `dont text` texts, `dont ask` asks, `dont run` boards, `I wasn't going to stay` begs her to stay, and `dont sleep` at 8:40 on day two **ends the game with the epilogue**. | `notstay` above `stay`. Add `dont ask/answer/text/run`, `whatever` to `nothing`. A home reply for `dont sleep`. | DATA S | var (frozen, runner, numb); atlas (meta) |
| B3 | Over-broad words: `the truth` is a confess word (`tell mom the truth` → "She isn't here."). `the same` and `eggs` let the kitchen happen. | Remove `the truth` from `confess`. Narrow to `=the same`, `same as before`, `=eat`. | DATA S | atlas (brave, meta, schemer, dreamer) |
| B4 | Input at 11:52 is replayed at 7:14: `don't close my eyes` spends the next Tuesday under the blanket. | In `nightMove`, answer hide/stay-awake words with one line, then start the morning as if ENTER. | ENGINE S | atlas (meta, schemer, dreamer) |
| B5 | The "type, or ENTER to let it pass" hint vanishes after day two. Fast ENTER-ers skipped the driveway. | Keep it, dim, at the seven moments. | ENGINE S | var (pleaser, romantic) |
| B6 | THINK has no line for `photo`, `august`, `sketch`. | Add the three lines from var §4. | DATA S | var (perfectionist, romantic, detective) |
| B7 | Nothing stops Without Knowing if a future no-night scene teaches a fact on day two. | Finish it only if nothing beyond `relived` was learned. Do this before D8. | ENGINE S | sim P17; atlas §5d |

### 7:14

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| B8 | `look at the tower` / `look past the tower at the highway` climb the tower. | Free replies for a tower glance and `highway`, as wake words. Needed whatever C5 decides. | DATA S | var (runner); atlas (dreamer) |
| B9 | `sorry`/`love` beat `text`: `text her sorry`, `reply to her`, `text maya i love you` get "She isn't here." `text theo` texts **Maya**. | Wake words `text: ["text","reply","message her"]` (moment words win), a `typedLove` reply, and a `text theo` reply. | DATA S | var (pleaser, romantic); atlas (meta, schemer) |
| B10 | Whatever she types, the game sends "> hi." "before you can stop yourself", even when she chose to. | *"You type something. You read it back. You delete it. You send the smallest version."* (See C9.) | DATA S | var (frozen, steady, joker, angry, romantic, pleaser) |
| B11 | Phone: "You don't scroll up" right after `scroll up` (and the last message is at the bottom). Rereading once `read` is known ends the day. | Rewrite the otherwise case (*"Your eyes stop a line short of the bottom…"*). "scroll up" → "open it". Make the `read` case a free reply. | DATA S | var (frozen, detective); sim P8 |
| B12 | *"She said she tried. You can't stop hearing Theo say it."* is shown to players who never met Theo. | `[if nobody_laughed]` on it. `[if not nobody_laughed]` *"I tried. Thursday. Up here. You can't stop hearing her say it."* | DATA S | var (perfectionist; every tower-first run) |
| B13 | `say it out loud`, `write maya a letter`, `steal her ticket` fire `tower` or `hide`. | Free replies from atlas §2. | DATA S | atlas (meta, schemer, mourner) |

### Kitchen and diner

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| B14 | `hug mom` interrogates her. `kiss mom` and `bye mom` get "She isn't here." | Take `hug` out of kitchen `mom`. Kitchen `comfort` words → a reply (*"'What's this for?' 'Nothing.'"*). | DATA S | var (joker, pleaser); atlas (brave, mourner, dreamer); sim |
| B15 | `laughed`, `turn around`, `hold my breath`, `its okay theo`, `i'm not fine` play text that says the opposite (*"You make yourself look at him"*) or miss, though the day-two poke says "turn around and look". `laughed` ended the joker's second Tuesday. | Take `laugh*` out of `theo`. Tiny `turn`, `hold`, `kind` branches: one opening line, then `DINER_TRUTH` (var P7). | DATA S–M | var (joker, angry, frozen, pleaser); atlas (brave, dreamer) |
| B16 | `order something so he has a reason to stay` plays `theo` via `stay`. | Diner words `order: ["order"]`, listed first. | DATA S | var (pleaser, joker) |
| B17 | `counter`: "You haven't made yourself look." right after she looked, and on the honest day. | Tag it `[felt]` / `[heal, clear]` (var §4). | DATA S | var (steady, detective); atlas (brave) |
| B18 | **Canon slip.** Theo found out at six but quotes Maya about Thursday. | *"Her mom said she was gonna tell you…"* (The brave Nell's *"sat in the shower with her clothes on"* is a richer version.) | DATA S | sim P10; var (detective); atlas (brave) |
| B19 | On a second visit she asks "She tried?" again, word for word. | `[if tried_to_tell]` *"You already knew. It's different, hearing it from him."* | DATA S | var (runner, pleaser) |
| B20 | Day two says *"You don't remember standing up"* on the one day she's fully present. | A `[not day two]` tag, plus *"You stand up. This time you feel your legs do it."* | ENGINE + DATA S | sim P16 |

### Street and tower

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| B21 | `feed store` / `bus sign` → "Not yet." while she walks past it. `climb the tower and stay up there` → "She isn't here." | A street sign reply (*"CHICAGO 8:45 PM. DAILY… It's only tonight for you."*). Street `tower` words `climb`, `tower`. | DATA S | atlas (mourner, meta); sim P12 |
| B22 | **Repeat gap.** Text, then tower, replays the whole scene with no repeat notice (the most common near-quit), and Nell re-asks "Why didn't you tell me?" | Count `text` and `tower` as one scene in `hasMade`. Tag the question `[if not why_secret]`. | ENGINE + DATA S | var (7: steady, angry, romantic, perfectionist, pleaser, joker, detective) |
| B23 | The repeat night says "If you'd said it at 6:31" after a tower or bus repeat. PEACE_NIGHT says "still standing in the driveway" after a driveway goodbye. | "…a minute sooner." `[from driveway]` *"You were in the driveway this time. You still feel like you're standing in it."* | DATA S | var (perfectionist, runner, steady, pleaser) |

### Driveway

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| B24 | `please stay. don't go to chicago` gets the "say what" nudge (`chicago` is checked first). `what if you just stayed` misses. | Move `talk: ["chicago"]` last, `jacket` above it. Add `stayed`, `staying` to `stay`. | DATA S | var (perfectionist, joker) |
| B25 | Full sentences get "You don't know which of the hundred things to say" (`why didn't you tell me`, `you decided for me`). `would you stay if I asked` becomes "Please. Stay." + keep. | `accuse` and `askif` words → tagged replies (var §4, P4b). | DATA S | var (steady, angry, detective, perfectionist) |
| B26 | `say nothing` → "It comes out the way it came out." | A `silence` reply. ENTER still plays the original. | DATA S | var (frozen, numb) |
| B27 | `ask her about the fourth frame`, `ask mrs reyes` → "already gone". | `photo` words → a tagged reply. `mrs` → *"No, mija. I'm the wrong Reyes."* | DATA S | var (perfectionist); atlas (mourner, brave, schemer) |
| B28 | Confess: "I *think* I'm in love" after she typed certainty. "First time you've said it inside, too", though `feelings` already played. | *"'I'm in love with you… Since the tower.'"* / *"It's the first time you've said it out loud."* | DATA S | sim; var (perfectionist, romantic, detective) |
| B29 | The confess failure says "You've never let yourself look." the day after the photo or August. Two near-quits. | Three tagged lines: photo only, August only, neither (var P5). | DATA S | var (perfectionist, romantic, detective) |
| B30 | The day-two poke *"Stay. I'm sorry. I love you."* gives her words she doesn't have yet. | *"Stay. I'm sorry. I—"* | DATA S | sim P16; var (numb, runner) |

### Porch, 8:40, nights, Wednesday

| # | Problem | Fix | Kind | Raised by |
|---|---|---|---|---|
| B31 | `whisper sorry…` plays a repeat knock (it lost the pleaser's letting-go day). `yell at the door` earns the sorry fix. Anything with `door` knocks. | Porch `whisper` first → a reply. Take `yell`/`shout` out of `knock`. Replies for the rest until D5. | DATA S | var (pleaser, angry); atlas (all five) |
| B32 | `go to the station to see her off` / `watch the bus leave` board the bus. THINK then says *"You've tried leaving with her."* | Home `see`/`watch` words above `bus`, with a reply until D1. | DATA S | var (pleaser, numb); atlas (mourner, meta); sim P4 |
| B33 | `text her` at the porch or 8:40 → "already gone". `stall the bus` boards it. | Replies from var §4 and atlas §2 (D9 is the full scene). | DATA S | var (pleaser); atlas (dreamer, brave, schemer, mourner) |
| B34 | The house night asks "Because what?" after the tower already told her. | `[if why_secret]` *"You know because. She told you on the tower…"* | DATA S | var (romantic) |
| B35 | Wednesday: `look at the stain`, `turn off the alarm`, `this isn't real` → "Not yet. Soon, though." | A `stain` reply, `turn off` in `end`, a *real* reply. | DATA S | var (joker, numb); atlas (meta) |

---

## C. Author's call: design decisions

**C1. Should asking her to stay need `why_secret` as well as `reason`?** (sim P1)
- *Keep `reason`:* the house route opens keep without Maya ever saying she'd stay.
- *Need both,* with the sim's three failure cases (`reason` only: she asks as a bit, *"You gave her the Dollar General"*). The text speedrun is unchanged. House-route players need one more Tuesday.
- *Keep the gate* and fix only the mismatched failure night.
- **Recommend: need both.** Your chain ends *"I'd only know for sure if I'd gone to the tower."* An overthinker only asks once she knows the answer is yes, and the keep fix should cost her exactly that.

**C2. A sixth fix?** (atlas Permission; sim Answer; var angry's "right")
- *No:* map every new branch onto the five, and the 3-fix gate keeps its cost.
- *Permission* (for D2): being told it's okay to stop. It fails with *"She can't let go of it for you."* One engine line.
- *Answer* (sim) or *right* (var): narrower wantings.
- **Recommend: Permission, only if D2 is built.** It's the wanting closest to the thesis, and its failure leaves the real letting go to Nell. Answer and right become no-fix scenes (D7).

**C3. Should the second Tuesday's specialness be visible?** (var P1, 8 of 10; sim P15)
- *Silent (now):* 5 of 10 lost it at 7:14 before seeing a poke, and none knew.
- *Felt, not explained:* `[day two] And just like that, it's a different day.` in every branch. Optionally, once on the third morning: *"Yesterday you almost let it go. You made it to the porch."*
- *Warn on the first change:* explains the rule, loses the Aisle-style mystery.
- **Recommend: felt, not explained.** Regret is understanding what a day was after it's gone, without a rulebook.

**C4. Warn before hiding on day two?** (var numb, frozen; sim P17)
- *No (now):* the frozen player's most frozen act closes the window.
- *Warn once:* *"You could. Last Tuesday you didn't. You got up. (Type it again to stay. Or press ENTER to get up the way you got up.)"* This also makes it safe to add `lie here` and `stay still` to `hide`.
- *A line only:* *"You could let it happen. You'd have to be there for it. You pull the blanket up anyway."*
- **Recommend: warn once, with the line on the second try.** Acceptance is choosing to be there. One warning turns paralysis into a choice instead of a trap.

**C5. Should LOOK be free at 7:14?** (var romantic, detective, runner; atlas dreamer)
- *Keep the exception* and say so in HELP: lookers keep losing day two (3 of 10 did).
- *Warn once:* the first `look at …` glances, repeating it commits. Another hidden rule.
- *Free everywhere:* drop `momentIndex > 0` from the look check. Glances name the real verb (*"Face down. You could turn it over."*). `check my phone`, `photos`, `remember` still change the day.
- **Recommend: free everywhere.** Looking is the game's heart (photo, August, sketchbook), so a looker should never be punished for looking. One rule, and it deletes code.

**C6. Should the honest last day only say what Nell found out?** (var §7; atlas §5e, schemer)
- *Leave it:* the clear diner says "It's at the TV" to 4 of 10 who never learned it. The clear morning says "Maya never replied" (false) without `read`.
- *Gate it:* `[clear, if nobody_laughed]`, and nothing when it's unknown.
- *Gate and admit:* *"Somebody at the counter laughs. You don't turn around. You never did find out."* For the morning: *"Your phone is face down. You never turned it over."*
- **Recommend: gate and admit.** Honest includes honest about what you never found out. That fits Decision 5 and endings that don't need the whole story.

**C7. Should Without Knowing get a Wednesday "get up" beat?** (var numb; sim §5)
- *No (now):* a jump cut to ten years later.
- *A4 plus a Wednesday 7:14 where only `get up` continues:* *"Nothing about yesterday got answered… You get up anyway."* It reuses `wednesdayMove`. ENGINE S + DATA S.
- **Recommend: the full beat.** Your chain ends *"I still have to get up tomorrow"*, and right now the player never does it. It's the clearest line between letting go and giving up.

**C8. What else should the Knowing night say?** (var P16 angry, P17 perfectionist; sim §8)
- *Nothing:* all ownership, *"It was you."*
- *Maya's half:* *"She should have told you, too. Months before Thursday… / It doesn't make it not you."* 9 of 10 never saw the epilogue, where her admission lives.
- *Maya's half plus one tagged line* for something the player found (`[if not sorry]` *"You never knocked. Not in any of them."*; `[if watched]`, `[if wanted_out]`).
- **Recommend: Maya's half, placed before "It was you"**, so ownership still lands last. At most one more line later (the sim caps additions at two). Letting go of blame needs both halves on the table.

**C9. Should texting her teach `read`?** (sim P8; var steady)
- *No:* the fastest run never meets Nell's own part.
- *Yes:* the thread opens with her message right above the keyboard. The lock doesn't change (Decision 1).
- *A pointer only:* *"Your phone is face down… since last night."*
- **Recommend: yes.** It's Nell's own logic, it costs no Tuesdays, and the shortest run shouldn't skip the one thing she actually did. (If you want fast players to stay unaware on purpose, in the spirit of Decision 1, take the pointer instead.)

**C10. A second way to learn `why_secret`?** (atlas §5b, brave; sim P2)
- *The tower only (now).*
- *Mrs. Reyes* (*What She Was Like*).
- *Her face at the driveway,* with no night. That needs B7.
- **Recommend: the tower only.** Your chain puts the certainty there, and secondhand certainty is exactly what an overthinker can't trust. Her Face (D8) can teach a heal-only fact.

**C11. Can anything besides ENTER count as letting go?** (atlas §5a, mourner)
- *No:* Decision 3 as it stands.
- *The mourner's rule,* *"if only Nell would ever know, it can be letting go,"* for exactly one input: watching the bus from the tower on a ready day ends as Knowing (D1).
- **Recommend: the rule, for one input, counted as Knowing** (the counter stays at 2). It changes nothing Maya will ever know, which is the line Decision 3 drew.

**C12. Canon**

| Question | Recommend |
|---|---|
| Mom's past (brave: Annie Pruitt, Tulsa) | Only the light version (*"My best friend left once. I didn't go to the bus."*), and only if Mom's Tuesday is built. Mom is an unfinished sentence, so keep her past one too. |
| Where Mom is at 8:40 (on till nine / off at eight / home) | Decide when a scene needs it. *On till nine* keeps Nell alone with the bus. |
| Mom's name on screen ("Denise", DESIGN.md; mourner) | Fine, from Maya or Mrs. Reyes only. |
| Theo: queer, or into culinary school and stayed (brave) | Culinary school. He's *She stays* from the inside. |
| The letter's date (brave; var detective) | March. The jacket and *"Months before Thursday"* already point there. |
| Earl the driver's 8:30 pie (schemer) | Yes, if *Overtime* is built. It explains "late like always". |
| Can you walk out of Calder? (meta: yes; dreamer: the road brings you back) | The road brings you back, as a `~` felt line, same as the bus. |
| Porch timeline (five atlas Nells) | Fix it before any porch scene: Maya behind the door, then sitting, light off by her hand at 7:58, last box at eight. |
| Dot starts her grilled cheese at the bell (sim) | Yes. It pays off in the epilogue. |

---

## D. New content worth building, ranked

**None of these is a third ending.** D1 is a variant telling of Knowing (same lock, same Wednesday). D3's coda varies Knowing's Wednesday, and C7 varies Without Knowing. Everything else is a branch or a reply. *Wearing It Out*, *The Window Seat* and *Fourteen Miles* sound like endings in the atlas, but none of them exits the loop.

| # | Name · where | Needs → learn / fix | Sketch | Cost | Asked by | Why it fits |
|---|---|---|---|---|---|---|
| D1 | **Watching It Go** · 8:40: `watch it go`, `climb the tower`, `see her off`, `wave` | ready → ends as Knowing (C11). Not ready → a night, no fix. | Ready: she watches the bus become *"the place where a light was"*, phone face up at 11:53. Not ready: the tower (*"Seeing it didn't finish anything"*) or a wave through the glass (`[if feelings]` *"You said it where it couldn't count"*). | M (+ about 8 engine lines) | atlas (dreamer, mourner, meta); sim P14, P4; var P11 (pleaser) | Every night opens on the bus she's never seen go. Letting go is being awake when it becomes the past. Replaces B32's stopgap. |
| D2 | **Go / That Part's Mine** · driveway: `I've lived today before`; `you should go` | `tried_to_tell` / `why_secret` → permission (C2), or none / `peace` | Maya believes her: *"Then that part's mine… You can stop."* Night: *"She can't let go of it for you."* Go, said kindly: *"I was waiting for you to ask what I wanted."* Early versions come out as a bit, or she flinches. | M | atlas (dreamer, meta; Go: schemer, mourner, brave) | Being forgiven isn't letting go. It gives your cut "say it on purpose" ending a home, failing for the reason you cut it. |
| D3 | **The Screen Door → Wednesday, the Kitchen** · kitchen: `finish her sentence`, `friends who aren't what`, `i'm gay` | `mom` + `feelings` → `out_loud`, no fix. `mom` only → sim P7 case B. | Nell finishes her *own* sentence. Mom puts her keys down and is late: *"Eat your eggs."* On Wednesday, `[if out_loud]`: *"She turns around. She actually turns around."* | M | atlas (brave, dreamer, schemer); sim P7; var P10 (detective, runner, pleaser, angry) | The one fix that fails because of the loop: the people who'd change with you only exist in tomorrow. A3's in-scene home. |
| D4 | **Free-reply pack** · anywhere | none | `loop`, `this isn't real`, `go back to thursday` (*"Thursday isn't in here"*), `write it on my hand`, `count`, `rehearse`, `drawer`, `call`, tagged `stain`, an oblique `who are you`. | S (+ 4 engine lines) | atlas (meta, dreamer, schemer, mourner); sim P6, P12; var P14 (5) | The lines that landed best quoted the player's own habit back to her. |
| D5 | **The porch, waited out** · porch: `wait`, `sit against the door`, `shout`, `ding dong ditch`, `say it through the door` | none → `porch_light`. Failures: none / confess. | Cheapest is one `[clear]` line: *"At 7:58 the light clicks off. It's her hand. She stood there the whole time."* | S → M | atlas (all five); var P8 (angry, joker, pleaser, steady) | The one learning scene where Nell changes nothing. Needs the C12 timeline. The sim's epilogue (*"What porch light?"*) still fits. |
| D6 | **The jacket** · driveway: `can I have my jacket back`; `keep the jacket` | none → `keep` (small). `sketch` → `already`, no fix. | *"You got your jacket back. You didn't get March back."* / *"It was already hers. You just said it out loud."* | S–M | atlas (dreamer, brave, mourner, schemer); sim P5; var (joker) | Nell never asks for anything back. Holding on and giving, in one object. |
| D7 | **The driveway hears her** · `would you stay if I asked`, `you decided for me`, `proud of you`, `sorry about Thursday`, `what were you going to say thursday` | `reason` / `tried_to_tell` → replies, plus `peace` and `sorry` cases | *"Don't ask me that… I'd say yes."* The Honest Fight: *"You can both be right and the bus still leaves at 8:45."* | M | var P4 (steady, angry, perfectionist, pleaser); atlas (brave, schemer); sim P3, P9 | Each temperament's core sentence, each failing for its own kind of wanting. |
| D8 | **Her Face** · driveway: `look at her face` | `tried_to_tell` → heal-only `red_eyes`, no night | *"You make yourself look now. Her eyes are red."* "Say something." comes again. Moment words must beat the free-look shortcut. Needs B7. | S–M | atlas (dreamer, meta); sim P2 | Her memory picked the version that hurts more and blames her less. |
| D9 | **The Other End of Read** · porch or 8:40: `text her sorry` | `read` changes it, no fix | It says Read, and nothing comes. With `read`, on the porch: the curtain lights blue, and she turns her phone face down. *"Now you know what 11:52 looks like from the other side."* | S | atlas (dreamer, schemer, mourner; brave's *Delivered*); var (pleaser) | A mirror scene. Blame turns into recognition. |
| D10 | **`wanted_out` and In Case** · 7:14 `drawer`; driveway `take me with you`, `give her the forty` | `relived` → `wanted_out`, no fix | *"CALDER → CHICAGO. $38.50. You've been saving for a ticket since seventh grade and calling it nothing."* / *"Keep your in-case, Nellie."* | M | var P12 (runner); sim P12; atlas (mourner, dreamer, schemer) | Letting go of Maya isn't giving up her own leaving someday. |

**Parked:** *The Window Seat* (dreamer; the only scene aimed at Nell's past self, so build it after D1) · telling Theo about the loop (schemer, meta, dreamer) · *Maya's List* (schemer) · confess at the tower (var P2) · *Wearing It Out* (dreamer; risks punishing slow play) · *The Minute* (meta; fold into D1) · *What She Was Like* (brave; teaches `march`) · *Everybody Knew (Again)*, *Booth Four*, *Mom's Tuesday*, *First Person Is Nobody* (brave; canon first) · *Overtime* (schemer) · writing it instead (letter, sketchbook) · the `[angry]` voice (var P15) · night flinches, `sideways` (sim) · a road to `feelings` for non-lookers (var P13) · *Face Up*, *Wednesday, Unplanned* · gating `proud of` (sim P9).

**Rejected, as the atlas says:** *Only True Things Keep*, the *Corkboard of Tuesdays* (both cheat the reset), the WED glimpse, the *Perfect Tuesday* montage, *Forty Miles*, *Eleven, Ten, Nine* as built.

---

## E. Lines to rewrite

### Rang false for several players

| Line | Who | Fix |
|---|---|---|
| "You mean to *why didn't you tell me*." | var (9 of 10) | B1 |
| "It doesn't feel like the kind of thing that would change anything." on a core sentence | var (6); atlas (brave) | A2 |
| "You don't know which of the hundred things to say." | var (4) | B25 |
| "> hi." in place of her words | var (5) | B10 |
| "I *think*…" / "said it inside, too" | sim; var (3) | B28 |
| THINK "There's one thing you haven't tried." | var (frozen, perfectionist, steady) | *"There's one thing you haven't let yourself try. / Letting every moment go by, on purpose."* |
| THINK "perfect goodbye" / "told her everything" | var (perfectionist, detective) | *"You've said goodbye without a fight."* / *"You've told her how you feel."* |
| "you already started pulling at the thread" to a player who learned nothing | var (frozen). The sim backs the rule. | Keep the rule. Add `tooSoon.noFacts`: *"You can't let go of something you've never once picked up."* |
| "You do it all the way to the diner." | sim | *"You do it at the diner door."* |
| "I'm not mad", right after she heard Maya mock her | sim | `[felt]` *"You decide not to have heard it."* |
| Epilogue: Maya volunteers "I wasn't laughing"; "I know now." | sim §9 | Nell asks: *"Were you laughing?" "Nellie. I was crying." "Okay."* Leave one thing unknown (*"What porch light?"*). |
| "There were other ways to spend them." | var (5) | **Decided** |

**Mixed, so keep:** "Later." · "I meant some of it." · "Like nothing happened." · the day-two strain lines (false only for numb; A4 covers her).

### Hit hardest: protect these

| Line | Hit for |
|---|---|
| "…meant it the other way too. *Go.* Get out of here. One of us should." | var (9 of 10); sim §8. The thesis line. |
| "She replied. / You didn't." | var (5) |
| "It was good the way a photograph is good." | var (4) |
| "Nobody was ever looking at you." | var (4) |
| "Keeping your mouth shut feels like holding a door closed with your whole body." | var (4); sim |
| "You think about it so hard it's almost the same as going. It isn't." | var (4) |
| "Like she was waiting for permission to give up." | var (3) |
| "You can't get out of a day on a bus." | var (3) |
| "She never said that. You can hear it perfectly." | var (3) |
| "Her shape behind the curtain. She isn't moving away from the door." | var (3): the best free hint |
| "Theo has never done one thing to deserve being the first person you hit." | var (2); sim |
| "…you don't ask for another one" (with "Tuesday") · "a whole system for not-here" · every night at 11:52 | sim; atlas |
