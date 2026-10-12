# Imagined play 04: the Nell who tries to break the loop

_One of several imagined playthroughs of "Tomorrow." This Nell is **meta**: she treats the loop like a game with a seam somewhere, and she goes looking for it. She refuses to sleep, stays up past 11:52, types "wake up" and "this isn't real," talks to whoever keeps saying "you," says the loop out loud, tells people about it, and tries to walk out of Calder at 7:14._

_How to read this. Blockquotes are imagined game text, in the game's voice. **Game now** says what the real game (story.js + game.js, played with the harness) does with that input today. **New** marks things the game doesn't have. Proposed fact and branch names are in `code`. Anything that would become canon is marked **(proposed canon)**._

---

## Who this Nell is

> Okay. Rules.
>
> It's always 7:14. It always ends at 11:52. I get one thing per day. Whatever I change, the rest of the day falls in behind it like dominoes. Whatever I learn, I keep. Whatever I carry, I don't: the forty dollars was back in the drawer.
>
> So it's a system. Systems have edges. You find the edge and you push.
>
> I've seen the movie. The guy gets it right eventually. In the movie it's funny.
>
> I'm not doing this because I'm scared. I'm doing this because if I can figure out how the day works, I won't have to be in it.

She's the same seventeen-year-old: funny as a defense, counting things, phone face down. In her, the joke becomes being **clever**. Working out the rules is her version of the bit. If Tuesday is a puzzle, then the driveway is a mechanic, not a wound, and she never has to stand there and feel it.

That makes her the most useful Nell for finding holes, and the most dangerous for the theme. Every "cheat" she tries is another way of **holding on**:

| Her move | What it really is |
|---|---|
| Stay awake past 11:52 | Refusing to let the day end |
| Leave Calder at 7:14 | Not being there, so the regret can't happen |
| Say people's lines before they do | Controlling the day so it can't surprise her |
| Tell someone it's a loop | Getting someone else to carry it, or to give her permission |
| "This isn't real" / "wake up" | Getting out of the feeling by calling it fake |
| Talk to the narrator | Getting outside the story so she doesn't have to be in it |
| Go back further, to Thursday | Finding the *real* do-over, the one before the alarm |

**The rule for answering her: answer the cheat, don't block it.** A meta input should never get "That doesn't work." It should get a small, true, in-world reply that turns the cheat back on itself. Each reply teaches the same thing from a different side: the loop isn't a lock to pick. It's a hand that won't open.

**The one exception:** staying awake can become a real way out, because its meaning can flip. Staying up so tomorrow can't come is holding on. Staying up to *watch* today end is letting go. (Endings atlas, entries 1 and 2.)

---

## The day, moment by moment

Played on the second Tuesday and later, unless noted. Day one is already handled well: any meta input gets *"You mean to wake up." / "But it's Tuesday, and Tuesday already knows how it goes."* That's a good answer to a meta player and should stay.

### 7:14 AM: her room

1. **"wake up"**. **Game now:** generic miss (*"You think about it. It doesn't feel like the kind of thing…"*). **New** free reply:
   > You are awake. You've been awake since it was dark.
   >
   > That was never the problem.

2. **"this isn't real" / "this is a dream" / "pinch myself"**. **Game now:** miss. **New** free reply:
   > You pinch the inside of your wrist. It hurts the normal amount.
   >
   > The stain is the stain. Mom's radio is doing the weather for somewhere else. It's real. It just isn't new.

3. **"time loop" / "groundhog day" / "i know this is a loop"**. **Game now:** miss. **New** free reply (it's her joke reflex):
   > You've seen the movie. The guy gets it right eventually.
   >
   > In the movie it's funny.

4. **"who are you" / "narrator" / "who's talking" / "hello?"**. **Game now:** miss. **New** free reply, a seed for the epilogue that gives nothing away:
   > Nobody answers.
   >
   > Somewhere, somebody at a counter laughs at a TV.

   After the way out is open (`ready`), it can go one step further:
   > *You* wake up. *You* eat the eggs. Whoever's telling this always tells it like it happened to somebody else.

5. **"don't sleep" / "stay awake"**. **Game now: misfire.** "don't sleep" plays the **hide** branch (the word *sleep*), so she spends the whole day under the blanket. "stay awake" matches `stay` and answers *"She isn't here. Not yet."* **New** free reply at 7:14:
   > It's morning. You can't not-sleep in the morning.
   >
   > You'll have to wait for the part you're scared of. You know when it is.

6. **"write it down" / "write on my hand" / "leave myself a note"**. **Game now:** miss. **New** free reply:
   > You write it on the back of your hand in pen: TOWER. KNOCK. 8:45.
   >
   > Tomorrow your hand will be clean. It doesn't matter. You've never forgotten one second of today. That's the problem.

7. **"turn off the alarm" / "smash the alarm"**. **Game now:** miss. **New** free reply (wake `freeReplies`, "alarm, clock"):
   > You slap it quiet. Tomorrow it'll be ringing when you open your eyes, like you never touched it. It's always already ringing.

8. **"what day is it" / "count" / "how many days"**. **Game now:** miss. **New** free reply using `{n}`:
   > Tuesday. Number {n}. You've been counting.
   >
   > You're good at counting. Eleven streets. Four booths. One bus.

9. **"go back to Thursday" / "go back further" / "Monday"**. **Game now:** miss. **New** free reply. This is the most important small reply for this Nell:
   > It starts at 7:14. It always starts at 7:14.
   >
   > Everything you'd actually take back happened before your alarm.

   Could set a THINK-only fact `before_alarm`: *"The things you'd take back, Thursday and Monday night, happened before the loop starts."*

10. **"leave Calder" / "walk out of town" / "hitchhike" / "run away"**. **Game now:** "leave town" and "run away" match the **bus** words, so 7:14 says *"Not yet."* "walk out of town" is a miss. **New** branch `away` (atlas entry 3, *Fourteen Miles*):
    > You get dressed in the dark and go out the back so the screen door won't slap.
    >
    > Past the feed store. Past the sign. THANKS FOR VISITING CALDER. You've never read the back of it before. It's blank.
    >
    > It's a twenty-minute walk. It was always a twenty-minute walk.

11. **"text Theo"**. **Game now: misfire.** It plays the **text** branch and texts *Maya* (*"> hi."*). **New**, which also opens *Say It First* (atlas entry 6):
    > > i know about the bus. dont be weird at lunch
    >
    > Three dots. *oh thank god.* Then: *how*
    >
    > You don't have an answer that isn't insane.

12. **"call Maya" / "say it out loud" / "tell myself"**. **Game now: misfire.** All three match `talk`, which at 7:14 goes straight to the **tower**. "call maya" going there is close enough. "say it out loud" and "tell myself" shouldn't. **New** free reply for "say it out loud":
    > You say it to the ceiling. “It's Tuesday again.”
    >
    > The stain doesn't care. Out loud it sounds smaller than it does in your head. Most things do.

13. **"stay in bed all day"**. **Exists:** **hide**. Good as is.
14. **"look at phone"**. **Exists:** **phone** (three cases). Good. This Nell does it to check the date. The game is right not to show the message until she has a reason to scroll.
15. **"tell mom about the loop"**. **Exists:** at 7:14 it reaches **mom** (word *mom*). See the kitchen.

### The kitchen

1. **"Mom, I'm living the same day"**. **Game now: misfire.** *"the same"* is in the `nothing` words, so the kitchen plays out as if she said nothing. On day two that silently counts toward the without-knowing ending. **New** (part of *Everybody Has a Tuesday*, atlas entry 7):
   > “Mom. I've lived today before.”
   >
   > She laughs at the coffee maker. “Baby, I've lived today for twenty years. It's called the pharmacy.”
   >
   > Then, for the first time in any Tuesday, she turns around and looks at you. “Is this about Maya?”

2. **"tell mom about the loop" / "tell mom tuesday keeps happening"**. **Exists:** **mom** branch. It works, but the meta line is lost. **New** optional `[if said it]` line before her answer: *She turns around. She never turns around.*

3. **"Mom, if you could do one day over?"**. **Exists** as **mom** (word *mom*). **New** variant:
   > She thinks about it with her hand on the screen door. “Every day, baby. Every single one.”
   >
   > “And?”
   >
   > “And you go to work anyway.” She kisses the top of your head.

   Mom's practical love is already the theme in one sentence. Use it sparingly.

4. **"finish her sentence" / "friends who aren't what?"**. **Exists:** **mom**. **New**, for this Nell, who knows the line is coming:
   > “Friends who aren't—”
   >
   > “Leaving?” you say, before she can.
   >
   > Relief goes over her face like a light. “Sure. Leaving.”
   >
   > You did that. You finished it for her, the safe way. You've been doing it your whole life.

   A small learning beat: Nell isn't only on the receiving end of unfinished sentences.

5. **"microwave the eggs"**. **Game now: misfire.** *"eggs"* is in `nothing`, so it plays as letting it happen. That's harmless, but a free reply is better:
   > You put the eggs in the microwave. Thirty seconds. They come out warm.
   >
   > Mom watches you like you've grown a second head.
   >
   > They're very good eggs. Nothing else changes.

6. **"break a plate" / "test it"**. **Game now:** miss. **New** free reply:
   > You think about dropping a plate to see if it's whole tomorrow. It will be. You already know. You just want to hear something break.

7. **"leave town" (from the kitchen)**. **Game now:** *"Not yet."* **New:** routes to `away` the same as 7:14, so she walks out past Mom: *“Where are you going?” “Out.” It's true for once.*

### 11:40 AM: Dot's Diner

1. **"her bus is at 8:45" / "I know, eight forty-five" / "say it before Theo"**. **Exists** as **theo** (the word *bus*). That's a reasonable landing, but this Nell means something else. **New** branch `first` (atlas entry 6, *Say It First*):
   > “Okay, so. Are you going to the station tonight, or—”
   >
   > “Eight forty-five,” you say. “Her bus. I know.”
   >
   > Theo's whole body unclenches. “Oh, thank god. Oh my god. I thought I was gonna have to—” He pours you coffee you didn't order.
   >
   > Somebody at the counter laughs. It doesn't land anywhere. You were ready for it.

2. **"tell Theo about the loop" / "Theo, I've lived today before"**. **Exists:** **theo** (it makes her look at him). Good, but the confession is lost. **New** (atlas entry 7, *Everybody Has a Tuesday*):
   > “Is this a bit?” Theo says. “Are you doing a bit right now?”
   >
   > “…Yeah.”
   >
   > He doesn't laugh. He turns the order pad over. “If I got today over, I'd do six a.m. Her mom says it at the register and I just keep wiping the same spot. I had my phone in my apron the whole time.”
   >
   > “Why didn't you call me?”
   >
   > “Because then I'd be the one who told you.”

3. **"I know what you're going to say"**. **Exists** as **theo** (word *say*). Fine.

4. **"somebody's about to laugh" / "predict the laugh"**. **Exists:** the word *laugh* is in the diner's `theo` words, so it already reaches the diner truth through **theo**. **New** opening lines for that case, so it reads as her using what she knows:
   > “Somebody's about to laugh,” you tell Theo.
   >
   > Somebody at the counter laughs. You turn around before it can become sunflowers.
   >
   > Two truckers and a game show. A man is winning a boat.

   Then the existing `DINER_TRUTH`. Cheap: a `[if predicted]`-style opening, or a separate tiny branch that reuses `DINER_TRUTH`.

5. **"this already happened" / "this isn't real"**. **Game now:** miss. **New** free reply:
   > The coffee is burnt. The booth is sticky. Theo's hand is shaking.
   >
   > It already happened. It's happening anyway. That's the part nobody tells you about already.

6. **"leave before Theo sits down"**. **Game now: misfire.** *"diner"* plays **theo**, which makes her *stay* in the booth. **New**, a one-line variant of `first`:
   > You leave a dollar on the table at 11:39 and you're gone before he can slide in. You never hear him say it.
   >
   > It turns out not hearing it doesn't help. You already know it by heart.

7. **"ask Dot if every day is the same"**. **Game now: misfire.** *"the same"* is in `nothing`, so the diner plays out as if she let it happen. **New** free reply (Dot gets one line, **proposed canon**):
   > Dot doesn't look up from the crossword. “Every day's Tuesday in here, hon.”

### 3:15 PM: Main Street

1. **"keep walking out of town"**. **Exists:** `nothing` (*keep walking*) lets it happen. That's right for "keep walking," wrong for "out of town." **New:** from 3:15, `away` plays a short version:
   > You walk past the feed store and keep going. By four you're sitting under the back of the sign. It's blank.
   >
   > Over your shoulder, the tower still says CALDER. You can read it from here. You can read it from anywhere.

2. **"climb the tower and stay up there all night"**. **Game now: misfire.** `stay` beats `tower`, so the answer is *"She isn't here. Not yet."* But she *is* there. **New:** the tower scene, then *Lights Out* (atlas entry 10):
   > She climbs down at six. You don't.
   >
   > At 8:52 you watch two red lights pull out from the feed store and get small on the highway.
   >
   > At 11:52 every light in Calder goes out at once, like August. The stars come out all at once. There's nobody on your shoulder.

3. **"fix the A" / "repaint the letters"**. **Game now:** "paint the letters" reaches the `letters` free reply, but "fix the a" is a miss. **New** free reply. It's the whole theme in a water tower:
   > You could climb up with a can of paint and make the second A straight.
   >
   > Then it would just be a letter.
   >
   > She was laughing when she painted it. That's what's crooked.

4. **"go to the tower and tell her about the loop"**. **Exists** as **tower**. Fine. Up there, Maya's answer would be the same as at the driveway (atlas entry 5). Keep the loop confession at the driveway, where it costs something.

5. **"wait at the bottom of the ladder"**. **Game now:** miss (the word *wait*). **New** free reply:
   > You put your hand on the ladder. It's warm from the sun. You can hear her up there, a pencil going.
   >
   > _(GO UP, or {enter} to keep walking.)_

6. **"this isn't real" / "wake up"**. **Game now:** miss. **New** free reply (the street's version):
   > You pass the Dollar General.
   >
   > You pass the Dollar General.
   >
   > Okay. That part might not be real.

   It plays with the existing warp line instead of explaining it.

### 6:30 PM: the driveway ("Say something.")

The center of this Nell's play. She has heard every line here a dozen times, and she wants to use that.

1. **"I've lived this day before" / "I'm stuck in today" / "this is the fifth time"**. **Game now:** miss. **New** branch `loop`, two cases (atlas entry 5, *Nobody Can Let Go for You*).
   **Locked** (doesn't know `tried_to_tell`): it comes out as a bit, which is the Thursday failure again:
   > “I've lived today before,” you say. “Like, spiritually. It's Calder.”
   >
   > Maya looks at you for one second too long. Then she laughs, the polite one.
   >
   > “Right,” she says, and picks up the box.

   Night: *She was waiting for you to say it straight. You made it a bit. You don't know why that feels familiar.* That points at Theo and the tower.
   **Unlocked** (`tried_to_tell`): she says it straight, the way Maya tried to on Thursday. See the atlas for the scene.

2. **"you were always going to stay here" (quoting her line before she says it)**. **Game now: misfire.** The word *stay* plays the **keep** branch: *“Stay,” you say. “Please.”* That's the opposite of what she typed. **New** branch `predict` (atlas entry 4, *You Had the Words Wrong*):
   > “You were always going to stay here, Nell,” you say, before she can. “That's just you. That's fine.”
   >
   > You do her voice. You've heard it a hundred times.
   >
   > Maya stares at you. And because you're watching her face this time, to see if you got it right, you see it.
   >
   > Her eyes are red.
   >
   > “Is that what you think I was going to say?”

3. **"I know what you're going to say"**. **Game now:** miss. **New:** same branch `predict`, with Maya's reply first:
   > “Okay,” she says. “What am I going to say?”

   Then as above.

4. **"is today happening to you again too?" / "do you feel stuck"**. **Game now:** miss. **New** free reply. It costs nothing and it's devastating:
   > Maya shifts the box on her hip. “Every day here happens again, Nell.”
   >
   > She looks at you. “That's the whole reason.”

   Calder is her loop. The bus is her way out of it. Pairs with the keep fix (*she stayed, and stopped drawing*).

5. **"you're not real" / "this isn't real"**. **Game now:** miss. **New** free reply:
   > “I'm holding forty pounds of books, Nell,” Maya says. “I'm pretty real.”

6. **"skip to the end" / "fast forward"**. **Game now:** miss. **New** free reply:
   > You'd like that. To skip to the part where it doesn't hurt.
   >
   > There isn't one in today. You've checked.

7. **"you're lying" / "that's not what happened"** (at the narrator, while the driveway is still `[felt]`). **Game now:** miss. **New** free reply that points down the chain:
   > How would you know? You were looking at the jacket.

   In `[heal]`: *No. It isn't. You know that now. It still sounds like this.* In `[clear]`: *No. It doesn't have to be anymore.*

8. **"say fine then go on purpose"**. **Exists:** `original` lets it happen. Correct: design decision 3 already rejected saying it on purpose as the way out.

9. **"don't say anything" / "say nothing"**. **Exists:** `nothing` → *"It comes out the way it came out."* Correct and good: you can't not-say it.

10. **"ask for the jacket back" / "keep the jacket as proof"**. **Exists** as the `jacket` free reply. **New** variant for this Nell, who wants to carry something across the night:
    > You could ask for it back. You could sleep in it. Tomorrow it'll be on her again, sleeves pushed up, and the hook on your door will be empty.
    >
    > Some things don't come back with you. Some things don't come back at all.

11. **"tell her what happens after the bus"**. **Game now:** *"Not yet."* (the word *bus*). **New** free reply:
    > You open your mouth. You don't know. You've never once seen what happens after the bus.

12. **"say it all, in order" / "do everything right this time"**. **Exists** in spirit: **repeat** (*"Why does it sound like you practiced that?"*). The perfect run this Nell wants is already answered.

### The porch ("You could knock.")

1. **"wait on the porch all night" / "sit on the steps until she comes out"**. **Game now:** "wait on the porch all night" is a miss. "sit on the porch until midnight" matches `nothing` (*sit*) and lets it happen. **New** branch `vigil` (atlas entry 8, *Tell Nell—*):
   > You sit down on the top step. The porch light stays on above you.
   >
   > At eight her mom honks. The door opens behind you. Maya steps around you with the last box. Her sneaker, an inch from your hand. Neither of you says anything.
   >
   > Taillights.

2. **"slide a note under the door" / "write her a note"**. **Game now:** both play **knock** (the word *door*). That's fair, but the note is its own idea. **New** branch `note` (atlas entry 9, *I Said It Because—*):
   > You find a receipt in your pocket. Dollar General. You write on the back.
   >
   > *Maya — I said it because*
   >
   > You stop. You don't know the end of that sentence either.

3. **"tell her through the door that I'm in a loop"**. **Exists:** **knock** (the word *door*). Good enough: what she says through the door turns into sorry anyway. Optional **new** line in **knock**, `[if yours]`: *“I keep doing today over,” you say through the wood. She opens the door. “Me too,” she says, and she means something else.*

4. **"shout that it's a time loop"**. **Exists:** the porch's `knock` words (*shout*). Fine.

5. **"stay until the porch light goes off, then knock"**. **Game now:** the `porch light` free reply (*"Someone inside is deciding when to turn it off."*), which is a lucky fit. **New** free reply, for when she says she's waiting for it:
   > You wait for the light to tell you it's too late. It's too late anyway. That's not what the light is for.

6. **"look at the window"**. **Exists** as a free reply (*"She isn't moving away from the door."*). Good. For this Nell it says the cheat isn't needed: the obvious thing was right there.

7. **"say go and mean it the good way"**. **Game now: misfire.** *say* matches `talk`, which the porch maps to **knock**, so she knocks and apologizes. **New**, only on `[clear]` days:
   > *Go.* You say it to the door, quietly, the other way. Get out of here. One of us should.
   >
   > You don't knock.

   On a ready day this is the same as letting it happen. Count it as `nothing`.

8. **"this isn't real"**. **Game now:** miss. **New** free reply:
   > The porch light is buzzing. A moth is hitting it over and over like it'll work eventually.
   >
   > You know how the moth feels.

### 8:40 PM: home ("You could still make it.")

1. **"stay awake" / "don't sleep" / "watch the clock" / "wait for midnight"**. **Game now: misfire.** "stay awake" answers *"That moment's already gone. Today, anyway."* (`stay` belongs to the driveway). "don't sleep" and "don't close my eyes" match **hide**, which here means *let it happen*. On the second Tuesday that **finishes the without-knowing ending**, and on a ready day it **finishes the true ending**, whose last line is *"You close your eyes."* The player who refuses to sleep is told she closes her eyes. **New** branch `awake` (atlas entries 1 and 2, *The Minute* and *11:53*).

2. **"go to the tower and watch the bus go"**. **Game now:** *"That moment's already gone."* **New** (the night half of *Lights Out*):
   > You climb in the dark. From up here the bus is just two lights by the feed store.
   >
   > At 8:52 they pull out and get small.
   >
   > You stay. You want to see what midnight looks like from the top.

3. **"text Maya"**. **Game now:** *"That moment's already gone."* **New** free reply (the brake from nell-simulation.md):
   > You type *i'm sorry* and delete it. You type *go* and delete it.
   >
   > She's on a bus with her head on the window. Whatever you send is the first thing she sees in Chicago. You don't know how to be that.

4. **"write it all down"**. **Game now:** miss. **New** free reply, the origin of the game's voice:
   > You get a notebook and write it all down, from the top.
   >
   > *You wake up. Your alarm is already ringing.*
   >
   > You stop. You wrote *you*. You leave it. It's easier to read that way.

   This quietly sets up the epilogue reveal (*"I always tell it like it happened to somebody else"*) without spoiling it.

5. **"leave town tonight, not with her"**. **Exists:** **bus**. Fine. The station fix already says it: *You can't get out of a day on a bus.*

6. **"run" / "make the bus"**. **Exists:** **bus** (the station fix).

7. **"remember"**. **Exists:** **remember** (from home).

### 11:52 PM: the night (not one of the seven moments, but this Nell lives here)

1. **"stay awake" / "don't close my eyes" / "don't fall asleep"**. **Game now: misfire, and it costs a day.** A command typed at night is passed to the next morning. "stay awake" becomes 7:14's *"She isn't here. Not yet."* "don't close my eyes" becomes 7:14's **hide**, and the player loses the whole next Tuesday under a blanket for typing "don't close my eyes." **New:** a `nightReplies` list checked before the morning starts:
   > You try. You sit up against the headboard and watch the clock.
   >
   > 11:52.
   >
   > Then the alarm is already ringing. You don't remember deciding anything.

   It ends the night as ENTER would, without spending the morning.

2. **"think"**. **Exists:** THINK at night.
3. **"remember" / "text her"**. **Exists:** passed to the morning (remember, text). That's acceptable. These read like plans for tomorrow.

### Wednesday (after the true ending)

1. **"this isn't real"**. **Game now:** *"Not yet. Soon, though."*, which reads oddly here. **New** reply:
   > It's Wednesday. It's real.
   >
   > That's the scary part.

2. **"stay awake"**. **Game now:** *"Not yet. Soon, though."* **New:** *"You're awake. You stayed up for it."* (only after *11:53*).
3. **"go back to sleep"**. **Exists:** *"No. You've slept enough."* Perfect for this Nell.
4. **"check the date"**. **Exists:** `phone` → *"Later."* Keep it.

### Misfires found while playing (the real game, today)

| Moment | Input | What happens | Should be |
|---|---|---|---|
| 7:14 | don't sleep | **hide** branch, day spent | free reply (it's morning) |
| 7:14 | stay awake | "She isn't here. Not yet." | free reply |
| 7:14 | text theo | texts *Maya*, tower scene | Theo text (or a miss) |
| 7:14 | say it out loud / tell myself | **tower** scene | free reply |
| 7:14 | scream | "Not yet." (`original`) | free reply |
| Kitchen | Mom, I'm living the same day | *"the same"* → lets it happen | **mom** or *Everybody Has a Tuesday* |
| Kitchen | microwave the eggs | lets it happen | free reply |
| Diner | leave the diner | **theo** ("You make yourself stay") | a variant of `first` |
| Diner | ask Dot if every day is the same | *"the same"* → lets it happen | free reply |
| Porch | say go and mean it | **knock** (sorry fix) | `[clear]` let-it-happen line |
| 3:15 | climb the tower and stay up there | "She isn't here. Not yet." | **tower** |
| Driveway | you were always going to stay here | **keep** ("Stay. Please.") | `predict` |
| Home | stay awake | "That moment's already gone." | `awake` |
| Home | don't sleep / don't close my eyes | lets it happen → can **finish the game** | `awake` |
| Night | stay awake | passed to 7:14 → "She isn't here." | night reply |
| Night | don't close my eyes | passed to 7:14 → **hide**, whole day lost | night reply |

Root causes: `stay` and `hide` are greedy (*stay awake*, *don't sleep*). `talk` at 7:14 routes anything with *say* or *tell* to the tower. `text` doesn't check who's being texted. `nothing` contains *the same* and *eggs*. Night input always goes to the morning.

---

## Her chains

Written the way the author builds them: one "but…" per line, each link becoming a choice, a lock, or a scene.

### 1. The minute

> If I just don't fall asleep, it can't start over.
> But I always fall asleep. I don't even remember doing it.
> So I'll sit up. I'll watch the clock.
> But it's always 11:52 when it ends. Why 11:52?
> …That's when I read it. Monday. That's when I put the phone down.
> So it isn't Tuesday I keep living. It's that minute.
> But I can't un-read it.
> I can only stop holding the phone face down.

→ `awake` at 8:40 and at night. The 11:52 realization is locked behind `read`. Without it the minute only *feels* familiar, which points back to the phone.

### 2. Fourteen miles

> If I'd never gone to the driveway, I'd never have said it.
> So I'll leave. Walk out of Calder before any of it happens.
> But she'd still go. And I'd still not have said goodbye.
> And she said I was always going to stay. She'd be wrong.
> But nobody would see. Proving it to nobody is the same as not proving it.
> Not saying it isn't the same as not doing it.

→ `away` at 7:14 (or the kitchen, or 3:15). Teaches `could_leave`.

### 3. Say it first

> The worst part was finding out from Theo. In front of everybody.
> If I'd already known, nobody would have seen my face.
> I know now. I could say it before he does.
> But then why do I still say it in the driveway?
> Because it was never about who told me.

→ `first` at the diner. Teaches `not_who_knew`.

### 4. I know what she's going to say

> I know exactly what she's going to say. I've heard it fifty times.
> So I'll say it first. Take it away from her before it can hurt.
> But I've only ever heard it one way.
> I wasn't looking at her face. I was looking at the jacket.
> What if I've been remembering it wrong the whole time?

→ `predict` at the driveway, only while it's `[felt]`. Teaches `red_eyes`.

### 5. If I told her

> If I told her what's happening, she'd help me. She always helps.
> But she'd think it was a bit.
> Because everything I say is a bit.
> Because when she tried to tell me something real, I made it a bit.
> So I'd have to say it straight. The way she tried to.
> And then what? She tells me it's okay?
> But it's only okay until 11:52.

→ `loop` at the driveway, locked behind `tried_to_tell`. Teaches `yours`. A permission fix that fails.

### 6. Somebody else

> If I told someone, at least I wouldn't be the only one who knows.
> But nobody would believe me.
> Theo would listen. He's the only one who ever slides into the booth.
> But what would he even do?
> …What would he do over? He knew at six.

→ telling Theo (or Mom) about the loop. Teaches `theo_too`.

### 7. Thursday

> If I could go back to Thursday, I wouldn't make the joke.
> If I could go back to Monday, I'd answer.
> But it always starts at 7:14. Never Thursday. Never Monday night.
> Every single thing I'd take back happened before my alarm.
> So what is this day even for?

→ the free reply at 7:14 and the THINK fact `before_alarm`. This chain has no fix at the end, which is the point: the loop gives her a day that comes *after* every mistake she'd take back.

### 8. If I'd just waited

> If I'd stayed on the porch, she'd have had to come out eventually.
> But she didn't come out. Her mom drove her to the bus.
> So I'd have seen her mom come back alone.
> And her mom can't keep a secret.
> But what if she only has half of one?

→ `vigil` on the porch. Teaches `crying`, and that some sentences stay unfinished.

### 9. Who keeps saying "you"

> Somebody keeps saying "you." You get up. You eat the eggs.
> Who talks like that?
> I do. When it's too much, I tell it like it happened to somebody else.
> But it didn't. It happened to me.

→ the narrator free replies and the "write it all down" reply. It pays off the existing final night line, *"That's what happened. You were there. It was you."*

### 10. Watching it go

> I'll stay up. I'll watch it end this time.
> But not to stop it. Just to see.
> 11:52. That's where I put the phone down.
> I don't have to pick it up. I don't have to put it down either.

→ *11:53*, the alternative last night of the true ending.

---

## Endings atlas

Each entry: what happens, the chain (one "but…" per line), the locks, the moments it touches, its kind, why it isn't enough (or why it works), and how it fits the theme.

### 1. The Minute

**What happens.** At 8:40 (or at 11:52) Nell refuses to sleep. She sits up with the phone face down in her lap and watches the clock. The night gets its first new header in the game:

> # TUESDAY | 11:51 PM
>
> You don't close your eyes. You sit against the headboard and watch the clock on the nightstand.
>
> 11:51.
>
> 11:52.
>
> It stays 11:52 a long time. Longer than a minute. Long enough to hear the fridge come on in the kitchen.
>
> `[if read]` You know this minute. Monday. Her message lighting up the ceiling. Your thumb. The phone going face down, gentle, like it might bite.
>
> `[if read]` It isn't Tuesday you keep living. It's this. Everything after this minute is just what it cost.
>
> `[if not read]` 11:52. Something about the number. You don't look at why.
>
> You wait for 11:53. It doesn't come. You don't remember closing your eyes.

Night: *"You've never seen 11:53. You're starting to think you're the one keeping it."* / *"Tomorrow."*

**Chain.**
> If I just don't fall asleep, it can't start over.
> But I always fall asleep.
> But it's always 11:52 when it ends.
> …That's when I read it.
> But I can't un-read it.

**Locks.** None to play it. The insight needs `read` (look at the phone at 7:14 after learning `tried_to_tell` from Theo, breathing, or the tower). Without `read`, the line *"Something about the number"* points back to the phone. Learns `minute` (THINK: *"The loop ends at 11:52. That's the minute you put the phone face down."*).

**Moments.** Home (8:40), the night.

**Kind.** Learning scene.

**Why it isn't enough.** You can't keep a day by not sleeping. You can only keep yourself out of the next one. Staying awake *is* the loop: the minute holds because she's holding it.

**Theme.** It's the meta player's first instinct, and the game answers it with the theme in literal form. It also makes the 11:52 stamp on every night, which is already canon, pay off on purpose.

### 2. 11:53 (a new way out, a variant of the true ending)

**What happens.** On a `ready` day, Nell lets moments 1 to 6 happen, then at 8:40 types STAY AWAKE. In the original Tuesday she lay there, so staying awake doesn't change what happened. It counts as letting it happen, and the final night is told this way instead:

> # TUESDAY | 11:52 PM
>
> You don't close your eyes this time. Not to stop it. Just to see it go.
>
> Somewhere out on the highway, the bus is getting smaller.
>
> You play it back a little. The driveway. Her face when you said it. You hurt her. That's what happened. You were there. It was you.
>
> 11:52. It holds, the way it always holds.
>
> You turn the phone over. Face up. `[if read]` Her message is the last one in the thread. You don't answer it. You don't hide it either.
>
> 11:53.
>
> You've never seen 11:53.
>
> It looks like every other minute.

Then Wednesday morning, as now. *"Phone: Later."* stays, so she still doesn't reply. That remains the future's job.

**Chain.**
> I'll stay up. I'll watch it end this time.
> But not to stop it. Just to see.
> 11:52. That's where I put the phone down.
> I don't have to pick it up. I don't have to put it down either.

**Locks.** `ready` (three fixes and `why_secret`), exactly like the true ending. Richer with `read` and `minute` (the face-up phone means more once she knows what face-down meant).

**Moments.** All seven (let happen), with home answered by STAY AWAKE.

**Kind.** New way out (an alternative telling of the true ending, not a new route).

**Why it works.** It isn't a cheat. It needs the same locks as the true ending and the same six let-it-happen moments. The only thing that changes is the *meaning* of the meta move. The first time she stayed awake it was to stop tomorrow. Now it's to watch today end. The phone going face up is the one physical act in the ending, and it doesn't change the past: it stops hiding from it.

**Theme.** Letting go isn't forgetting, and it isn't sleeping through it. It's being awake for the moment the thing becomes the past.

### 3. Fourteen Miles

**What happens.** At 7:14 she walks out of Calder before any of the day can happen.

> You get dressed in the dark and go out the back so the screen door won't slap.
>
> Past the feed store. Past the sign. THANKS FOR VISITING CALDER. You've never read the back of it. It's blank.
>
> It's a twenty-minute walk. It was always a twenty-minute walk.
>
> By noon you're at a gas station fourteen miles out. The man at the counter asks what you want. Nobody has ever asked you that. At Dot's she starts your grilled cheese when the bell rings. **(proposed canon, from nell-simulation.md)**
>
> You don't know what you want. You buy a Sprite.
>
> At 6:30 you're sitting on the curb by the ice machine, and you're in the driveway anyway. The box. The jacket. *Say something.*
>
> At 9:01 the bus to Chicago goes by on the highway, late like always. You can't see the windows. You wave anyway, at nothing.

Night: *"You're in your bed. You don't remember the walk back."* / *"You didn't say it. You didn't have to. You just went."* / *"Fine. Then go."* / *"Tomorrow."*

**Chain.**
> If I'd never gone to the driveway, I'd never have said it.
> But she'd still go, and I'd still not have said goodbye.
> And she said I was always going to stay.
> But nobody would see me prove her wrong.
> Not saying it isn't the same as not doing it.

**Locks.** None. Available from day two. Learns `could_leave` (THINK: *"Leaving Calder is a twenty-minute walk. It always was."*). With `could_leave`, the driveway's `[felt]` line *"You were always going to stay here, Nell. That's just you."* gets a `[heal]`-style echo: *"That's just you." It isn't. You walked out at 7:14. Staying is something you keep choosing.*

**Moments.** 7:14 (or the kitchen, or a short version at 3:15). It reframes the driveway.

**Kind.** New fix that fails, though it shouldn't count toward the three: it's absence, not a different way of reaching Maya. Its real job is the learning (`could_leave`).

**Why it isn't enough.** She skipped the fight by skipping the day. Her absence says the same sentence. And she spent the last day she had with Maya alone at a gas station.

**Theme.** You can leave a place. You can't leave what happened there. It also quietly answers the felt accusation: staying in Calder was never who Nell *is*. It's a choice, which means letting go of the regret is a choice too.

### 4. You Had the Words Wrong

**What happens.** At the driveway, while it's still `[felt]`, this Nell uses what she knows: she says Maya's line before Maya can, in Maya's voice.

> “You were always going to stay here, Nell,” you say, before she can. “That's just you. That's fine.”
>
> You do her voice. You've heard it a hundred times.
>
> Maya stares at you. And because you're watching her face this time, to see if you got it right, you see it.
>
> Her eyes are red.
>
> “Is that what you think I was going to say?”
>
> “Isn't it?”
>
> She picks up the box. Her mouth does something you've never seen it do. “Doesn't matter now.”
>
> She goes inside. You didn't say *Fine. Then go.* You said something worse, in her voice, to her face.

Night: *"You knew every word of today."* / *"You had her words wrong."* / *"Her eyes were red. You were looking, this time."* / *"What was she going to say?"* / *"Tomorrow."*

**Chain.**
> I know exactly what she's going to say.
> So I'll say it first. Take it away from her.
> But I've only ever heard it one way.
> I wasn't looking at her face.
> What if I've been remembering it wrong?

**Locks.** Only while the driveway is `[felt]` (Nell doesn't know `why_secret`). Learns `red_eyes` (THINK: *"She wasn't laughing in the driveway. Her eyes were red."*). Once `why_secret` is known, PREDICT becomes a free reply: *You know it isn't what she says. You almost say it anyway, to hear it be wrong.* The night points to the tower, where the real line is said.

**Moments.** Driveway.

**Kind.** Learning scene, and a fix that fails in Nell's head (*control: if I say it first, it can't hurt*).

**Why it isn't enough.** Foreknowledge is only as good as the memory, and her memory is the felt version. Knowing a day "by heart" isn't knowing it.

**Theme.** Regret replays the version that hurts. This Nell's superpower, *I know how today goes*, turns out to be the narrator lying to her. It shows the game's unreliable-narrator idea from inside the player's own cleverness.

### 5. Nobody Can Let Go for You (the permission fix)

**What happens.** At the driveway Nell tells Maya about the loop, straight, the way Maya tried to tell her on Thursday.

> “I've lived today before,” you say. “A lot of times. I keep waking up and it's Tuesday.”
>
> Maya looks for the bit. There isn't one. You can see her not find it.
>
> “Okay,” she says. She always believed you. That was never the problem.
>
> “Do I go?”
>
> “Every time.”
>
> `[if keep]` “Once you stayed.” “And?” “You stopped drawing.” She's quiet for a long time.
>
> `[if confess]` “Once I told you. Everything. You said it back.” Her face goes red to the ears. “And I still went.” “You still went.”
>
> “So I get to Chicago.”
>
> “I don't know. I never see that part.”
>
> She sets the box down on the hood of the car. “Then that's not my loop, Nellie. That's yours.”
>
> She puts her charcoal thumb on your cheek. “You can stop. It's okay. Go home.”
>
> You go home. It's the nicest thing anybody has ever said to you.

Night: *"She said it's okay. She said go home."* / *"You went home. You'll wake up here."* / *"She can forgive you for a day that's not going to happen. She can't let go of it for you."* / *"Nobody can. Not even her."* / *"Tomorrow."*

**Chain.**
> If I told her what's happening, she'd help me.
> But she'd think it was a bit.
> Because when she tried to tell me something real, I made it a bit.
> So I'd have to say it straight.
> And then what? She tells me it's okay?
> But it's only okay until 11:52.

**Locks.** `tried_to_tell` (Theo, breathing, or the tower). Without it the locked version plays: it comes out as a joke (*"Like, spiritually. It's Calder."*) and the night says *"You made it a bit. You don't know why that feels familiar."* Learns `yours` (THINK: *"In every version, she goes. The loop isn't hers. It's yours."*).

**Moments.** Driveway (the confession). Echoes at the porch (the optional knock line).

**Kind.** New fix that fails, the sixth wanting: **permission**. It could count toward the three (`fix: "permission"`), if the author wants a sixth row:

| Fix | The wanting | Why it isn't enough |
|---|---|---|
| Permission | to be told it's okay to stop | *"She can't let go of it for you."* |

**Why it isn't enough.** Being forgiven isn't the same as letting go. She got absolution from someone who won't remember it, in a day that resets.

**Theme.** It's the most direct statement of the thesis any character could make, and the game has to show it failing. That's what keeps the true ending honest: the letting go has to be Nell's own, done in silence, on a day nobody tells her it's okay.

### 6. Say It First

**What happens.** At the diner (or from a 7:14 text to Theo) Nell beats Theo to the line: *"Eight forty-five. Her bus. I know."* Theo is flooded with relief. Nobody sees her face. For one lunch she's the one who knew.

> At 6:30 she comes down the steps with the box. “Nell.”
>
> You have nothing to throw. Nobody knew before you. You're fine. You're so fine.
>
> And you hear yourself say it anyway. “Fine. Then go.”

Night: *"Nobody saw your face. It came out anyway."* / *"It was never about who knew first."* / *"Tomorrow."*

**Chain.**
> The worst part was finding out from Theo, in front of everybody.
> If I'd already known, nobody would have seen my face.
> I know now. I could say it first.
> But then why do I still say it in the driveway?
> Because it was never about who told me.

**Locks.** None. Day two onward. Learns `not_who_knew` (THINK: *"It was never about being the last to know."*). With it, the driveway's *"Everybody knew"* line could get a `[heal]` tail: *It was never about everybody.*

**Moments.** 7:14 (text Theo), diner, driveway.

**Kind.** Learning scene, a fix that fails in Nell's mind (pride: *not being seen*).

**Why it isn't enough.** It removes the humiliation and the fight still happens. The anger was about Maya leaving, and about herself, not about the telling.

**Theme.** The regret you name first is usually the cover story. Fixing the cover story leaves the real one standing.

### 7. Everybody Has a Tuesday

**What happens.** Nell tells Theo it's a loop. He asks if it's a bit, she says yes, and he answers it seriously anyway. He'd do six a.m. over: he had his phone in his apron the whole time and didn't call her, *"because then I'd be the one who told you."* (Mom has a kitchen version: *"Every day, baby. And you go to work anyway."*)

Night: *"Theo would do six a.m. over. Maya would do Thursday. Mom would probably do the screen door."* / *"Everybody in Calder has a Tuesday."* / *"You're the only one who keeps getting yours back. It hasn't helped."* / *"Tomorrow."*

**Chain.**
> If I told someone, I wouldn't be the only one who knows.
> But nobody would believe me.
> Theo would listen.
> But what would he even do?
> …What would he do over?

**Locks.** None. Learns `theo_too` (THINK: *"Theo didn't call you. He didn't want to be the one who told you either."*). Pairs well with `nobody_laughed`. If already known, Theo's speech is shorter.

**Moments.** Diner (the main one), kitchen (Mom's line).

**Kind.** Learning scene.

**Why it isn't enough.** It doesn't change the day, and it isn't meant to. It takes away her belief that this regret makes her special. Everyone in the eleven streets avoided the hard sentence. Theo did, Mom did, Maya did, Nell did.

**Theme.** Regret is ordinary. The loop is a privilege that doesn't help, which makes the "without knowing" ending (*"Most of the time you never really figure out what happened"*) feel less like a sacrifice and more like how everyone lives.

### 8. Tell Nell— (the porch vigil)

**What happens.** Instead of knocking, Nell sits on the top step and doesn't leave. At eight Maya steps around her with the last box and neither says anything. The car goes. At 9:20 it comes back with one person in it.

> Mrs. Reyes sits down next to you on the step without asking, the way she does everything. Onions and Jergens.
>
> “She cried the whole way to the feed store,” she says. She can't keep a secret. She never could.
>
> “At the door of the bus she turned around and said, ‘Mom, tell Nell—’” She stops.
>
> “Tell Nell what?”
>
> “I don't know, mija. The driver honked.”
>
> She goes inside. Before she shuts the door, she turns the porch light back on. For you.

Night: *"Tell Nell—"* / `[if mom]` *"Friends who aren't—"* / `[if sketch]` *"I didn't tell you because—"* / *"Nobody in this town finishes anything."* / *"Tomorrow."*

**Chain.**
> If I'd stayed on the porch, she'd have had to come out eventually.
> But her mom drove her to the bus.
> So I'd have seen her mom come back alone.
> And her mom can't keep a secret.
> But what if she only has half of one?

**Locks.** None. Learns `crying` (THINK: *"She cried the whole way to the feed store."*). That could serve as a second key, with `red_eyes`, to the driveway's `[heal]` laugh line.

**Moments.** Porch (it skips home: the bus goes while she's on the step).

**Kind.** Learning scene.

**Why it isn't enough.** She waited all night for an answer and got half a sentence. The answer she wants is on a bus.

**Theme.** It sets up *Tomorrow, without knowing*. Some sentences stay unfinished, and you go on anyway. It also pays off the existing porch free reply (*"Someone inside is deciding when to turn it off."*): this time the someone turns it back on.

### 9. I Said It Because—

**What happens.** On the porch Nell writes Maya a note on a Dollar General receipt and gets one line in: *"Maya — I said it because"*. She doesn't know the end. She crosses it out so hard the pen goes through. `[if sketch]` *It looks exactly like the inside cover of her sketchbook.* She leaves without sliding it under.

Night: *"You wanted her to tell you why."* / *"You can't tell her why either."* / *"Tomorrow."*

**Chain.**
> I could at least explain. In writing, where I can't make a joke.
> But explain what?
> Why I said it.
> …I don't know why I said it.
> So how can I need her to know why she didn't tell me?

**Locks.** None. Strongest with `sketch` (it mirrors Maya's crossed-out line). Learns `no_because` (THINK: *"You don't know why you said it either."*).

**Moments.** Porch.

**Kind.** Learning scene.

**Why it isn't enough.** It isn't meant to fix anything. It takes away the demand for an explanation by showing she can't give one either.

**Theme.** The need to know *why* is one of the things that keeps you in the loop. Nell finding her own unfinishable sentence makes it easier to let Maya's go.

### 10. Lights Out (the tower vigil)

**What happens.** The tower scene (`peace`), but she stays up there after Maya climbs down. She watches the bus's two red lights leave at 8:52. At 11:52 every light in Calder goes out at once, like August. The stars come out all at once. There's nobody on her shoulder.

Night (from the tower, not the bed): *"Last time the lights went out she was asleep against you, and you didn't move for forty minutes."* / *"You don't move now either. There's nothing to keep still for."* / *"Tomorrow."*

**Chain.**
> If I'd stayed up there, I'd have seen her go.
> But I'd have been alone.
> I'd have been alone anyway.
> At least up there I'd see what the end looks like.

**Locks.** Same as the tower. The August echo needs `august`.

**Moments.** Street (3:15), or home (8:40, climbing in the dark).

**Kind.** Other: a variant night for the peace fix. It counts as `peace`, so it isn't a new fix.

**Why it isn't enough.** The perfect goodbye plus a perfect view is still a photograph.

**Theme.** It shows the reset from outside, as a memory of love going dark, which is what letting go actually feels like.

### 11. Accidental endings (misfires, today)

**What happens now.** On the second Tuesday, a meta player who lets six moments pass while poking at the loop and then types DON'T SLEEP at 8:40 gets the **without-knowing ending**: *"for the first time in two days, you don't ask for another one."* On a ready day the same input gets the **true ending**: *"You close your eyes."*

**Kind.** Other (misfire).

**Why it isn't enough.** The ending is earned by the six ENTERs, but the last thing the player typed is the opposite of what the ending says she did. It also means the Nell who most wants to break the loop can't make the one meta move the theme could use.

**Fix.** The `awake` branch (entries 1 and 2), plus night replies.

### 12. Who's Telling This (an epilogue seed)

**What happens.** "Who are you" / "narrator" gets *"Nobody answers. Somewhere, somebody at a counter laughs at a TV."* That is a line from the epilogue's diner, planted early. After the epilogue has played and the player restarts, the same input could answer in first person, once: *"I am. I always tell it like this."*

**Chain.** Chain 9 above.

**Locks.** None for the seed. `ready` for the second-person line. `finished === "withoutKnowing"` for the first-person line after a restart.

**Moments.** Any (a global free reply).

**Kind.** Epilogue (a seed and a callback).

**Why it works.** The meta player's attempt to step outside the story is answered with the story's own frame: the "you" is Nell, keeping it at arm's length. It rewards curiosity without spoiling the reveal.

**Theme.** Telling it in the second person is a way of not owning it. The way out, *"It was you,"* is owning it.

---

## Top proposals for the author

Ranked by how much each one gives this kind of player, against how much it costs to build.

### 1. *The Minute* and *11:53*: give "stay awake" a real answer

**Scene.** At 8:40, STAY AWAKE: Nell watches the clock hold at 11:52 and realizes (with `read`) that it's the minute she put the phone face down. On a ready day the same input plays the final night as *11:53*: she turns the phone face up, doesn't answer it, and sees a minute she's never seen. *"It looks like every other minute."*

**What it takes.**
- home `words`: `awake: ["stay awake", "dont sleep", "dont close my eyes", "wait up", "watch the clock", "wait for midnight", "dont fall asleep"]`, checked before `hide` and `stay`.
- `branches.awake`: three cases (`needs: ["ready"]` / `needs: ["read"]` / otherwise). Learns `minute`.
- The ready case needs a small engine change: a branch case with `wayOut: "truth"` that calls `finish("truth", chosen.text)`, so `finish` can take its night text as a parameter. About five lines.
- Night: a `story.nightReplies` (or `nights.awake`) checked in `nightMove` before `startDay()`, so STAY AWAKE at 11:52 no longer spends the next morning. About three lines.
- A THINK line for `minute`.

### 2. *You Had the Words Wrong*: catch the player quoting Maya

**Scene.** Nell says *"You were always going to stay here. That's just you,"* in Maya's voice, before Maya can. Because she's watching to see if she got it right, she finally sees Maya's eyes are red. *"Is that what you think I was going to say?"*

**What it takes.**
- driveway `words`: `predict: ["always going to stay", "thats just you", "know what youre going to say", "what youre gonna say", "your line"]`, above `stay` (this also fixes the misfire where it plays **keep**).
- `branches.predict`: `needs: ["why_secret"]` → a short free reply (no night). Otherwise the scene, with a night. Learns `red_eyes`.
- A THINK line. Optional: `red_eyes` as a second key to the driveway's `[heal]` laugh lines (engine: a moment's `truth` could accept a list).

### 3. *Nobody Can Let Go for You*: telling Maya about the loop

**Scene.** Said straight (needs `tried_to_tell`), Maya believes her, asks *"Do I go?"*, hears *"Every time,"* and says *"Then that's not my loop, Nellie. That's yours,"* and *"You can stop. Go home."* The night: *"She can't let go of it for you. Nobody can."* Said too early, it comes out as a Thursday-style joke.

**What it takes.**
- driveway `words`: `loop: ["loop", "lived this", "lived today", "this day before", "keep waking up", "stuck in today", "same day"]` (and take *"the same"* out of the global `nothing`, or put `loop` above it).
- `branches.loop`: two cases, with `[if keep]` / `[if confess]` lines. Learns `yours`.
- Decide whether it's a sixth fix (`fix: "permission"`, plus a THINK line and a row in DESIGN.md's fix table) or a learning scene only. A sixth fix makes the three-fix gate easier to reach. As a learning scene it doesn't touch the gate.

### 4. *Fourteen Miles*: leaving Calder at 7:14

**Scene.** She walks past the back of the CALDER sign (blank), spends the day at a gas station counter where someone asks what she wants, sits through 6:30 in her head anyway, and waves at the 9:01 bus she can't see into. *"You didn't say it. You just went."*

**What it takes.**
- wake `words` (and kitchen, and street): `away: ["leave calder", "leave town", "walk out", "out of town", "city limit", "hitchhike", "highway", "run away"]`. Moment words are checked first, so it won't collide with the bus's *leave town* at 8:40.
- `branches.away` (one case, with `[from street]` lines for the short version). Learns `could_leave`.
- One `[if could_leave]` line at the driveway after the felt *"That's just you"*. That needs the `[felt]` + `[if …]` tag combination the engine already supports.

### 5. *Tell Nell—*: the porch vigil

**Scene.** Maya steps around her on the step without a word. Mrs. Reyes comes back alone at 9:20: *"She cried the whole way to the feed store… 'Mom, tell Nell—' and then the driver honked."* She turns the porch light back on before she goes in.

**What it takes.**
- porch `words`: `vigil: ["wait on the porch", "wait all night", "sit on the steps", "wait for her", "dont leave"]`, above the `nothing` match on *sit*.
- `branches.vigil`, one case. Learns `crying`. The night uses `[if mom]` / `[if sketch]` to list the other unfinished sentences.

### 6. The meta free-reply pack, and the misfire fixes

**Scene.** Small replies that answer the cheat instead of blocking it: *"You are awake. That was never the problem."* / *"It's real. It just isn't new."* / *"Everything you'd actually take back happened before your alarm."* / *"Nobody answers. Somewhere, somebody at a counter laughs at a TV."* / *"She was laughing when she painted it. That's what's crooked."* / *"Tomorrow your hand will be clean. You've never forgotten one second of today."*

**What it takes.**
- A global `freeReplies`-style list in `story` (for example `anywhere: { "wake up": …, "not real, dream, pinch": …, "loop, groundhog": …, "narrator, who are you, whos talking": …, "thursday, monday, go back": …, "write it down, note, my hand": …, "undo, rewind": … }`), checked in `playerMove` after the moment's own free replies. The engine needs about four lines, because today only moments have `freeReplies`.
- Moment-level additions: wake (`alarm`, `count`), kitchen (`microwave`), street (`fix the a`), driveway (`happening to you too`, `skip`), porch (`moth`), home (`write it all down`, `text her`).
- The parser fixes from the misfire table: STAY AWAKE and DON'T SLEEP (handled by `awake`), *"the same"* and *"eggs"* in `nothing`, *"text theo"*, *"say it out loud"* / *"tell myself"* at 7:14, *"climb the tower and stay"* at 3:15. Add each fixed input to `test.js` as a regression check.

### 7. *Everybody Has a Tuesday* (Theo) and *Say It First* (the diner)

**Scene.** Theo, told it's a loop, says he'd do six a.m. over: *"Because then I'd be the one who told you."* Or Nell beats him to *"Eight forty-five,"* nobody sees her face, and she still says *"Fine. Then go"* at 6:30. *"It was never about who knew first."*

**What it takes.**
- diner `words`: `loop` → `theo_loop` and `first: ["eight forty five", "845", "i know about the bus", "i already know", "she told me"]`, checked before `theo`. Note that *bus* currently routes to `theo`.
- Two branches. Learns `theo_too` and `not_who_knew`. Both reuse the existing `DINER_TRUTH_NIGHT` structure.
- Lower priority. Both are good, but the diner already has two routes to its truth, and these add to it rather than open something new.

### Why this order

Proposals 1 and 6 fix real bugs a meta player hits in the first ten minutes: losing a whole day by typing "don't close my eyes" at night, and finishing the game by typing "don't sleep." Proposals 1 to 3 each turn a cheat into a statement of the theme: holding the minute, misremembered foreknowledge, asking for permission. *11:53* is the only meta move I'd let become a way out, because it needs the same locks as the true ending and changes only what the moment *means*, not what happened.

_Not checked: the ready-day *11:53* wording against `nights.final` line by line (it reuses the final night's beats and should be merged rather than duplicated). The engine changes are estimates from reading `game.js`, not tested. Proposed fact names may collide with names proposed in `nell-simulation.md` (`already`, `unfinished`). Reconcile them before building._
