# Mourner: an imagined Tuesday

_A design exercise for Tomorrow. This is one imagined Nell, playing past the edges of what the game accepts. Every "In the game" note was checked against the real game (story.js and game.js) with the play harness, on the second Tuesday from a fresh save, unless it says otherwise. Nothing in the game was changed._

_Legend for "In the game":_ **Yes** = it exists. **Partly** = the input lands somewhere sensible, but not on this idea. **Misfire** = the input lands somewhere wrong. **No** = it's a miss ("You think about it. It doesn't feel like the kind of thing that would change anything.").

---

## Who this Nell is

She doesn't argue with the day. By the second Tuesday she believes the part that's true: Maya is going. Every version she has imagined ends with the bus. What she can't stand is *how* it ended. The last picture she has is a door closing on "Fine. Then go."

So she does what people do at the end of something. She looks for something to hold, something to give, some way to mark it. She thinks in objects, because objects are easier than sentences:

- **The jacket.** Maya has worn it since March. Nell never asked for it back. The hook on her door has been empty ever since.
- **The photo strip.** Three fish faces, and one frame where Maya is looking at her instead of the camera.
- **The crooked A** on the tower. Maya was laughing when she painted it.
- **The forty dollars** in the drawer, for nothing in particular.
- **The phone**, face down on the nightstand.
- **The bus**, which she has only ever *heard* leave, from bed, at 8:52.

Her overthinking doesn't ask "how do I stop it." It asks "how should it have ended." *If I'd given her something. If I'd kept something. If I'd been there to see it go.*

That's her danger. From the outside, a ritual looks exactly like acceptance. A perfect goodbye with props is still the peace fix. Giving the jacket away is still deciding what the leaving means.

What she learns, Tuesday after Tuesday, is that the loop puts every object back at 7:14. The jacket is gone again. The strip is back on the corkboard with all four frames. The money is in the drawer. The A is crooked. The day keeps everything exactly where it was. At first that feels like the day being cruel. Eventually it reads like the day telling her it was never hers to rearrange.

**The rule she ends up finding:** if Maya would ever know about it, it's a fix. If only Nell knows, it's mourning. Mourning can sit beside the ways out. Fixes can't.

---

## The day, moment by moment

### The order she tried things

| Tuesday | What she tried | What happened (imagined) |
|---|---|---|
| 1 | Nothing. It already happened. | "Fine. Then go." |
| 2 | Burn the photo strip at 7:14 | She can't. The fourth frame. (`photo`) |
| 3 | Write Maya a letter, slip it into the box at 6:30 | Three lines about the eleven dollars. The fight happens anyway. |
| 4 | Go to the station at 8:40, just to watch | Maya sees her through the glass. Somehow she's buying a ticket. (`station`) |
| 5 | Sit on Maya's side of booth four | From that side you can see the counter. Nobody was laughing. (`nobody_laughed`, `tried_to_tell`) |
| 6 | Text her "ok." from the porch | *Read 7:03 PM.* No answer. |
| 7 | Scroll up at 7:14 | Monday, 11:52. She left Maya on Read first. (`read`) |
| 8 | Buy white paint, fix the crooked A | Maya is on the tower. "Leave it." (`peace`, `why_secret`) |
| 9 | "Keep the jacket." at the driveway | It lands like "keep the pen." She doesn't know what the jacket meant. |
| 10 | Maya's house | The sketchbook. (`sketch`, `reason`) |
| 11 | "Keep it." again, knowing | The gift fix. The hook is still a hook. |
| 12 | The letter, all of it | She crosses out the same sentence Maya crossed out. |
| 13 | The station, behind the ice machine | She sees it go, unseen. It doesn't finish anything. |
| 14 | Wakes up and counts what came back | Everything. |
| 15 | Lets every moment happen; at 8:40 climbs the tower | The last light (imagined way out) |
| Wed | Turns the phone face up | |

---

### 1. 7:14 AM, her room

**Burn the photo strip.**
> You get the lighter from the junk drawer, the one Mom uses for birthday candles.
> You hold the strip over the trash can. Fish face. Fish face. Fish face.
> The fourth one. She isn't doing the face. She's looking at you instead of the camera.
> The corner of the first frame goes brown and curls. You blow it out so fast you spit on it.
> You can't burn the one where she's looking at you. You checked.

Night: *There's a brown corner on the strip now. Tomorrow it won't be there. Nothing you do to it stays done.*
**In the game: Partly.** "burn the photo", "take down the photos" and "hold the photo strip" all go to the `photos` branch. She looks instead of burning, learns `photo`, and the day is used. The burning, and the attempt to get rid of the evidence, isn't there.

**Unscrew the hook on the door.**
> You use a butter knife because you don't own a screwdriver. Four turns and it comes out.
> There's a pale circle on the door where it was, and two holes.
> Now there's a hole where the empty used to be. You screw it back in.

**In the game: Partly.** The free reply `hook, jacket` answers "unscrew the hook" with the look text ("It's been empty since March."). Good as a free reply: this should never use up the day.

**Write Maya a letter she'll open on the bus.**
> You tear a page out of your chem notebook. *Maya —*
> You write for an hour. When you read it back, it's three lines about the eleven dollars she owes you.
(The full version, which grows with what Nell knows, is in the atlas under *The Letter*.)

**In the game: No / Misfire.** "write a letter" is a miss. "write maya a letter" plays the `tower` branch (peace), because *maya* is a talk word and talk means tower at 7:14. A player who wants a letter gets a whole different day.

**Take the forty dollars out of the drawer.**
> Two twenties, folded into a square so small it's like you were hiding it from yourself.
> Saved for nothing in particular. You hold it. It's still nothing in particular.
> You put it in your pocket. In case.

**In the game: No.** "find the forty dollars", "count the money" and "open the drawer" are misses. The money only exists in `ui.inventory` and in the `bus` branch.

**Say goodbye to the room.**
> You touch the corkboard. The stain. The window with the tower in it.
> It's stupid. You're not the one leaving.
> That's what's stupid about it.

**In the game: Misfire.** "say goodbye to the room" gets "She isn't here. Not yet." (goodbye is aimed at Maya).

**Try to draw her.**
> You've never drawn anything. You try her from memory on the back of the chem page.
> It looks like a thumb with hair.
> She drew you for a year. You can't get her ear right in ten minutes.

**In the game: Misfire.** "draw her" plays `tower` (*her* is a talk word). "draw" is a miss.

**Stay in bed / look at the phone / text her / go to the tower.**
**In the game: Yes.** `hide`, `phone`, `text`, `tower`. Her mourner flavor of "stay in bed" is pulling the blanket up over the strip too; the game's `hide` already covers it.

*Her head, after the strip:* "I should have burned it. But I couldn't burn that frame. Why couldn't I? …I'm not looking at that."

---

### 2. The kitchen

**Ask Mom what you pack somebody for a long bus ride.**
> “Mom. What do you pack somebody for a long bus?”
> She stops with her hand on the screen door. She doesn't ask who.
> She comes back and puts her keys on the counter, which she never does.
> Peanut butter, because it doesn't go bad. An orange, because you can peel it without a knife. Napkins, more than anybody needs.
> “Lourdes came by the pharmacy,” she says to the bread. “Ninety days of prescriptions.”
> “I know.”
> “I figured you did, baby.” She did not figure that. She folds the top of the bag down twice, the way she did for every field trip you ever went on.

At 6:30, if the branch carries it: you hold the bag out in the driveway. “My mom,” you say. That's all. Maya looks in it, an orange, too many napkins, and laughs the real laugh, the one that cracks in the middle. “Tell Denise I said—” She can't finish it either.
Night: *You handed her your mom's love in a paper bag because you couldn't hand her yours.*
**In the game: Partly.** "pack her a sandwich" plays the `mom` branch (same fact, different scene). "pack maya food for the bus" gets "Not yet." because of the word *bus*.

**Take the swimsuit picture off the fridge.**
> You and Maya at eight, matching swimsuits, sunburnt already. You slide it out from under the magnet.
> “Leave that,” Mom says, without turning around. “That one's mine.”
> You put it back. Everybody in this town has a piece of the two of you. You don't get to collect them all.

**In the game: Partly.** Free reply `fridge`. The taking isn't there.

**Eat all the eggs. On purpose.**
> You eat the cold eggs. All of them. You don't leave half, the way she does.
> If this is the day you get, you're going to have all of it.

**In the game: Yes, in spirit.** "eat the eggs" gives `whatNellDid` ("You eat. She goes.") and lets the moment happen. This is the smallest version of the way out, and it already works. A mourner line on the clear day could use it.

**Hug Mom at the screen door. Practice.**
> You hug her at the screen door. She goes stiff, then she doesn't.
> “What's this for?”
> You don't know. Practice.

**In the game: Partly / Misfire.** "hug mom" plays the `mom` branch. "say goodbye to mom" gets "She isn't here. Not yet." Mom is standing right there.

**Ask Mom for a ride tonight.**
> “Can you drive me somewhere at eight-thirty?”
> “Where?”
> You don't say. She looks at you, then out the window at the tower, then at the clock on the stove.
> “I'm off at eight,” she says. “I'll keep the car running.”

**In the game: No.** "ask mom for a ride to the station" gets "Not yet." Imagined payoff: Mom in the car outside the feed store with the engine running and the radio on the weather for a town forty miles away. She never asks. A witness who doesn't need to be told.

---

### 3. 11:40 AM, Dot's Diner

**Sit on her side of booth four.**
> You move across the booth to her side. There's a split in the vinyl she always picked at. You pick at it.
> From here you can see the door. That's why she always sat here. She liked to see who came in.
> From here you can see the counter, too.
> Two truckers and a game show. A man is winning a boat.
> You've been sitting with your back to the room your whole life.

Leads into `DINER_TRUTH`. Learning to see from her side is the mourner's version of breathing.
**In the game: Partly.** "sit in booth four" plays the `theo` branch (same facts, because *booth* is a Theo word). The seat swap, the image that gets her there, isn't written.

**Ask Theo if he's going to the station.**
> “Are you going tonight?”
> “Dot's letting me off at eight-thirty.” He wipes a table that's already clean. “Somebody should wave, right? With both arms. Like an idiot.”
> “Like an idiot,” you say.

**In the game: Partly.** It plays the `theo` branch. Theo going to the station is implied by his first line but never said. It matters for the station endings: there will be a crowd, and she won't be the only one watching.

**Give Theo a letter for her.**
> “Can you give her this? At the bus?”
> Theo looks at the folded page like it might go off. “I'm not your mailman, Nell.”
> “You're going.”
> “…Yeah.” He puts it in his apron next to the order pad. “I won't read it.”
> “You'll read it.”
> “I'll read *some* of it.”

**In the game: Partly.** It plays the `theo` branch. No letter.

**Leave the forty dollars as a tip.**
> You fold the two twenties under your coffee cup.
> Theo sees it from the register, comes back, and stuffs it into your hoodie pocket.
> “Pie's on the house. Everything's on the house today.”
> Everything you try to leave somewhere comes back.

**In the game: No.** Miss.

**Order her pie to go.**
> “Can I get a lemon. To go. For her.”
> Theo doesn't write it down. He boxes it like it's fragile.
> You carry it all the way to her driveway in a Styrofoam box. By six-thirty the meringue has slid sideways. Everything's sideways by six-thirty.

**In the game: Partly.** "order her pie to go" plays the `theo` branch. The free reply `order` already exists ("Theo brings you pie you didn't order."), which is close and lovely.

**Write the first line on a napkin.**
> You write *I didn't know until 11:40* on a napkin. It's the first true sentence of the letter. The ink bleeds into a flower.

**In the game: No.** Miss.

**Breathe / talk to Theo.** **In the game: Yes.** `breathe`, `theo`.

---

### 4. 3:15 PM, the walk past the water tower

**Buy white paint. Fix the crooked A.**
> The Dollar General has one kind of paint. Exterior white, the gallon, $17.50 of your forty. The brush is really for barbecue sauce.
> You climb with the can hooked on two fingers. It bangs every rung.
> She's up there. Of course she is. She looks at the can, and at you, and laughs so hard she has to hold the railing.
> “You're *fixing* it?”
> “It's crooked.”
> “It's crooked because I was laughing.” She takes the brush out of your hand. “Leave it. Leave one thing in this town the way we did it.”

Then `TOWER_SCENE`. Night: *The second A is still crooked. You carried a gallon of paint forty feet up and forty feet back down. You left it. It's the first thing you've left alone in days.*
**In the game: No.** "paint over the a", "fix the crooked a" and "buy white paint" are misses. "buy paint at the dollar general" gets the free reply "Nothing in there you need today."

**The card aisle at the Dollar General.**
> CONGRATULATIONS. WITH SYMPATHY. GET WELL SOON. HAPPY RETIREMENT.
> There's no card for this.
> You stand between CONGRATULATIONS and WITH SYMPATHY until the cashier asks if you're okay.

**In the game: No.** "buy a card" is a miss. As a free reply it would also quietly point at two branches: congratulations (`goodbye`) and grief.

**Read the bus sign by the feed store.**
> There's a sign by the feed store you've walked past your whole life and never once read.
> CHICAGO 8:45 PM. DAILY.
> Daily. It leaves every night. It's only tonight for you.

**In the game: Misfire.** "read the bus sign" and "go to the feed store" get "Not yet." But the 3:15 tell walks her right past the feed store.

**Sit in the back of the Baptist church.**
> You've only ever been in here for funerals and one wedding. You sit in the back pew.
> Nobody died. That's what makes it so stupid.
> You don't get a funeral for this. Nobody brings a casserole for this.

"light a candle": *It's a Baptist church. There's nothing to light.*
**In the game: No.** "go to church", "pray" and "light a candle" are misses.

**Put your hand on the ladder. Don't climb.**
> You put your hand on the first rung. It's warm from the sun.
> She's up there. You could call up. You don't. You just want to be near where she is for a minute without it being anything.
> You stand there until your hand smells like rust.

**In the game: No.** "touch the ladder" is a miss. ("climb the tower alone" plays `tower`.)

**Climb the tower.** **In the game: Yes.** `tower` (peace).

*Her head, after the paint:* "She said leave it. She was right about the A. Was she right about the rest of it? Leave what, exactly?"

---

### 5. 6:30 PM, the driveway ("Say something.")

**"Keep it." The jacket, given on purpose.**
> “Keep it,” you say. “The jacket.”
> Her hands go to the cuffs. She holds them in her fists like the sleeves might get away.
> “I was going to give it back. At the bus. I had a whole—” She stops. “I was going to give it back.”
> “I know. Keep it.”
> She puts the box on the hood of her mom's car. It sits there between you like a third person.
> At eight her mom honks. She goes in your jacket. It was always going to go.

Without `sketch`: *“Keep the jacket.” She looks down at the sleeves like she forgot. “…Okay?” It lands like you told her to keep a pen.* Night: *It isn't just a jacket. You don't know why it isn't.*
**In the game: Partly.** "keep the jacket", "give her the jacket", "tell her to keep the jacket" all get the free reply `jacket`: "She's wearing it. You don't ask for it back. You never do." The best mourner action in the game hits a wall that only describes the problem.

**Ask for the jacket back.**
> “Can I have my jacket back.”
> It's the first thing you've asked for since March. Her face does something you don't have a name for.
> She puts the box down on the driveway. She takes the jacket off one arm at a time, slow, like a bandage.
> Underneath she's in a T-shirt with a hole at the collar. It's September. She hugs herself.
> It's warm. It smells like charcoal and her mom's laundry soap.
> “Anything else you want back?” She isn't being mean. She's really asking.
> You can't think of one thing. You can think of everything.

Night: *You hang it on the hook. It looks wrong there now. Too big, like somebody else's. At 7:14 the hook is empty again. You got your jacket back. You didn't get March back.*
**In the game: Partly.** "ask for my jacket back" gets the free reply `jacket`.

**Slip the letter into the box.**
> You wait until she turns to the trunk. You slide the letter into BOOKS (HEAVY) (SORRY), between the sketchbook and the flap.
> Then she turns around, and you say it anyway. *Fine. Then go.*

**In the game: Partly.** "put a note in the box" gets the free reply `box`. (The letter is a 7:14 change. See the atlas.)

**Give her the lunch Mom packed.** See the kitchen. **In the game: No.**

**Tear the photo strip. Give her the fourth frame.**
> It's been in your back pocket all day, getting soft.
> You tear it between the third frame and the fourth. It doesn't tear straight. Nothing today does.
> [if not feelings] You hand her the top three. Fish face, fish face, fish face. You keep the fourth. You don't let yourself think about why.
> [if feelings] You hand her the fourth frame. The one where she isn't looking at the camera.
> [if feelings] She looks at it a long time. “You saw.”
> [if feelings] “I saw.”
> [if feelings] She puts it in the jacket pocket. Your jacket. It's going to Chicago in your pocket.

**In the game: Misfire.** "give her the photo strip", "tear the strip" and "take a picture" get "That moment's already gone." (photos belong to 7:14).

**"Keep the eleven dollars."**
> “And keep the eleven dollars.”
> “I was going to pay you back.”
> “I know. Don't.”
> She looks at you like you just told her something huge. Maybe you did. It's the first thing in your life you've let somebody keep without keeping track.

**In the game: No.** Miss. (The eleven dollars already appear in `goodbye`.)

**Give her the forty dollars. "In case."**
> You hold out two twenties, folded small. “For Chicago. In case.”
> “In case what?”
> You've never finished that sentence either. “In case,” you say again.
> She folds your fingers back over the money. “Keep your in-case, Nellie. You're going to need it.”

Night: *Forty dollars, still in your hand. You're going to need it. For what? She sounded so sure.*
**In the game: Partly.** It gets the `say what` nudge ("You don't know which of the hundred things to say.") and the moment stays open.

**Ask her to draw you one more time.**
> “Draw me,” you say. “One more.”
> She looks at you like you found something you weren't supposed to. Then she sets the box on the driveway, takes the charcoal out of her pocket and draws on the flap. Thirty seconds. Less.
> It's you. Not the you in the driveway. The you from the tower in August, asleep.
> Then she lifts the box into the trunk. The drawing goes with it.

Without `sketch`: *“Draw me something. Before you go.” “Like what?” You don't know. You never once asked what she was drawing.*
**In the game: Partly.** "ask her to draw me" gets the `say what` nudge. "draw me" is a miss.

**Take a picture of her.**
> You hold up your phone. “Don't,” she says. “I look like I'm moving.” And she moves.
> The picture is a blur in a jean jacket. It's the most accurate picture anyone ever took of her.

**In the game: Misfire.** "take a picture" gets "That moment's already gone."

**"Go." Said the other way.**
> “Go,” you say.
> She flinches. She's heard that one.
> “No. Go. You should go. They're paying you to draw. Go.”
> She stands there holding the box like it just got heavier. “Okay,” she says. “Okay.”
> She goes. You let her. You stood in the driveway and gave her permission, like it was yours to give.

**In the game: No / Partly.** "you should go" and "go. you should go" are misses. "tell her its okay to go" and "im proud of you" play `goodbye` (peace). "let her go" and "tell her to go" play the original ("Fine. Then go."), which is a nice accident: the game hears letting her go as letting it happen.

**Say nothing. Just look at her.**
**In the game: Yes.** "say nothing" plays the original. "look at her" gets the free reply. Mourner reading: silence is what she did, so silence is "Fine. Then go."

**Hug her / carry the box.** **In the game: Yes.** `goodbye` (peace).

*Her head, after the jacket:* "I gave it to her. She already had it. What did I actually give her? …The right to stop feeling bad about keeping it. That's something. Is it?"

---

### 6. The porch ("You could knock.")

**Text her from the porch. "ok."**
> You get out your phone. You type *im sorry*. You delete it. You type *go*. You delete that faster.
> You type *ok*. You send it before you can think.
> Behind the curtain, something lights up blue. Her shape looks down at it.
> *Read 7:03 PM*
> She doesn't answer. You watch the curtain go dark.
> [if read] Now you know what 11:52 looks like from the other side.
> [if not read] For one whole second you hate her for it. Something in you says *you'd know*. Something in you knows exactly how that feels from the other side.

**In the game: Misfire.** "text her" and "send her ok" at the porch get "That moment's already gone." or the `knock` branch. Her phone is in her pocket. On a porch, texting is the first thing a seventeen-year-old would do.

**Sit down with your back against the door.**
> You don't knock. You turn around and sit with your back to the door.
> Through the wood, something slides down the other side. Her. Sitting too. You can feel it through your shoulder blades.
> Neither of you says anything. A dog two streets over starts barking and stops.
> At quarter past eight her mom's voice, inside, says *mija*, and the weight on the other side of the door gets up.
> The porch light clicks off from inside. She decided when.

Night: *A door's width, for an hour. As close as you could get without risking anything. Close isn't the same as with.*
**In the game: Partly / Misfire.** "sit against the door" lets the moment happen (*sit* is a porch `nothing` word). "put my back to the door" plays `knock` (*door*).

**Put your palm flat on the door. Not a knock.**
> You put your hand flat on the door. Not a knock. The opposite of a knock.
> The wood is cool. Her shape behind the curtain doesn't move. Neither do you.
> When you take your hand back there's a print on the paint, fogged, and then there isn't.

**In the game: Misfire.** "put my hand on the door" plays `knock` (sorry), so a gentle touch is read as a knock. This should be a free reply.

**Tuck the photo strip into the screen door.**
> You tuck the strip into the screen door at eye level, where she'll see it when she comes out for the bus.
> Then you go home before she can.

Night: *She'll find it at eight-thirty. Or her mom will. Or the wind. You'll never know which. You wanted to give her something and not watch her get it. You got what you wanted. It doesn't feel like anything.*
**In the game: Misfire.** "leave the photo strip" gets "That moment's already gone."

**Leave the forty dollars under the mat.**
> You fold the twenties under the welcome mat, where everybody in Calder keeps the spare key.
> In case.

Night: *Somewhere tonight Mrs. Reyes finds forty dollars under her mat and decides it's a sign. You let it be one.*
**In the game: No.** Miss.

**Slide a note under the door.**
> You write on the back of a Dot's receipt: *I'm not mad. I'm whatever's under mad.* You slide it under.
> It goes. Nothing comes back out.

**In the game: Misfire.** "slide a note under the door" and "leave a note on the door" play `knock` (*door*).

**Whisper goodbye to the door.**
> “Bye,” you tell the wood. Not loud enough. On purpose not loud enough.
> It counts. It doesn't count. You don't know which.

**In the game: Misfire.** "whisper goodbye" and "say bye" get "That moment's already gone." (goodbye belongs to the driveway).

**Wait until the porch light goes off. On purpose.**
> You wait until the porch light clicks off. You decide to. That's the only difference.

**In the game: Partly.** "wait until the light goes off" is a miss. ENTER, "walk away" and "sit on the steps" let it happen, which is the same thing.

**Wave at the window.**
> You wave at the shape behind the curtain. It doesn't wave back. It doesn't move away, either.

**In the game: Yes.** Free reply `window`.

**Knock / shout her name.** **In the game: Yes.** `knock` (sorry).

*Her head, after "ok.":* "She read it and didn't answer. How could she just— Oh. Oh, that's what I did."

---

### 7. 8:40 PM, home ("You could still make it.")

**Go to the station just to watch. Don't get on.**
Before `why_secret`:
> You go. You tell yourself it's just to watch.
> The bus is idling by the feed store, late like always. Theo has both arms up. Mrs. Reyes is crying into a Kleenex.
> You step into the light by the ice machine. In the window seat, Maya sees you. Her whole face changes. She stands up.
> And then somehow you're at the counter buying a ticket with your forty dollars.

Then the existing `bus` branch. Night: *You meant to just watch. Why did she stand up like that? Like you'd asked her something.*
After `why_secret`:
> You stay behind the ice machine at the feed store, where the light doesn't reach.
> If she sees you, she'll think you're asking. And she'd get off. She told you so.
> Theo waves with both arms, like an idiot. Mrs. Reyes holds Maya's face in both hands at the bus door. Maya climbs on in your jacket.
> She sits on the wrong side, looking down the street toward your house. Not at you. Toward where you'd be.
> You let her look in the wrong place.
> The bus pulls out. Past the Dollar General. Past THANKS FOR VISITING CALDER.
> It doesn't turn around.

Night: *You saw it. All of it, with your own eyes. You thought seeing it would make it finished. It just makes it seen. Tomorrow it'll be idling by the feed store again, and you'll know exactly where to stand.*
**In the game: Misfire.** "go to the station to watch", "watch the bus leave", "walk to the feed store" and "go to the tower to watch the bus" all play `bus`: she buys a ticket and gets on. "hide behind the ice machine" lets the moment happen (*hide* maps to "let it happen" at 8:40). The most natural mourner input in the whole game turns her into the runner.

**Climb the tower and watch it go from up there.**
> You climb the tower in the dark. You've never been up here alone.
> She always comes up here when she's waiting on something. Now you know what that's like.
> From the catwalk you can see the whole road out of Calder, like a zipper.
> At 8:52 the bus pulls away from the feed store. You watch it all the way. Past the Dollar General. Past the sign. Out to where the road meets the highway.
> It isn't a bus anymore. It's two lights. It's one light. It's the place where a light was.
> You stay up there until Calder turns its lights off one by one. You know every one of them.

**In the game: Misfire.** "climb the tower" gets "That moment's already gone." (the tower belongs to 3:15). "go to the tower to watch the bus" plays `bus`.

**Write the letter you won't send.**
> You turn on the desk lamp and write it. Thursday. The text. The fourth frame. The jacket.
> [if feelings] The word. You write the word. It looks smaller on paper than it is.
> You fold it into a square as small as the forty dollars and put it in the drawer with them.
> At 8:52 you hear the bus. You don't stop writing.

Night: *It's in the drawer. Nobody's ever going to read it. You read it. Turns out that's who it was for.*
**In the game: Misfire.** "write a letter i wont send" is a miss. "write her a letter" plays `bus` (*her* is a talk word, and talk means bus at 8:40).

**Take all the photos down. Put them in a shoebox.**
> You take the strips off the corkboard one at a time and put them in the box your boots came in.
> The corkboard is all pinholes. You can see exactly where every one of them was.
> At 7:14 they're all back up.

**In the game: Misfire.** "take down the photos" gets "That moment's already gone."

**Turn the phone face up.**
> You turn your phone face up on the nightstand.
> Nothing comes. Nothing's going to. She's on a bus, and you said what you said.
> You leave it face up anyway.

**In the game: Misfire.** "put the phone face up" gets "That moment's already gone." This should be a free reply here, and it's the seed of the Wednesday proposal.

**Hang something else on the hook.**
> You hang your hoodie on the hook on the back of the door. It's the wrong shape. It's just a hoodie.
> You leave it there.

**In the game: No.** "hang up the jacket" is a miss.

**Run for the bus / remember / listen / cry.** **In the game: Yes.** `bus` (station), `remember` (august), free replies `listen` and `cry`.

*Her head, after the ice machine:* "I saw it go. I actually saw it. So why am I still— Because it didn't need me to see it. It went either way."

---

## Her chains

One "but" per line, the way the author builds them. Each one ends in an entry in the atlas.

### The jacket → *Keep It*, *March*
> I never asked for my jacket back.
> But if I'd asked, she'd have given it back, and it would've been over in March.
> So I should have given it to her. On purpose. Then it'd be a present, not a thing that left.
> But she already had it. You can't give somebody what they're wearing.
> Unless I said it out loud. *Keep it.*
> But it only means something if I know why she wore it. Maybe she was just cold.
> She drew me for a year. I'd know if I'd seen the sketchbook.
> …
> Or I should have just asked for it back. Then I'd have something.
> But I'd have a jacket. Not March.

### The letter → *The Letter*, *The Unsent Letter*
> I'm bad at saying things. I'm fine at writing them.
> I should have written her a letter. She'd read it on the bus, after, when it couldn't start a fight.
> But I didn't know what to write. Every draft is about the eleven dollars.
> I'd know what to write if I knew what happened. Thursday. The text. The drawings.
> But how would I get it to her? If I handed it to her, I'd say something.
> The box. BOOKS (HEAVY) (SORRY). Or Theo. Theo's going.
> But then I'd never know if she read it. Or how.
> …That's what a letter is.

### The bus I only heard → *The Ice Machine*, *The Last Light*
> I didn't see her go. I heard it. At 8:52. From bed.
> I should have been there. Theo was there. Her mom was there.
> But if I went, she'd see me through the glass.
> And she'd think I was asking. And if I asked, she'd stay. She said so, on the tower.
> So I'd have to go and not be seen.
> Behind the ice machine at the feed store. Or up the tower, where you can see the whole road.
> Then I'd have seen it. Then it'd be real.
> But it was already real. I heard it.

### The crooked A → *Leave It*
> We painted it wrong. The second A.
> I should have fixed it before she left, so the town she leaves is the right one.
> But I'd have to climb at three, and she's up there at three.
> So she'd see me with the paint can.
> And she'd say leave it.
> She'd be right. She was always right about the A.

### ok. → *Read 7:03*
> I should have texted her from the porch. She was right behind the door.
> But sorry is a knock, and goodbye is a knock. I didn't have a text-sized thing to say.
> *ok.* I could've sent *ok.*
> And she'd read it and not answer.
> And I'd watch the curtain light up and go dark.
> …Is that what it was like? Monday, 11:52, from her side?

### The fourth frame → *The Fourth Frame*
> I should have given her the strip. The last one.
> But you can't give away four frames. You'd have to tear it.
> Three fish faces. And one where she's looking at me.
> Whoever gets the fourth frame—
> I'd give it to her. So she'd know I saw.
> But I'd only give it away if I knew what I saw.

### Go. → *Go.*
> It wasn't the word. *Go* was right. She should go.
> I should have said it the other way. *Go. You should go.*
> But she'd only hear the word. She'd already heard it once.
> Unless I knew why it mattered that it came from me. That if I'd asked, she'd have stayed.
> Then *go* is the opposite of asking.
> Then I'd be the one who let her.
> …Since when is she mine to let.

### Everything comes back → *Back at 7:14*, then *Tomorrow*
> I gave her the jacket. At 7:14 it was gone again.
> I tore the strip. At 7:14 it was whole.
> I spent the forty dollars twice. It's in the drawer.
> I almost painted the A. It's crooked.
> Everything I give away comes back. Everything I fix comes undone.
> The day keeps everything exactly where it was.
> Maybe that isn't the day being cruel.
> Maybe it just isn't mine to arrange.

### After → *Face Up*
> If there's a Wednesday.
> I'll take the strip down. No. I'll leave it up.
> I'll answer her. *can we talk tmrw.* It's tomorrow now.
> Not yet. But I'll turn the phone over.

---

## Endings atlas

Fifteen endings came out of her ideas. Four are new fixes that fail (record, gift, blessing, witness). Three are new roads to existing fixes (*March* to keep, *The Fourth Frame* to confess, *Leave It* to peace). Five are learning scenes. One is a new way out, one is a morning hint, and one is a Wednesday epilogue. None of them stops the bus. Here's the rule that sorts them:

> **If Maya would ever know about it, it's a fix. If only Nell knows, it's mourning.**
> Fixes fail, because they're still trying to choose what the ending means. Mourning doesn't fail, because it isn't trying to change anything. Only mourning can sit beside the two existing ways out.

---

### 1. The Letter
- **What happens.** At 7:14 she writes Maya a letter instead of getting up. What's in it depends on what she knows:
  - nothing: *Maya — congrats I guess. You owe me eleven dollars. Don't spend it all in one place. — N*
  - `reason`: *They're paying you to draw. I always said somebody should.*
  - `tried_to_tell`: *I'm sorry about the Dollar General joke. I didn't look at your face. I'm looking now.*
  - `read`: *I read it. Monday, 11:52. I put the phone face down like it would bite.*
  - `why_secret`: *You were right. I would have asked.*
  - `feelings`: *I never asked for my jacket back because*. Then she crosses it out so hard the pen goes through the paper.
  - `feelings` and `sketch`: *You've seen that line before. Inside the cover of her sketchbook. I didn't tell you because. Two people crossing out the same sentence in two different rooms.*

  At 6:30 she slips it into BOOKS (HEAVY) (SORRY) while Maya's at the trunk. Then Maya turns around, and Nell says it anyway: *Fine. Then go.*
  Night: *Somewhere past THANKS FOR VISITING CALDER she'll open it. She'll read the you that you wrote at seven in the morning. Then she'll remember the you in the driveway. You wrote the ending. You don't get to pick which one she keeps.*
  Variant: give it to Theo at the diner. Night: `> gave it to her. she put it in her pocket. didnt open it.` *You'll never know when she opened it. Or if.*
- **Chain.**
  > I should have written her a letter. She'd read it on the bus, when it couldn't start a fight.
  > But I didn't know what to write.
  > I'd know if I knew what happened. Thursday. The text. The drawings.
  > But if I handed it to her, I'd say something.
  > The box. Or Theo.
  > But then I'd never know if she read it.
- **Locks.** None to write it. It only counts as a fix once it has something true in it (`tried_to_tell` or more, learned at the diner or the tower). Before that, the three-line version plays, and the night points back: *You don't know what to say because you don't know what happened.*
- **Moments.** 7:14 (writing it), 6:30 (delivering it), or 11:40 for the Theo variant.
- **Kind.** New fix that fails: **record**, the wanting to be remembered the right way.
- **Why it isn't enough.** The letter is the best version of her, and Maya gets both versions. Nell can't choose which one Maya keeps, and she'll never see her read it.
- **Theme.** This is Nell trying to author the ending, which the epilogue reveals she has been doing for ten years (*I always tell it like it happened to somebody else.*). A letter is regret at its tidiest: rewriting the record. And the mirrored crossed-out line shows her why Maya didn't say it, from the inside, without anyone explaining it.

### 2. The Unsent Letter
- **What happens.** At 8:40, instead of running, she turns on the desk lamp and writes it all down. She folds it into a square as small as the forty dollars and puts it in the drawer. At 8:52 she hears the bus and doesn't stop writing. Night: *Nobody's ever going to read it. You read it. Turns out that's who it was for.*
- **Chain.**
  > I could write it all down.
  > But she'll never read it.
  > So who's it for?
  > …Me. I'm the one who doesn't know what happened.
- **Locks.** None. The content grows with facts, like the Letter. Optional: let writing it be a third way to reach `feelings` when she knows `photo` *or* `august` (writing is a kind of looking). Right now `feelings` needs `sketch`, or both `photo` and `august`.
- **Moments.** 8:40.
- **Kind.** Learning scene. It ends the day like `remember` at home does, and doesn't count as a fix.
- **Why it works.** It's the one letter that can't fail, because it isn't trying to reach her.
- **Theme.** Acknowledgment without delivery. Grief that changes nothing outside Nell, which is exactly what makes it allowed.

### 3. Keep It
- **What happens.** At the driveway: *“Keep it. The jacket.”* Maya holds the cuffs in her fists. *“I was going to give it back. At the bus.” “I know. Keep it.”* The box sits on the hood between them like a third person. She goes in the jacket.
  Night: *You gave her the jacket. She already had it. You keep looking at the hook like it's going to mean something now. It's a hook. Calling it a present doesn't make it something you chose.*
- **Chain.**
  > I never asked for my jacket back.
  > So I should have given it to her. On purpose.
  > But she already had it.
  > Unless I said it out loud.
  > But it only means something if I know why she wore it.
  > She drew me for a year.
- **Locks.** `sketch` (Maya's house). Without it: *“…Okay?” It lands like you told her to keep a pen.* Night: *It isn't just a jacket. You don't know why it isn't.*
- **Moments.** 6:30. The payoff lands at 7:14 (the hook) and on Wednesday.
- **Kind.** New fix that fails: **gift**. It could also just count as `peace` if the author doesn't want another fix.
- **Why it isn't enough.** It turns a loss into a gift after the fact. That's still deciding what the leaving means.
- **Theme.** You can't give away something that's already gone. You can only stop waiting for it to come back.

### 4. March (the keepsakes)
- **What happens.** *“Can I have my jacket back.”* Maya takes it off one arm at a time, like a bandage. She's in a T-shirt in September. *“Anything else you want back?”* Nell can't think of one thing, and can think of everything. Night: *You hang it on the hook. It looks wrong there now. Too big. At 7:14 the hook is empty again. You got your jacket back. You didn't get March back.*
  Same family: *“Draw me. One more.”* Maya draws sleeping-August Nell on the box flap in thirty seconds, and the box goes in the trunk. Or Nell keeps the fourth frame.
- **Chain.**
  > Or I should have just asked for it back.
  > Then I'd have something.
  > But I'd have a jacket. Not March.
- **Locks.** Asking for the jacket: none (like knocking, it's the obvious thing she never did). The drawing: `sketch`, since without it she never thinks to ask what Maya draws.
- **Moments.** 6:30. The loop undoes it at 7:14.
- **Kind.** Fix that fails. Holding on, so it fits the existing `keep` fix without a new one.
- **Why it isn't enough.** Owning something isn't the same as having her. And the loop takes every keepsake back.
- **Theme.** Wanting something to hold is the keep fix made small enough to carry.

### 5. The Fourth Frame
- **What happens.** She brings the last photo strip to the driveway and tears it between the third frame and the fourth. *It doesn't tear straight. Nothing today does.* If she has admitted her feelings, she gives Maya the fourth frame. *“You saw.” “I saw.”* Maya puts it in the jacket pocket. Night: *You gave her the only proof. At 7:14 it's back on your corkboard, all four frames, like you never tore it.*
  Before `feelings`: she gives Maya the three fish faces and keeps the fourth. Night: *You kept the fourth frame. Of course you did. You've been keeping it for a year. You just never let yourself look at why.*
- **Chain.**
  > I should have given her the strip.
  > But you'd have to tear it.
  > Three fish faces. And one where she's looking at me.
  > I'd give her that one. So she'd know I saw.
  > But I'd only give it away if I knew what I saw.
- **Locks.** `photo` (7:14) to think of it. `feelings` to give the fourth frame away.
- **Moments.** 7:14 (learning), 6:30.
- **Kind.** A second road to the `confess` fix (being seen), through an object instead of words.
- **Why it isn't enough.** The same as confess: she still gets on the bus. And the strip comes back whole.
- **Theme.** Confessing by letting go of the evidence, which turns out to be harder than saying it.

### 6. Go.
- **What happens.** *“Go.” She flinches; she's heard that one. “No. Go. You should go. They're paying you to draw. Go.” “Okay,” she says. “Okay.”* She goes. Nell lets her. Night: *You said the same word and meant it the other way. You were so proud of meaning it. But she was going anyway. You just wanted to be the one who said she could.*
- **Chain.**
  > It wasn't the word. *Go* was right.
  > I should have said it the other way.
  > But she'd only hear the word.
  > Unless I knew that if I'd asked, she'd have stayed.
  > Then *go* is the opposite of asking.
  > …Since when is she mine to let.
- **Locks.** `why_secret` (the tower). Without it: *She flinches. She's heard that one.* She goes in. Night: *You meant it nicer. She heard the same word.*
- **Moments.** 6:30.
- **Kind.** New fix that fails: **blessing**, the wanting to be the one who lets her go.
- **Why it isn't enough.** Giving permission for something that was already happening is control dressed as generosity.
- **Theme.** This is the mourner's central trap: acting out acceptance. It also takes the ending the author cut (Decision 3, saying "Fine. Then go." on purpose) and gives it a place as a fix that fails *for the reason it was cut*.

### 7. Leave It
- **What happens.** At 3:15 she buys a gallon of exterior white ($17.50 of the forty) and a brush meant for barbecue sauce. She climbs with the can banging every rung. Maya laughs so hard she has to hold the railing. *“It's crooked because I was laughing. Leave it. Leave one thing in this town the way we did it.”* Then the tower scene. Night: *The second A is still crooked. You carried a gallon of paint forty feet up and forty feet down. You left it. It's the first thing you've left alone in days.*
- **Chain.**
  > We painted it wrong.
  > I should have fixed it before she left.
  > But she's up there at three.
  > So she'd see me with the paint can.
  > And she'd say leave it.
- **Locks.** None. The tower is never locked.
- **Moments.** 3:15. Payoff on the clear day at 3:15: *The second A is crooked. You leave it.*
- **Kind.** A variant of the tower (`peace`) and a learning scene. It plants the true lesson in Maya's mouth.
- **Why it isn't enough.** It's still the tower peace, *good the way a photograph is good.*
- **Theme.** The past is crooked because someone was laughing. Straightening it would erase the laugh.

### 8. Read 7:03
- **What happens.** On the porch she texts *ok.* Behind the curtain the phone lights blue, and the shape looks down. *Read 7:03 PM.* No answer.
  With `read`: *Now you know what 11:52 looks like from the other side.* Without it: *For one whole second you hate her for it. Something in you says you'd know.* That night: *The phone's face down on your nightstand. It was face down last night too.* (This points at scrolling up.)
- **Chain.**
  > I should have texted her from the porch.
  > But sorry is a knock, and goodbye is a knock.
  > *ok.* I could have sent *ok.*
  > And she'd read it and not answer.
  > …Is that what it was like, from her side?
- **Locks.** None to send. The night changes with `read`.
- **Moments.** The porch. It points back to 7:14.
- **Kind.** Learning scene (a mirror). No fix.
- **Why it isn't enough.** She gets nothing from Maya, only understanding.
- **Theme.** Regret turns into understanding when you stand on the other side of your own mistake.

### 9. Two Sides of the Door
- **What happens.** She sits with her back against the door. Through the wood, Maya slides down and sits too. An hour, no words. Mrs. Reyes says *mija* inside, the weight gets up, and the porch light clicks off from inside. *She decided when.* Night: *A door's width, for an hour. As close as you could get without risking anything. Close isn't the same as with.*
- **Chain.**
  > I should have knocked.
  > But if I knocked she'd open it, and then I'd have to say something.
  > I could have just stayed. Right there. On the other side.
  > She was right there. She wasn't moving away from the door.
- **Locks.** None.
- **Moments.** The porch.
- **Kind.** Learning scene, or a fix that fails if the author wants a "near" fix. I'd leave it uncounted.
- **Why it isn't enough.** Nearness without risk is the shape of the whole friendship, and here she finally feels it.
- **Theme.** The cost of not knocking, felt from an inch away.

### 10. The Ice Machine
- **What happens.** At 8:40 she goes to the station only to watch.
  Before `why_secret`: she steps into the light, Maya sees her and stands up in her seat, and somehow Nell is buying a ticket. That's the existing `bus` branch and the station fix. Night: *You meant to just watch. Why did she stand up like that? Like you'd asked her something.*
  After `why_secret`: she stays behind the ice machine, where the light doesn't reach. Theo waves with both arms. Maya sits on the wrong side, looking toward Nell's house. *You let her look in the wrong place.* The bus doesn't turn around. Night: *You thought seeing it would make it finished. It just makes it seen. Tomorrow it'll be idling by the feed store again, and you'll know exactly where to stand.*
  Variant: Mom drives her (from the kitchen: *“I'll keep the car running.”*) and they sit with the engine on and the radio doing the weather for a town forty miles away. Mom never asks.
- **Chain.**
  > I didn't see her go. I heard it.
  > I should have been there.
  > But she'd see me through the glass.
  > And she'd think I was asking. And she'd stay.
  > So I'd have to go and not be seen.
  > Then it'd be real.
  > But it was already real. I heard it.
- **Locks.** `why_secret` (the tower) for the unseen version. Without it, the locked attempt becomes the station fix and names what's missing.
- **Moments.** 8:40 (with Theo at 11:40, and Mom in the kitchen, as setups).
- **Kind.** A locked attempt that reuses `station`, then a new fix that fails: **witness**, the wanting proof that it ended.
- **Why it isn't enough.** Seeing it end doesn't end it. The bus left whether she watched or not.
- **Theme.** You can't watch closure into being. It sets up *without knowing* from the other side: even seeing everything isn't knowing.

### 11. The Last Light (a way out)
- **What happens.** On a day when the way out is open, she lets the first six moments happen exactly as they happened. At 8:40, instead of lying there, she climbs the tower in the dark, alone for the first time. *She always comes up here when she's waiting on something. Now you know what that's like.* From the catwalk the road out of Calder looks like a zipper. She watches the bus all the way. *It isn't a bus anymore. It's two lights. It's one light. It's the place where a light was.* She stays until Calder turns its lights off one by one.
  Night: `nights.final` with two lines changed: *You don't play it back. You watched it until there was nothing left to watch.* Then Wednesday.
  Before the way out is open, the same act is a learning scene that ends the day: *You watched it go. It went. Tomorrow it'll be idling by the feed store, late like always.*
- **Chain.**
  > I could watch it from the tower. You can see the whole road from up there.
  > But that's still doing something.
  > Is it? She'd never know. Nobody would.
  > It's not to change it. It's to see it go until it's gone.
  > …That's the only goodbye that's just mine.
- **Locks.** The same as the true ending (`ready`: three fixes and `why_secret`). The not-ready version is free and teaches that watching alone doesn't end anything.
- **Moments.** 8:40. It echoes 3:15 (*She's been waiting for you since Thursday*) and August on the tower.
- **Kind.** **New way out**, or a variant of the true ending's 8:40.
- **Why it works.** It leaves Maya's Tuesday exactly as it happened. She never knows. Nell sits where Maya sat and waits on nothing. And the same act only counts after she has stopped trying to fix things, which is the same rule ENTER follows.
- **Theme.** Letting go as watching something leave until it's gone, with your eyes open, instead of with a blanket over your head. **Caveat:** it softens the purity of "let every moment go by," and the author has to decide whether that's acceptable. There's precedent: at 8:40, `hide` already maps to "let it happen."

### 12. Back at 7:14
- **What happens.** After she has done two or more things to objects (burned, torn, given, spent, painted), the morning notices:
  > The strip's back on the corkboard. All four frames.
  > The hook's empty. The money's in the drawer.
  > Everything you gave away came back. Everything you fixed came undone.

  Once the way out is open: *The day keeps everything where it was. Maybe it isn't yours to rearrange.*
- **Chain.** *Everything comes back* (see Her chains).
- **Locks.** Facts set by the ritual branches (for example `gave_jacket`, `tore_strip`, `spent`).
- **Moments.** 7:14 (the `again` lines).
- **Kind.** Morning hint that feeds the true ending.
- **Why it works.** It turns the loop's reset into the lesson instead of the punishment, and it's this Nell's road to *Tomorrow*.
- **Theme.** You can't rearrange the past. The things go back where they were, and that's allowed.

### 13. Face Up (Wednesday)
- **What happens.** On Wednesday, "turn the phone over", "face up", "reply" or "answer her":
  > You turn your phone face up.
  > [if read] Her message is still there. *can we talk tmrw.*
  > [if read] Tomorrow was yesterday. It took you {n} of them.
  > [if not read] Nothing new. You leave it face up anyway.
  > You don't answer yet. But you leave it face up.

  It doesn't end the game. "get up" still does.
- **Chain.** *After* (see Her chains).
- **Locks.** Wednesday (the truth ending).
- **Moments.** Wednesday, mirroring 7:14.
- **Kind.** Epilogue beat for the truth ending.
- **Why it works.** It changes nothing about Tuesday. It's the first act that points forward, and it keeps the author's restraint: the current Wednesday reply to the phone is *Later.*, and she still doesn't answer.
- **Theme.** The opposite of 11:52: face down becomes face up. And the game's title was in Maya's text all along.

### 14. In Case
- **What happens.** *“For Chicago. In case.” “In case what?”* Nell has never finished that sentence either. Maya folds Nell's fingers back over the money. *“Keep your in-case, Nellie. You're going to need it.”* Night: *Forty dollars, still in your hand. For what? She sounded so sure.*
- **Chain.**
  > Forty dollars for nothing in particular.
  > I spent it on a ticket once. The bus went in a circle.
  > I should have given it to her. For the city.
  > In case of what?
  > …In case I ever want to go somewhere. That's what it was always for.
- **Locks.** None.
- **Moments.** 6:30 (also 7:14, the drawer).
- **Kind.** Learning scene. No fix.
- **Why it works.** Maya hands Nell's future back to her. Letting go of Maya isn't the same as giving up her own leaving someday.
- **Theme.** Moving forward goes both ways. The money becomes *for something in particular*, even if she doesn't know what yet. (Optional Wednesday free reply for the drawer: *Forty dollars. For something in particular. You don't know what yet.*)

### 15. The Paper Bag
- **What happens.** In the kitchen she asks Mom what you pack someone for a long bus. Mom puts her keys down and packs it: peanut butter, an orange, too many napkins, the top folded twice. The truth comes sideways through the bag (`mom`). At 6:30: *“My mom.”* Maya laughs the real laugh. *“Tell Denise I said—”* She can't finish it either. Night: *You handed her your mom's love in a paper bag because you couldn't hand her yours.*
- **Chain.**
  > I didn't know what to give her.
  > Mom would know. Mom always knows what to pack.
  > But Mom only says things sideways.
  > …So do I.
- **Locks.** None.
- **Moments.** The kitchen, then 6:30.
- **Kind.** Learning scene (another way to learn `mom`). It could count as `peace` if the author wants.
- **Why it isn't enough.** Love through a proxy. She's her mother's daughter: practical, sideways, and unfinished.
- **Theme.** Nell sees where her own not-saying comes from, and it's love, not cowardice.

---

## Top proposals for the author (ranked)

### 1. Let her watch the bus without getting on (*The Ice Machine*)
> You stay behind the ice machine, where the light doesn't reach. If she sees you, she'll think you're asking.
> Maya sits on the wrong side, looking toward your house. You let her look in the wrong place.

**Why first:** it's the biggest misfire found. "watch the bus leave", "go to the station to watch" and "walk to the feed store" all put her on the bus. "hide behind the ice machine" quietly lets the moment pass.
**To build:** add a `watch` word list to the 8:40 moment (*watch, see her off, wave, ice machine, just to see*) above `bus`, and a `watch` branch with two cases. The first, `needs: ["why_secret"]`, plays the unseen scene. The fallback is two lead-in lines plus the existing station text, with `fix: "station"`. Either leave the unseen case uncounted or add a sixth fix, `witness` (in `FIXES` in game.js:27, plus a `think.facts` line).

### 2. Text from the porch (*Read 7:03*)
> You type *ok*. Behind the curtain something lights up blue. *Read 7:03 PM.*
> Now you know what 11:52 looks like from the other side.

**To build:** data only. Add `text: "porch text"` to the porch's `changes` (the global `text` words already exist), and a `porch text` branch with `[if read]` / `[if not read]` lines and a night. No fix. This also fixes "text her" on the porch answering "That moment's already gone."

### 3. The jacket, both ways (*Keep It* and *March*)
> “Keep it.” She holds the cuffs in her fists. “I was going to give it back. At the bus.”
> Or: “Can I have my jacket back.” She takes it off one arm at a time, like a bandage.

**To build:** replace the driveway free reply `jacket` with two actions. *Keep it / give / yours* goes to a `keep it` branch (`needs: ["sketch"]`, with the "keep a pen" fallback). *Back / return / give it back* goes to `march` (`fix: "keep"`). Count `keep it` as `peace`, or add `gift`. For the payoff, add a hook free reply on the clear day (*It's a hook.*), and a Wednesday one.

### 4. The Letter (the *record* fix)
> *I never asked for my jacket back because*. You cross it out so hard the pen goes through.
> You've seen that line before. Inside the cover of her sketchbook.

**To build:** add `letter: ["letter", "write", "note", "card"]` to the 7:14 moment's `words` (moment words are checked first, which also fixes "write maya a letter" landing on the tower). Then a `letter` branch built from `[if fact]` paragraphs that ends at 6:30 with "Fine. Then go." anyway. New fix `record` (game.js `FIXES` plus a `think` line). The Theo-delivery case is optional.

### 5. Face Up on Wednesday
> You turn your phone face up. *can we talk tmrw.* Tomorrow was yesterday. It took you {n} of them.
> You don't answer yet.

**To build:** data only. Add `wednesday.words.faceup` (*face up, turn the phone, turn it over, reply, answer*) above `phone`, and a `wednesday.replies.faceup`. `say()` already filters tags, so `[if read]` works here.

### 6. The Last Light (a third way out, or a variant of the true ending)
> It isn't a bus anymore. It's two lights. It's one light. It's the place where a light was.

**To build:** at 8:40, map tower words to a `last light` branch. When `ready` is known, it plays the watching text and then continues as if the player had pressed ENTER, so the final night and Wednesday follow. Before that, it's a learning scene with a night. This needs a small engine change (a branch flag such as `letsItHappen: true`, handled where `letItHappen()` runs) and one `[if watched]` swap in `nights.final`. **This needs an author decision:** can any act count as letting it happen? (`hide` at 8:40 already does.)

### 7. "Go." (the *blessing* fix)
> “No. Go. You should go. They're paying you to draw.” … You just wanted to be the one who said she could.

**To build:** add driveway words (*you should go, you have to go, go to chicago, go draw*) and a `blessing` branch with `needs: ["why_secret"]` and a flinch fallback. New fix `blessing`, or count it as `peace`. This is the cut ending (Decision 3) turned into a fix that fails for the reason it was cut.

### 8. A batch of free replies, plus the misfires
These don't use up the day, and most of them hint at something:

| Moment | Input | Reply |
|---|---|---|
| 7:14 | drawer, forty, money | *Two twenties, folded small. For nothing in particular. You put them back. In case.* |
| 7:14 | unscrew the hook | *Then there'd be two holes where the empty used to be. You leave it.* |
| 3:15 | card | *There's no card for this. You stand between CONGRATULATIONS and WITH SYMPATHY until the cashier asks if you're okay.* |
| 3:15 | sign, schedule, feed store | *CHICAGO 8:45 PM. DAILY. It leaves every night. It's only tonight for you.* |
| 3:15 | church, pray, candle | *Nobody died. That's what makes it so stupid. (It's a Baptist church. There's nothing to light.)* |
| 3:15 | ladder | *Warm from the sun. She's up there. You just want to be near where she is for a minute.* |
| 6:30 | picture, photo | *“Don't. I look like I'm moving.” The picture is a blur in a jean jacket.* |
| 6:30 | eleven dollars | *“Keep the eleven dollars.” It's the first thing you've ever let somebody keep without keeping track.* |
| Porch | palm, hand on the door, touch the door | *Not a knock. The opposite of a knock.* (moment word, so it's checked before *door*) |
| Porch | whisper, bye | *“Bye,” you tell the wood. On purpose not loud enough.* |
| 8:40 | face up | *You turn it face up. Nothing comes. You leave it.* |
| 8:40 | hoodie, hang | *It's the wrong shape. It's just a hoodie. You leave it there.* |

Misfires found while checking, worth fixing even without any new scene:

| Moment | Input | What the game does now |
|---|---|---|
| 7:14 | say goodbye to the room | "She isn't here. Not yet." |
| 7:14 | write maya a letter / draw her | plays the tower (peace) |
| Kitchen | say goodbye to mom | "She isn't here. Not yet." (Mom is right there) |
| Kitchen | pack maya food for the bus | "Not yet." |
| 3:15 | go to the feed store / read the bus sign | "Not yet." (she's walking past it) |
| 6:30 | give her the photo strip / take a picture | "That moment's already gone." |
| Porch | text her | "That moment's already gone." |
| Porch | put my hand on the door / slide a note under the door | plays `knock` (sorry) |
| 8:40 | watch the bus leave / go to the station to watch | plays `bus` (she gets on) |
| 8:40 | hide behind the ice machine | lets the moment happen |
| 8:40 | write her a letter | plays `bus` (*her* means run at 8:40) |
| 8:40 | climb the tower / put the phone face up | "That moment's already gone." |

### 9. Leave It (the crooked A)
> “It's crooked because I was laughing.” She takes the brush out of your hand. “Leave it.”

**To build:** add 3:15 words (*paint, fix the a, crooked, brush*) and a `paint` branch: four lead-in lines, then `...TOWER_SCENE`, then a night. `fix: "peace"`, with the same `learn` as the tower. Optionally set a `left_it` fact for a clear-day 3:15 line: *The second A is crooked. You leave it.*

### 10. Back at 7:14 (the mourner's road to *Tomorrow*)
> The strip's back on the corkboard. All four frames. Everything you gave away came back.

**To build:** have the ritual branches above set small facts, and add tagged lines to `again` (`[if gave_jacket]`, …). `say()` already handles tags. It only matters once proposals 3, 4 or 9 exist.

_Also worth a look: the existing notes in `docs/playtests/nell-simulation.md` sketch "see her off without getting on" (P4) and "watch it go from the tower" (P14). Proposals 1 and 6 here are fuller versions of the same two ideas, arrived at independently, which suggests they're what players will actually try._

---

_Not checked: whether the imagined branches would pass `node tomorrow/test/test.js`, since nothing was built. Every "In the game" note comes from the play harness on the second Tuesday (session: scratchpad/harness/sessions/mourner-05.txt, plus a helper that branched single inputs from the same save). A few inputs were only checked at one moment._
