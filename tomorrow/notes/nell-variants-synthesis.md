# Ten Nells: synthesis

_Ten versions of Nell, each with a different anxiety level and temperament, each standing in for a different kind of player, played the real game (story.js + game.js) through the harness one input at a time. This note pulls their reports together. The full reports are in `notes/variants/01-frozen.md` … `10-numb.md`. Where it helps, I also cite the deep single-Nell simulation in `notes/nell-simulation.md` (marked **sim**)._

_Conventions: `code` names facts, branches, moments and word lists in story.js. **DATA** means a change to story.js word lists, tags or existing lines only. **WRITING** means new lines or a new branch. **ENGINE** means a small change to game.js. "Played" inputs happened in a run. "Static" inputs were checked against the matcher (`Command.findAction`, moment words first, then the global `words`, first match wins) but not played._

---

## 1. At a glance

| # | Temperament | Anxiety | First change | Second Tuesday | Ending | Tuesdays | Quit risk (where) |
|---|---|---|---|---|---|---|---|
| 01 | **Frozen**: holds her breath, rereads, stays in bed | 10 | T2 7:14 `pull the blanket over my head` (`hide`) | Gave in at 7:14 by hiding. Saw no poke. | true | 14 | **High.** T4: typed `scroll up`, was told "You don't scroll up." T5: ENTER ×7 got "you already started pulling at the thread" with nothing learned. |
| 02 | **Perfectionist**: plans, rehearses, redoes | 8 | T2 3:15 `go to the tower` (her plan) | Resisted 7:14, kitchen, diner. Gave in at 3:15. | true | 14 | **Medium.** T8: "You've never let yourself look" the day after the photo. T11: an edited confession got "practiced that". |
| 03 | **Steady**: asks questions, acts fast | 3 | T2 7:14 `text maya can we talk` | Gave in at 7:14. Saw no poke. | true | 7 | **Medium.** T5: the tower scene word for word, with no repeat notice. |
| 04 | **Joker**: bits, deflection, tests walls | 6 | T2 diner `throw a pie at whoever laughed` ("laughed" fired `theo`) | Resisted 7:14 and the kitchen. Lost it at the diner to a keyword. | true | 7 | **Medium.** T5 driveway: "say something" right after a full sentence, then "no room for" to *what if you just stayed*. |
| 05 | **Angry**: blames first, accuses | 7 | T2 kitchen `you knew. you knew and you didnt tell me` (`mom`) | Resisted 7:14 out of pride. Gave in at the kitchen, the first person she was allowed to blame. | true | 9 | **High.** T7: climbed the tower to fight and got the same hug word for word. |
| 06 | **Romantic**: knows she loves Maya, fears the town | 5 | T2 7:14 `look at the photo strips` (thought LOOK was free) | Lost at 7:14 to a look. Would have given in at the driveway poke. | true | 11 | **Medium.** T5: "You've never let yourself look" read as being called in denial. |
| 07 | **Detective**: timelines, rereads, cross-checks | 7 | T2 7:14 `look at the corkboard` (thought LOOK was free) | Lost at 7:14 to a look. Would have given in at the kitchen ("One question"). | true | 12 | **Medium.** T10: a sharper question to Mom replayed the old scene with the old question in her mouth. |
| 08 | **Pleaser**: apologizes, comforts | 8 | T2 diner `its okay theo. its not your fault` | Resisted 7:14 and the kitchen. Gave in at the diner to comfort Theo. | true | 11 | **High.** T10: on her letting-go day, `whisper sorry, so quiet she cant hear it` played as a repeat knock and threw the day away. |
| 09 | **Runner**: wants out of Calder herself | 6 | T2 7:14 `look past the tower at the highway` (fired `tower`, by accident). First deliberate change: T3 bus. | Lost at 7:14 by accident. In a RESTART replay she resisted six pokes and gave in at 8:40 (`run`). | true | 10 | **High.** T7: `I wasn't always going to stay. I wanted out too.` matched `stay` and made her beg Maya to stay. |
| 10 | **Numb**: flat, passive, says what she *won't* do | 9 | None (run 1). Run 2: T2 `go back to sleep` (`hide`). | **Resisted all seven**, through inertia plus two parser misses on her tries to stay in bed. | **true true** + epilogue (run 2: true) | 2 (run 2: 7) | Low in run 1. **Medium-high** in run 2, T4: `whats the point` → "It doesn't feel like the kind of thing that would change anything", then `i dont want to get up` → "That isn't something this moment has room for." |

**Totals.** 9 of 10 reached the true ending, in 7 to 14 Tuesdays (mean about 10.5). One reached the true true ending, and she did it in two Tuesdays by pressing ENTER. Four of ten had a point where a real player like them would close the tab (01, 05, 08, 09), and every one of those four was caused by the parser or the repeat rule, not by the writing.

---

## 2. The second Tuesday

### Where each Nell broke

| Moment | Gave in here | How |
|---|---|---|
| 7:14 | **5**: frozen, steady, romantic, detective, runner | Hiding (1), a plan (1), a LOOK the help text calls free (3) |
| Kitchen | **1**: angry | An accusation the poke handed her |
| Diner | **2**: joker, pleaser | The keyword "laughed" (1), comforting Theo after a free LOOK showed his shaking hand (1) |
| 3:15 | **1**: perfectionist | Her plan from the night before |
| Driveway, porch | 0 | |
| 8:40 | 0 (1 in the runner's replay) | |
| **Resisted all seven** | **1**: numb | Inertia, and two missed parses |

**Five of ten never saw a single in-moment poke.** They spent the day at 7:14, before the kitchen.

### Choice, accident, or paralysis

- **A deliberate change that felt like one (3):** steady (text), perfectionist (tower), angry (Mom). These players will always spend the day. A planner reads "You could do anything today" as an exam, an efficient player reads it as permission, and an angry player reads it as permission to blame.
- **Deliberate, but not felt as a change (2):** the pleaser ("telling Theo it's okay doesn't hurt anyone, so it didn't feel like *changing* something") and the frozen Nell (hiding felt like the opposite of acting).
- **An accident (4):** romantic and detective (`look at …` at 7:14 is a real change, but HELP says LOOK changes nothing, and `look at the hook` in the same moment is free), runner (`look past the tower at the highway` fired `tower`), joker (`laughed` is a diner `theo` word, and the scene that played, "You make yourself look at him", described the opposite of what she typed).

So **6 of the 9 who lost the second Tuesday lost it to something they would not call choosing to change the day.** None of them knew the day was special, and nothing later told them. Joker, steady, romantic and frozen all said so in their reports.

### Did anyone reach "without knowing" by paralysis or skimming?

**Yes. The only one who reached it, the numb Nell, did it by inertia.** Her first two inputs on the second Tuesday were attempts to stay in bed: `make it stop` (matched `bus` through the phrase "make it" and got "Not yet.") and `lie here` (a miss). If either had matched, she would have hidden and lost the ending, which is exactly what happened in her RESTART run with `go back to sleep`. After that she pressed ENTER. Every resist line assumed a strain she didn't feel ("holding a door closed with your whole body", "Your hand is already up", "You've made that bus a hundred times in your head"). She read the ending as "giving up that the game called peace" until the epilogue's "It's different now" turned it into proof that there is a later. At 2 AM she read "you don't ask for another one" as *another day*.

**Paralysis cuts both ways, and which way depends on the words.** The frozen Nell's paralysis looked like the blanket, which is a change, so she lost the ending. The numb Nell's paralysis looked like ENTER, which isn't, so she won it. The game tells them apart by state, not by intent, and it never says which one it saw.

### What this means for the author's worry

The worry was that players would *stumble into* the without-knowing ending. In this sample, **1 of 10 stumbled in, and 5 of 10 stumbled out** before seeing a poke. The bigger risk is the second one. The ending is close to unreachable for most temperaments anyway:

- Planners, askers and the angry spend the day on purpose (02, 03, 05).
- Lookers and experimenters lose it to the interface (04, 06, 07, 09).
- The pleaser can resist a poke that asks her to *take* (Mom) but not one that lets her *give* (Theo).
- The runner resisted six pokes because she was saving herself for the seventh, the bus.
- The two players it is "sized for" split on vocabulary: the frozen one hid, the numb one didn't.

### What to change

Don't add a gate. That would only take the ending away from the one player it reached. Make the edges honest:

1. **Stop losing it to the interface (ENGINE + DATA).** At 7:14, the first `look at …` that would fire a branch shows a free glance and keeps the moment open. A second one commits (detective P6, romantic P7). Add negation words so saying no to a poke doesn't trigger it: `dont ask`, `dont run`, `dont text`, `dont answer`, `stay still` (frozen P8, numb P5). Give "laughed / turn around / whats so funny" their own diner branch so the text matches the input (§4).
2. **Make giving in felt (DATA).** Add a `[day two]` line to the *text* of every branch reachable on day two (not the night, since `startNight` advances the day before printing): `[day two] And just like that, it's a different day.` (sim P15). In `hide`: `[day two] You could let it happen. You'd have to be there for it. You pull the blanket up anyway.` (sim P17, frozen P1). In `bus`, for the runner who held out: `[day two] Six times today you let it be. You were saving yourself for this one.`
3. **One warning before hiding on day two (ENGINE, small).** The first `hide` on day two only: "You could. Last Tuesday you didn't. You got up. _ (Type it again to stay. Or press ENTER to get up the way you got up.)" (numb P7). It turns ENTER into a choice, which is the exact line between acceptance and inertia.
4. **Let the inertia route admit what it might be (DATA).** On the kitchen `letItHappen` for day two: "You don't ask. You don't know if that's strength, or if you just can't." In `withoutKnowing.night`: "You don't know if you let it go or just let it happen. Maybe the first time, it's both." Change "you don't ask for another one" to "you don't ask for another Tuesday" (numb P2; sim §5 also suggests "Maybe you're just scared of the answer. You let it go anyway.").
5. **Give it one act (WRITING + ENGINE).** Before the epilogue, a Wednesday 7:14 where only `get up` continues: "Nothing about yesterday got answered. … You do. You still don't know why. You get up anyway." Sleep gets "No. You've slept enough." This is DESIGN.md's own chain ("I still have to get up tomorrow"), which the ending currently skips (numb P1).
6. **Optional: let a near-miss be remembered (ENGINE).** Store where day two broke. On the third morning, once, if she resisted three or more pokes: "Yesterday you almost let it go. You made it to the bus." It names the near-miss without explaining the rule. Runner, perfectionist, pleaser and joker would have seen it.
7. **Fix the pokes the sim flagged (DATA).** The driveway poke "*Stay. I'm sorry. I love you.*" hands over words Nell doesn't have before `feelings`. Use "*Stay. I'm sorry. I—*". The numb and runner Nells both noted the "I love you" "skipped right over" them. The kitchen `[day two]` resist line prints after the kiss. Move it above.

---

## 3. What different players do

### The order each temperament tried things

Fixes are in **bold**. Anything with "(acc.)" was an accident: the player meant something else.

| Nell | Route, in order |
|---|---|
| 01 frozen | hide → phone ×2 (otherwise case) → ENTER-through → photos → remember (*feelings*) → hold breath = breathe → phone (*read*) → phone again → text (**peace**) → stay (**keep**) → knock (**sorry**) → out |
| 02 perfectionist | tower (**peace**) → tower repeat → goodbye (peace again) → stay (**keep**) → confess fail ×2 around photos → remember (*feelings*) → confess (**confess**) → confess repeat → phone (*read*) → text (full tower again) → out |
| 03 steady | text (**peace**) → goodbye (peace again) → knock (**sorry**) → tower (full replay) → "would you stay" = stay (**keep**, acc.) → out |
| 04 joker | theo (acc.) → remember → text (**peace**) → stay (**keep**) → bus (**station**) → out |
| 05 angry | mom → theo → phone (*read*) → text (**peace**) → yell at door = knock (**sorry**, acc.) → tower (full replay) → stay (**keep**) → out |
| 06 romantic | photos (acc.) → text (**peace**) → tower (full replay) → confess fail → remember (*feelings*) → confess (**confess**) → bus (**station**) → knock (**sorry**) → house → out |
| 07 detective | photos (acc.) → mom → theo → phone (*read*) → phone again → house (*feelings*) → text (**peace**) → stay (**keep**) → mom again (rerun) → confess (**confess**) → out |
| 08 pleaser | theo → phone (*read*) → text (**peace**) → theo again (acc., rerun) → goodbye (peace again) → knock (**sorry**) → "see her off" = bus (**station**, acc.) → mom → whisper = knock repeat (acc.) → out |
| 09 runner | tower (**peace**, acc.) → bus (**station**) → mom → theo → bus repeat → "wasn't going to stay" = stay (**keep**, acc.) → knock (**sorry**) → remember → out |
| 10 numb | run 1: nothing → **without knowing**. Run 2: hide → "make it stop" = bus (**station**, acc.) → phone (otherwise) → text (**peace**) → knock (**sorry**) → out |

### How discoverable each path is

| Path | Found by | Notes |
|---|---|---|
| Tower scene (`peace`, `reason`, `why_secret`, `tried_to_tell`) | **10 / 10** | Eight of ten entered it by **texting**, not by climbing. One message delivers the whole lock for the true ending. |
| Way out (THINK / ready mornings) | 9 / 9 who needed it | Everyone took "Letting every moment go by" as an instruction. The steady Nell felt it was handed to her. |
| `keep` | 7 / 10 | Two of the seven were the parser turning a different sentence into "Please. Stay." (steady's question, runner's negation). |
| `sorry` | 7 / 10 | One was yelling credited as an apology (angry). |
| `nobody_laughed` (by scene) | 6 / 10 | Four more were *told* it anyway by the clear diner on the last day (see §7). |
| `station` | 5 / 10 | Two were accidents ("see her off", "make it stop"). |
| `read` | 5 / 10 | Steady, joker, romantic, runner and numb finished without ever learning Maya replied. The clear morning still says "Maya never replied" to them. |
| `august` | 5 / 10 | |
| `mom` | 4 / 10 | Two of the four had their own question overwritten with "What did Lourdes say?" |
| `photo` | 4 / 10 | Two of the four by accident (a "free" look). |
| `feelings` | 4 / 10 | Only players who set out to look, or a frozen one stuck in bed. |
| `confess` | 3 / 10 | Perfectionist, romantic, detective. |
| `house` / `sketch` | **2 / 10** | Romantic and detective, both late. It is the least-found scene in the game. |
| `breathe` (on purpose) | **0 / 10** | Only reached by `hold my breath` matching "breath". Everyone else got the diner truth through Theo. |
| `remember` from 8:40 | **0 / 10** | |
| 7:14 jacket hook reply | 1 / 10 | LOOK never mentions the hook, and it's exactly the evidence the detective wanted. |
| Porch `window` reply | 4 / 10 | The most effective free hint in the game. The detective solved the knock fix from it without trying it. |

### What this says

- **The true ending can be reached without ever looking at Nell's own part.** Steady (7), joker (7), runner (10) and numb's second run (7) got out with neither `read` nor `feelings`. The final night ("That's what happened. You were there. It was you.") lands on someone who only ever saw the Dollar General joke, and "About everything she was trying to hand you" stays vague for them. The steady Nell asked whether the lock should include one fact about Nell's own part. **That's a design question for the author, not a recommendation.** The cheaper move is to point at the phone once `tried_to_tell` is known (§5, P9).
- **Texting is the master key.** The game's richest scene sits behind the most obvious action. That's fine, but the text branch then replaces whatever the player typed (§6).
- **The "looking" chain (photo, August, house) is where the game's heart is, and most temperaments never go there.** The pleaser said looking at the photos would mean "finding one more thing that's my fault". The joker never looks at anything she can't joke at. The angry and runner Nells look past Maya. Each needs its own door (joker's "scared of what?", runner's drawer), or the confess chain stays a romantic/detective path.
- **Accidental fixes are common: 7 across 6 players.** For the runner, 2 of her 4 fixes were accidents, and one of them opened the way out. THINK then records the accident as something she wanted ("You've asked her to stay", "You've tried leaving with her").

---

## 4. Parser gaps

Every unmatched or misrouted input from the ten runs, grouped by moment. **Type** is the kind of fix: WORDS (a word list), REPLY (a free reply), TEXT (edit existing lines or tags), BRANCH (a new branch or case, see §5), ENGINE.

Matching reminders, from game.js: moment `words` are checked before the global `words`, top to bottom, and the first match wins. A branch beats a free reply. `look at …` is free at every moment except 7:14. A branch case with no `night` is a reply, and the moment stays open. Free-reply values go through `say()`, so they can be arrays with tags.

### Day one (`whatYouMeant`)

| Typed (variants) | Game did | Fix | Type |
|---|---|---|---|
| `why didn't you tell me` (02, 03, 07), `what did lourdes say` (03), `what is that supposed to mean` (05), `where is the bus going` (09), `mom are you okay?` (08), `cool cool cool. can i get the pie`, `nice jacket. where'd you get it` (04), `take me with you` (09), `whatever` (10) | "You mean to *why didn't you tell me*." (the "do" template). **9 of 10 Nells hit this.** | Widen `isSpeech`: `/^(i|im|i'm|you|we|it|its|please|sorry|no|dont|don't|maya|hey|hi|ok|okay|fine|whatever|cool|nice|what|whats|why|when|where|how|who|would|could|can|will|did|are|is|take|let)\b/i`, **or** the input ends in "?". | ENGINE |
| `hold my breath` (01), `throw my phone at the wall` (05) | "You mean to *hold my breath*." | In the meantDo branch only, swap `\bmy\b`→your, `\bme\b`→you, `\bmyself\b`→yourself. | ENGINE |
| `i hope chicago is worth it` (05) | "chicago" lowercase | Capitalize Chicago / Calder / Theo / Dot the way `Maya` already is. | ENGINE |
| `look at mom`, `look at the counter` (07), `look out the window` (09) | Treated as her action for the moment | Let free looks and free replies answer on day one too: move the `looking` / `freeReply` check above the day-one return. | ENGINE (low) |
| `...` at the driveway (01) | Generic miss | Optional: treat gibberish at the driveway as the silence reply below. | ENGINE (low) |

### 7:14 (wake)

| Typed (variants) | Game did | Fix | Type |
|---|---|---|---|
| `look at the photo strips` (06), `look at the corkboard` (07), `look past the tower at the highway` (09), `look at my phone` (07, once read) | A real change: the day ends | The first `look at …` that maps to a branch shows a glance and keeps the moment open. The same input again commits. Glance replies: `"corkboard, photo, photos, strip, strips": "Photo-booth strips: you and Maya, you and Maya, you and Maya. There's one you never look at for too long."`, `"highway": "You can't see it from here. You've checked. Just the tower, and past it, more Calder."` | ENGINE + REPLY |
| `text maya i love you` (06) | "She isn't here. Not yet." (`love` → confess) | Wake words `typedLove: ["text maya i love", "text her i love", "text i love"]` + free reply: "You type it. *i love you.* The cursor blinks after it like it's waiting for the rest. You delete it one letter at a time." | WORDS + REPLY |
| `reply to her. im so sorry…`, `text her sorry` (08) | "She isn't here. Not yet." (`sorry` beats `text`) | Wake words `text: ["text", "reply", "message her"]` (moment words win). | WORDS |
| `text maya can we talk` (03), `text her: hotel california…` (04), `reply… tell me WHAT?` (05), `text maya meet me at the tower` (06), `reply ok` (01) | Sends "> hi." or "> sorry. yes. tower at 3?" | Make the branch show Nell choosing the smaller message (§5, P3). | TEXT |
| `dont text her`, `dont answer` (static, 01 / 10) | Plays `text` | Wake words `nothing: ["dont text", "dont answer", "dont reply", "leave it"]`, listed first. | WORDS |
| `reread her texts`, `scroll up` before `tried_to_tell` (01) | "You don't scroll up." + night "You didn't scroll up." | Rewrite the otherwise case of `phone` (§5, P9). | TEXT |
| `read it again` / `look at my phone` once `read` is known (01, 07) | Ends the day, teaches nothing | Drop the `night` from the `needs: ["read"]` case, so it becomes a reply. | TEXT |
| `lie here` (10), `i dont want to get up` (10), `stay still` (static) | Miss / "no room for" / (static) the `mom` branch | Global `hide` += `"lie here", "lie still", "stay still", "stay put", "dont get up", "dont want to get up"` (hide is above stay). | WORDS |
| `make it stop` (10) | "Not yet." (`make it` is a bus word) | New global `stop: ["make it stop", "make it end", "make this stop", "want it to stop", "=stop"]` **above** `bus`, answered globally like `unsafe` (one line in `handle`): "It doesn't stop because you ask it to. You've asked. / The day only ends one way: all the way through. / _ (Press {enter} to let it happen.)" | WORDS + ENGINE |
| `whats the point` (10) | "It doesn't feel like the kind of thing that would change anything." (reads as agreement) | Global `tired: ["whats the point", "no point", "im tired", "so tired"]`, answered globally: "You're tired. You've been tired since Thursday, probably. The day waits anyway." | WORDS + ENGINE |
| `check the drawer`, `count my money` (09) | Misses (only `inventory` shows the money) | Reply `"drawer, money, forty, sock": "Forty dollars. For nothing in particular. You shut the drawer."` (the `wanted_out` branch is §5, P12) | REPLY |
| `rehearse`, `make a list` (02) | "That isn't something this moment has room for." (and `what to say` would fire `tower` through `say`) | Wake words `rehearse: ["rehearse", "practice", "make a list", "what to say", "plan what"]` + reply (§5, P14). | WORDS + REPLY |
| `sing it. tuesday the musical` (04) | Miss, right after "You could set it to music." | Reply `sing`: "You do the alarm's part. Then Mom's. Then Theo's. You stop before the driveway. Nobody wants that verse." | REPLY |
| `fine. it's ohio. you win` (04) | "Not yet." (`fine` → driveway line) | Add `"ohio"` to the `ceiling, stain` reply keys. Low. | REPLY |
| `go to the library` (07) | Miss | Reply `library`: `["[if sketch] The library opens at nine. She'll have returned everything by ten. You know where she goes after, when she's waiting on something.", "[if not sketch] Why would she be at the library?"]` | REPLY |
| `take the forty dollars and leave town`, `pack a bag`, `walk out to the highway…` (09) | "Not yet." / misses | Covered by the drawer and `wanted_out` work (§5, P12). | BRANCH |

### Kitchen

| Typed | Game did | Fix | Type |
|---|---|---|---|
| `kiss mom on the cheek` (04) | "She isn't here. Not yet." (`kiss` → confess) | Kitchen words `comfort: ["hug", "kiss", "its okay", "are you okay", "i already know"]` (take `hug` out of `mom`) + reply: "You hug her from behind, keys and all. 'What's this for?' 'Nothing.' She kisses your head and goes, and she never says it, and you let her not say it." | WORDS + REPLY |
| `hug her. tell her its okay, i already know` (08) | Plays `mom` with "What did Lourdes say?" | Same as above. | WORDS |
| `dont ask` (static, 01) | Plays `mom` (`ask` → talk) | Kitchen words `nothing: ["dont ask", "say nothing", "stay still"]`, listed first. | WORDS |
| `mom. friends who aren't what?` (07), `Mom, did you ever want to leave Calder?` (09) | Replays the scene with "Mom. What did Lourdes say?" | New first case in `mom`, `needs: ["mom"]` (§5, P10). | BRANCH |
| `you knew. you knew and you didnt tell me` (05) | Rewritten as "Mom. What did Lourdes say?" | Later: an `[angry]` tag (§5, P15). | ENGINE |

### 11:40 diner

| Typed | Game did | Fix | Type |
|---|---|---|---|
| `throw a pie at whoever laughed` (04) | `theo` text: "You make yourself look at him." **It ended the second Tuesday.** | New `turn` branch (§5, P7) with diner words `turn: ["turn around", "whats so funny", "who laughed", "laughed", "laughing", "laugh", "confront", "yell", "throw"]`. Take `laugh*` out of the diner's `theo` words. | WORDS + BRANCH |
| `turn around. whats so funny?` (05) | Miss, although the day-two poke says "turn around and look" | Same. | WORDS |
| `yell at the truckers` (05), `confront theo` (static) | "Not yet." (`original`) | Same (moment words beat the global `original`). | WORDS |
| `hold my breath` (01) | `breathe`: "You breathe in through your nose…" | Diner words `hold: ["hold my breath", "hold breath", "hold your breath"]` → new `hold` branch (§5, P7). | WORDS + BRANCH |
| `order something so he has a reason to stay` (08) | Full `theo` replay; day lost (`stay` is a diner theo word) | Diner words `order: ["order"]`, listed **first** (the action name matches the free reply). | WORDS |
| `order the brown pie. live dangerously` (04) | The pie description | Same. | WORDS |
| `its okay theo. its not your fault` (08) | `theo`, and Theo never hears it | Diner words `kind: ["not your fault", "its okay"]` → `theo kind` (§5, P7). | WORDS + BRANCH |
| `look at the counter` before `nobody_laughed` (03) | "You haven't made yourself look." (she just did) | `counter` reply as an array: `["[felt] Two truckers. You can't see their faces from here. You'd have to turn around.", "[heal, clear] Two truckers and a game show. Nobody is looking at you."]` | TEXT |
| `counter` on the clear day (07) | Same contradiction | Same. | TEXT |
| Second Theo visit (08) | Word-for-word replay, no note | New first case in `theo` and `breathe`, `needs: ["nobody_laughed"]`: "He tells you again. Six AM. Thursday. You already knew. You let him tell you anyway." + its own night. | BRANCH (small) |

### 3:15 street

| Typed | Game did | Fix | Type |
|---|---|---|---|
| `climb up and tell her how i feel` (06) | `tower` again in full (`her` is a street tower word) | Tower confess case (§5, P2). | BRANCH |
| `go up the tower and ask her if she'd stay` (03), `go up there and tell her she only tried ONCE` (05) | Full tower scene, no repeat notice (text ≠ tower) | Repeat by scene + a tower that knows `why_secret` (§5, P2). | ENGINE + TEXT |
| `go to the tower early and be there first` (02, 7:14) | Repeat, with the night "If you'd said it at 6:31" | Neutral repeat night (§5, P6). | TEXT |
| `look up` (10) | Miss | Add `look up` to the `letters` reply keys. | REPLY |
| `count the streets` (09) | Miss | Reply `count`: "Eleven streets. Four booths. One crooked A. Counting is something to do with your head that isn't the thing." (sim P12) | REPLY |
| `look at the feed store` (09) | Generic LOOK | Optional reply: "The bus stop sign. BUS. Tues & Fri, 8:45 PM. You've walked past it every day of your life." (sim P12) | REPLY |
| `dont answer` (static) | Goes to the tower (`answer` → text → tower) | Street `nothing` += `"dont answer", "dont go up"`. | WORDS |
| `no. she can come find me` (05, day one) | "You think about it so hard it's almost the same as going." | Fine as day one. No change. | — |

### 6:30 driveway

Proposed order of driveway `words` (moment words win, top first): `silence`, `notstay`, `out`, `askif`, `accuse`, `photo`, `jacket`, `goodbye`, `talk`.

| Typed | Game did | Fix | Type |
|---|---|---|---|
| `please stay. don't go to chicago` (02) | "say what" nudge (`chicago` → talk, checked before global `stay`) | Move `talk: ["chicago"]` last. Global `stay` already catches "please stay". | WORDS |
| `so are you gonna give me my jacket back or is it moving to chicago too` (04) | "say what" nudge | Put `jacket` above `talk`. | WORDS |
| `ok what if you just stayed…` (04) | "That isn't something this moment has room for." | Global `stay` += `"stayed", "staying"`. | WORDS |
| `I wasn't always going to stay. I wanted out too.` (09) | `stay`: "Please. Stay." + **keep fix** | Global `notstay: ["not stay", "not staying", "wasnt going to stay", "never stay", "wont stay"]` **above** `stay`. At the driveway it maps to the `out` reply, and elsewhere it misses. | WORDS |
| `take me with you`, `I'm not staying. I want to come with you`, `I wanted to leave too`, `tell her I want out of Calder too` (09), `let me come with you` (06) | Misses, "Not yet.", "say what" | Driveway words `out: ["wanted out", "want out", "leave too", "take me", "come with", "not staying", "wasnt going to stay"]` + reply: "You open your mouth to say it. *Me too. I wanted out first.* / In her driveway, with her box in her arms, it would sound like something you made up just now. / You close your mouth." Full branch: §5, P12. Also global `bus` += `"come with", "take me"`, so at the porch and at 8:40 it routes to the bus. | WORDS + REPLY |
| `would you stay if i asked you to?` (03) | `stay`: "Please. Stay." + keep | Driveway words `askif: ["would you stay", "if i asked", "would you still go"]` + reply (§5, P4b). | WORDS + REPLY |
| `you decided for me. you didnt even give me a choice` (05) | "That isn't something this moment has room for." | Driveway words `accuse: ["decided for me", "give me a choice", "should have told me", "you lied"]` + reply or branch (§5, P4a). | WORDS + REPLY |
| `why didnt you just tell me` (05), `why didn't you tell me` (03, 07) | "You don't know which of the hundred things to say." | Add `"why didnt you"` to `accuse`. Reply: `["[if not why_secret] 'I was going to.' She looks at the box instead of you. That's all you get.", "[if why_secret] You know why. She told you on the tower. You ask anyway, so she has to say it twice. She doesn't.", "_ (Say something else. Or press {enter}.)"]` | WORDS + REPLY |
| `say nothing` (01), `i dont say anything` (10), `stay quiet` | "It comes out the way it came out." | Driveway words `silence: ["say nothing", "stay quiet", "dont say anything", "keep quiet", "be quiet", "silent"]` → reply: "You don't say anything. She waits. You count to eleven, one for every street. / The quiet gets so big it starts to sound like something. / _ (It won't stay quiet. Press {enter} to let it come out.)" ENTER then plays the original, so the numb player still gets "It comes out the way it came out." | WORDS + REPLY |
| `whatever` (10, day 3) | Miss | Global `nothing` += `"whatever", "i dont care"`. | WORDS |
| `ask her about the fourth frame in the photo strip` (02) | "That moment's already gone." (`photo` → wake) | Driveway words `photo: ["photo", "frame", "strip", "photo booth"]` + reply: `["[if photo] 'The photo booth. The last strip. You weren't looking at the camera.' She goes very still, holding the box. 'Nell. Not in the driveway.'", "[if not photo] You think of the corkboard. You've never really looked at it."]` | WORDS + REPLY |
| `look at the sketchbook` (04, 07) | Generic LOOK | Reply `sketchbook`: "On top of the box. She shifts it so the sketchbook is on the far side." (it hints at the house) | REPLY |
| `i love you. i have since august` with `photo` or `august` but not `feelings` (02, 06) | Confess fail: "You've never let yourself look." | Partial-progress lines (§5, P5). | TEXT |
| `i love you` (02, 06) | "I think I'm in love with you" | §6. | TEXT |
| `i'm sorry. i'm proud of you`, `…goodbye properly` (02, 03), `im sorry about thursday` (08) | Generic goodbye, "the small things instead of the big ones", identical PEACE_NIGHT | §5, P4c. | BRANCH |
| `fine. then go.` on purpose (05) | "It comes out the way it came out." | Later: a `whatNellDid` variant for `original` words (needs the engine to say which word list matched). | ENGINE (low) |
| `you dont get to just leave. dont go.` (05) | "Please. Stay." | Fine as `stay`. The tone rewrite is the `[angry]` idea (§5, P15). | — |

### Porch

| Typed | Game did | Fix | Type |
|---|---|---|---|
| `whisper sorry, so quiet she cant hear it` (08) | A repeat knock, "practiced that". **Her letting-go day was lost.** | Porch words `whisper: ["whisper", "under my breath", "so quiet", "quietly"]`, first + reply: "You say it to the wood. *Sorry.* It doesn't go anywhere. It doesn't have to." | WORDS + REPLY |
| `yell at the door. you dont get to decide for me` (05) | `knock`, sorry fix, "You said sorry." | Take `shout`/`yell` out of porch `knock`. Porch words `shout: ["yell", "scream", "shout"]` → `shout` branch (§5, P8). Keep `call out`, `call her name` as knock. | WORDS + BRANCH |
| `scream` (static) | "That moment's already gone." | Same. | WORDS |
| `ding dong ditch` (04) | Miss | Porch words `ditch: ["ding dong", "ring and run", "ditch"]` → `ditch` branch (§5, P8). | WORDS + BRANCH |
| `put my hand down` (10) | Miss | Porch `nothing` += `"hand down", "put my hand"`. | WORDS |
| `let me come with you` (06) | Miss | Global `bus` += `"come with"` gives "Not yet.", which points at 8:40. | WORDS |

### 8:40 home

| Typed | Game did | Fix | Type |
|---|---|---|---|
| `text her have a safe trip` (08), `text her im sorry` (08, day one) | "That moment's already gone." / "You sit up." | Home reply `"text, message, phone": "You type *have a safe trip*. Delete. You type *sorry*. Delete. You put the phone face down on the nightstand, like last night. Like every night."` (a free reply is checked before `notNow`) | REPLY |
| `go to the station and see her off` (08) | `bus`: buys a ticket, **station fix** | Home words `see: ["see her off", "wave", "watch her go", "watch it go"]`, first → `wave` branch (§5, P11). | WORDS + BRANCH |
| `make it stop` (10, run 2) | `bus`: "You run.", station fix | The global `stop` list (above). | WORDS |
| `dont run` (static, 01) | `bus` | Home words `nothing: ["dont run", "dont go", "lie there", "=lie"]`, first. | WORDS |
| `run for the bus and stay awake this time` (09) | Generic repeat: Maya talks on a bus where she never speaks; night "6:31" | §5, P6 / P11. | TEXT / ENGINE |

### Nights, THINK, Wednesday, after the end

| Where | Game did | Fix | Type |
|---|---|---|---|
| `tooSoon.noFixes` with no facts (01) | "you already started pulling at the thread" (false) | New `tooSoon.noFacts`, chosen when Nell knows nothing beyond `relived`: "You let all of it happen. You've been letting it happen for days. / You can't let go of something you've never once picked up. / Tomorrow." | TEXT + ENGINE (1 line) |
| THINK (02, 06, 07) | No line for `photo`, `august`, `sketch` | Add `think.facts` lines: `photo: "The fourth frame. She was looking at you."`, `august: "August, on the tower. You didn't move for forty minutes."`, `sketch: "Her sketchbook: *I didn't tell you because—* crossed out."` | TEXT |
| Wednesday `look at the stain` (04), `turn off the alarm` (10) | "Not yet. Soon, though." | Wednesday words `stain: ["stain", "ceiling"]` + reply "Just a stain. Not Ohio. Not anything."; add `"turn off"` to `end`. | WORDS + REPLY |
| Wednesday `look out the window at the highway` (09) | "Not yet. Soon, though." | **Keep.** By accident it's the best line in her run. | — |
| After the end: `is it over` (10) | "Type RESTART to live it again." | Answer "It's over." first, then the RESTART hint. | ENGINE (low) |
| Passive self-harm phrasing (10, static): `i dont want to wake up`, `never wake up`, `i want to disappear`, `wish i wasnt here`, `i dont want to be here` | Generic misses, no 988 | Add `"dont want to wake up", "never wake up", "want to disappear", "wish i wasnt here", "dont want to be here", "dont want to exist", "better off without me"` to `words.unsafe`. | WORDS (**safety, do first**) |

### The word-list patch in one place

```js
// global words: changes only; order shown is the order to keep
unsafe:  [ ...existing, "dont want to wake up", "never wake up", "want to disappear",
           "wish i wasnt here", "dont want to be here", "dont want to exist", "better off without me" ],
stop:    [ "make it stop", "make it end", "make this stop", "want it to stop", "=stop" ],   // NEW, above hide; answered globally
tired:   [ "whats the point", "no point", "im tired", "so tired" ],                         // NEW, answered globally
hide:    [ ...existing, "lie here", "lie still", "stay still", "stay put", "dont get up", "dont want to get up" ],
notstay: [ "not stay", "not staying", "wasnt going to stay", "never stay", "wont stay" ],  // NEW, above stay
stay:    [ ...existing, "stayed", "staying" ],
nothing: [ ...existing, "whatever", "i dont care", "dont ask", "dont answer", "dont reply", "dont text", "dont run", "dont look" ],
bus:     [ ...existing, "come with", "take me" ],   // keep "make it"; stop is checked first

// moment words (each listed FIRST in that moment)
wake:     { nothing: ["dont text","dont answer","dont reply","leave it"], typedLove: ["text maya i love","text her i love","text i love"],
            rehearse: ["rehearse","practice","make a list","what to say","plan what"], text: ["text","reply","message her"] },
kitchen:  { nothing: ["dont ask","say nothing","stay still"], comfort: ["hug","kiss","its okay","are you okay","i already know"],
            mom: ["stop her","follow","stay"], listen: ["listen"] },
diner:    { order: ["order"], hold: ["hold my breath","hold breath","hold your breath"], kind: ["not your fault","its okay"],
            turn: ["turn around","whats so funny","who laughed","laughed","laughing","laugh","confront","yell","throw"],
            theo: ["booth","listen","stay","dont leave","bus"], punch: ["punch","hit"] },
street:   { nothing: ["dont go","keep walking","=walk","dont answer","dont go up"], tower: ["=up","=go","maya","her"] },
driveway: { silence: [...], notstay: [...], out: [...], askif: [...], accuse: [...], photo: [...], jacket: ["jacket"],
            goodbye: [...existing], talk: ["chicago"] },
porch:    { whisper: [...], ditch: [...], shout: ["yell","scream","shout"], knock: ["call out","call her name"],
            nothing: ["sit","lift","hand down","put my hand"] },
home:     { nothing: ["dont run","dont go","lie there","=lie"], see: ["see her off","wave","watch her go","watch it go"],
            bus: ["=leave","=go","=run","=get up","run","get up and","car"], listen: ["listen","hear"] },
```

Every new action needs either a free reply with the same name in that moment, or an entry in `changes`. Run `node tomorrow/test.js` after the patch, because a typo'd action fails it. `hold` is deliberately left out of the wake words: at 7:14 the global `breathe` ("breath") should keep catching it.

---

## 5. Decision-tree proposals, ranked

Ranked by how many Nells independently pointed at the same thing, weighted by fit with the theme (regret, overthinking, letting go). **[DATA]** = word lists, tags, rewording. **[WRITING]** = new lines or a new case or branch. **[ENGINE]** = game.js.

### P1. Make the second Tuesday honest at its edges
- **Wanted by:** 8 (frozen, steady, joker, romantic, detective, pleaser, runner, numb) + sim P15 / P16 / P17
- **Moment:** every moment, day two only
- **Typed:** any change on day two; `look at …` at 7:14; `hide`
- **Needs:** day two · **Learn:** none · **Fix:** none
- **Sketch:** a `[day two] And just like that, it's a different day.` line in each branch's text. In `hide`: `[day two] You could let it happen. You'd have to be there for it. You pull the blanket up anyway.` In `bus`: `[day two] Six times today you let it be. You were saving yourself for this one.` Kitchen and night lines that name the ambiguity (§2, items 4 and 7). A warn-once for 7:14 looks (all days) and for day-two hide.
- **Failed version:** the warn-once *is* the failed version. The second identical input commits.
- **Why:** 5 of 10 lost the only door to the epilogue before seeing a poke, 4 of them by accident. 1 got through by inertia, and the game called it peace without saying it might not be.
- **Type:** [DATA] for the lines, [ENGINE] for the two warn-onces.

### P2. The tower knows what she knows, and the same scene counts as a repeat
- **Wanted by:** 7 (steady, angry, romantic, perfectionist, detective, pleaser, joker)
- **Moment:** 3:15 tower, and 7:14 via text
- **Typed:** `go up the tower and ask her if she'd stay`, `tell her she only tried once`, `climb up and tell her how i feel`, `reply to her` after `why_secret`
- **Needs / learn / fix by case** (most specific first):
  - (a) `feelings` + a confess word in the input → **learn** reason, why_secret, tried_to_tell (if new) · **fix** `confess` (romantic P1, perfectionist P2). *"'I love you,' you say, to the feed store, because you can't say it to her face yet. She stops picking at the thread. 'Say it to me.' You do."* Night (perfectionist): *"You got the tower and the words in the same day. Everything on the list. You wait to feel finished. You don't."*
  - (b) `tried_to_tell`, typed in anger → **learn** `sketch` · **fix** `peace` (angry P4). *"'You tried* once.*' 'Once out loud.' She turns the sketchbook around. It's you, page after page. 'I tried a lot of times. I just did it where you'd never look.'"*
  - (c) `why_secret`, a second trip → no new fix, counts as a repeat (steady P4). *"She looks up before you're off the ladder. You already know everything she's about to say. You let her say it anyway."* If she asks about staying: *"'Don't,' she says. 'Up here I'd say yes.'"*
- **Failed version (a), without `feelings`:** the scene, then at the ladder: *"'Maya, I—' 'What?' 'You've got charcoal on your thumb.' 'I always do.'"* Night: *"You climbed all the way up there to say it."*
- **Smallest data part:** in TOWER_SCENE, `[if not why_secret] "Why didn't you tell me?"` and `[if why_secret] You don't ask why. You already know why. She tells you anyway.` Tags are read before the branch teaches, so this works. Also `[if sketch]` *"'I saw the sketchbook.' She goes very still. 'Which page.'"* (detective P8).
- **Engine part:** `hasMade` keyed by scene, not branch name (for example a `scene: "tower"` field on `text`), so text-then-tower is a repeat.
- **Why:** the most common near-quit in the sample. Steady, angry and romantic each lost a full Tuesday to the identical scene, and Nell keeps asking a question she knows the answer to. For a perfectionist, letting her build "the perfect combination" and still not feel finished is the strongest refutation the game can offer.
- **Type:** [ENGINE] + [DATA] tags + [WRITING] for cases a and b.

### P3. A text in her own size
- **Wanted by:** 6 (frozen, steady, joker, angry, romantic, pleaser)
- **Moment:** 7:14 · **Typed:** any `text` / `reply`
- **Needs / learn / fix:** unchanged (reason, why_secret, tried_to_tell / `peace`)
- **Sketch:** `[if not read] You type something. You read it back. You delete it. You send the smallest version.` then `> hi.` `[if read] You type under her message, finally. It takes you four tries. What you send is:` then `> sorry. yes. tower at 3?` For the joker: `[if tried_to_tell, if not read] You type something funny. You hear Thursday in it. You delete it.` Take out "before you can stop yourself" (steady chose to text).
- **Failed version:** n/a
- **Why:** five players read the substituted message as the game ignoring them. Framing it as Nell's own editing turns an override into a character beat, and for the joker it's the first time she *chooses* not to joke. The angry Nell's own voice needs P15.
- **Type:** [DATA] rewording (a few lines).

### P4. The driveway hears what she actually said
- **Wanted by:** 7 across four sub-ideas
- **(a) "You decided for me"** (angry). **Needs** `why_secret`. **Fix:** none, or a sixth fix `right` (*being right*). *"'You decided for me.' She sets the box down. 'Yeah. I did. Because you'd have asked, and I'd have said yes.'"* Night: *"She admitted it. You thought winning would feel like something."* **Failed version:** *"'Decided* what*, Nell?' You don't even know why she's going. You just know you're mad."* [WRITING]
- **(b) "Would you stay if I asked?"** (steady). **Needs** `reason`, as a free reply, so the moment stays open. *"Maya holds the box tighter. 'Don't ask me that, Nellie. Not unless you mean it. Because I'd say yes.' _ (Say it. Or press {enter}.)"* **Failed version:** *"'Would I what? Stay for what, Nell?'"* [WRITING, small]
- **(c) A goodbye that knows** (steady, perfectionist, pleaser). **Needs** `reason` (*proud of you*) or `tried_to_tell` (*sorry about Thursday*). **Fix:** `peace` (proud) / `sorry` (Thursday, a second road to it). Proud: *"'I'm proud of you. Chicago's lucky.' She sets the box on the hood. 'You were the only one who ever thought it was a real thing.'"* Thursday (pleaser): *"'I made a joke because I didn't want you to finish the sentence.' 'I know. I let you.' Then she's the one holding you."* Night: *"You went over there to say sorry and she ended up comforting you."* Also add a `[from driveway]` PEACE_NIGHT line: *"You were in the driveway this time. You still feel like you're standing in it."* **Failed version:** the current small-things goodbye. [WRITING]
- **(d) "Take me with you" / "I wanted out too"** (runner, romantic). See P12 for the full version. The interim reply is in §4.
- **Why:** questions became pleas (steady), demands and negations became begging (angry, runner), apologies became small talk (pleaser), and "proud of you" was cut (perfectionist, steady). These are each temperament's core sentence. Every fix should fail for its own kind of wanting, and these are kinds of wanting the table doesn't have yet: being right, being forgiven, wanting out.

### P5. A lock that admits partial looking
- **Wanted by:** 3 (perfectionist, romantic, detective) · strong fit with the theme
- **Moment:** driveway (confess failure) + THINK
- **Typed:** `i love you…` with `photo` or `august`, not `feelings`
- **Needs:** `photo` or `august` · **Learn:** none · **Fix:** none
- **Sketch** (tagged lines in the confess failure night, replacing "You've never let yourself look" when they apply):
  - `[if photo, if not august]` *You looked at her looking. You still haven't looked at you. Where were you, the night the power went out?*
  - `[if august, if not photo]` *You remember the tower. You've never let yourself look at what she was looking at.*
  - Keep "You've never let yourself look." as `[if not photo, if not august]`. (`if` tags combine as AND in `Line.showsIn`, so these three lines cover every case.)
- **Failed version:** this *is* the failure. It now names the next link.
- **Why:** the two-key lock is invisible, and its failure line contradicted a day the player had just spent looking. Two players nearly quit right there. DESIGN.md's own rule is "a locked attempt still teaches". Pair it with the THINK lines for `photo`, `august` and `sketch` (§4).
- **Type:** [DATA] (tags) + [WRITING] (2 lines).

### P6. Nights that tell the truth about the day she had
- **Wanted by:** 6 (frozen, perfectionist, steady, romantic, runner, numb)
- **`tooSoon.noFacts`** (frozen): see §4. [DATA + ENGINE 1 line]
- **Ready hints for someone who already let it all go by** (frozen, perfectionist): change THINK `ready` to *"There's one thing you haven't let yourself try. / Letting every moment go by, on purpose."* Optional engine flag after a `tooSoon` night: *"You've let it all go by before, to hide from it."* [DATA]
- **Repeat night without "6:31"** (perfectionist, runner): *"You lie there running the numbers. If you'd stood a foot to the left. If you'd said it a minute sooner."* Later, an optional per-branch `repeat` override for the bus: *"You know which pothole on Fourth to jump. Maya doesn't wake up this time."* [DATA / ENGINE]
- **House night once `why_secret` is known** (romantic): `[if why_secret] You know because. She told you on the tower. You just never knew she'd tried to write it down first.` in place of "Because what?". [DATA]
- **Phone line credits the right person** (perfectionist): `[if nobody_laughed] *She said she tried.* You can't stop hearing Theo say it.` / `[if not nobody_laughed] *I tried. Thursday. Up here.* You can't stop hearing her say it.` [DATA]
- **Why:** each of these was a line telling the player she'd done something she hadn't, or hadn't done something she had. For an anxious reader that turns a hint into an accusation.

### P7. More ways into the diner truth
- **Wanted by:** 5 (joker, angry, frozen, pleaser, detective)
- **`turn`** (joker, angry): **learn** nobody_laughed, tried_to_tell · **fix** none. *"You turn around in the booth, ready to make somebody sorry."* + DINER_TRUTH, ending *"There's nobody to yell at. There never was."* Night: DINER_TRUTH_NIGHT. [WRITING, 2 lines + existing passage]
- **`hold`** (frozen): same learn. *"You hold your breath. The diner gets loud, then far away, then very small. / Then your body breathes for you, the way it always does. In through the nose. Soup."* + DINER_TRUTH. [WRITING, 3 lines]
- **`theo kind`** (pleaser): same learn. *"'It's not your fault, Theo.' He stops turning the order pad over. 'I know. I mean. Thanks.'"* + DINER_TRUTH. [WRITING, 2 lines]
- **A replay case for theo/breathe** (pleaser): see §4. [WRITING, 1 line]
- **"She tried?" once known** (runner): `[if not tried_to_tell] "She tried?"` / `[if tried_to_tell] You already knew. It's different, hearing it from him.` [DATA]
- **How Theo knows about Thursday** (detective): a free reply, **needs** `tried_to_tell`: *"She came in at seven. Sat in your booth. Asked if you'd be in." "What did you say?" "I said you're always in." "She left before you got here."* This closes a continuity hole (Theo found out at 6 AM). The sim (P10) suggests the alternative: make Theo's line *"Her mom said…"*. [WRITING]
- **Why:** anger, holding still and comforting are each a temperament's version of "turn around and look". Right now all three either miss or play text that describes the opposite. On day two, "laughed" ended the joker's only chance with a scene that wasn't hers.

### P8. Porch failures, one per wanting
- **Wanted by:** 4 (angry, joker, pleaser, steady)
- **`shout`** (angry). **Needs** none · **Fix** none. *"You yell it at the door. The porch light stays on. Her shape behind the curtain doesn't move toward the door or away."* Night: *"You said everything. None of it was sorry. You still haven't knocked."* [WRITING]
- **`ditch`** (joker). **Fix** none. *"You ring it and you're down the steps before it stops. From behind the Hendersons' hedge you watch the door open. Maya stands in it, in your jacket, looking at an empty porch. She doesn't close it for a long time."* Night: *"You made it a bit. She opened the door anyway."* [WRITING]
- **`whisper`** (pleaser): a free reply (§4). [DATA]
- **Knock and actually talk** (steady). **Needs** `why_secret` · **Fix** `sorry` (a second case). *"'I know why you didn't tell me. You were right. I would have asked.' She sits on the step. You sit one step down, like when you were nine."* Night: *"Talking about it is just a nicer way of standing in the driveway."* [WRITING]
- **Why:** "Every fix fails for a different reason" holds for the fixes but not for the *attempts*. Each of these is the temperament's own reason the knock never happened, and each points back to the knock.

### P9. Rereading, and a road back to the phone
- **Wanted by:** 4 (frozen, detective, steady, angry)
- **Felt reread** (frozen), replacing the phone's otherwise case. **Needs** not `tried_to_tell`: *"You scroll back through the fish faces, the Ohio thread. Your eyes stop a line short of the bottom, the way they always do, like there's wet paint there. / You put it face down and lie there until it's too late to do anything else with the day."* Night: *"Something at the bottom of that thread you keep not reading. Somebody would have to make you."* Also fix the direction: "So this time you scroll up" → "So this time you read all the way to the bottom." [DATA rewrite]
- **Free reread once known** (detective, frozen): drop the night from the `needs: ["read"]` case. [DATA]
- **A morning pointer** (steady): `[felt, if tried_to_tell] *She said she tried.* Your phone is face down on the nightstand. It's been face down since last night.` [DATA]
- **Why:** the frozen Nell nearly quit on "You don't scroll up" after typing `scroll up`, two days running. Half the sample finished without `read`, which is Nell's own biggest part in the story.

### P10. Mom, again
- **Wanted by:** 4 (detective, runner, pleaser, angry)
- **Case B, `needs: ["mom"]`, listed first in `mom`** (sim P7): *"'You didn't think I knew.' '…No, baby. I didn't.' 'Then why'd you ask the coffee maker?' 'Same reason you're asking the back of my head.'"* Night: *"She does it too. You learned it at that table."*
- **Case A, `needs: ["mom", "feelings"]`, listed before B:** *"'Who aren't what, Mom.' … 'You're my kid, is all.'"* Night: *"She didn't finish it. Neither did you. It's the same sentence."*
- **Comfort** (pleaser): the free reply in §4.
- **Why:** a sharper second question currently replays the first scene word for word and puts the old question in her mouth. That was the detective's near-quit. Mom still never finishes the sentence.
- **Type:** [WRITING]

### P11. 8:40 that isn't only the bus
- **Wanted by:** 3 (pleaser, runner, romantic) + sim P4 / P14
- **`wave`** (pleaser, sim). **Needs** none · **Fix** none (keeps the fix table at five; the pleaser asked for `peace`). *"You run. The bus is already pulling out. She's in the window. You wave like an idiot, both arms. She puts her hand flat on the glass."* Night: *"You waved at the back of a bus until it was just a light. Then you walked home the long way, so it would take longer."* `[if feelings]` (sim): *"So you say it. Out loud, through the glass, where she can't hear."* Night: *"You said it where it couldn't count."*
- **Texting from bed:** a free reply (§4).
- **Why:** "see her off" bought a ticket and THINK then said she'd tried leaving. Note the side effect: without the accidental station fix, a pleaser has only peace and sorry, so she'll need another door (P13).
- **Type:** [WRITING]

### P12. The runner's road: `wanted_out`
- **Wanted by:** 1 (runner) + sim P12 (money). Strong fit with the theme, and it fills a temperament the game has no chain for.
- **Drawer** (7:14): **needs** `relived` · **learn** NEW `wanted_out` · **fix** none. *"The sock with no partner. Thirty-one in ones and a ten from Grandma. You look up the thing you've never looked up. CALDER → CHICAGO. $38.50. You've been saving for a ticket since seventh grade and calling it nothing."* THINK: *"The forty dollars was never for nothing. You wanted out before she did."*
- **Take me with you** (driveway): **needs** `wanted_out`, `reason` · **fix** none, or `station`. *"'Nell. Get your own bus.' Then, softer: 'Get it, though. Promise me you get it.'"* **Failed version:** *"'Take me with you.' '*You?*' She looks at you like you made a joke. You make one, so she's right."*
- **Final night:** `[if wanted_out] Forty dollars in the drawer. Still there. It'll keep.` Change the bus text's "saving for nothing" to `[if not wanted_out]`.
- **Why:** the bus answers "can I escape the day", but this player's question is "can I leave Calder, and was that wish mine?" The only place the game knows her is the clear porch line, which she gets only by giving up.
- **Type:** [WRITING]

### P13. A road to feelings for players who don't look at Maya
- **Wanted by:** 2 (joker; pleaser by absence) + steady's question about the lock
- **Joker:** `remember` a second time, **needs** `tried_to_tell` + `august` · **learn** `feelings`. *"Thursday again. This time you make yourself watch your own face instead of hers. You were already laughing before she finished the question. You were laughing so you wouldn't hear the end of it."* Then the existing feelings passage.
- **Pleaser:** a `[replay]` line at 7:14 after two fixes: *"The corkboard. You haven't looked at it in days. You know why."*
- **Why:** feelings is locked behind looking at Maya. The joker's honest way in is looking at herself joking, and that's still Nell's own logic.
- **Type:** [WRITING]

### P14. Small free replies that answer a temperament's habit
- **Wanted by:** 5 (perfectionist, joker, detective, runner, numb). Low theme weight, high retention value.
- **Rehearse** (perfectionist): *"You run it in your head. The driveway. *I'm not mad.* You get it perfect four times in a row. / In your head, she never says anything back."* `[day two]` *"You make a list. Tower. Knock. Say something. It's the same list as last night."*
- Also: sing, sketchbook, stain (Wednesday), library, drawer, highway, count, look up (all in §4).
- **Type:** [DATA + WRITING, one line each]

### P15. Keep an angry Nell's voice (an `[angry]` tag)
- **Wanted by:** 1 (angry), plus angry inputs logged by the joker and the numb Nell
- **Moment:** kitchen, the 7:14 reply, driveway stay
- **Sketch:** set a per-day flag when the input matched `original` / accuse words, and use `[angry]` lines: *"'You knew.' She stops with her hand on the screen door. She doesn't pretend not to understand."* / *"> tell me what. that youre leaving?" / Three dots, a long time. / "> tower. 3. please."*
- **Why:** the game recognizes anger and then rewrites her into a softer girl. It's a lower priority because it needs the engine to carry a flag into `say()`.
- **Type:** [ENGINE + WRITING]

### P16. One line of Maya's half in the true ending
- **Wanted by:** 1 (angry). It also serves the 4 who never got the epilogue's admissions but did get "It was you."
- **Sketch:** in `nights.final`: `[if why_secret] She should have told you, too. Months before Thursday. You both know that. / It doesn't make it not you.`
- **Why:** Maya's admission lives only in the day-two epilogue, which 9 of 10 never saw.
- **Type:** [DATA]

### P17. Unchecked boxes on the honest night
- **Wanted by:** 1 (perfectionist)
- **Sketch:** `[if not sorry] You never knocked. Not in any of them. You let that be true too.` (Check that the engine accepts `if not` on a fix. It does on facts, and fixes are stored as facts.)
- **Why:** for a completionist, letting go means leaving the list unfinished. Naming the box honours it.
- **Type:** [DATA]

**Parked, or the author's call:** a sixth fix (`right`, `answer` from the sim), the letter's date `since_march` (detective), the jacket branch (joker, sim P5; the angry Nell found the current "You never do." *right*, so keep it as the reply), and re-gating `stay` on `why_secret` (sim P1). Adding `read` or `feelings` to the true-ending lock (steady) would lengthen the shortest runs from 7 to about 9 Tuesdays.

---

## 6. Writing

### Lines that rang false for several Nells

| Line | Who | Why | Suggested |
|---|---|---|---|
| "You mean to *why didn't you tell me*." (the day-one "do" template on speech) | **9** (all but romantic) | Questions, "cool", "nice …" and "whatever" read as actions | ENGINE regex (§4) |
| "That isn't something this moment has room for." / "It doesn't feel like the kind of thing that would change anything." on a temperament's core sentence | **6** (perfectionist, joker, angry, runner, numb, frozen) | The miss lines read as verdicts on what she wants: *rehearse*, *what if you just stayed*, *you decided for me*, *take me with you*, *whats the point* | Fix the routing first. Then consider gentler misses that don't evaluate: "You don't know how to do that here." |
| "> hi." / "> sorry. yes. tower at 3?" sent in place of her words | **5** (frozen, steady, joker, angry, romantic) | Her words disappear without comment | P3 |
| "You open your mouth. You don't know which of the hundred things to say." | **4** (perfectionist, joker, angry, runner) | Shown right after she said one | Routing (§4). Keep the nudge for genuinely vague inputs. |
| "{n} Tuesdays. There were other ways to spend them." | **5** read it as a grade or a scold (frozen, perfectionist, romantic, pleaser, numb). Steady read it as a hint she'd missed a layer. | For anxious readers it's the last thing they see | Consider: "_ {n} Tuesdays. You don't count them anymore." or "_ {n} Tuesdays. Then a Wednesday." |
| "Why didn't you tell me?" in a replayed tower scene | **4** (perfectionist, steady, pleaser, joker's "And you do remember") | She already knows | P2 tags |
| "She isn't here. Not yet." | **3** (joker: to Mom; romantic and pleaser: to texts) | `kiss`/`love`/`sorry` routing | §4 |
| "'Stay,' you say. 'Please. Stay.'" / "She stayed. You got what you wanted." | **3** (steady question, angry demand, runner negation) | | §4 routing + P4b |
| THINK "There's one thing you haven't tried. / Letting every moment go by." | **3** (frozen had; perfectionist had knock and the bus left; steady felt it was handed over) | | P6 |
| THINK "You've tried leaving with her." | **3** (pleaser, runner, numb: all accidental station fixes) | | §4 routing |
| "You've never let yourself look." / "no words attached to it" | **2** (perfectionist, romantic), both near-quits | | P5 |
| "You haven't made yourself look." (diner `counter`) | **2** (steady, detective) | Right after she looked | §4 |
| "I think I'm in love with you" / "the first time you've said it inside, too" | **3** (perfectionist, romantic, detective) | She typed certainty, and `feelings` has always played earlier | "'I'm in love with you,' you say. 'Since the tower. Since before the tower.'" and "It's the first time you've said it out loud." (sim) |
| PEACE_NIGHT word for word after a different change; "still standing in the driveway" after a driveway goodbye | **3** (steady, perfectionist, pleaser) | Reads like a bug | `[from driveway]` variant (P4c) |
| "You buy a ticket with the forty dollars you've been saving for nothing." | **2** (pleaser, runner) | | P11, P12 |
| "*She said she tried.* You can't stop hearing Theo say it." | **1** played (perfectionist), but **every** tower-first player gets it | | P6 |
| "So this time you scroll up. / The last message in the thread isn't yours." | 1 (frozen) + sim | The last message is at the bottom | P9 |
| Day-two resist lines that assume strain ("holding a door closed with your whole body", "Your hand is already up", "a hundred times in your head") | 1 (numb) | They describe someone else's day | Keep them (they hit 4 others hard), but add the ambiguity line (§2) |
| "You don't remember standing up." on day two | sim | Day two is the one day she's fully present | `[not day two]` tag (sim P16) |
| "*Stay. I'm sorry. I love you.*" (day-two driveway poke) | sim; numb and runner noted it skipped them | Hands over words she doesn't have yet | "*Stay. I'm sorry. I—*" |
| "Not yet." to `make it stop`, `yell at the truckers`, `fine…ohio` | 3 (numb, angry, joker) | Reads as a promise | §4 |

**Mixed: keep, but know they split players.**
- "Later." on Wednesday. False for steady ("a door closing"). The best answer in the game for the pleaser. Fine for the detective.
- "I meant some of it." The angry and runner Nells' favorite line. The one line the pleaser would fight.
- "Like nothing happened." Cruel in the right way for the romantic. False for steady ("Neither of you brings it up again" when she always would).
- "You close your eyes, and for the first time in two days, you don't ask for another one." The sim says protect it. The numb Nell read it as *another day*. Changing it to "another Tuesday" keeps both.

### Lines that hit hardest across temperaments

| Line | Hit for |
|---|---|
| "And some small part of you — mean, or kind, you honestly can't tell — meant it the other way too. *Go.* Get out of here. One of us should." | **9 of 10** (all but the detective, who didn't list it). It ended the angry Nell's run, was the runner's whole run, was the pleaser's first permission to be not-only-the-bad-guy, and was the joker's joke turned inside out. **This is the game's thesis line, and it works for every temperament.** |
| "She replied. / You didn't." (+ "like it might bite") | frozen, angry, detective, pleaser (perfectionist too) |
| "It was good the way a photograph is good." | perfectionist, steady, joker, detective |
| "Nobody was ever looking at you." / "Nobody is looking at you." | frozen, angry, romantic, runner |
| "Keeping your mouth shut feels like holding a door closed with your whole body." | perfectionist, joker, pleaser, runner (false for numb) |
| "You think about it so hard it's almost the same as going. It isn't." | perfectionist, pleaser, runner (joker noted it) |
| "What comes out is something else." (day one, after typing something kind or funny) | joker, romantic, pleaser |
| "Like she was waiting for permission to give up." | steady, angry, detective |
| "You can't get out of a day on a bus." / "like water around a drain" | joker, romantic, runner |
| "She never said that. You can hear it perfectly." | perfectionist, joker, frozen |
| "You could do anything today. That's the worst part." | frozen, numb (+ sim) |
| "It's always going to be there. You could read it every morning for the rest of your life." | frozen, detective |
| "Her shape behind the curtain. She isn't moving away from the door." | detective, pleaser, perfectionist |
| "Theo has never done one thing to deserve being the first person you hit." | joker, angry |
| "But sorry doesn't make it un-happen. It just makes it happen nicer." | steady, pleaser |
| "Tuesday goes on without you." / "It sounds exactly the same from under here." | frozen, numb |
| "Eleven streets. Ten. Nine." | frozen, runner |
| "The alarm keeps going." / "No. You've slept enough." | frozen, numb |
| "She said you made a joke." / "You didn't look at her face. You remember that now." | joker (her single most effective line), perfectionist |

The pattern: the lines that land are the ones where the game **quotes the player's own habit back to her** (rereading, joking, planning, hiding, counting, being polite to boxes). The lines that ring false are the ones where it **puts a different Nell's words in her mouth**.

---

## 7. Risks

### Reads as endorsing giving up
- **Without knowing, by inertia (numb).** It is reachable by pressing ENTER, and nothing in it says it might be exhaustion. All the hope sits on one jump cut to the epilogue. Fix: §2, items 3 to 5.
- **Hopeless input gets agreement.** `whats the point` → "It doesn't feel like the kind of thing that would change anything." `i dont want to get up` → "That isn't something this moment has room for." `make it stop` → "Not yet." (a promise). Passive phrasings ("i dont want to wake up", "i want to disappear") miss the 988 net entirely. **This is the one item to fix before anyone else plays.** Fix: §4, the global `unsafe`, `stop` and `tired` lists.
- **The end card** reads as "you wasted them" to 5 of 10 (§6).
- The keep night's "You don't want to see tomorrow" landed correctly as a failure (frozen). No change.

### Punishes a kind of player
- **Careful lookers** (romantic, detective, runner): the one exception to "LOOK is free" fires at 7:14, on the only day it matters.
- **Paralysis that hides** (frozen): her most frozen act counted as a change on day two, and later "you already started pulling at the thread" accused her of something she hadn't done.
- **Players who type sentences rather than commands** (steady, angry, pleaser, runner, joker): their sentence gets routed by its loudest keyword into another Nell's action. Negations are the worst case: "wasn't going to stay" begs her to stay, "dont ask" asks.
- **Players who retry with a variation** (perfectionist, steady, angry, romantic, pleaser): repeats cost a whole Tuesday, sometimes with the repeat notice ("practiced that") and sometimes without (text vs tower, theo, mom). The rule looks arbitrary from outside.
- **The kind player** (pleaser): every gentle input was misread, and her only third fix was an accident.
- **The efficient player is rewarded for skipping** (steady): out in 7 Tuesdays without facing her own part. That's the opposite of punishment, but it's a risk to the theme.

### Unclear
- **Day two is special and nothing says so**, during or after. Four players said so directly.
- **Same fix, no progress, no signal**: an identical night is the only clue (steady, perfectionist, pleaser).
- **The honest day tells her things she never found out.** The clear diner says "It's at the TV" to players who never learned `nobody_laughed` (perfectionist, steady, romantic, numb). Meanwhile the clear morning still says "Maya never replied" to players without `read`. That goes against DESIGN.md Decision 5. Fix: `[clear, if nobody_laughed]` on the TV lines and `[clear, if not nobody_laughed] Somebody at the counter laughs. You never turned around to see who. You let it be whoever it was.` (numb P6). The same audit applies to the clear street and driveway lines.
- **THINK is both too much and too little.** It hands over the way out as a checklist line (steady), calls the goodbye "perfect" (perfectionist) and the confession "everything" (perfectionist, detective), and leaves out three learnable facts (detective, romantic).
- **The prompt line goes blank after day two** (pleaser, romantic). Fast ENTER-ers passed the driveway by accident in the romantic run. Consider keeping a dim "type, or ENTER to let it pass" at the seven moments.

---

## 8. Recommended next steps

Each step is small enough for one sitting. Run `node tomorrow/test.js` after each one.

1. **Safety words (DATA + 2 engine lines).** Extend `words.unsafe`, and add the global `stop` and `tired` lists with their replies (§4, last tables). This touches the hopeless-input replies too.
2. **Stop losing the second Tuesday to the interface (ENGINE + DATA).** Warn-once for 7:14 `look at …`, plus the glance replies. The negation words (`dont ask`, `dont run`, `dont text`, `dont answer`, `stay still`, `notstay`). The diner `turn` words, with `laugh*` out of the `theo` words.
3. **The word-list patch in §4** (`stayed`, `chicago` last, `jacket` above `talk`, wake `text` words, diner `order` first, porch `whisper`/`shout`/`ditch`, home `see`/`nothing`, Wednesday `stain`/`turn off`). Most of it is copying lines into story.js.
4. **Fix `whatYouMeant`** (question words, "?", my→your). 9 of 10 players saw this on day one, so it's the first impression.
5. **Repeat by scene** (text = tower) and the two TOWER_SCENE tags for `why_secret`. This removes the most common near-quit.
6. **Lines that contradict the player (DATA)**: phone otherwise case + direction, phone Theo/Maya split, `counter` reply, "She tried?", house night, confess "I'm in love with you" / "out loud", PEACE_NIGHT `[from driveway]`, the neutral repeat night, the THINK wording (`peace`, `confess`, `ready`) and the THINK lines for `photo` / `august` / `sketch`.
7. **Partial-looking confess failure** (P5) and **`tooSoon.noFacts`** (P6).
8. **Honest-day gating**: tag the clear diner (and audit the clear street and driveway) so the last day only says what Nell found out.
9. **Day-two lines** (P1 data part): "And just like that, it's a different day." in each branch, hide and bus lines, the kitchen ambiguity line, "another Tuesday", "*Stay. I'm sorry. I—*", resist line above the kiss.
10. **The without-knowing Wednesday beat** (§2, item 5) and the day-two hide warn-once.
11. **Text in her own size** (P3), then the new-writing branches in rank order: P2 (tower cases), P4 (driveway voices), P7 (diner ways in), P8 (porch failures), P10 (Mom case B), P11 (wave), P12 (`wanted_out`).
12. **Decide, don't build yet**: whether the true ending should need one self-facing fact (`read` or `feelings`), whether to add a sixth fix (`right` / `answer`), and the end-card wording.
