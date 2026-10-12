# Endings atlas: the imagined run

_A synthesis of five imagined playthroughs of **Tomorrow**: the dreamer, the schemer, the brave one, the meta one and the mourner (`docs/playtests/imagined/01–05`). In each one, a different kind of Nell tried whatever a real seventeen-year-old would try, whether or not the game accepts it. This file merges what they found into one map: every ending they proposed, every input the game should answer, the five endings that best serve the theme, what to reject, and how it all fits beside the two ways out that already exist._

_It also connects to `docs/playtests/nell-simulation.md`. Its proposals are cited as **sim P1**, **sim P2**, and so on. `docs/playtests/nell-variants-synthesis.md` doesn't exist yet. The ten variant runs in `docs/playtests/variants/` were played on the real game and aren't summarized here._

**How to read this.**
- Game prose is in blockquotes, in the game's voice (second person, present tense). Chains are Nell, in first person, one "but…" per line, the way DESIGN.md builds them.
- **Nells** says who proposed an idea: **D** dreamer, **S** schemer, **B** brave, **M** meta, **Mo** mourner, **sim** the earlier simulation. An idea that several Nells reached on their own is marked ★. Convergence is the best evidence of what real players will try.
- New fact names are in `code`. Anything that would become canon is marked _(proposed canon)_.
- "Data only" means only `story.js` changes. "Engine" means `game.js` changes too.
- I re-checked four of the misfires on the real game with the play harness (sessions in `scratchpad/harness/sessions/atlas/`). All four reproduce: *i'm gay* gets the default miss. *Watch the bus leave* puts her on the bus (station fix). *Dont sleep* at 8:40 on the second Tuesday finishes the game with the without-knowing epilogue. *Don't close my eyes* typed at night spends the whole next Tuesday under the blanket.

---

## 0. What all five found

Every Nell, whatever kind of imagination she had, ran into the same wall from a different side. **The loop keeps what you learned and erases what you did.** The jacket is back on Maya at 7:14. The strip is whole. The forty dollars is in the drawer. The ink on her palm is gone. What survives is what she knows.

That makes almost every "clever" move a form of holding on. Staying awake refuses the ending. Walking out of town skips the day. Saying people's lines first controls it. Telling someone about the loop asks them to carry it. Writing a letter lets paper be brave for her. So the game should **answer each attempt with a small, true scene**, never with "that doesn't work" (meta).

They also found three kinds of scene the game doesn't have yet:

1. **Mirror scenes.** Nell finds Maya's habit in herself: Maya's List, Read 6:41/7:03/8:49, Secondhand, The Ticket in Her Pocket, Everybody Knew (Again), I Said It Because—. This is how an overthinker lets go of blame: *I'd have done the same thing.*
2. **Learning by letting it happen.** Nell changes nothing and still finds the truth: The Porch Light, Tell Nell—, Watching It Go. This lets her practice letting go *inside* the learning, not only at the end.
3. **Tenderness toward her past self.** The Window Seat. Every existing fix is aimed at Maya. Nothing yet is aimed at the girl in the driveway.

**What the Nells converged on** (★ = reached independently by two or more):

| Idea | Nells | Where it lands |
|---|---|---|
| Watch the bus go, all the way, without getting on | D, Mo, M, sim P14 | §3 #1 |
| The jacket, asked back or given away | D, B, Mo, S, sim P5 | A3, A4 |
| "Go," said again and meant the other way | S, Mo, B, D, M | A2 |
| Finishing Mom's sentence | D, S, B, sim P7 | §3 #4 |
| Texting her and watching it say Read | D, S, Mo | B5 |
| The porch: wait, sit, watch who turns off the light | D, Mo, B, S, M | B7 |
| Telling Maya about the loop | D, M | §3 #3 |
| Writing it instead of saying it (sketchbook, letter, note) | D, S, Mo, M | A5 |
| Looking at her face while the driveway is still felt | D, M, sim P2 | B4 |
| Staying awake at 11:52 | D, M, S, sim 6.29 | B3, §3 #1 |
| Telling Theo about the loop | D, S, M | B13 |
| Walking out of Calder | D, M | A15 |
| Every night stamped 11:52 is the minute she put the phone face down | D, M, sim 6.29 | B3 |

---

## 1. The map

Every distinct ending, with duplicates merged. Each entry has what happens, the backwards chain, the locks, the moments, why it isn't enough (or why it works), and who proposed it.

### A. New fixes that fail

The existing five fixes are five kinds of wanting: avoiding, holding on, being seen, repairing, escaping. Each new one below is named by its wanting. Most of them can count as one of the existing five. Section 5 argues for adding at most **one** new row to the fix table.

**A1. That Part's Mine (permission).** ★ D (*The Loop, Out Loud*), M (*Nobody Can Let Go for You*). See §3 #3.
- **What happens.** At the driveway Nell tells Maya, straight, that she has lived today many times. Maya believes her. *"Do I go? In all of them?" "Every time." "Then that part's mine, Nellie. That's not my loop. That's yours. You can stop."*
- **Chain.** *If I told her what's happening, she'd help me. / But she'd think it was a bit. / Because when she tried to tell me something real, I made it a bit. / So I'd have to say it straight. / And then she tells me it's okay? / It's only okay until 11:52.*
- **Locks.** `tried_to_tell`. Without it, it comes out as a joke (*"Like, spiritually. It's Calder."*), which is Thursday again.
- **Moments.** Driveway.
- **Why it isn't enough.** She can forgive Nell for a day that won't happen. She can't let go of it for her.

**A2. Go (the blessing).** ★ S (*Go*), Mo (*Go.*), B (*The Other Way to Say Go*, at the bus), D and M (a porch free reply on the clear day).
- **What happens.** The same word, meant kindly. *"Go. Get out of here. One of us should." "Are you giving me permission?" … "I wasn't waiting for permission, Nell. I was waiting for you to ask what I wanted."* In B's version Nell runs to the bus without the forty dollars and says it through the glass. Maya's hand stays on the window past the feed store.
- **Chain.** *It wasn't the word. Go was right. / I should have said it the other way. / But she'd only hear the word. / Unless I knew that if I'd asked, she'd have stayed. / Then go is the opposite of asking. / …Since when is she mine to let.*
- **Locks.** `why_secret`. Without it she flinches. She's heard that one.
- **Moments.** Driveway (S, Mo), 8:40 (B), porch free reply on the clear day (D, M).
- **Why it isn't enough.** It's control dressed as generosity. She was going anyway. *"You just wanted to be the one who said she could."* (Mo.) B's night adds the best line: *"It doesn't erase the first one. It's painted on top of it, like your letters on the tower."*
- **Note.** This is the ending the author cut (Decision 3: saying "Fine. Then go." on purpose), given a home as a fix that fails for the reason it was cut. It's the sibling of A1: one asks for permission, the other gives it.

**A3. The Jacket, Taken Back.** ★ D (*The Jacket*), B (*Your Jacket*), Mo (*March*), S (a driveway action).
- **What happens.** The first thing she has ever asked Maya for. Maya takes it off like a bandage, or folds it, *"which nobody does to a jean jacket"* (D). She's in a T-shirt in September. *"Anything else you want back?"* (Mo).
- **Chain.** *I never asked for it back. / I never ask for anything back. If you ask, someone can say no. / If I'd asked, at least I'd have something. / But she'd be cold on the bus. / It smells like her now. That's the point.*
- **Locks.** None. Like knocking, it's the obvious thing she never did.
- **Moments.** Driveway. The 7:14 hook reply changes afterward (*empty again*).
- **Why it isn't enough.** *"You took back the thing she was keeping"* (D). *"You got your jacket back. You didn't get March back"* (Mo). B's last line is the first flicker of letting go: *"Tomorrow it'll be empty again, and the jacket will be on her, on a bus. Good, you think, and you don't know where that came from."*
- **Counts as.** `keep`, the small version: holding on, made small enough to carry.

**A4. Keep It (the gift).** ★ Mo (*Keep It*), sim P5, B (a free reply), S (inside *Collateral*).
- **What happens.** *"Keep it. The jacket." She holds the cuffs in her fists. "I was going to give it back. At the bus." "I know. Keep it."*
- **Chain.** *I never asked for my jacket back. / So I should have given it to her. On purpose. / But she already had it. / Unless I said it out loud. / But it only means something if I know why she wore it. / She drew me for a year.*
- **Locks.** `sketch`. Without it, it lands *"like you told her to keep a pen."*
- **Why it isn't enough.** It turns a loss into a gift after the fact. That's still deciding what the leaving means. sim P5 reads it the other way, as a bridge to the way out: *"It was already hers. You just said it out loud."* Both readings are true. Count it as `peace`, or as no fix.

**A5. Writing It Instead of Saying It.** ★ D (*The Sketchbook Page*), S (*Read 8:53 PM*), Mo (*The Letter*, plus a Theo variant), M (*I Said It Because—*, under B8).
- **What happens.** Three versions of one move:
  - **Sketchbook** (D, S): under Maya's crossed-out *Nell — I didn't tell you because*, Nell writes her answer. In S's version Maya reads it on the bus and texts at 8:53: *> i saw / > me too. all of it. since the tower*. Nell reads it and turns the phone face down. _Read 8:53 PM._
  - **Letter** (Mo): written at 7:14, slipped into BOOKS (HEAVY) (SORRY) at 6:30. Its paragraphs grow with what she knows. With `feelings` she crosses out *I never asked for my jacket back because* so hard the pen goes through, the same sentence Maya crossed out. Then she says *Fine. Then go.* anyway.
  - **Theo** (Mo): *> gave it to her. she put it in her pocket. didnt open it.*
- **Chain.** *I should have written her a letter. She'd read it on the bus, when it couldn't start a fight. / But I didn't know what to write. / I'd know if I knew what happened. / But if I handed it to her, I'd say something. / The box. / But then I'd never know if she read it.*
- **Locks.** `sketch` for the sketchbook. For the letter, nothing to write it, but it only counts once it holds something true (`tried_to_tell` or more).
- **Why it isn't enough.** It's the avoidance Maya regrets in the epilogue (*"I kept putting it in my sketchbook instead of saying it to your face"*). S's version is the sharpest: *"It isn't the day that keeps happening. It's you."* The fix worked on Maya and failed on Nell.
- **Counts as.** `confess`.

**A6. Everything I Know (being right).** S.
- **What happens.** At the driveway Nell lays out every fact from every Tuesday, in order. Maya goes still. *"I never told anybody that last part. How do you know that?"* … *"You didn't ask me one thing. You just told me who I am."*
- **Chain.** *She said give me one reason. I didn't have one. / I have all of them now. / If I'd known all of it at 6:30, I'd have won. / But she doesn't know I know. / So I'll tell her. All of it. In order.*
- **Locks.** It grows with `reason`, `tried_to_tell`, `read`, `why_secret`, `sketch`. With none of them: *"You know one thing. She's leaving. She knows that too."*
- **Why it isn't enough.** Knowledge from fourteen Tuesdays is evidence, and Maya isn't on trial. Overthinking builds a case file, not a conversation.
- **Also.** Its words catch *i read your text* and *i know about the sketchbook*, which misfire or miss today. It's the biggest hole the schemer found: everything she learns has nowhere to go at the driveway.

**A7. The Honest Fight (being in the right).** B.
- **What happens.** *"It hurt. Finding out from Theo."* Maya: *"You do a bit every time I try to say a real thing."* They yell, and both are right. *"Nobody in this town tells anybody anything on purpose. It just leaks."* No *Fine. Then go.* *"Be mad from here. I'll be mad from Chicago."*
- **Chain.** *I should have said it hurt, not "everybody knew." / But she'd bring up Thursday. / Good, let her. / What if we're both right and she still goes? / Then at least it was a real fight.*
- **Locks.** `tried_to_tell`. Without it, it slides into the old fight.
- **Why it isn't enough.** *"It turns out you can both be right and the bus still leaves at 8:45."* It gives her anger a fair hearing, which sim §8 says the ending needs.

**A8. Collateral (controlling the future).** S.
- **What happens.** Four years of visits planned out. The forty dollars: *"pay me back in person."* The jacket: *"bring it back at Thanksgiving."* *"Nell. That's a leash."*
- **Locks.** `reason`.
- **Why it isn't enough.** Scripting the future is the same move as scripting the past, aimed the other way. In the loop there is no Thanksgiving.

**A9. Forty Miles (holding on by force).** S. **Rejected** (§4).
- **What happens.** On a second house visit Nell steals the ticket. Mrs. Reyes drives Maya forty miles to the next stop _(proposed canon)_. Maya knows it was Nell.
- **Locks.** `sketch` (she has seen the open box).
- **Why it isn't enough.** You can stop a ticket, not a person.

**A10. Overtime (more time).** S.
- **What happens.** Theo holds the driver's cherry pie _(proposed canon: Earl, every Tuesday at 8:30)_, and the bus leaves an hour late. The diner was the day's one change, so the rest goes as it went, and Nell spends the hour she bought on top of the covers, listening to it idle. *"You bought her an hour. You spent it here."*
- **Chain.** *If I'd had more time I'd have known what to say. / The bus is always late. Theo knows why. / But I only get one thing. / Then the one thing is time.*
- **Locks.** A new fact, `driver`, from Theo.
- **Why it isn't enough.** *"More time. You had since March. You had since Thursday. You had 11:52."* "If I'd had more time" is regret's favorite lie.
- **Also.** Its words fix the worst schemer misfire: *stall the bus* at 8:40 puts her on the bus.

**A11. A Full Driveway (managing the room).** S.
- **What happens.** Theo comes with pie, and Nell helps load the trunk early. There's never a silence long enough for *"Say something."* *"Nobody said anything wrong. / Nobody said anything."*
- **Counts as.** `peace`, the version with witnesses.

**A12. The Perfect Tuesday / The Best Possible Tuesday (perfection).** S, B.
- **What happens.** S: a montage day built from every move that worked. At the bus window: *"You checked the time all day."* B: tower at three, the confession up there, the box carried, a goodbye at the car.
- **Why it isn't enough.** *"You got every line right. You weren't in a single one of them"* (S). *"You don't want a better day. You want this one to stop"* (B).
- **Status.** S's montage breaks the one-change rule, so it's rejected (§4). B's night line is the best thesis line any Nell wrote. Keep it as a variant `thinner` text, or as the night of a tower-plus-confession branch.

**A13. Wearing It Out (the archive).** D. See §3 #5.
- **What happens.** She stops fixing and starts keeping. The day wears like a tape played too often. Theo's line skips (*"Eight forty— Eight forty—"*). She can't remember whether the sleeves were up. At night she can only find the Maya she made up on Tuesday nine.
- **Locks.** Many Tuesdays (about 10) and the way out not yet open.
- **Why it isn't enough.** Replaying a memory doesn't keep it. It replaces it with your copies.

**A14. Eleven, Ten, Nine (avoidance).** D. **Rejected as built** (§4).
- **What happens.** Each Tuesday she hides or keeps Maya, Calder loses a street, until the driveway isn't there. *"The stain on the ceiling is the whole map."*

**A15. Fourteen Miles (absence).** ★ M; D as a free reply. **Parked** (§4, a canon conflict).
- **What happens.** M: at 7:14 she walks out of Calder, past the blank back of the sign, to a gas station where someone asks what she wants. At 6:30 she's in the driveway in her head anyway. At 9:01 she waves at a bus she can't see into. *"You didn't say it. You just went."* D: she walks out past THANKS FOR VISITING CALDER and, twenty minutes later, comes back in past WELCOME TO CALDER.
- **Locks.** None. M's version teaches `could_leave`: *"Staying is something you keep choosing."*

**A16. The Screen Door (to be known).** ★ B (*The Screen Door*), D (*The Practice Run*), S (*Dress Rehearsal*), sim P7. See §3 #4.
- **What happens.** In the kitchen Nell finishes Mom's sentence with her own ending. Mom puts her keys down, which she never does, and is late for the first time. *"Eat your eggs."*
- **Locks.** `mom` and `feelings`.
- **Why it isn't enough.** Brave in a kitchen isn't brave in a driveway, and the loop erases it by morning. It's the first fix that fails **because of the loop itself**, not because of Maya.

**A17. The Ride (borrowed repair).** B. **Parked** (§4).
- **What happens.** Mom drives Nell to the bus Mom never went to herself (see B15). Nell and Maya touch hands through the glass. Mom watches with the engine running, looking nineteen.
- **Why it isn't enough.** *"You used her Tuesday to fix yours."*

**A18. The Ice Machine (witness).** Mo. Related: sim P4 (*through the glass*).
- **What happens.** At 8:40 she goes to the station only to watch. Before `why_secret`: Maya sees her through the glass and stands up, and somehow Nell is buying a ticket (the station fix). *"Why did she stand up like that? Like you'd asked her something."* After `why_secret`: she stays behind the ice machine, unseen. Maya looks toward Nell's house. *"You let her look in the wrong place."*
- **Why it isn't enough.** *"You thought seeing it would make it finished. It just makes it seen."*
- **Counts as.** `station` (the locked version) or nothing. It's the not-ready half of §3 #1.

**A19. Said to a Door.** ★ B, D.
- **What happens.** Forehead on the door: *"I love you. I didn't mean the go."* Her shape doesn't move. The porch light stays on a long time, then clicks off.
- **Locks.** `feelings`.
- **Why it isn't enough.** *"You said it where you didn't have to see her face. That was the point. It's also why you'll never know"* (B). *"It counts exactly as much as a door"* (D).
- **Counts as.** `confess`. It quietly rehearses *Tomorrow, without knowing*.

**A20. Ding-Dong.** S.
- **What happens.** She rings the bell and hides behind the hedge. Maya opens at once and says *"Nell?"* to the dark. *"You knocked. You just weren't there when it opened."*
- **Locks.** `sorry` (she already knows Maya opens before her hand comes down).
- **Counts as.** A one-page `sorry` variant.

**A21. Say It First (pride).** ★ M, D.
- **What happens.** *"Eight forty-five. I know,"* before Theo can say it. Nobody sees her face. At 6:30 she says *Fine. Then go.* anyway. *"It was never about who knew first."* D's version is shorter: *"Who told you?" "You did."* Somebody laughs, and it still finds her.
- **Teaches.** `not_who_knew`. The regret you name first is usually the cover story.

**A22. The Fourth Frame.** Mo.
- **What happens.** She tears the strip and gives Maya the frame where Maya was looking at her. *"You saw." "I saw."* Before `feelings`, she gives away the fish faces and keeps the fourth.
- **Locks.** `photo` to think of it, `feelings` to give it.
- **Counts as.** `confess`, through an object.

**A23. Leave It.** Mo.
- **What happens.** She buys white paint ($17.50 of the forty) to fix the crooked A. Maya, on the catwalk: *"It's crooked because I was laughing. Leave it. Leave one thing in this town the way we did it."* Then the tower scene.
- **Counts as.** `peace`. It plants the true lesson in Maya's mouth, and it's the cheapest way to put it there.

**A24. Lights Out.** M.
- **What happens.** The tower scene, then she stays up there alone. At 11:52 every light in Calder goes out like August, with nobody on her shoulder.
- **Counts as.** `peace`, as a variant night.

### B. New learning scenes

**B1. The Window Seat.** D. See §3 #2.
- **What happens.** On a second bus ride she stays awake. The circling road drives back through her own day, and through the window she sees herself in the driveway, scared. *"She's seventeen. She doesn't know anything yet."*
- **Locks.** `station`. Teaches `window_seat`.

**B2. The Ring.** D.
- **What happens.** From the tower at 8:52 the taillights bend, keep bending, and come back into town. From above, Calder is the shape of her ceiling stain. *"It was never Ohio."*
- **Teaches.** `ring`, which changes the stain replies (and Maya's *"It's Calder. From the top. I drew it once"* at the driveway).
- **Status.** Keep the image as a `~` warped line, so it stays how Nell felt it. Its real job is the not-ready version of §3 #1.

**B3. The Minute (with Midnight).** ★ M (*The Minute*), D (*Midnight*), S (a night reply), sim 6.29.
- **What happens.** She refuses to sleep. M: the clock holds at 11:52, longer than a minute. With `read`: *"You know this minute. Monday. Her message lighting up the ceiling… It isn't Tuesday you keep living. It's this."* D: at 11:59 the phone says WED 12:00 AM for one second.
- **Chain.** *If I just don't fall asleep, it can't start over. / But I always fall asleep. / But it's always 11:52 when it ends. / …That's when I read it. / But I can't un-read it.*
- **Locks.** None to play it. The insight needs `read`. Teaches `minute`.
- **Why it isn't enough.** *"You've never seen 11:53. You're starting to think you're the one keeping it."*
- **Conflict.** D's WED glimpse and M's held minute can't both be true. Keep M's (§4).

**B4. Her Face.** ★ D (*Who's Telling This*), M (*You Had the Words Wrong*), sim P2.
- **What happens.** While the driveway is still felt, Nell refuses the warped laugh, or says Maya's line first in Maya's voice. Because she's watching to see if she got it right, she finally sees it: Maya's eyes are red. *"Is that what you think I was going to say?"* (M). *"Her chin is doing the thing it did at her grandmother's funeral"* (D).
- **Chain.** *She laughed at me. / But nobody at the diner was laughing either, and I'd have sworn on my life. / So what else did I get wrong? / I know exactly what she's going to say. / But I've only ever heard it one way. / I wasn't looking at her face.*
- **Locks.** `nobody_laughed` (D) or felt mode only (M). Teaches `her_face` / `red_eyes` (pick one name).
- **Why it isn't enough.** She still doesn't know why. She only learns her memory chose the version that hurts more and blames her less.
- **Engine note.** *look at her face* is caught by the free-look shortcut at every moment after 7:14 (`game.js`, `playerMove`), so today this is impossible (sim P2). Moment words have to win over that shortcut.

**B5. The Other End of Read.** ★ D (*Read 8:49*, at home), S (*Read 6:41 PM*, porch), Mo (*Read 7:03*, porch).
- **What happens.** She texts *sorry* or *ok.*, and it says Read and nothing comes. On the porch she can see it happen: the curtain lights blue, Maya reads it, and turns the phone face down on the box.
- **Chain.** *I left her on Read. / But I didn't even know I had. I put it face down. / What did it feel like on her end? / I could find out. / But what if she doesn't answer?*
- **Locks.** With `read`: *"Now you know what 11:52 looks like from the other side."* Without it: *"You don't know why it feels familiar,"* which points at the phone.
- **Why it isn't enough.** It heals Monday night's story, not Tuesday. *"She didn't not care. She just couldn't yet. Neither could you"* (S).
- **Also.** It fixes *text her* at the porch (*"That moment's already gone"*) and at 8:40.

**B6. Delivered / The Unsent Letter.** B, Mo.
- **What happens.** B: at 8:52 she sends *i'm sorry. i'm proud of you. i'm so mad. all three* and turns the phone face down *"not like it might bite. Like it's done."* She doesn't watch for Read. Mo: she writes it all down, folds it as small as the forty dollars, and puts it in the drawer. *"You read it. Turns out that's who it was for."*
- **Locks.** `read` for Delivered. None for the Unsent Letter (its content grows with facts).
- **Why they work.** They're the only acts that can't fail, because neither one needs an answer. They're rehearsals of the way out.

**B7. The Porch Vigil (one timeline, four scenes).** ★ D (*The Porch Light*), Mo (*Two Sides of the Door*), B (sitting with her back to the door), S (sitting on the top step), M (*Tell Nell—*).
- **What happens.** The Nells imagined what Maya does behind the door. Their versions fit into one timeline, so make it canon _(proposed canon)_. She stands right behind the door (the knock branch already says so). She slides down and sits against it. At 7:58 she reaches up and turns off the porch light. At eight she comes out with the last box. The car comes back at 9:20 with one person in it.
  - **Watch the light** (D): *"At 7:58 the light clicks off. Through the gap in the curtain you see whose hand it is. Hers. She stood there the whole time, with her hand on the switch, waiting for the knock."*
  - **Sit against the door** (Mo, B): *"Through the wood, Maya slides down and sits too. An hour, no words."* *"Close isn't the same as with."*
  - **Sit on the top step** (S): at eight Maya has to step around her. *"You stayed." "I always stay." "I know. That's what I'm scared of."*
  - **Stay all night** (M): Mrs. Reyes comes back alone. *"She cried the whole way to the feed store… 'Mom, tell Nell—' and then the driver honked."* She turns the porch light back on, for Nell.
- **Chain** (D). *If I'd knocked, she'd have opened it. / But I didn't know then. The light just went off. / Somebody decided I wasn't coming. / Was it her? / I'd only know if I stayed and watched. / And didn't knock.*
- **Locks.** None. Teaches `porch_light` or `crying`.
- **Why it works.** It's the only kind of learning scene where Nell changes nothing and still finds out the truth. *Some things you can only see when you stop trying to change them.*

**B8. I Said It Because—** M.
- **What happens.** On the porch she writes *Maya — I said it because* and can't finish it. She crosses it out until the pen goes through, the same as Maya's inside cover. *"You wanted her to tell you why. You can't tell her why either."*
- **Teaches.** `no_because`. It takes away the demand for an explanation. Strongest with `sketch`.

**B9. Maya's List.** S.
- **What happens.** At 7:14 Nell goes to the library. Maya is paying four years of fines in quarters. Under her elbow is a receipt list: *TELL NELL*, moved from Thursday to Friday to Saturday to Sunday to Monday to today. Nell leaves before Maya looks up.
- **Chain.** *Where was she all morning? / The library. / She had six days to tell me. / What was she doing for six days? / …Moving it to tomorrow.*
- **Locks.** `reason` (Mrs. Reyes said *"She's at the library"*). Teaches `list`.
- **Why it works.** *"She had a plan for telling you. She had six. You know exactly how that goes."* Maya overthinks too. It's the best mirror for an overthinker, and it ties to the game's title.

**B10. Secondhand.** S.
- **What happens.** Nell asks Mrs. Reyes to tell Maya she knows and isn't mad. *"You told my mom?" "You told mine." … "It's easier, right? Through somebody."*
- **Locks.** `reason`, `mom`.
- **Why it isn't enough.** Two people talking through their mothers are still not talking. But blame turns into recognition.

**B11. The Ticket in Her Pocket.** S.
- **What happens.** At 3:15 she buys her own ticket and tells no one. The day goes as it went. At 8:40 she holds it and doesn't go. *"You didn't tell her, because if she'd said don't come, you wouldn't have. / If I told you, you'd ask me to stay. And I would. / Oh."*
- **Locks.** None to play. The last lines need `why_secret`. It's an inside-out route to the reason Maya never told her.

**B12. Everybody Knew (Again).** B.
- **What happens.** Nell stands up in Dot's and says it to the room. They look, for real this time, and then Dot goes back to the crossword. By six it's at the Reyeses'. *"Everybody knew," Maya says. "My mom knew." "I was going to tell you." "When?" … "Yeah. Me neither."* At home: *"Dot called."*
- **Locks.** `feelings`, `nobody_laughed`. Teaches `other_side`.
- **Why it isn't enough.** Nobody controls who hears what in Calder. Doing it the brave way makes Nell exactly what she blamed Maya for being. The warped diner comes true when she chooses it, and she survives it.

**B13. Telling Theo About the Loop.** ★ S (*The Accomplice*), M (*Everybody Has a Tuesday*), D (*Groundhog Day*).
- **What happens.** D: *"Like Groundhog Day? I've been pouring this pot since I was fifteen. Welcome."* M: Theo plays along and says he'd do six a.m. over. His phone was in his apron the whole time, and he didn't call her, *"because then I'd be the one who told you."* S: on a later recruit he asks, *"How many times have you told me this? And how many times have you told her?"*
- **Locks.** `nobody_laughed` for S's version. Teaches `steering` (S) or `theo_called` (M).
- **Why it isn't enough.** An accomplice is one more way not to do it yourself. Regret is ordinary: *"Everybody in Calder has a Tuesday. You're the only one who keeps getting yours back. It hasn't helped."*

**B14. Booth Four, After.** B.
- **What happens.** Nell tells Theo she's in love with Maya. *"Okay okay okay. Me too. Not her. The general category."* _(Proposed canon. Alternative: Theo got into culinary school in Kansas City and stayed, so he's what "She stays" looks like from inside.)_ At 8:52 they both hear the bus from Dot's.
- **Locks.** `feelings`, `nobody_laughed`.
- **Why it isn't enough.** The loop takes it back. But it breaks the story that she's the only one in Calder doing this math.

**B15. Mom's Tuesday.** B.
- **What happens.** At 8:40 she goes downstairs. *"Mom. Did you ever have a Maya?"* Annie Pruitt went to Tulsa _(proposed canon)_. *"I told her I had a shift. I didn't have a shift." … "It was a Tuesday. I don't know why I remember that."*
- **Locks.** `whole_world` (from B's Screen Door).
- **Why it isn't enough.** It fixes nothing. It shows a whole life of reliving one Tuesday, at her own kitchen table. Mom is the loop without the time travel. *"She talks to the coffee maker because the coffee maker never left."*
- **Status.** The most moving idea in the brave file, and the biggest canon cost (§4).

**B16. What She Was Like.** B.
- **What happens.** Back at the house, Nell asks Mrs. Reyes the next question. The letter came in March _(proposed canon)_. Maya opened it on the porch in Nell's jacket. *"The first thing she said wasn't 'I got in.' She said, 'Nell's going to hate me.'"* *"If I tell Nell, I won't go."*
- **Locks.** `reason`. Teaches `march`, and optionally `why_secret`.
- **Why it isn't enough.** *"The loop goes back to 7:14. It doesn't go back to March."*
- **Design note.** DESIGN.md's *She stays* chain promises two ways to find out why: *ask her, or ask someone else*. Today `why_secret` is only taught at the tower. This scene is the "ask someone else" door the author's own chain describes (§5).

**B17. The Back Door.** S.
- **What happens.** At the porch she goes around back. Down the hall, Maya is on the floor against the front door, drawing Nell's face at the moment she said it. *"You went around back to find out if knocking would have worked. It would have. You spent today finding out."*
- **Locks.** `sketch` or `reason`.
- **Why it isn't enough.** It's the recon trap made literal. Overthinking is mostly looking for a cleverer door.

**B18. The First Person Is Nobody.** B.
- **What happens.** In the empty Baptist church on a Tuesday afternoon (_proposed canon_: it's unlocked because Mrs. Henderson does the flowers), Nell says *"I'm gay"* three times. The roof doesn't fall. The ceiling fan keeps turning like it's heard worse. She never climbs the ladder.
- **Locks.** `feelings`. Teaches `the_word`.
- **Why it isn't enough.** Courage with nobody on the other end isn't connection. Write it gently: no pastor, just the room.

**B19. In Case.** Mo, D, sim P12.
- **What happens.** She offers Maya the forty dollars. Maya folds her fingers back over it: *"Keep your in-case, Nellie. You're going to need it."*
- **Why it works.** Letting go of Maya isn't giving up her own leaving someday.

**B20. The Paper Bag.** Mo.
- **What happens.** She asks Mom what you pack someone for a long bus ride. Mom puts down her keys and packs peanut butter, an orange, too many napkins. The truth comes sideways through the bag. At 6:30 Maya laughs the real laugh: *"Tell Denise I said—"*
- **Teaches.** Another way to learn `mom`. *"You handed her your mom's love in a paper bag because you couldn't hand her yours."*

**B21. The Wrong Reyes.** B. A nudge with no night.
- **What happens.** At the driveway, Nell talks to Mrs. Reyes instead. *"No, mija. I'm the wrong Reyes."* She takes the box inside. *"You've gotten very good at saying things to everyone but her."*

**B22. Back at 7:14.** Mo. A morning hint.
- **What happens.** After two or more rituals with objects, the morning notices: *"The strip's back on the corkboard. All four frames. The hook's empty. The money's in the drawer."* Once the way out is open: *"Maybe it isn't yours to rearrange."*
- **Why it works.** It turns the reset from the punishment into the lesson.

**B23. Only True Things Keep.** D. **Rejected** (§4).
- **What happens.** Palm notes (SCROLL UP, DON'T SAY FINE) are gone every morning. SHE TRIED survives, faint.

### C. New ways out

**C1. Watching It Go.** ★ D (*Taillights*), Mo (*The Last Light*), M (*11:53*), sim P14. See §3 #1.
- **What happens.** On a day when the way out is open, she lets six moments happen. At 8:40 she climbs the tower and watches the bus until it's gone (or stays awake and turns the phone face up at 11:53). Then the final night and Wednesday.
- **Locks.** `ready`, exactly like the true ending.
- **Why it works.** It changes nothing Maya will ever know. It changes only what Nell does with her own eyes.

**C2. The Corkboard of Tuesdays.** D. **Rejected as an object, salvaged as a line** (§4).
- **What happens.** Every fix leaves a photo strip that was never taken. On the ready morning she takes them down without looking, until only the real fourth frame is left. *"That one happened."*

### D. Epilogues and codas

**D1. Wednesday, the Kitchen.** B. See §3 #4.
- **What happens.** After the true ending, if she ever said it to Mom: *"Mom." She turns around. She actually turns around.* It's the first thing she has said all week that will still be true tomorrow. Credits: *{n} Tuesdays. One Wednesday. It's the one that counts.*

**D2. Face Up.** Mo.
- **What happens.** On Wednesday: *turn the phone over*. *"can we talk tmrw." Tomorrow was yesterday. It took you {n} of them. You don't answer yet. But you leave it face up.* It keeps the author's restraint: *"Later."*

**D3. Wednesday, Unplanned.** S.
- **What happens.** On Wednesday: *make a plan*. *"For what? You don't know how today goes. Nobody's ever told you. That used to be the worst thing about a day."* For the schemer, this is the real letting go: the first day she has no intel for.

**D4. Who's Telling This (a seed for the epilogue).** ★ M, D.
- **What happens.** *who are you*, *narrator* or *who's talking* gets *"Nobody answers. Somewhere, somebody at a counter laughs at a TV."* That's the epilogue's diner, planted early. After the epilogue has played and the player restarts: *"I am. I always tell it like this."*
- **Warning.** D's fuller line (*"like it happened to somebody else"*) gives away the reveal. Keep only the oblique one before the epilogue.

**D5. Theo in the booth, ten years later.** B. One line in the epilogue: *Theo, who runs Dot's now, brings two coffees nobody ordered.* _(Proposed canon.)_

### E. Meta responses (not endings, but things that must answer)

**E1. The free-reply pack.** M, D, S, sim P6. *wake up* → *"You are awake. You've been awake since it was dark. That was never the problem."* · *this isn't real / pinch myself* → *"It hurts the normal amount. It's real. It just isn't new."* · *groundhog day / time loop* → *"You've seen the movie. The guy gets it right eventually. In the movie it's funny."* · *go back to Thursday / Monday* → *"It always starts at 7:14. Everything you'd actually take back happened before your alarm."* · *write it on my hand* → *"Tomorrow your hand will be clean. You've never forgotten one second of today. That's the problem."*

**E2. Accidental endings.** M. Verified: on the second Tuesday, letting six moments pass and typing *dont sleep* at 8:40 ends the game with the without-knowing epilogue. On a ready day it ends with *"You close your eyes."* The last thing the player typed is the opposite of what the ending says.

**E3. The lost Tuesday.** M. Verified: typing *don't close my eyes* at the night prompt is passed to 7:14 as `hide`, and the next Tuesday is spent under the blanket.

**E4. The speedrun.** S. The true ending takes five Tuesdays: tower, stay, knock, then ENTER through all seven moments. On that route Nell never breathes at the diner, but the honest day still says *"It's at the TV. It was always at the TV."* (The `[clear]` diner lines aren't tagged `[if nobody_laughed]`.) S suggests leaving it alone and letting *Wednesday, Unplanned* answer it. That works for the theme, but the diner line is the same kind of leak DESIGN.md's Decision 5 was written to stop.

---

## 2. What players will try, and what the game should say

By moment. **How** says how to build it: **FR** is a free reply (doesn't use up the day). **MW** is a moment word, checked before global words, that names a free reply or a branch. **BR** is a new branch. **FIX** marks a misfire to fix, with what happens today. Unless noted, everything here is data only.

### Anywhere (needs a global free-reply list, about 4 engine lines; M)

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *i'm gay*, *i'm a lesbian*, *i like girls*, *come out* | Today: *"It doesn't feel like the kind of thing that would change anything."* **The one reply in the game that could really hurt someone.** Without `feelings`: *"The word comes around the corner. You cross the street."* With `feelings`, at each moment: the person who's there (Mom, Theo, Maya's *"Okay. Nellie. Is that the whole sentence?"*). | FIX + a new `out` action above `confess` | B |
| *wake up* / *this isn't real* / *pinch myself* / *dream* | *"It's real. It just isn't new."* | FR | M |
| *loop*, *groundhog day* | *"You've seen the movie. In the movie it's funny."* | FR | M |
| *who are you*, *narrator*, *who's talking* | *"Nobody answers. Somewhere, somebody at a counter laughs at a TV."* | FR | M, D |
| *go back to thursday / monday*, *undo*, *rewind* | *"Thursday isn't in here. You've looked."* `[if read]` *"Neither is Monday."* | FR (sim P6 `outside`) | M, sim |
| *write it on my hand*, *leave myself a note* | *"Tomorrow your hand will be clean."* | FR | D, S, M |
| *plan*, *make a list*, *rehearse* | *"You've already planned it. You planned it at 2 AM. The plan is the part you're good at."* | FR | S |
| *count* | *"Eleven streets. Four booths. One crooked A. Counting is something to do with your head that isn't the thing."* | FR | sim P12, M |
| *the truth* (in *tell mom/theo the truth*) | Today it's a `confess` word, so it answers *"She isn't here. Not yet."* even with Mom standing there. | FIX: take *the truth* out of global `confess`, or add moment `talk` words | B |

### 7:14, her room

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *look at the tower* | Today: plays the whole tower branch and uses up the day. Should be: *"CALDER, the second A crooked. Something small moves on the catwalk. Or doesn't."* | FIX, MW → FR | D |
| *dont sleep* / *stay awake* | Today: plays `hide` (the day is spent) or *"She isn't here."* Should be: *"It's morning. You can't not-sleep in the morning."* | FIX, MW → FR | M |
| *text theo* | Today: texts **Maya** and plays the tower. Should be: *"> i know about the bus. dont be weird at lunch" / "oh thank god"* (or a miss). | FIX | M, S |
| *say it out loud*, *tell myself* | Today: plays the tower. Should be: *"'It's Tuesday again.' Out loud it sounds smaller than it does in your head."* | FIX, MW → FR | M |
| *steal / take / hide her ticket* | Today: the tower or the blanket. Should be: *"You'd have to be somebody who takes things back. You've never even asked for your jacket."* | FIX, MW → FR | S |
| *write maya a letter*, *draw her* | Today: plays the tower. Should be: the Letter (A5) or *"It looks like a thumb with hair. She drew you for a year."* | FIX, BR or FR | Mo |
| *say goodbye to the room* | Today: *"She isn't here."* Should be: *"You're not the one leaving. That's what's stupid about it."* | FIX, FR | Mo |
| *alarm*, *turn off the alarm* | *"It rings once more after the cord is out, politely. 7:14. The quiet is worse."* | FR | D, S |
| *drawer*, *forty dollars*, *money* | *"Two twenties, folded small. For nothing in particular. In case."* `[if station]` *"It was never for her bus."* | FR | Mo, S, sim P12 |
| *hook*, *jacket* (after A3) | `[if jacket_back]` *"Your hands smell like charcoal for about a minute."* On the clear day: *"It's a hook."* | FR (tagged) | D, Mo |
| *stain* | Today: *"She said Ohio."* Add `[if ring]` *"It's Calder from the top."* `[if feelings]` *"Maybe it doesn't have to be a state."* `[if ready]` *"It's a water stain. Somebody should fix the roof."* | FR (tagged) | D, sim P12 |
| *check the date* (without turning the phone over) | *"TUE. It says TUE like it's been saying it for a hundred years."* | FR | D |
| *library* | Maya's List (B9) | BR | S |
| *ask mrs reyes what she was like* | What She Was Like (B16) | BR (a case of `house`) | B |
| *walk out of town*, *leave calder* | Fourteen Miles (A15) or D's free reply | MW | M, D |
| *burn the photo* | Plays `photos`, which works: she looks instead. One added line: *"The first frame's corner browns. You blow it out."* | line in `photos` | Mo |

### The kitchen

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *finish her sentence*, *friends who aren't what* | The Screen Door (§3 #4) | MW → BR | B, D, S |
| *hug mom* | Today: interrogates her (*"What did Lourdes say?"*). Should be: *"She goes stiff, then doesn't. 'What's this for?' 'Practice.'"* | FIX, MW → FR | B, Mo, sim |
| *kiss her head first* | *"'What's that for?' 'Later.'"* | FR | D |
| *mom, I'm living the same day* | Today: *the same* is a `nothing` word, so the moment just happens. Should be: *"Baby, I've lived today for twenty years. It's called the pharmacy."* | FIX: take *the same* out of `nothing` | M, S |
| *if you could do one day over?* | *"Every day, baby. Every single one." "And?" "And you go to work anyway."* | FR | M |
| *microwave / heat up the eggs* | Today: *eggs* is a `nothing` word. Should be: *"They come out warm. They're still the eggs."* | FIX, MW → FR | D, M |
| *say goodbye to mom* | Today: *"She isn't here."* (She's at the door.) | FIX | Mo |
| *grocery list*, *note* | *"Under EGGS: ask me about Maya."* (The next morning it just says EGGS.) | FR | D |
| *call in sick*, *stay home with me* | *"Baby, somebody has to count the pills." She doesn't open the door, though.* | FR | D |
| *pack her food for the bus* | The Paper Bag (B20) | BR | Mo |
| *radio* (once ready) | *"Sunny tomorrow. It's a real place. It has a tomorrow."* | FR `[if ready]` | D |

### 11:40, Dot's Diner

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *turn around*, *turn around and look* | Today: a miss, though the day-two text says *"You could turn around and look."* Route it to `theo` or `breathe`. | FIX, MW | D, B |
| *i'm not fine*, *i'm not okay* | Today: *fine* is an `original` word, so it answers *"Not yet."* Should be: Theo puts the pot down. *"Okay. Good. Not good. Thank you."* Then DINER_TRUTH. | FIX, MW → `theo` | B |
| *help dot with the crossword* | Today: plays `theo` (*dot*). Should be: *"'What if you get one wrong?' 'Then it's wrong, hon. You write the next one anyway.'"* | FIX, MW → FR | D |
| *watch the game show* | *"A man is winning a boat. He's won it {n} times now. He's thrilled every single time. He doesn't know."* | FR | D, S |
| *eight forty-five* (before Theo says it) | Say It First (A21) | MW → BR | M, D |
| *tell theo about the loop* | Today: *the same* lets the moment happen, or it plays `theo`. Should be: Telling Theo (B13). | MW → BR | S, M, D |
| *stall the bus*, *ask theo to hold the bus* | Overtime (A10) | MW → BR | S |
| *stand up and tell everyone* | Everybody Knew (Again) (B12) | MW → BR | B |
| *tell theo i love her* | Booth Four, After (B14). Today: *"She isn't here."* | MW → BR | B |
| *leave before theo sits down* | *"He catches you at the door with the pot. 'Her bus, Nell—' It finds you. It always finds you."* | MW → FR | D, M |
| *sit on maya's side of the booth* | *"From her side you can see the counter."* Then DINER_TRUTH. | MW → `theo` | Mo |
| *pies* | Today: a miss (*pie* works). | FIX: add the plural | D |

### 3:15, the walk past the water tower

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *climb the tower and stay up there* | Today: *stay* wins, *"She isn't here."* Should be: the tower. | FIX, MW | M |
| *fix the a*, *paint* | FR: *"She was laughing when she painted it. That's what's crooked."* Or the Leave It branch (A23). | MW | M, D, Mo |
| *feed store*, *bus sign*, *schedule* | Today: *"Not yet."* (she's walking right past it). Should be: *"CHICAGO 8:45 PM. DAILY. It leaves every night. It's only tonight for you."* | FIX, MW → FR | Mo, sim P12 |
| *wait at the feed store* | *"The bus is already there, empty, door folded open. It's been waiting the whole time. You're the one who's late."* | MW → FR | D |
| *church* | *"Nobody died. That's what makes it so stupid."* With `feelings`, maybe The First Person Is Nobody (B18). | FR or BR | Mo, B |
| *card*, *buy a card* | *"There's no card for this. You stand between CONGRATULATIONS and WITH SYMPATHY until the cashier asks if you're okay."* | FR | Mo |
| *rehearse*, *sit on the church steps* | *"Every good line you write is mean. You keep the mean one, because it's the only one you can say without crying."* | FR | D, S, sim P12 |
| *touch the ladder* | *"Warm from the sun. You just want to be near where she is for a minute."* | FR | Mo |
| *count the dollar generals* | *"One. You count again. One. It felt like more."* | FR | D |
| *buy a ticket* | The Ticket in Her Pocket (B11) | MW → BR | S |
| *go home and pack* | Today: *go home* lets it happen. Leave it. | — | S |

### 6:30, the driveway ("Say something.")

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *you were always going to stay here* | Today: *stay* plays the keep fix (*"Stay. Please."*). Should be: Her Face (B4). | FIX, MW → BR | M |
| *look at her face* | Today: the free-look shortcut answers with the cheek-chewing reply. Should be: Her Face (B4). | FIX (engine) | D, M, sim P2 |
| *i've lived today before*, *loop* | That Part's Mine (§3 #3) | MW → BR | D, M |
| *i read your text*, *i know about the sketchbook* | Today: *"already gone"* or a miss. Should be: Everything I Know (A6). | FIX, MW → BR | S |
| *can I have my jacket back* | The Jacket, Taken Back (A3) | MW → BR | D, B, Mo |
| *keep the jacket* | Keep It (A4) | MW → BR | Mo, sim P5 |
| *go. i mean it*, *you should go* | Go (A2) | MW → BR | S, Mo |
| *it hurt*, *you hurt me* | The Honest Fight (A7), or at least the `say what` nudge. Today: a miss. | MW | B |
| *ask mrs reyes* | Today: *"already gone"* (*mrs* is a 7:14 word). Should be: The Wrong Reyes (B21). | FIX, MW → BR (no night) | B, S |
| *which state is the stain* | *"It was never Ohio. I just liked watching you get mad. It's Calder. From the top. I drew it once."* | FR | D |
| *see you tomorrow* | *"Nellie. I'm going to be on a bus."* You'll see her tomorrow anyway, in this driveway. She'll never see you again. | FR | D |
| *give her the forty dollars* | In Case (B19) | FR | Mo, D |
| *keep the eleven dollars* | *"The first thing you've ever let somebody keep without keeping track."* | FR | Mo |
| *draw me* | With `sketch`: four lines of charcoal on the box flap. Without it: *"Like what?"* | FR | D, Mo |
| *take a picture* | Today: *"already gone"*. Should be: *"Don't, I look like I'm moving." A blur in a jean jacket.* | FIX, FR | Mo |
| *give her the photo strip* | The Fourth Frame (A22). Today: *"already gone."* | FIX, MW → BR | Mo |
| *okay* | *"It's basically the same word, and it isn't mean. She waits for more."* | FR | D |
| *congratulations*, *proud of you* (without `reason`) | *"On what, Nell?"* (sim P9: gate it) | gate | sim |
| *what were you going to say thursday* | *"That I got in. And that I didn't want to go without— and then you said Hotel California."* | FR, needs `tried_to_tell` | B |
| *you're not real* | *"I'm holding forty pounds of books, Nell. I'm pretty real."* | FR | M |
| *skip to the end* | *"You'd like that. There isn't a part of today where it doesn't hurt."* | FR | M |
| *i'm gay* | *"Okay. Nellie. Is that the whole sentence?"* (the moment stays open) | `out` → FR | B |

### The porch ("You could knock.")

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *wait*, *watch the light*, *wait for the light to go off* | The Porch Light (B7). The cheapest version is one `[clear]` line in `letItHappen`. | MW → BR, or a line | D |
| *sit against the door*, *put my back to the door* | Today: *put my back to the door* plays `knock`. Should be: Two Sides of the Door (B7). | FIX, MW → BR | Mo, B |
| *sit on the steps and wait*, *wait all night* | Today: *sit* lets it happen. Should be: the vigil (B7, *Tell Nell—*). | MW → BR | M, S |
| *text her*, *text sorry* | Today: *"already gone"* or `knock`. Should be: The Other End of Read (B5). | FIX, MW → BR | S, Mo |
| *hand on the door*, *palm on the door* | Today: plays `knock`. Should be: *"Not a knock. The opposite of a knock."* | FIX, MW → FR | Mo |
| *slide a note under the door* | Today: plays `knock`. Should be: *"i didn't mean it. i meant some of it." The light stays on. Nobody opens.* (D) Or I Said It Because— (B8) (M). | FIX, MW | D, M, S, Mo |
| *i love you*, *say it through the door* | Today: *"already gone"*. Should be: Said to a Door (A19). | FIX, MW → BR | B, D |
| *ring the bell and hide* | Ding-Dong (A20) | MW → BR | S |
| *back door* | The Back Door (B17) | MW → BR | S |
| *throw a pebble at her window* | *"The curtain moves. Her shape stays. Then it steps back."* | MW → FR | D, B |
| *call her* | *"It rings through the door. She doesn't pick up. She doesn't decline it either."* | MW → FR | D |
| *whisper bye* | *"'Bye,' you tell the wood. On purpose not loud enough."* | MW → FR | Mo |
| *turn off the porch light* | Add to the existing reply: *"It isn't your switch. It never was."* | FR | D |
| *go home and tell mom* | Today: *go home* lets it happen. Should be: the porch way into Mom's Tuesday (B15), if that gets built. | MW | B |
| *say go and mean it* | Today: plays `knock` (the sorry fix). Should be: `[clear]` *"Same word. It means something else now."* | FIX, MW → FR | D, M |
| *this isn't real* | *"A moth is hitting the porch light over and over like it'll work eventually. You know how the moth feels."* | FR | M |

### 8:40, home ("You could still make it.")

| They type | The reply, in gist | How | Nells |
|---|---|---|---|
| *watch the bus leave*, *go to the station to watch*, *see her off* | Today: plays `bus` (**she boards**). Should be: The Ice Machine (A18), or on a ready day, Watching It Go (§3 #1). | FIX, MW → BR | Mo, sim P4 |
| *climb the tower*, *watch it from the tower* | Today: *"already gone"*. Should be: §3 #1. | FIX, MW → BR | D, Mo, M, sim P14 |
| *stay awake*, *dont sleep*, *dont close my eyes* | Today: *"already gone"*, or it lets the moment happen and **can finish the game**. Should be: The Minute (B3), or on a ready day, §3 #1. | FIX, MW → BR | M, D |
| *stall the bus*, *stand in front of the bus*, *call the bus company* | Today: plays `bus`. Should be: *"From here? You'd have needed somebody at Dot's. This morning."* | FIX, MW → FR | S |
| *stay on the bus*, *window* | The Window Seat (§3 #2) | MW → BR | D |
| *text her*, *text sorry* | Today: *"already gone"*. Should be: Read 8:49 (B5), or Delivered (B6) with `read`. | FIX, MW → BR | D, B, S |
| *write her a letter* | Today: plays `bus` (*her*). Should be: The Unsent Letter (B6). | FIX, MW → BR | Mo |
| *go downstairs*, *mom* | Mom's Tuesday (B15). Mom has to be home (§4). | MW → BR | B |
| *put the phone face up* | *"Nothing comes. You leave it face up anyway."* | FR | Mo |
| *look at the stain* | Today: falls back to LOOK (*ceiling* works). Should be: *"Smaller. Like you're looking at it from a long way up."* | FIX: add *stain* to the key | D |
| *hang the hoodie on the hook* | *"It's the wrong shape. It's just a hoodie. You leave it there."* | FR | Mo |
| *take the photos down* | *"A corkboard of pinholes. At 7:14 they're all back up."* | FR | Mo |
| *write it all down* | *"'You wake up. Your alarm is already ringing.' You stop. You wrote 'you'. You leave it."* That's where the game's voice comes from. | FR | M |

### The night prompt (11:52)

Today `nightMove` passes any input to 7:14. That's fine for *remember* or *text her*, which read as plans for the morning, and terrible for *don't close my eyes*, which spends the next day hiding (E3). Add a small `nightReplies` check before `startDay()` (about 3 lines; M, S, D):

| They type | The reply |
|---|---|
| *stay awake*, *don't close my eyes* | *"You sit up against the headboard and watch the clock. 11:52. Then the alarm is already ringing. You don't remember deciding anything."* Then the morning starts, as with ENTER. |
| *turn the phone over* | `[if read]` *"Her message lights up the ceiling. You know this minute now."* `[if not read]` *"You don't. Not tonight."* |

### Wednesday

| They type | The reply | Nells |
|---|---|---|
| *turn the phone over*, *face up* | Face Up (D2). Above `phone`, with tags. | Mo |
| *make a plan* | Wednesday, Unplanned (D3). Above `end`. | S |
| *mom*, *kitchen* (with `out_loud`) | Wednesday, the Kitchen (D1, §3 #4) | B |
| *this isn't real* | Today: *"Not yet. Soon, though."* (it reads oddly). Should be: *"It's Wednesday. It's real. That's the scary part."* | M |
| *drawer* | *"Forty dollars. For something in particular. You don't know what yet."* | Mo |

---

## 3. The five strongest new endings

Chosen for what they say about regret, overthinking and letting go, not for how cheap they are. Each one is written the author's way: the ending first, then the chain worked backwards, then each link turned into a choice, a lock, or a scene.

### #1. Watching It Go (a third telling of the true ending)

_★ Four sources: the dreamer's **Taillights**, the mourner's **The Last Light**, the meta Nell's **11:53**, and sim P14. Its not-ready half absorbs **The Ice Machine**, **The Ring** and **The Minute**._

Every night of the game begins *"Somewhere out on the highway, the bus is getting smaller."* Nell has heard the bus leave dozens of times. She has never seen it. This ending lets the one image the game repeats every night finally be seen.

**The scene** (a ready day: moments 1–6 let happen, then at 8:40 *climb the tower*, *watch it go* or *stay awake*):

> You don't run. You don't lie down either.
>
> You go out the back so the screen door won't slap. You climb the tower in the dark. The rungs are still warm from the day.
>
> She always comes up here when she's waiting on something. You aren't waiting on anything.
>
> At 8:52 the bus pulls out from the feed store.
>
> Past the Dollar General. Past the sign. Out onto the highway, where the road is straight.
>
> It isn't a bus anymore. It's two lights. It's one light. It's the place where a light was.
>
> You stay until Calder turns its lights off one window at a time.
>
> Then you climb down. The ladder is cold. It's just a ladder.

Then the final night, with three changes:

> # TUESDAY | 11:52 PM
>
> You don't play it back. You watched it until there was nothing left to watch.
>
> _(… the existing final night, from "You hurt her" to "It was you." …)_
>
> 11:52. It holds, the way it always holds.
>
> You turn the phone over. Face up. `[if read]` Her message is the last one in the thread. You don't answer it. You don't hide it either.
>
> 11:53.
>
> It looks like every other minute.

Then Wednesday, unchanged. *Phone: "Later."* stays.

**The not-ready version** (the same input before the way out opens) is a learning scene that ends the day:

> You climb in the dark. At 8:52 the bus pulls out. You watch it all the way.
>
> `[if station]` ~ The lights get to the edge of town and bend, and keep bending, and come back past WELCOME TO CALDER.
>
> You watched it go. It went.

Night: *"Tomorrow it'll be idling by the feed store again, late like always. Seeing it didn't finish anything."* / `[if read]` *"And it's 11:52. You know this minute."* / *"Tomorrow."*

**The decision-tree path, worked backwards.**

| Chain (Nell) | Becomes |
|---|---|
| *I don't have to pick it up. I don't have to put it down either.* | The ending: the phone face up at 11:53. `[if read]` gives the full version. |
| *11:52. That's where I put the phone down.* | A fact the player may already have: `read`, from the phone at 7:14 after `tried_to_tell`. It enriches the ending but doesn't lock it. |
| *If I watched it go, maybe it would be gone.* / *But that's still doing something.* | **The lock: `ready`.** Before it, watching is one more way to make it finish, and it fails (the not-ready scene: *"Seeing it didn't finish anything"*). After three fixes and `why_secret`, she has stopped trying to change it, so watching is witnessing. |
| *Is it? She'd never know. Nobody would.* | **The rule that lets it count as letting it happen** (the mourner's sorting rule, §5): if only Nell would ever know about an act, it can be letting go. |
| *But I'd have to watch the whole thing, till there's nothing.* / *The tower's the only place high enough.* | **The moment: 8:40.** The tower is canon: *"She always goes up there when she's waiting on something."* |
| *I've never once watched it actually go. I only ever heard it.* | The setup is already in the game: every night's first line, and *"At 8:52 you hear it go."* |

**Why it serves the theme.** Acceptance isn't looking away, and it isn't sleeping through it. *Letting go is being awake for the moment the thing becomes the past.* It leaves Maya's Tuesday exactly as it happened. Only Nell's eyes change. Every other night she hears the leaving with her eyes closed. And it pays off the station fix's *"Tomorrow you'll find a road that actually goes somewhere"*: from up here the road goes out, straight, past the sign.

**What it takes to build.**
- **Words** at `home`: `watch: ["watch", "see it go", "see her go", "see her off", "tower", "climb", "stay awake", "dont sleep", "dont close my eyes", "wait up", "ice machine"]`. Moment words are checked first, so *watch the bus leave* no longer reaches `bus`, and *dont close my eyes* no longer reaches `hide`. `changes: { watch: "watch it go" }`.
- **Branch** `watch it go`, two cases. `needs: ["ready"]`: the scene above, plus a new flag. Otherwise: the not-ready scene, with a night. It can teach `saw_it_go`. Don't reuse the fact name the final night tests, because facts persist.
- **Engine** (about 8 lines): a case flag such as `wayOut: "truth"` that makes `changeMoment` call `finish("truth")` after the text instead of `startNight`, and sets a one-time `watched` flag that `nights.final` can test with `[if watched]` / `[if not watched]`. Reaching 8:40 at all means moments 1–6 were let happen, because any change ends the day. So nothing else has to be checked.
- **Story:** three tagged lines in `nights.final`, the two scenes, and a THINK line.
- **Decision for the author.** This softens *"let every moment go by."* The precedents: typing what Nell did counts as letting it happen, and `hide` at 8:40 already does too. If it feels like a cheat, keep only the image. Put *"You watched it until there was nothing left to watch"* in the final night for every player, and leave the input out.

### #2. The Window Seat

_The dreamer's top proposal. Kin: sim P4 (*through the glass*), and the brave Nell's insight that Nell is kinder to everyone than to herself._

Every fix in the game aims at Maya. None aims at the person the regret is actually about.

**The scene** (at 8:40, after the station fix: *stay on the bus*, *watch the window*):

> You run. You buy the ticket. You sit next to her. She holds your hand.
>
> This time you don't fall asleep. You watch the window.
>
> Past the feed store. Past the Dollar General. Past the sign.
>
> ~ It's light out, somehow. It's 11:40. Through Dot's window there's a girl in booth four with her hands flat on the table, like the table might float off.
>
> ~ 3:15. The same girl, stopped at the corner, looking up at the ladder like it's a thousand feet.
>
> ~ 6:30. The girl in the driveway. From here you can see her face. She looks so scared. She looks like somebody about to do a thing she'll think about for the rest of her life.
>
> You put your hand on the glass. She doesn't look up.
>
> She's seventeen. She doesn't know anything yet. She's doing her best, and her best is *Fine. Then go.*
>
> Maya, asleep on your shoulder, says something you don't catch.

Night: *"You can't warn her. You couldn't then. / But you could stop yelling at her. / Tomorrow."*

On the honest day, one line in `nights.final`, after *"It was you."*: `[if window_seat]` *"You think about the girl in the driveway. You'd tell her it's okay. You don't think it is. You'd tell her anyway."*

The bus driving back through the day is marked `~`. It's how Nell felt it, which keeps the game's rule that the narrator lies. The truth of the scene doesn't depend on whether the window was real.

**The decision-tree path, worked backwards.**

| Chain (Nell) | Becomes |
|---|---|
| *She's seventeen. She doesn't know anything yet.* | The ending: the first time Nell sees herself as somebody else. Teaches `window_seat`. |
| *So I'll stay on.* | The input at 8:40: *stay on the bus*, *window*. |
| *The bus goes past everything.* | **The lock: `station`.** She has to know the bus circles before she can think of riding it on purpose. Without it, the input just plays the station fix (*"You'd have to be on it first"*). |
| *But you never see it from inside. You'd have to be outside it.* | The station night already says the road goes around. This is its second use. |
| *If I could see her, me, that morning, I'd tell her: scroll up. Look at the counter. Go up the ladder.* | Every fact the player has learned, listed as advice she can't give. |
| *I should have warned myself.* | The start of every overthinker's 2 AM. |

**Why it serves the theme.** Regret is mostly a prosecution of your past self. The way out the game offers (*"It was you"*) is ownership. Ownership without tenderness turns into the felt version again. This is the one scene that shows Nell looking at herself kindly, and it sets up the epilogue's reveal that she tells the story *"like it happened to somebody else"*, the first time she does.

**What it takes to build.** Data only, about 25 lines.
- `home.words`: `window: ["stay on", "window", "keep riding", "ride it", "look out"]`. `changes: { window: "window seat" }`.
- Branch `window seat`, two cases. `needs: ["station"]`, `learn: ["window_seat"]`, with a night and no fix. Otherwise: the existing station text with `fix: "station"`, so a first-timer who types *stay on the bus* gets the station fix (and the repeat rule still works by branch name).
- One `[if window_seat]` line in `nights.final`, and a THINK line: *"You saw her from the bus. She didn't know anything yet."*

### #3. That Part's Mine (permission), with Go as its sibling

_★ The dreamer's **The Loop, Out Loud** and the meta Nell's **Nobody Can Let Go for You**, merged. The blessing fix **Go** (★ schemer, mourner, brave) is the same wanting turned around._

The thesis says *letting go of the desire to change what already happened*. Here someone says it out loud: Maya. The game has to show it failing, so the real letting go stays Nell's own.

**The scene** (driveway: *I've lived today before*, *loop*, *I keep waking up*):

> "I've lived today before," you say. "A lot of times. I keep waking up and it's Tuesday."
>
> Maya looks for the bit. There isn't one. You can see her not find it.
>
> "Okay," she says. She always believed you. That was never the problem.
>
> She sets the box on the hood. "Do I go? In all of them?"
>
> "Every time."
>
> `[if keep]` "Once you stayed." "And?" "You stopped drawing." She's quiet for a long time.
>
> `[if confess]` "Once I told you. Everything. You said it back." Her ears go red. "And I still went." "You still went."
>
> She rubs the charcoal on her thumb against her jeans. It doesn't come off.
>
> "Then that part's mine, Nellie. Stop trying to fix my part."
>
> `[if why_secret]` "You keep thinking if you say it right, I stay. I'm not leaving because you said it wrong."
>
> She puts her thumb on your cheek. "The rest is yours. You can stop. Go home."
>
> You go home. It's the nicest thing anybody has ever said to you.

Night:

> She said you could stop.
>
> Tomorrow she'll come down the steps with the box, and she won't know she let you off.
>
> She can forgive you for a day that isn't going to happen. She can't let go of it for you.
>
> Nobody can.
>
> Tomorrow.

**The locked version** (without `tried_to_tell`). It comes out the way Thursday did:

> "I've lived today before," you say. "Like, spiritually. It's Calder."
>
> She almost laughs. Then she doesn't. She picks up the box.

Night: *"You made it a bit. You don't know why that feels familiar. / Tomorrow."*

**The sibling, Go** (driveway: *go, I mean it*, *you should go*, *one of us should*; `needs: ["why_secret"]`):

> "Go," you say. She flinches. She's heard that one. "No. Go. Get out of here. One of us should."
>
> "Are you giving me permission?"
>
> "…Yeah."
>
> She laughs and cries at once. "I wasn't waiting for permission, Nell. I was waiting for you to ask what I wanted."

Night: *"Same word. You said it nicely this time. / She was going anyway. You just wanted to be the one who said she could. / Tomorrow."*

**The decision-tree path, worked backwards.**

| Chain (Nell) | Becomes |
|---|---|
| *But it's only okay until 11:52.* | The ending: absolution that resets. The night's *"She can't let go of it for you."* |
| *And then what? She tells me it's okay?* | The want behind it: **permission**, a new row in the fix table (§5). |
| *So I'd have to say it straight.* | **The lock: `tried_to_tell`.** Nell has to know she made Thursday a bit before she can stop doing it. |
| *Because when she tried to tell me something real, I made it a bit.* | **The learning scene that opens it**: Theo or breathing at the diner, or the tower. All three exist. |
| *But she'd think it was a bit.* | The locked version, which replays Thursday's joke. A locked attempt that still teaches. |
| *If I told her what's happening, she'd help me.* | The input at the driveway: the loop words. |

Go has the same shape with one link swapped. *Unless I knew that if I'd asked, she'd have stayed* is the lock `why_secret`, and *Since when is she mine to let* is the failure.

**Why it serves the theme.** Much of regret is taking the blame for other people's choices, and wanting someone to tell you it's okay to stop. Maya hands back the part that was never Nell's (her own leaving) and refuses the part only Nell can do. Being forgiven isn't letting go. That keeps the true ending honest: the letting go happens in silence, on a day nobody tells her it's okay. Go is the mirror: giving permission is just as much an attempt to decide what the leaving means.

**What it takes to build.**
- `driveway.words`: `loop: ["loop", "lived today", "lived this", "this day before", "keep waking up", "same day", "again"]` and `blessing: ["i mean it", "you should go", "one of us should", "get out of here", "go to chicago"]`. Moment words are checked first, so `blessing` beats `original`'s *go then* and `loop` beats `nothing`'s *the same*.
- Branches `loop` (two cases) and `go` (two cases: `needs: ["why_secret"]`, and a flinch fallback with a night and no fix).
- **One engine line:** add `"permission"` to `FIXES` (`game.js:27`), with a THINK line (*"You've asked her to let you off. You've tried to let her off."*) and a row in DESIGN.md's fix table. Both branches record `fix: "permission"`. The repeat rule is per branch, so trying both doesn't count twice. If the author doesn't want a sixth fix, count `loop` as nothing and `go` as `peace`.
- Optional: the porch's clear-day free reply for *say go* (*"Same word. It means something else now."*).

### #4. The Screen Door → Wednesday, the Kitchen

_★ The brave Nell's **The Screen Door** and **Wednesday, the Kitchen**, the dreamer's **The Practice Run**, the schemer's **Dress Rehearsal**, and sim P7._

The brave Nell found a reason to let go that none of the Maya fixes give: **the people who would change with you only exist in tomorrow.** Anything said inside the loop is erased by 7:14. This is the forward half of the thesis, *moving forward*, which the game otherwise only gestures at in the word "Wednesday."

**The scene** (kitchen, with `mom` and `feelings`: *finish her sentence*, *friends who aren't what*, *I'm gay*):

> "Friends who aren't what, Mom."
>
> "Who aren't leaving."
>
> "That's not what you were going to say."
>
> She looks at the coffee maker.
>
> Tomorrow is Tuesday. She won't remember any of this. You can say anything.
>
> "Friends who aren't girls I'm in love with."
>
> The coffee maker finishes. It beeps three times. Nobody moves.
>
> Then she puts her keys down on the counter, which she never does, because she always loses them. She comes back. She kisses the top of your head, and this time she stays there, chin on your hair, long enough to be late. She is never late.
>
> "Eat your eggs," she says, into your hair.
>
> They're cold. You eat them.
>
> The rest of Tuesday goes the way Tuesday goes. At 6:30 you still say it. *Fine. Then go.*

Night:

> You told her. She put her keys down.
>
> Brave in a kitchen isn't brave in a driveway.
>
> And tomorrow it'll be 7:14, and she'll be at the screen door with her keys, and she won't know.
>
> You could tell her every morning for the rest of your life. It would never once be *said*.
>
> Tomorrow.

**Wednesday** (after the true ending, with `out_loud`: *mom*, *kitchen*, *tell her*):

> You get up. You go to the kitchen.
>
> Eggs under a plate. Mom at the screen door with her keys. Not quite leaving.
>
> "Mom."
>
> She turns around. She actually turns around.
>
> You've said it a dozen times. You've never said it on a Wednesday.

Then *get up* ends it as now, with a different credit line: `[if out_loud]` *{n} Tuesdays. One Wednesday. It's the one that counts.* Cut the scene before the words. The author already ends Wednesday on *"Later."* instead of on a reply. The restraint is the point: the game shows the turn, not the conversation.

**Tone guards, reconciled across the Nells.** sim P7 says Mom never finishes her sentence, and DESIGN.md says *"She never finishes it."* The brave version (*"Friends who aren't the whole world. That's what I was going to say."*) breaks that, so this sketch uses the dreamer's version: Nell finishes **her own** sentence, and Mom answers sideways, with her keys and her chin and the eggs. Mom stays canon. Nell changes.

**Locked versions.** With `mom` only: *"Who aren't leaving." "Right."* Night: *"You both picked the same lie. It fit so easily."* With neither: *"Mom. I'm—" "You're what, baby?" "Late."*

**The decision-tree path, worked backwards.**

| Chain (Nell) | Becomes |
|---|---|
| *The only day it counts is the one after this one.* | The ending: Wednesday's kitchen. Locked on the true ending plus `out_loud`. |
| *But I can only get there by letting this one go.* | The existing gate to Wednesday (`ready`, all seven moments let happen). Nothing new. |
| *But tomorrow it'll be 7:14 and she won't know.* | The night, the failure: the loop erases it. |
| *So I can say anything. / So why are my hands shaking?* | The scene. Teaches `out_loud`. |
| *I could finish it for her. / But I'd have to know how it ends.* | **Lock: `feelings`** (the sketchbook, or the photo strip plus August). |
| *Mom almost said it. "Friends who aren't—"* | **Lock: `mom`** (ask what Lourdes said). The existing `mom` branch is the learning scene. |

**Why it serves the theme.** It's the only ending that makes *moving forward* concrete without breaking the rule that the past can't change. The loop is a rehearsal room, and a rehearsal room is not a life. It also gives the queer B-story an ending of its own, which the game currently has nowhere to put. And it closes the worst hole the brave Nell found: today a player who types *i'm gay* is told it *"doesn't feel like the kind of thing that would change anything."*

**What it takes to build.**
- `kitchen.words`: `out: ["gay", "lesbian", "queer", "like girls", "in love", "finish", "arent what", "who arent", "come out"]`. It's checked before the global `confess`, which is aimed at Maya. `changes: { out: "mom truth" }`. Optionally route `out` at 7:14 too, with a `[from wake]` line.
- Branch `mom truth`, three cases: `needs: ["mom", "feelings"]` with `learn: ["out_loud"]`, a night and no fix. `needs: ["mom"]`, the same lie, with a night. Otherwise, *"late"*, with a night.
- Wednesday, data only: `wednesday.words.mom: ["mom", "kitchen", "downstairs", "tell her"]` above `end`. `wednesday.replies.mom` as a tagged array: `[if out_loud]` the scene, `[if not out_loud]` *"Later. She's already at the screen door."* `say()` already filters tags. Tag the alternate credit line in `wednesday.end`.
- The global `out` action (§2), so *i'm gay* stops getting the default miss everywhere.
- A THINK line for `out_loud`: *"You said it out loud once. In the kitchen. Nothing fell down."*

### #5. Wearing It Out

_The dreamer's overthinking ending. Kin: the repeat rule's *"driving a car from the back seat,"* the final night's *"You play it back a little,"* and sim §8: *"Overthinking doesn't end. It stops being in charge."*_

The author's note says the game is about *"going back over something that already happened, again and again."* This ending is that, made literal. It's also the only one that speaks to a player who has been stuck for a long time without being ready.

**The scene.** Nothing new to type. From about the tenth Tuesday on, while the way out isn't open, the day starts to wear like a tape:

> `[worn]` *(diner)* "Her bus, Nell. Eight forty— Eight forty— Eight forty-five." Theo doesn't notice. You do.
>
> `[worn]` *(driveway)* She's wearing your jacket. The sleeves are pushed up. Or down. You've seen it so many times you can't remember which one you saw first.
>
> `[worn]` *(7:14)* The stain on the ceiling. You used to know what you thought it looked like.

The failure lands when she tries to *keep* the day: she lets everything happen without being ready (the existing `tooSoon` nights, which is exactly what *"I'll just watch, I won't change anything"* looks like in play). The `tooSoon` night gets a worn tail:

> `[worn]` You try to picture her face, and you get the one you made up on Tuesday nine.
>
> `[worn]` You can't remember which one was real.
>
> `[worn]` You played it so many times you wore the real one out.

The existing lines that say what's missing (*"you still don't know why"*) stay. The worn lines sit on top of them.

**The payoff.** On the honest day, `[worn]` is off, because the clear telling is the one copy that isn't worn. One `[clear]` line at the diner: *"He says it once. Eight forty-five."*

**The decision-tree path, worked backwards.**

| Chain (Nell) | Becomes |
|---|---|
| *Which one was her?* | The ending: the worn night. |
| *But I've watched it so many times I can't remember if her sleeves were up.* | The `[worn]` lines in each moment. They're shown, not told, for several days before the night names them. |
| *So I'll just watch. I won't change anything.* | The existing path: letting everything happen before the way out is open (`tooSoon`). No new input. |
| *It's also the last one she's in.* | The motive: keeping Maya by keeping Tuesday. |
| *Not here it isn't over. Here she's in the driveway every night at six-thirty.* | **The lock: many Tuesdays.** The thought only occurs to someone who has lived a lot of them. |
| *If I can't fix it, I can at least keep it.* | At least one fix tried, so she knows no version keeps Maya. |

**Why it serves the theme.** Replaying a memory doesn't keep it. It replaces it with your copies. Every 2 AM replay edits the original a little, until you're mourning your own reconstruction. It's the cost of overthinking, shown to the exact player who is doing it. And because the honest day is the one telling that doesn't skip, it makes the way out feel like getting the real Maya back, not losing her.

**What it takes to build.**
- **Engine** (about 6 lines): a `[worn]` tag in `Line.addTag`/`showsIn`, true when `days >= 10 && !isReady()`. (Or `[worn]` as a derived fact, the way `relived` is derived, so it works as `[if worn]` with no new tag kind.) The threshold is a guess. Tune it against the variant runs, which reached the true ending between about the 7th and 14th Tuesday.
- **Story:** one `[worn]` line in each of four or five moments, three `[worn]` lines in each `tooSoon` night, and one `[clear]` diner line.
- **The cheap version** (data only): three lines in `again.more`, such as *"Theo's line skipped yesterday. He didn't notice."* It's weaker, because `more` cycles regardless of days.
- **Risk.** It shouldn't feel like punishment for slow play. Keep the worn lines small, and keep every `tooSoon` night's pointer to what's missing.

### Just outside the five

- **The Porch Light** (B7). The most surprising idea, and the cheapest to try: one `[clear]` line in the porch's `letItHappen` (*"At 7:58 the light clicks off. It's her hand. She stood there the whole time, waiting for the knock."*). The porch has no `truth`, so a `[clear]` line only shows on ready days, which is exactly the honest day. The full version (WAIT as a learning scene) needs a branch with a night.
- **Maya's List** (B9). The best mirror for overthinking. Data only.
- **The Other End of Read** (B5). Three Nells reached it, it's data only, and it fixes two misfires.
- **What She Was Like** (B16). It gives the "ask someone else" route to `why_secret` that DESIGN.md's own chain promises.
- **Everything I Know** (A6). It fills the schemer's biggest hole: knowledge with nowhere to go.

---

## 4. Ideas to reject or park

### Reject

| Idea | Why |
|---|---|
| **Only True Things Keep** (D; ink on her palm that survives the night) | **Cheats the loop.** Every Nell's central finding is that the loop erases what you do and keeps what you learn. Physical carry-over, even only for true sentences, breaks the one rule all five agree is the game's spine, and THINK already is this mechanic. Keep the clean palm as a free reply (*"Tomorrow your hand will be clean"*). |
| **The Corkboard of Tuesdays** as an object (D; strips of fixes that appear) | **Contradicts the reset** for the same reason: the fixes would leave physical traces. Salvage it as a ready-morning line in Nell's head: *"There's a strip in your head for every one of them. Only one is on the corkboard."* |
| **Midnight's WED 12:00 AM glimpse** (D) | **Contradicts The Minute** (M), which is the stronger idea: 11:52 holds because she's holding it. A glimpse of Wednesday also spends the hope the game withholds until the end. Keep M's version (B3, §3 #1). |
| **The Perfect Tuesday** montage (S) | **Cheats the one-change rule.** It's seven changes in one day. Keep its night line (*"You got every line right. You weren't in a single one of them"*) for the repeat night, or keep B's single-change *Best Possible Tuesday* night. |
| **Forty Miles** (S; steal the ticket) | **Off-character, and duplicates keep.** Nell's defining habit is never asking for anything back. Taking someone's ticket is the opposite of who she is, and it needs canon (a 10 PM stop forty miles out) for an ending that `stay` already covers. Keep one free reply instead: *"You'd have to be somebody who takes things back."* |
| **Eleven, Ten, Nine** as built (D; the town shrinks a street at a time) | **Too big.** It needs a street counter and rewritten tells for every moment, and it pushes the game's magical realism past its `~` warped lines into literal world-change. The existing *"Eleven streets. Ten. Nine."* in the keep night already says it. At most, add one line to the hide night after a second hide. |
| **D's full "Who's Telling This" answer** (*"like it happened to somebody else"*) | **Spoils the epilogue** on the without-knowing path, the only path that has it. Keep only the oblique seed (D4). |

### Park (needs an author decision first)

| Idea | The decision |
|---|---|
| **Mom's Tuesday** and **The Ride** (B) | Two canon additions: Mom had a Maya (Annie Pruitt, Tulsa), and Mom is home at 8:40. The Nells disagree about where Mom is at 8:40: S says *"on till nine,"* Mo says *"off at eight,"* and B has her at the kitchen table. Pick one. The lighter version keeps only the bus: *"My best friend left once. I didn't go to the bus. That's all I'll say about it."* The Ride stacks a second staged repair on top. Build Mom's Tuesday first, if at all. |
| **Booth Four, After** (B) | Is Theo queer, or is he the boy who got into culinary school and stayed? Both work. The second is also *She stays* seen from inside. |
| **What She Was Like** (B) | Did the letter come in March? The jacket "since March" and the epilogue's *"Months before Thursday"* already point there. Also: should it teach `why_secret` (§5)? |
| **Fourteen Miles** (M) vs. **walking out of town** (D) | Can you leave Calder on foot? M says yes (a gas station 14 miles out, and `could_leave`). D says the road brings you back in past WELCOME TO CALDER, which matches the station fix. The station's circling lines are `~` warped, so M's version is canon-safe if the circling is how Nell *felt* it. Pick one rule for the whole game. |
| **Overtime** (S) | Two new canon details: Earl the driver, and his cherry pie every Tuesday at 8:30, which is why the bus is late. Cheap, and it fixes a misfire. |
| **The First Person Is Nobody** (B) | The church is unlocked on Tuesdays (Mrs. Henderson does the flowers). Write it with no pastor and no judgment. It's the most sensitive scene here. |
| **The porch timeline** (B7) | Make one canon of what Maya does behind the door (stands, sits, the switch at 7:58, the last box at eight, her mom back at 9:20), so the four porch scenes never contradict each other. |

### Fact names that collide

The Nells proposed facts independently. Reconcile these before building:

| Name | Meanings | Suggestion |
|---|---|---|
| `theo_too` | B: Theo is in love with someone too. M: Theo didn't call her at six. | `theo_too` (B), `theo_called` (M) |
| `other_side` | S: Maya reading her *sorry* through the curtain. B: living "everybody knew" from the inside. | `other_end` (the Read mirror, D/S/Mo), `other_side` (B) |
| `her_part` / `yours` | The same idea (D, M) | `yours` |
| `her_face` / `red_eyes` | The same idea (D, M), and sim P2 teaches `why_secret` instead | `red_eyes`, a heal key only (§5) |
| `already`, `unfinished`, `outside` | sim | Check against this list |

### Too big for the scope (keep as ideas, don't build now)

A night that works as an eighth moment with its own changes (D's proposal 5). Only the small `nightReplies` fix (§2) is needed now. A street counter. A montage engine. Facts that track every ritual (`gave_jacket`, `tore_strip`, `spent`, for Mo's *Back at 7:14*): build that morning hint only if three or more rituals exist.

---

## 5. How this fits with the two existing ways out

### The two ways out, unchanged

| | Without knowing (true true) | With the truth (true) |
|---|---|---|
| When | the second Tuesday only | after 3 fixes + `why_secret` |
| How | ENTER through all seven moments | ENTER through all seven moments |
| What follows | the night of not knowing, then the epilogue ten years later | the honest night, then Wednesday |

Nothing in this atlas replaces either one. The new material sits beside them in four ways.

**1. A third telling of the true ending: Watching It Go (§3 #1).** It has the same lock (`ready`) and the same six let-it-happen moments, and only 8:40 is answered differently. It's the only new idea I'd let reach Wednesday by another door. Two others fold into it rather than standing alone: *11:53* becomes its night, and *The Last Light* is the same scene.

**2. Codas to Wednesday.** *Face Up* (D2), *Wednesday, Unplanned* (D3) and *Wednesday, the Kitchen* (D1, §3 #4) are all Wednesday replies. Each one is a first small act that points forward without touching Tuesday. They follow the author's restraint: *"Later."* stays, and nobody answers Maya's text on screen.

**3. Seeds for the epilogue.** *Who's Telling This* (D4), the 8:40 *write it all down* reply (*"You wrote 'you'. You leave it."*) and *The Window Seat*'s first sight of herself all point at the reveal that Nell has been telling it in the second person. None of them is reachable on day two except the free replies, so keep those oblique.

**4. Rehearsals of letting go.** *Delivered*, *The Unsent Letter*, *The Porch Light* and the porch vigil are acts where Nell changes nothing Maya will ever know. They don't open the way out, but they let a player practice it.

### Where the imagined run challenges the current design

**a. "Letting go" currently means pressing ENTER. Some acts might count too.** DESIGN.md's Decision 3 rejected saying "Fine. Then go." on purpose, *"because that's still doing something."* The mourner found a sorting rule that agrees with that decision and still makes room: **if Maya would ever know about it, it's a fix. If only Nell knows, it can be letting go.** Saying it on purpose fails that test: Maya hears it. Watching the bus from the tower, staying awake with the phone face up, and an unsent letter pass it. The engine already half-agrees: typing what Nell did counts as letting it happen, and so does `hide` at 8:40. **My recommendation:** adopt the rule in DESIGN.md as one sentence under *Rules that came out of the chains*, and use it for exactly one input (§3 #1) at first.

**b. The "know why" gate has only one door, and the author's own chain promises two.** The *She stays* chain says Nell could learn why by asking Maya *"or someone else."* The house teaches `reason`, but `why_secret` is only taught at the tower. The imagined run found four more ways to understand why Maya never told her, three of them from inside Nell herself:
- *What She Was Like* (B16): asking someone else, as the chain says. Mrs. Reyes: *"If I tell Nell, I won't go."*
- *The Ticket in Her Pocket* (B11): she keeps the same secret, for the same reason.
- *Everybody Knew (Again)* (B12) and *Secondhand* (B10): she does what Maya did and sees why.
- *Maya's List* (B9): Maya overthinks too.

B12 proposes letting `other_side` count in `isReady()`. **I'd keep one key, `why_secret`, and let What She Was Like teach it** (it matches DESIGN.md's chain exactly, and Mrs. Reyes says the same sentence Maya says at the tower). Let the mirror scenes teach their own facts and add a line each to the final night. A second key would mean auditing every `[clear]` line for things Nell might not know.

**c. New fix categories would dilute the fix table.** The Nells proposed eleven new fixes: permission, blessing, record, gift, back, right, witness, reword, proof, answer (sim P3) and to-be-known. The table works because each row is one kind of wanting, and every new row lowers the cost of the three-fix gate. **Add at most one: Permission** (§3 #3), which covers both asking to be let off and letting her off. Map the rest onto the existing five:

| New ending | Counts as |
|---|---|
| The Jacket, Taken Back | keep |
| Keep It, Leave It, A Full Driveway, Lights Out | peace |
| Writing It (sketchbook, letter), Said to a Door, The Fourth Frame | confess |
| Ding-Dong | sorry |
| The Ice Machine (locked version) | station |
| Everything I Know, The Honest Fight, Collateral, Overtime, The Screen Door | no fix (learning scenes with a night) |

If permission is added, the fix table row is: **Permission** | being told it's okay to stop, or being the one who says it | *"She can't let go of it for you."*

**d. Learning without a night can leak into the without-knowing path.** Several proposals teach a fact and leave the moment open: Her Face (B4), sim P2, the Porch Light as a free action, the `out` replies. Today no branch on day two teaches without ending the day, so the only guard is `days === 1`. A player could learn the truth on the second Tuesday, press ENTER through the rest, and get *"You still don't know why she didn't tell you"* while knowing. **Before building any no-night learn, add sim P17's guard:** finish `withoutKnowing` only if no facts were learned. The free replies that reveal truths (the porch-light hand) should be `[clear]` or gated, never shown on felt days.

**e. The honest day already leaks once.** On the five-Tuesday speedrun (E4), the clear diner says *"It's at the TV"* to a Nell who never breathed at the diner. That's the same problem Decision 5 fixed for `why_secret`. Tag the clear diner lines `[clear, if nobody_laughed]` and give `[clear, if not nobody_laughed]` a line that admits she never looked: *"Somebody at the counter laughs. You don't turn around. You never did find out."* (That fits the theme better than a new gate.)

**f. The brave Nell's challenge to the thesis.** Every existing fix fails because of Maya: she still goes. The Screen Door fails because of **the loop**: what Nell says inside it can't keep. That adds a second reason to let go: not only *"you can't change the past,"* but *"the people who'd change with you only exist in tomorrow."* It doesn't contradict the design. It finishes the sentence the thematic statement starts (*"moving forward means…"*). Wednesday, the Kitchen is where the game could say so.

---

_What I didn't do: build or test any proposal in the game. Only four misfires were re-checked on the real game (sessions in `scratchpad/harness/sessions/atlas/`). Everything else marked "today" is quoted from the five imagined files, which tested with the same harness. I didn't read the ten `docs/playtests/variants/` runs in depth, only enough to confirm they exist and that the ones I checked reach the true ending between about the 7th and 14th Tuesday, which is what the `[worn]` threshold should be tuned against. Engine line counts are estimates from reading `game.js`._
