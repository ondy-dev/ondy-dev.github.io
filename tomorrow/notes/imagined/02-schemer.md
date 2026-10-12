# Schemer Nell

_An imagined playthrough of "Tomorrow" by a Nell who treats the loop like a heist. It's written for the author: what this Nell tries, what would happen, and the endings her ideas point to._

**How to read this.** Indented prose is in the game's voice (second person, present). Each action is marked:

- **In the game:** the real game already does this. The branch or free reply is named.
- **Misroutes:** the real game catches the words but does something else. Tested with the play script.
- **Not in the game:** the real game answers with a miss, *Not yet.*, or *That moment's already gone.*

Invented details the author can veto are marked **(proposed canon)**. New fact names are in `code`.

---

## 1. Who this Nell is

> Seven moments. One change a day. Everything resets except what's in my head.
>
> That's not a curse. That's a ruleset.
>
> I used to count streets at 2 AM. Eleven. Now I count Tuesdays, and the minutes inside them. Theo slides into the booth at 11:41, not 11:40. Somebody laughs four seconds after *She didn't tell you.* The bus idles by the feed store from 8:38 to 8:52. I know where everybody is at every minute of this day except me.
>
> Every night I write the plan on my arm in Sharpie. Every morning my arm is clean. Fine. I'll keep it in my head. I'm good at keeping things in my head.
>
> If I get the day right, nobody gets to tell me anything last ever again.

- **What she wants:** control. Being told last, by Theo, in a diner where everybody seemed to be laughing, is the wound. The plan is the bandage. If she knows everything first, she can never be the last to know.
- **How she plays:** in campaigns. She has *recon* Tuesdays (learn one fact, change nothing that matters) and *execution* Tuesdays (spend the one change on the payoff). She puts facts from different Tuesdays together like keys on one ring. She recruits people: Theo, Mrs. Reyes, Mom.
- **What she's good at:** she's the ideal player for this game. The decision tree is a chain of *"but I didn't know…"*, and she collects the knowing.
- **Her blind spot:** Maya is a variable. Every plan has a line where Maya says the right thing back. The Maya she's talking to has lived exactly one Tuesday. Nell has lived fourteen.
- **Her tell:** checking the time. The streetlight, the Reyeses' kitchen clock, her phone during the hug.
- **The canon she leans on:** counting; rehearsing conversations on walks (from `nell-simulation.md`); the forty dollars; the back door of the Reyes house (from the `house` branch); the bus company that Mrs. Reyes calls (from `stay`); the ticket in the open box (from `house`).

### Where scheming turns into managing the day

The game already warns her in three places:

- The repeat: *"Why does it sound like you practiced that?"* … *"The day goes exactly where you steer it. It's like driving a car from the back seat."*
- `tooSoon.someFixes`: *"But at every one of them, you stopped and looked."*
- `tooSoon.noFixes`: *"You can't stop halfway and call it letting go."*

Her scheming crosses that line at six exact points, and each one becomes a family of endings below:

1. **When the plan needs Maya to say a line.** (Everything I Know, The Perfect Tuesday)
2. **When she spends the day's one change on finding out instead of doing.** (The Back Door, Ding-Dong, recon Tuesdays)
3. **When other people become tools.** (A Full Driveway, Secondhand, The Accomplice, Overtime)
4. **When she arranges for the hard part to happen without her in the room.** (Read 8:53 PM, Read 6:41 PM, Ding-Dong)
5. **When the plan reaches past tonight.** (Collateral, Forty Miles)
6. **When letting go becomes the last step of the plan.** (Go, Dress Rehearsal, the five-Tuesday speedrun, Wednesday, Unplanned)

---

## 2. What the real game does with her

I tested about 70 schemer inputs with `play.js`. The pattern:

| Where | She types | What the game does | |
|---|---|---|---|
| 7:14 | *steal her ticket*, *cancel her ticket*, *write in her sketchbook* | the tower (*her* → `talk` → `tower`) | misroute |
| 7:14 | *text theo* | texts **Maya**: *hi.* → tower | misroute |
| 7:14 | *hide her ticket* | pulls the blanket over her head (`hide`) | misroute |
| 7:14 | *call mrs reyes* | `house` | close enough |
| 7:14 | *make a plan*, *make a list*, *write it down*, *set an alarm*, *check my arm*, *count the money*, *go to the library* | miss | — |
| 7:14 | *call the bus company*, *go to the bus station*, *go to the feed store and wait* | *Not yet.* | — |
| Kitchen | *ask mom for the car / for money / to help*, *tell mom about the loop*, *finish her sentence* | all play *"Mom. What did Lourdes say?"* | misroute |
| Kitchen | *tell mom i love maya* | *She isn't here. Not yet.* | misroute |
| Diner | *ask theo to help / to stall the bus / to drive me*, *tell theo about the loop*, *predict the laugh* | all play `theo` (DINER_TRUTH) | misroute, but a kind one |
| Diner | *tell theo im living the same day* | lets the diner happen (*the same* is a `nothing` word) | misroute |
| Diner | *ask theo what mrs reyes said* | *That moment's already gone.* (*mrs* → `house`) | misroute |
| 3:15 | *wait in her driveway* | the tower | misroute |
| 3:15 | *go home and pack* | lets it happen (*go home*) | misroute |
| 3:15 | *buy a ticket*, *rehearse*, *go to the church* | miss | — |
| Driveway | *i know about the sketchbook*, *i know about the scholarship*, *i'm coming with you*, *go. i mean it*, *i'll visit at thanksgiving*, *lend you forty dollars* | miss | — |
| Driveway | *i know you tried to tell me thursday*, *can we talk for real this time*, *give her the forty dollars* | the `say what` nudge | — |
| Driveway | *i read your text* | *That moment's already gone.* | misroute |
| Porch | *slide a note under the door*, *text her sorry*, *ring the doorbell and run*, *go to the back door*, *throw a rock at her window* | `knock` | misroute |
| Porch | *text her*, *wait for mrs reyes*, *call theo* | *That moment's already gone.* | — |
| 8:40 | *stall the bus*, *call the bus company*, *stand in front of the bus* | she runs and **boards** the bus (`station`) | misroute |
| 8:40 | *text her*, *ask mom for a ride*, *stay awake* | *That moment's already gone.* | — |

**What this shows:**

- **"Her" and "maya" send almost any morning scheme to the tower.** That's right for a player who means *go see her*. It's wrong for a schemer, whose sentences are full of *her ticket*, *her sketchbook*, *her mom*.
- **Every "use what I know" line at the driveway misses.** That's her whole game, and it's where the real game has nothing for her.
- **Texting only exists at 7:14.** A schemer reaches for the phone first at the porch and at 8:40.
- **The speedrun.** The fastest way out with the truth takes five Tuesdays (I verified it): day 2 *go to the tower* (peace, plus `reason`, `why_secret` and `tried_to_tell`), day 3 *ask her to stay* (keep), day 4 *knock* (sorry), *Thinner*, then day 5 ENTER through all seven moments → Wednesday. On that route Nell never learns the diner wasn't laughing at her, or that she left the text on Read, and the honest last day tells both anyway. The schemer will find this route. Her endings keep asking whether letting go counts when it's step four of a plan.

---

## 3. Her Tuesdays, in order

How a schemer actually lives the loop. Real branches are named; imagined ones point to the atlas.

| Tuesday | The plan | What happens | The "but…" she leaves with |
|---|---|---|---|
| 1 | none | Everything happens. | *Seven places it could have gone differently. Seven tumblers.* |
| 2 | "Don't waste it. Intel first." | `house`: Chicago, the sketchbook, *You knew.* She never learns that this was the one Tuesday she could have let go without knowing. | *I didn't tell you because— Because what?* |
| 3 | Recruit Theo. | `theo`: nobody laughed, Thursday. She tries to tell him about the loop, and he thinks she's having a breakdown (The Accomplice, first try). | *I need proof. Something he can't argue with.* |
| 4 | Check the phone. | `phone`: *Read 11:52 PM.* | *She tried. Twice. What else did she try?* |
| 5 | Intercept her at the library. | Maya's List (imagined). | *She had a plan for telling me. Six of them.* |
| 6 | Tower, 3:15. | `tower`: peace, `why_secret`. *Good the way a photograph is good.* | *Peace: done. Next.* |
| 7 | Take the ticket. | Forty Miles (imagined). | *Then I'll stop the bus instead.* |
| 8 | Theo stalls the bus. | Overtime (imagined). | *I had an hour. I spent it in bed.* |
| 9 | Fill the driveway. | A Full Driveway (imagined). | *Nobody said anything wrong. Nobody said anything.* |
| 10 | Tell her everything I know. | Everything I Know (imagined). | *"You didn't ask me one thing."* |
| 11 | Ask her to stay. | `stay`: she stays and stops drawing. | *Keep: done. That one's worse.* |
| 12 | Write it in the sketchbook. | Read 8:53 PM (imagined). | *I did it again. I did Monday again.* |
| 13 | Theo, with proof. | The Accomplice (imagined): *"How many times have you told me this?"* | *Back seat.* |
| 14 | Say the same words, mean them right. | Go (imagined). | *She didn't need my permission.* |
| 15 | All seven at once. | The Perfect Tuesday (imagined). | *I got every line right. I wasn't in any of them.* |
| 16 | Let go, on schedule. | ENTER through all seven → Wednesday. | — |
| Wednesday | *make a plan* | Wednesday, Unplanned (imagined). | — |

By the real rules the way out opens after Tuesday 12 (peace, keep and confess, plus `why_secret`). She lives three more Tuesdays anyway. To her, *"What if you didn't change anything?"* sounds like a trick question.

The turn happens around Tuesday 7. Before it, her schemes are about **finding out**, and the game rewards them. After it, they're about **steering**, and every one fails in the same direction: the better the plan works, the less Maya is in it.

---

## 4. The day, moment by moment

### 7:14 AM: her room

*Her logic: this is the only moment where she's alone and nothing has started. Everything a heist sets up, it sets up here.*

**1. Check the plan on her arm.** *Not in the game* (miss).
> You push up your sleeve. Clean. Last night you wrote the whole day on it in Sharpie, minute by minute, until it went past your elbow. Tuesday washed it off.
>
> You'll have to keep it in your head, like everybody else.

**2. Set the alarm for 7:13 to get ahead of the day.** *Not in the game* (miss).
> It's already ringing when you open your eyes. It's always already ringing.
>
> You can't get up before Tuesday does.

**3. Count the money in the drawer.** *Not in the game* (miss).
> Two twenties. Forty dollars for nothing in particular. One bus ticket, or one very bad plan.

**4. Text Theo: *need a favor, tell you at 11:40*.** *Misroutes:* it texts Maya and goes to the tower.
> > need a favor. big one. tell you at the diner
>
> > ??? ok. who died
>
> Four seconds. Theo always answers in four seconds. After the bus being late, it's the most reliable thing in Calder.
>
> *Sets up The Accomplice or Overtime, but it can't be the day's one change by itself: nothing happens until 11:40.*

**5. Go to the library** (Mrs. Reyes said that's where Maya is). *Not in the game* (miss). Needs `reason`, because that's where she heard it. → **Maya's List**
> The Calder library is one room over the post office. Maya's at the desk with a grocery bag of overdue books, paying in quarters. She doesn't see you.
>
> Under her elbow there's a receipt with a list on the back. *library. Dot's? (Theo). tower 3. TELL NELL.*
>
> Above it, older, all crossed out: *Thurs: tell Nell. Fri. Sat. Sun. Mon (text?).*

**6. Go to the house again and take the ticket from the open box.** *Misroutes* to the tower (*her*). Needs `sketch`. → **Forty Miles**
> Mrs. Reyes lets you wait in Maya's room, same as always. The open box. *We are delighted.* Under it, the ticket: CALDER → CHICAGO, TUE 8:45 PM.
>
> It fits in your back pocket like it was made for it.

**7. Go to the house and write in the sketchbook, under the crossed-out line.** *Misroutes* to the tower. Needs `sketch`. → **Read 8:53 PM**
> *Nell — I didn't tell you because*, crossed out so hard the pen went through.
>
> Under it, in your handwriting: *I know why. I'd have asked. I'm sorry about Thursday. —N*
>
> You put it back exactly where it was. You leave through the back door.

**8. Go to the house and tell Mrs. Reyes to tell Maya you know.** *Partly in the game* (`house` plays; the message doesn't exist). → **Secondhand**
> "Tell her I know," you say. "Tell her I'm not mad."
>
> Mrs. Reyes holds your face in both hands. "Mija. I'll tell her." She will. She tells everybody everything. That's the plan.

**9. Call the bus company in Mrs. Reyes's voice and cancel the ticket.** *Not in the game* (*Not yet.*)
> Calder still has a phone book, in the kitchen drawer under the takeout menus. A woman answers on the second ring.
>
> "This is Lourdes Reyes," you say, in a voice that's mostly Mrs. Reyes and a little bit Mom. "I need to cancel—"
>
> "Honey," the woman says. "Lourdes called yesterday to confirm. Twice. Is this Nell?"
>
> Everybody in Calder knows everybody's voice. You hang up. By noon Mrs. Reyes knows. By six-thirty, so does Maya.

**10. Go to the feed store and wait for the bus all day.** *Not in the game* (*Not yet.*)
> You sit on the bench outside the feed store from 7:40 in the morning. At noon the feed store man brings you a Coke and doesn't ask. At 3:15 you can see the tower from here. You don't go.
>
> At 8:38 the Reyeses' car pulls in. Maya sees you and her face does the math. "How long have you been here?"
>
> "A while."
>
> You skipped the whole day to be there for the end of it. The end doesn't mean anything without the day. She gets on.

### The kitchen

*Her logic: Mom is the first adult of the day, and the only one who'd do something for her without needing a reason.*

**1. Ask Mom to call Lourdes and get her to drive Maya late.** *Misroutes* to `mom`.
> "Could you call Mrs. Reyes? Ask her to— I don't know. Be late. An hour."
>
> Mom turns around. She actually turns around. "Why would I do that, baby?"
>
> You don't have an answer that isn't insane. She kisses the top of your head. The screen door.

**2. Ask Mom for a ride at 8:40.** *Misroutes* to `mom`.
> "I'm on till nine." **(proposed canon)** "Why?"
>
> "No reason."
>
> She looks at you a second too long. You've added a variable to her day, and she can feel it.

**3. Ask Mom for money.** *Misroutes* to `mom`.
> She gives you the twenty from the coffee can and doesn't ask what it's for. Sixty dollars now. Sixty dollars for nothing in particular.
>
> It's still one ticket.

**4. Tell Mom about the loop.** *Misroutes* to `mom`.
> "Mom. What if I told you I've lived today eleven times."
>
> She laughs, and then she doesn't. "Then I'd say eat your eggs. I made them eleven times." She's at the screen door. "Are you okay?"
>
> Nobody in this house knows how to answer that one.

**5. Rehearse on Mom: finish her sentence.** *Misroutes* to `mom`. Needs `feelings` and `mom`. → **Dress Rehearsal**
> "Maybe it's good. Some space. Friends who aren't—"
>
> "Who aren't just friends?"
>
> Mom turns around. It's the first thing all morning she's said to your face and not the coffee maker. "Yeah, baby. That's what I was going to say."

**6. Take Mom's keys.** *Not in the game* (miss).
> You could. She'd notice before you got to the end of the driveway. You don't have a license, and you don't have a plan for after the driveway.

### 11:40 AM: Dot's Diner

*Her logic: Theo is the only person in Calder who'll help without asking why, and the only one who'll be there every Tuesday at the same minute.*

**1. Prove the loop to Theo: predict the laugh.** *Misroutes* to `theo`. Needs `nobody_laughed` (she has to have looked). → **The Accomplice**
> "In about four seconds," you say, "a man on that TV wins a boat, and the two truckers at the counter laugh."
>
> Theo looks at you. The man wins a boat. The truckers laugh.
>
> The coffee pot ticks against the table. "Okay," Theo says. "Okay. What do you need."

**2. Ask Theo to stall the bus.** *Misroutes* to `theo`. → **Overtime**
> "Earl," Theo says. "The driver. He gets a cherry pie to go every Tuesday at eight-thirty. That's why it's always late." **(proposed canon)** He's already thinking. "If the pie wasn't ready…"

**3. Ask Theo to come to the Reyeses' at 6:30.** *Misroutes* to `theo`. → **A Full Driveway**
> "With pie?"
>
> "With pie."
>
> "Is this a, like, intervention?" He's already untying his apron in his head. Theo would go anywhere you asked him to. Nobody ever asks him.

**4. Ask Theo to get Maya to come to the diner.** *Misroutes* to `theo`.
> He texts her. You watch him wait. "She says she's busy."
>
> "Busy where."
>
> "She just says busy." You know where. She's on the tower, waiting for you. She'd rather wait for you there than be brought to you here.

**5. Ask Theo exactly what Mrs. Reyes said at six.** *Misroutes* (*mrs* → `house` → *That moment's already gone.*)
> "She said, 'Maya's on the eight forty-five, and she's telling Nell today, so don't say anything.'" **(proposed canon)** Theo goes gray. "And then I said something. Oh my god. I said something."
>
> She was going to tell you today. Today was the plan.

**6. Use the diner phone to call the bus company.** *Misroutes* (*phone* → *That moment's already gone.*)
> Dot's phone is on the wall by the register, with a cord long enough to reach the fryer. Dot watches you dial. Dot watches everything.
>
> Hold music. A song about a truck. You hang up before anyone answers. What were you going to say? *Please don't take her?*

**7. Come in early and leave before he can say it.** *Not in the game.*
> You come in at 11:30, eat, pay, and you're out the door by 11:38. At 11:40 Theo's face is in the window with the coffee pot, looking for you.
>
> You dodged it. You still know. There's no version of today where you get to find out for the first time again.

### 3:15 PM: Main Street

*Her logic: this is the last free hour before the driveway. Use it to get ready.*

**1. Go to the tower.** *In the game:* `tower` (peace).

**2. Buy her own ticket at the feed store.** *Not in the game* (miss). → **The Ticket in Her Pocket**
> The feed store sells bus tickets out of a drawer under the register, next to the mouse traps. **(proposed canon)** CALDER → CHICAGO, TUE 8:45 PM. Forty dollars exactly.
>
> You don't tell anybody. You just have it.

**3. Rehearse on the church steps.** *Not in the game* (miss).
> You sit on the Baptist church steps and say it to the hedge. Every version you write is good. The best one is mean.
>
> You keep the mean one, because it's the only one you can say without crying.
>
> *(This is where "When? From the bus?" comes from. `nell-simulation.md` already proposes it as canon.)*

**4. Buy index cards and a Sharpie at the Dollar General.** *Not in the game* (the `dollar general` free reply: *"Nothing in there you need today."*)
> "Big test?" the lady at the register says.
>
> "Kind of."
>
> You number them one to nine. At 6:30 they'll be in your back pocket, and you won't take out a single one.

**5. Go to the Reyeses' early and help load the trunk.** *Misroutes* to the tower (*her*). → **A Full Driveway**
> Mrs. Reyes is delighted. You carry BOOKS (HEAVY) (SORRY) before Maya can. By the time she comes down the steps there's nothing left in her arms, and nothing to do with her hands, and you're already talking about the trunk.

**6. Climb halfway up the tower and just watch.** *Misroutes* to the tower (`tower`). Imagined as recon.
> You stop where the ladder cage hides you. She's up there with the sketchbook. She's drawing the road out of town. Then she turns a page and draws the ladder. Then, very carefully, the top of your head.
>
> "You can come up, Nellie," she says, without looking. "I can hear you breathing."
>
> You can't spy on somebody who's waiting for you.

### 6:30 PM: the driveway, "Say something."

*Her logic: everything she's learned on every Tuesday is useless unless she says it here. This is the vault.*

**1. Use everything: "I know about the scholarship. I know about Thursday. I know you'd stay if I asked."** *Not in the game* (miss, or the `say what` nudge). → **Everything I Know**
> You say it in order, the way you practiced. The scholarship. The ticket in the open box. Thursday. 11:52. The sketchbook. *If I told you, you'd ask me to stay. And I would.*
>
> Maya's gone very still. "I never told anybody that last part," she says. "How do you know that?"

**2. Read from the index cards.** *Not in the game.* The idea only exists as the repeat (*"Why does it sound like you practiced that?"*).
> You don't take them out. You don't have to. You know them by heart, and she can hear it.
>
> "Are you talking to me," she says, "or to the me you've been practicing on?"

**3. "Let's go up the tower. Right now."** *Misroutes* (*tower* → *That moment's already gone.*)
> "Nell, I'm packing."
>
> From the doorway: "Ay, go. I'll do the books."
>
> So you go. The tower at 6:40 isn't the tower at 3:00. The sun's already behind the feed store. She keeps her phone in her hand the whole time. You say the right things in the wrong light. At 7:55 her mom honks from the bottom of the ladder.
>
> You can't move a conversation to where it should have happened. That place was Thursday.

**4. Ask for the jacket back, to make her say why she wants to keep it.** *In the game as a free reply* (*"You don't ask for it back. You never do."*). Imagined:
> She sets the box down and takes it off. One arm, then the other. She holds it out. She's wearing a Calder pool T-shirt underneath and she looks cold right away.
>
> She didn't fight for it. She doesn't fight for things. Neither do you.
>
> The hook on your door isn't empty tonight. In the morning it is.

**5. "Keep the jacket. Bring it back at Thanksgiving." Plus the forty dollars: "Pay me back in person."** *Not in the game* (miss). → **Collateral**
> "I already looked up the buses. Thanksgiving, Christmas, spring break. If you leave Friday after class—"
>
> "You planned four years."
>
> "I planned everything."

**6. "Go. Get out of here. One of us should."** *Not in the game* (miss). Needs `why_secret`. → **Go**
> Same first word. You say it like a door you're holding open.
>
> Maya stares at you. "Are you giving me *permission*?"

**7. "I'm coming with you. I bought a ticket."** *Not in the game* (miss). The ticket would have to come from 3:15, which used up the day. → **The Ticket in Her Pocket**

**8. Answer the text, out loud: "Okay. Tomorrow's here. For real this time."** *Not in the game* (the `say what` nudge). Needs `read`.
> She stops on the bottom step. "That was last night."
>
> "I know. I'm answering it now."
>
> She sets the box down on the hood like it got heavier. "Then what's left to talk about?"
>
> For once you don't have a plan for the next line. You just stand there in it.
>
> *(Close to the `answer` fix that `nell-simulation.md` proposes. The schemer gets there by treating the text as a script she's finally reading from.)*

**9. Have Theo show up at 6:30 with pie.** *Not in the game.* (The diner change did it; the driveway plays out.) → **A Full Driveway**

**10. Show her the photo strip, the fourth frame.** *Not in the game* (miss).
> She looks at it a long time. "I know," she says. "I was there."
>
> You brought evidence. Like she's the one who needs convincing.

**11. Say "Fine. Then go." on purpose, as written.** *In the game* (`original` → let it happen; *"It comes out the way it came out."*). Schemer reading: she's testing whether the day is fixed. It is.

### The porch, "You could knock."

*Her logic: she knows from the `knock` branch that Maya opens before her hand comes down. So the porch is the one sure thing, and that's exactly why she keeps looking for a cleverer way through it.*

**1. Knock.** *In the game:* `knock` (sorry).

**2. Ring the doorbell and hide behind the hedge.** *Misroutes* to `knock`. Needs `sorry` (she knows Maya will open). → **Ding-Dong**
> The door opens fast. Maya stands in it with the hall light behind her. She looks at the empty porch, the street, the dark.
>
> "Nell?" she says to nobody.
>
> You hold your breath behind the Reyeses' hedge until the door closes.

**3. Text her *sorry* from the porch and watch through the curtain.** *Misroutes* to `knock` (*text her sorry*), or *already gone* (*text her*). Needs `read`. → **Read 6:41 PM**
> Through the curtain, her phone lights up her face. She reads it. She doesn't move for a long time.
>
> Then she turns it face down on the box.
>
> Your phone: _Read 6:41 PM._

**4. Go around to the back door.** *Misroutes* to `knock`. Needs `sketch` (she left through the back door on Tuesday 2). → **The Back Door**
> Through the kitchen window you can see straight down the hall. Maya is on the floor with her back against the front door. Her sketchbook is open on her knees. She's drawing fast.

**5. Slide a note under the door.** *Misroutes* to `knock`.
> On the back of a Dollar General receipt, against your knee: *I didn't mean it. N.*
>
> Through the crack you see her shadow bend down and pick it up. The shadow stands there a long time. It doesn't open the door.
>
> You didn't knock. She didn't open. Two people agreeing not to.

**6. Wait for Mrs. Reyes to come out.** *Not in the game* (*mrs* → *already gone*).
> At 7:10 Mrs. Reyes comes out with a trash bag and sees you on the bottom step. She sits down next to you, which her knees don't like.
>
> "She's on the floor in there, mija. Crying into a box of books." She pats your knee. "She said you'd make a joke."
>
> You don't. For once, you don't. You also don't knock.
>
> *(A second way to learn that Maya was crying, not laughing, in the driveway.)*

**7. Sit on the top step until eight, so she has to step over you.** *In the game as `nothing`* (*sit* → let it happen). Imagined:
> At eight her mom honks. The door opens behind you, and Maya has to step around you with the last box.
>
> On the walk she stops. "You stayed."
>
> "I always stay."
>
> "I know," she says. "That's what I'm scared of."

**8. Call Theo for backup.** *Not in the game* (*already gone*).
> He comes in four minutes on his bike, apron still on. "What do I do?"
>
> "I don't know. Knock for me."
>
> He looks at the door. He looks at you. "Nell. I'm not knocking for you." He sits down on the step and waits with you instead, which is worse, and better.

**9. Go straight to the feed store and wait for the bus.** *Not in the game* (*Not yet.*)
> Two hours on the bench. You have the speech ready by seven. You have it perfect by eight. At 8:38 the Reyeses' car pulls in, and Maya sees you, and her face closes.
>
> Of course you're here. You're always somewhere, waiting. You don't say the speech. "Bye," she says.

### 8:40 PM: home, "You could still make it."

*Her logic: the last move on the board. Anything that buys time, or a ride, or a second chance.*

**1. Run for the bus.** *In the game:* `bus` (station).

**2. Text her from bed.** *Not in the game* (*already gone*).
> You type *im sorry*. Delete it. You type *dont go*. Delete it. You type *can we talk. for real this time* and stop, because those are her words, and you can't send somebody their own words back.
>
> At 8:52 the bus goes. You're still holding the phone with nothing in the box.

**3. Call the bus company to hold the bus.** *Misroutes* to `bus` (she boards).
> Hold music. The song about a truck. 8:47. 8:49. At 8:52 a woman picks up and says "Thank you for holding," and through the window you hear it go.

**4. Ask Mom for a ride.** *Not in the game* (*already gone*).
> Mom's car isn't in the driveway. She's on till nine. **(proposed canon)** You knew that. You planned around it on Tuesday six.

**5. Run, but stand in front of the bus.** *Misroutes* to `bus` (she boards). → part of **Overtime**
> You stand in the headlights by the feed store, where the whole of Calder can see. The driver leans on the horn. Maya comes down the steps.
>
> "Nell. What are you doing."
>
> "Stopping it."
>
> "Stopping *what*?"
>
> You don't have the next line. "Kid," the driver says. "On or off." She gets back on.

**6. Stay awake past midnight to see if Wednesday comes.** *Not in the game* (*stay* → *already gone*; typed at night it carries into the next morning).
> You sit up with the lamp on. 11:49. 11:50. 11:51.
>
> At 11:52 your eyes close like a phone being turned face down. That's the minute you read it. It's the last minute you were paying attention.

**7. Remember.** *In the game:* `remember` (from home).

---

## 5. Her chains

The way she overthinks: not *"I should have,"* but *"if I'd set it up so that…"* Each chain ends in an ending in the atlas.

**Forty Miles**
> If she'd just missed the bus, we'd have had one more day.
> But she'd never miss it. She's had the ticket since spring.
> I know where the ticket is. In the open box, under *We are delighted.*
> But I'd have to be in her room alone.
> Mrs. Reyes always lets me wait in her room.
> But then she'd just go Wednesday.
> …Then I'd have Wednesday.

**Everything I Know**
> She said "Give me one reason. One real one." I didn't have one.
> I have all of them now.
> The scholarship. Thursday. The text. The sketchbook. Why she didn't tell me.
> If I'd known all of it at once, at 6:30, I'd have won.
> But she doesn't know I know.
> So I'll tell her. All of it. In order.

**Read 8:53 PM**
> She tried to tell me in the sketchbook, and crossed it out.
> If I'd answered it there, she'd have found it on the bus.
> But I can't say it to her face. I've tried. It comes out *Fine.*
> I could write it, then.
> Paper doesn't need me to be brave at 6:30.

**A Full Driveway**
> The fight only happened because we were alone in the driveway.
> If there were people there, I'd have had to be nice.
> Theo would come if I asked. Mrs. Reyes is already there.
> But I'd have to ask Theo at the diner.
> I'm at the diner anyway. Every Tuesday.

**Overtime**
> If I'd had more time, I'd have figured out what to say.
> The bus is always late. Theo knows why.
> If it were later, I could still fix the porch.
> But it's the same day. I only get one thing.
> Then the one thing is time.

**Secondhand**
> I can't tell her I know. That's the one thing I can't do.
> But Mrs. Reyes can't keep a secret. That's how the whole town found out.
> If I tell Mrs. Reyes, Maya will know by six-thirty.
> And she won't have to hear it from me.
> …Like I didn't get to hear it from her.

**The Accomplice**
> I can't do all of it alone. One change a day.
> But somebody else could do the other one.
> Theo would. Theo would do anything if you asked like you meant it.
> But he'd think I'm crazy.
> Not if I tell him what the TV's going to do before it does it.

**Maya's List**
> Where was she all morning?
> Mrs. Reyes said the library. Four years of overdue books.
> I could have gone. I could have been there before Theo, before any of it.
> Then I'd have found out from her.
> If she'd told me. She had six days to tell me.
> What was she doing for six days?

**The Ticket in Her Pocket**
> I could have gone with her.
> But she never asked me to.
> If I already had a ticket, I wouldn't need her to ask.
> The feed store sells them. I have forty dollars.
> And I wouldn't tell her. I'd just have it.
> In case she— In case.

**Go**
> "Fine. Then go." That's the worst thing I've ever said.
> But part of me meant it right. *Go.* One of us should.
> If I'd said it the right way, it would have been the nicest thing I ever said.
> Same words. I'd only have to change how I say them.
> I'm good at how I say things.

**Collateral**
> She's leaving. Fine. But leaving isn't gone.
> Thanksgiving is three months. I looked up the buses.
> If she owes me something, she has to come back to give it.
> The eleven dollars. The jacket. Forty more, why not.
> But she'd have to want to.
> She'd have to.

**The Perfect Tuesday**
> Every fix fixed one thing and broke another.
> The tower fixed the fight. The knock fixed the porch. The bus fixed nothing.
> If I could fix all seven at once…
> But I only get one a day.
> Then I need a day that's all one plan.

**The Back Door**
> I don't know if knocking would have worked.
> I could find out first, without her knowing I was there.
> I know the back door. I left through it on Tuesday two.
> Then I'd know, and then I'd knock.
> But by then I'd have used today on knowing.

**Ding-Dong**
> What if I knock and she doesn't open?
> What if she does?
> If I ring it and get behind the hedge, I'll see what she does.
> Then I'll know which one it is, and nobody has to watch me find out.

**Read 6:41 PM**
> I can't knock. But I can text. Texting I can do.
> She'll read it. She'll have to answer.
> …She'll have to, right?

**Dress Rehearsal**
> I could never say it to her because I'd never said it at all.
> If I said it once first, to somebody safe, it would be easier.
> Mom almost said it for me. *Friends who aren't—*
> I could finish it. Practice in the kitchen.

**The speedrun** (the chain that turns letting go into a plan)
> Three fixes and the why. That's all it takes.
> Tower. Stay. Knock. Then let it go.
> Five Tuesdays, if I don't waste any.
> But is it letting go if I planned it?
> …Does it matter, if it works?

**Wednesday, Unplanned**
> If I let every moment go, I get Wednesday.
> That's the plan. ENTER, seven times.
> I can do that. I'm good at plans.
> And then what?
> I don't know what Wednesday's like. Nobody's ever told me.

---

## 6. Endings atlas

Seventeen endings. Each one gives the backwards chain (in section 5), the locks, the moments it touches, its kind, and why it isn't enough.

### 1. Everything I Know

**What happens.** At the driveway, Nell lays out everything she's learned on every Tuesday, in order: the scholarship, the ticket, Thursday, 11:52, the sketchbook, *"if I told you, you'd ask me to stay."* Maya goes very still. *"I never told anybody that last part. How do you know that?"* She's frightened. *"You've been in my room."* Then, quietly: *"You didn't ask me one thing. You just told me who I am."* She picks up the box. No *Fine. Then go.* this time. Something colder.

**Night:**
> You won the argument. You had every piece.
> She just wasn't in any of them.
> Tomorrow you'll ask her something. You'll have to think of what.

- **Chain:** *Everything I Know* (section 5).
- **Locks:** `reason` (house or tower), `tried_to_tell` (diner or tower), `read` (phone, after Thursday), `why_secret` (tower), `sketch` (house). Fewer facts get a shorter, weaker version. With none: *"You know one thing. She's leaving. She knows that too."*
- **Moments:** driveway (uses wake, diner and street learning).
- **Kind:** new fix that fails. The wanting: **being right**.
- **Why it isn't enough:** knowledge gathered across Tuesdays is evidence, and Maya isn't on trial. She has lived one Tuesday. Nell is talking to all of the Mayas at once, and the real one feels watched.
- **Theme:** overthinking builds a case file instead of a conversation. You can't argue the past into being different, and knowing everything about someone isn't the same as asking them.

### 2. Forty Miles

**What happens.** On a second visit to the house, Nell takes the ticket from the open box. At 6:30 there's no *Say something.* Maya is sitting on the steps next to a half-unpacked box, and Mrs. Reyes is on the phone with the bus company. *"Mom says you were here this morning."* Nell's back pocket. *"Give it back, Nell."* She doesn't. It doesn't matter. The bus stops forty miles down the highway at ten **(proposed canon)**, and Mrs. Reyes drives her there. The last thing Nell sees is Maya's face in the car window, knowing.

**Night:**
> On Mom's radio, the weather for a town forty miles from here. Clear skies.
> You took her ticket. They drove forty miles.
> She'll get there anyway. She was always going to get there.
> It's you that keeps not getting to Wednesday.

- **Chain:** *Forty Miles*.
- **Locks:** `sketch` (she's seen the open box, at the house). Without it: *"You don't even know where she keeps it."* Alternate route: calling the bus company as Mrs. Reyes (7:14 action 9) fails at once, because everybody in Calder knows everybody's voice.
- **Moments:** wake (house), driveway, home (the radio).
- **Kind:** new fix that fails. Counts as `keep`, the dark version. The wanting: **holding on by force**.
- **Why it isn't enough:** you can stop a ticket, not a person. And now Maya knows Nell would rather she left angry than left at all.
- **Theme:** the loop itself is the stolen ticket. Every night Nell takes Wednesday out of the box.

### 3. Read 8:53 PM

**What happens.** At the house, Nell finishes Maya's crossed-out sentence in the sketchbook: *I know why. I'd have asked. I'm sorry about Thursday. —N.* The rest of Tuesday goes the way it goes, *Fine. Then go.* included, because Nell let the paper do the talking. At 8:53, from the bus:
> > nell
> > i saw
> > me too. all of it. since the tower
>
> The phone lights up the stain on the ceiling. You read it.
> You turn it face down on the nightstand.
> _Read 8:53 PM_

**Night:**
> You wrote it so you wouldn't have to be there when she read it.
> Then she wrote back, and you weren't there for that either.
> It isn't the day that keeps happening. It's you.

- **Chain:** *Read 8:53 PM*.
- **Locks:** `sketch` (the crossed-out line), which also means `feelings`. `read` makes the echo land: she knows what she did at 11:52.
- **Moments:** wake (house), driveway (unchanged), home.
- **Kind:** new fix that fails. Counts as `confess`. The wanting: **saying it without being there**.
- **Why it isn't enough:** she got the answer she wanted most and did exactly what she did Monday night. The fix worked on Maya and failed on Nell.
- **Theme:** regret loves the version where you'd have been brave. This shows that changing the circumstances doesn't change the person, and that the thing to let go of might be the belief that you would have done it differently.

### 4. A Full Driveway

**What happens.** Nell asks Theo at the diner to come at 6:30 with pie, and gets there early to help Mrs. Reyes. The driveway is crowded and warm: Theo doing a bit about the fryer, Mrs. Reyes crying happily into a dish towel, everybody carrying boxes. Nobody says *Say something.* There's never a silence long enough. At eight Mrs. Reyes honks, and Maya hugs everybody in turn, Nell third.

**Night:**
> Nobody said anything wrong.
> Nobody said anything.

- **Chain:** *A Full Driveway*.
- **Locks:** none beyond knowing the evening (`relived`). Being able to sit in the booth with Theo at all goes better with `nobody_laughed`.
- **Moments:** diner (the ask), driveway.
- **Kind:** new fix that fails. Counts as `peace`. The wanting: **avoiding the hard part by managing the room**.
- **Why it isn't enough:** it's the peace fix with witnesses. She engineered the fight out of the evening and the truth went with it.
- **Theme:** you can arrange a day so nothing goes wrong, and nothing happens. Avoiding regret isn't the same as living without it.

### 5. Overtime

**What happens.** Theo holds Earl's cherry pie **(proposed canon)**, and the bus idles by the feed store an extra hour. The rest of the day goes the way it went, because the diner was the day's one change: driveway, *Fine. Then go.*, the porch light. So at 8:40 Nell lies on top of the covers and listens to the bus idle eight streets away for an hour she bought. At 9:52 she hears it go. In the variant where she runs and stands in front of the bus, it ends with *"Stopping what?"* and *"Kid. On or off."*

**Night:**
> You bought her an hour. You spent it here.
> More time. You had since March. You had since Thursday. You had 11:52.

- **Chain:** *Overtime*.
- **Locks:** Theo has to know the driver. A new fact `driver` could come from a free reply at the diner (*bus*, *late*).
- **Moments:** diner, home.
- **Kind:** new fix that fails, with no fix category (it's time, not an act). The wanting: **more time**.
- **Why it isn't enough:** time was never what she was short on.
- **Theme:** *"If I'd only had more time"* is regret's favorite lie. The loop has given her infinite time, and she spends it the same way.

### 6. Collateral

**What happens.** At the driveway, Nell lays out the next four years: Thanksgiving, Christmas, spring break, the cheapest Friday buses. *"Keep the jacket. Bring it back at Thanksgiving."* She presses the forty dollars into Maya's hand. *"Pay me back in person."* Maya looks at the money. *"You're giving me a reason to come back."* *"Yeah."* *"Nell. That's a leash."* She gives the money back. She keeps the jacket.

**Night:**
> You lie there filling in the calendar. Every square, all the way to June.
> Four years of Thanksgivings, planned for a girl you won't let get past tonight.

- **Chain:** *Collateral*.
- **Locks:** `reason` (she knows it's Chicago and school, so there are years to plan).
- **Moments:** driveway.
- **Kind:** new fix that fails. Counts as `keep`, or no fix. The wanting: **controlling the future**.
- **Why it isn't enough:** scheduling love is the same move as scripting the past, aimed the other way.
- **Theme:** letting go of the past and of the future is the same muscle. In the loop there is no Thanksgiving.

### 7. Go

**What happens.** At the driveway, Nell says the original words and means them the other way: *"Go. Get out of here. One of us should."* Maya stares. *"Are you giving me permission?"* *"…Yeah."* She laughs and cries at once. *"I wasn't waiting for permission, Nell. I was waiting for you to ask what I wanted."* She goes. It's gentle. It's still the wrong conversation.

**Night:**
> Same words. You said them nicely this time.
> It was still you deciding.

- **Chain:** *Go*.
- **Locks:** `why_secret` (she knows Maya would stay if asked, so Nell thinks Maya needs a release). Without it the line comes out the way it came out.
- **Moments:** driveway (echoes the porch's honest letItHappen: *"meant it the other way too"*).
- **Kind:** new fix that fails. New category `blessing`, or count it as `peace`. The wanting: **being the one who decides**.
- **Why it isn't enough:** it's control dressed as generosity. Maya's leaving was never Nell's to grant.
- **Theme:** this one sits closest to the true ending, and that's why it's dangerous. Letting go isn't something you give someone else. The real *"Go"* only happens on the last day, when Nell doesn't say it on purpose.

### 8. The Perfect Tuesday

**What happens.** A day built entirely out of what worked: she answers the text at 7:14, asks Mom at the screen door, breathes at the diner, goes up the tower at 3:15, says goodbye at 6:30, walks Maya to the bus at 8:40. Every line lands. At the bus window Maya says, *"You checked the time all day."* *"No I didn't."* She did. Told as a fast montage, the way you'd tell a heist that went to plan.

**Night:**
> You got every line right.
> You weren't in a single one of them.
> *It's like driving a car from the back seat.*

- **Chain:** *The Perfect Tuesday*.
- **Locks:** at least three fixes, so she has pieces to assemble. It could teach `steering`.
- **Moments:** all seven.
- **Kind:** new fix that fails (the "everything" fix), and the purest form of the managing trap.
- **Why it isn't enough:** a perfect day is a day you directed, not one you lived.
- **Theme:** perfectionism is the shape regret takes in a planner: *"If I'd done all of it right."* The game's answer is that you can't live a day from outside it.

### 9. Ding-Dong

**What happens.** At the porch, she rings the doorbell and gets behind the hedge. Maya opens the door at once, looks at the empty porch, says *"Nell?"* to the dark, and waits a long time before she closes it.

**Night:**
> You knocked. You just weren't there when it opened.

- **Chain:** *Ding-Dong*.
- **Locks:** `sorry` (she already knows Maya opens before her hand comes down). Without it this is the plain knock.
- **Moments:** porch.
- **Kind:** new fix that fails (small, maybe one page).
- **Why it isn't enough:** she wanted the door to open without being the one standing at it.
- **Theme:** Nell's joke-as-defense, turned into a single act. The answer she was afraid of was yes.

### 10. Secondhand

**What happens.** At the house in the morning, Nell asks Mrs. Reyes to tell Maya that she knows and isn't mad. By 6:30 Maya knows. The driveway starts differently: *"My mom says you know."* *"Yeah."* *"You told my* mom*?"* *"You told mine."* (Lourdes, at the pharmacy.) A beat. They both almost laugh. *"It's easier, right?"* Maya says. *"Through somebody."* Then the old shape comes back: *"Say something."* And there's still nothing in Nell's mouth.

**Night:**
> You did exactly what she did.
> It was easier. That's the worst thing you can say about it.
> Now you know why.

- **Chain:** *Secondhand*.
- **Locks:** `reason` (she's been to the house and seen that Mrs. Reyes can't hold anything in) and `mom` (she knows Lourdes told Mom, for *"You told mine"*).
- **Moments:** wake (house), driveway.
- **Kind:** learning scene. Teaches `secondhand`: understanding from the inside why Maya didn't tell her.
- **Why it isn't enough:** two people talking through their mothers are still not talking.
- **Theme:** this is the first time blame turns into recognition. You can't let go of being wronged until you see you'd have done the same thing.

### 11. Maya's List

**What happens.** At 7:14 Nell goes to the library, where Mrs. Reyes said Maya would be. Maya is paying four years of fines in quarters. Under her elbow is a receipt with a list: *library. Dot's? (Theo). tower 3. TELL NELL.* Above it, older, crossed out: *Thurs: tell Nell. Fri. Sat. Sun. Mon (text?).* Maya hasn't seen her. The day's change is spent, so Nell leaves before she looks up.

**Night:**
> She had a plan for telling you. She had six.
> She kept moving it to tomorrow.
> You know exactly how that goes.

- **Chain:** *Maya's List*.
- **Locks:** `reason` (she heard *"She's at the library"* from Mrs. Reyes). Without it: *"You don't know where she goes in the morning. Somebody would."*, which points to the house.
- **Moments:** wake. It also adds weight to the diner (*"she's telling Nell today"*) and to the tower's *"tower. 3."*
- **Kind:** learning scene. Teaches `list`.
- **Why it isn't enough:** it's not a fix. It's a mirror.
- **Theme:** for a schemer this is the key scene. Maya managed it too, and planning was how she put it off. Seeing her own habit in Maya is where Nell stops needing someone to have been wrong.

### 12. The Ticket in Her Pocket

**What happens.** At 3:15, instead of the tower, Nell buys her own ticket at the feed store with the forty dollars and tells no one. The rest of the day goes the way it went. At the driveway she says *Fine. Then go.* with the ticket in her back pocket. At 8:40 she lies on the covers holding it. *You could still make it.* She doesn't. She was waiting to be asked.

**Night:**
> You had a ticket the whole time.
> You didn't tell her, because if she'd said don't come, you wouldn't have.
> *If I told you, you'd ask me to stay. And I would.*
> Oh.

- **Chain:** *The Ticket in Her Pocket*.
- **Locks:** `relived` (she knows the bus time). The last two lines need `why_secret` to land fully. Without it the night ends at *"you wouldn't have."*
- **Moments:** street, driveway, home.
- **Kind:** learning scene. This could be a second, inside-out route to `why_secret`. Nell finds the reason in herself instead of hearing it from Maya.
- **Why it isn't enough:** the ticket never gets used. It only shows her she was keeping the same secret Maya was.
- **Theme:** the gentlest way to let go of *"why didn't she tell me"* is to find the same silence in yourself.

### 13. The Accomplice

**What happens.** At the diner, Nell proves the loop to Theo by calling the boat and the laugh before they happen. He believes her and helps. Every Tuesday she has to recruit him again, and he's the same every time: nervous, sweet, all in. On a later recruit, before she can get to the plan:
> "How many times have you told me this?"
> "Eleven."
> "And how many times have you told *her*?"
> The coffee pot ticks against the table.
> "Nell. You'd rather run the whole town than say one sentence to her."

**Night:**
> Tomorrow he won't remember he said it.
> You will.

- **Chain:** *The Accomplice*.
- **Locks:** `nobody_laughed` (she has to have looked at the counter to know it's the TV). The sharper version needs a second recruit, a case with `needs: ["steering"]`.
- **Moments:** diner.
- **Kind:** learning scene. Teaches `steering`.
- **Why it isn't enough:** an accomplice is one more way not to do it yourself, and nobody else can come with her into tomorrow.
- **Theme:** the one person who knows everything about her plan is the one person who isn't Maya. The game's warning, *"driving from the back seat,"* said by a friend.

### 14. Read 6:41 PM

**What happens.** At the porch, instead of knocking, Nell texts *sorry* and watches through the curtain. Maya's phone lights her face. She reads it, doesn't move for a long time, and turns the phone face down on the box. Nell's screen: *Read 6:41 PM.*

**Night:**
> So that's what it looks like from out here.
> She didn't not care. She just couldn't yet.
> Neither could you.

- **Chain:** *Read 6:41 PM*.
- **Locks:** `read` (she knows about 11:52, so she recognizes it). Without it: *"You get your phone out. She's ten feet away, behind a door. You put it back."* That reply wouldn't use up the day.
- **Moments:** porch.
- **Kind:** learning scene. Teaches `other_side`.
- **Why it isn't enough:** it heals her picture of Monday night, not Tuesday.
- **Theme:** it reframes the oldest lie in the game (*"Maya never replied"*). Being left on Read isn't a verdict. Letting go of the story where you're the one wronged.

### 15. The Back Door

**What happens.** At the porch, Nell goes around to the back door she knows from the house. Through the kitchen window she can see down the hall: Maya on the floor with her back against the front door, sketchbook on her knees, drawing fast. On the open page is the driveway, and Nell's own face at the moment she said it. *You look like somebody about to cry who decided to be mean instead.* The porch light clicks off. Maya stands up.

**Night:**
> You went around back to find out if knocking would have worked.
> It would have.
> You spent today finding out.

- **Chain:** *The Back Door*.
- **Locks:** `sketch` or `reason` (she's been in the house and left through the back).
- **Moments:** porch.
- **Kind:** learning scene. Teaches `her_side`: how Nell looked to Maya.
- **Why it isn't enough:** it's the recon trap made literal. The day's one change went on looking.
- **Theme:** the obvious thing was the only thing. Overthinking is mostly looking for a cleverer door.

### 16. Dress Rehearsal

**What happens.** In the kitchen, Nell finishes Mom's sentence: *"Who aren't just friends?"* Mom turns around, for the first time all morning to her face instead of the coffee maker. *"Yeah, baby. That's what I was going to say."* A kiss on the head, held a second longer. The rest of Tuesday goes the way Tuesday goes.

**Night:**
> You said it out loud, all the way, to the right person in the wrong kitchen.
> Nothing fell down. Mom still loves you. The eggs were still cold.
> At 6:30 there was nothing left in your mouth but *Fine.*

- **Chain:** *Dress Rehearsal*.
- **Locks:** `feelings` (sketch, or photo and August) and `mom` (she's heard *"Friends who aren't—"*).
- **Moments:** kitchen.
- **Kind:** learning scene that also fails as a plan. Teaches `mom_knew`.
- **Why it isn't enough:** in a day with one change, every rehearsal costs the performance.
- **Theme:** she learns that being known doesn't break anything. The cost is the schemer's lesson: getting ready can be a way of never going.

### 17. Wednesday, Unplanned

**What happens.** After the true ending, on Wednesday morning, the schemer types what she's typed every morning for sixteen Tuesdays: *make a plan*.
> For what?
> You don't know how today goes. Nobody's ever told you.
> That used to be the worst thing about a day.

Then *get up* ends the game as it does now.

- **Chain:** *Wednesday, Unplanned*.
- **Locks:** the true ending (`ready`, then all seven moments let go).
- **Moments:** Wednesday.
- **Kind:** epilogue (a coda to the true ending).
- **Why it truly works:** the speedrun lets a schemer execute letting go as step four of a plan. Wednesday is the first day she has no intel for. This is where her letting go actually happens: she gets up with no plan.
- **Theme:** moving forward means walking into a day you can't rehearse.

---

## 7. Top proposals for the author

Ranked by how much they add for the cost. Everything except #2's and #6's new fix category, and the night reply in #8, is data in `story.js`.

**1. Maya's List (the library, 7:14).** The best mirror for any overthinker.
> Maya at the library desk, paying four years of fines in quarters. Under her elbow, a receipt: *TELL NELL*, moved from Thursday to Friday to Saturday to Sunday to Monday to today. She doesn't see you.

*To build:* at `wake`, add `words: { library: ["library", "overdue", "books"] }` and `changes: { library: "library" }`. Add a `library` branch with a case that `needs: ["reason"]` and `learn: ["list"]` and has a night, plus a no-night fallback that points to the house (*"You don't know where she goes in the morning. Somebody would."*). Add a THINK line for `list`. Optionally add `[if list]` to `nights.final`: *"About the list. Six days of* tell Nell*."*

**2. Everything I Know (driveway).** Fills the biggest hole the schemer finds: everything she learns has nowhere to go at the driveway.
> You say it in order, the way you practiced. She goes very still. "I never told anybody that last part. How do you know that?" … "You didn't ask me one thing."

*To build:* at `driveway`, `words: { know: ["i know", "i read", "i saw", "sketchbook", "scholarship", "thursday", "i found"] }` → a `know` branch. The full case `needs: ["why_secret", "sketch", "read"]`, a short case `needs: ["reason"]`, and a no-night fallback. Either add a sixth fix (`proof`, one line in `FIXES` in `game.js`), or make it a learning scene that teaches `asked_nothing`. It would also catch *i read your text*, which misroutes today.

**3. Read 6:41 PM (porch).** Cheap, and it fixes a misroute (*text her sorry* plays `knock`, and *text her* says the moment is gone).
> Through the curtain, her phone lights up her face. She reads it. She turns it face down on the box. *Read 6:41 PM.*

*To build:* at `porch`, `words: { text: ["text", "phone", "message"] }` (moment words win over the global ones) → a `porch text` branch. The case `needs: ["read"]`, `learn: ["other_side"]`, with a night. The fallback has no night: *"You get your phone out. She's ten feet away, behind a door. You put it back."*

**4. Forty Miles (steal the ticket).** A true *keep* variant that uses the house as recon, with a payoff that ties into the radio.
> The ticket fits in your back pocket like it was made for it. At 6:30 Mrs. Reyes is on the phone with the bus company. At ten, forty miles down the highway, Maya gets on anyway.

*To build:* at `wake`, `words: { steal: ["steal", "take her ticket", "hide her ticket", "her ticket", "cancel"] }` → a `steal` branch, which also fixes the current misroutes to the tower and the blanket. The case `needs: ["sketch"]` with `fix: "keep"`. The fallback (no night) is *"You don't even know where she keeps it."* The 10 PM stop forty miles away is **proposed canon**.

**5. Overtime (Theo stalls the bus).** It turns *"if I'd had more time"* into a scene, and it fixes the worst misroute in the game (*stall the bus* makes her board it).
> You bought her an hour. You spend it on top of the covers, listening to the bus idle eight streets away. At 9:52 you hear it go.

*To build:* at `diner`, `words: { stall: ["stall", "driver", "hold the bus", "delay", "pie"] }` → a `stall` branch with no fix. Its night uses the hour in bed. At `home`, add a free reply for `stall` / *call the bus company* / *hold it*: *"From here? You'd have needed somebody at Dot's. This morning."* Earl's cherry pie is **proposed canon**. (*bus* is already in the diner's `theo` words, so put `stall` above it.)

**6. Go (permission).** The fix that comes closest to the true ending, which is why it fails.
> "Go. Get out of here. One of us should." "Are you giving me permission?" … "I was waiting for you to ask what I wanted."

*To build:* at `driveway`, `words: { permission: ["i mean it", "one of us should", "you should go", "i want you to go", "get out of here"] }`, placed before `original` (moment words are checked first). The case `needs: ["why_secret"]`. Without it, route to `"let it happen"`. It needs a new fix category `blessing` (one line in `FIXES`), or it counts as `peace`.

**7. The Accomplice (Theo, diner).** It puts the game's own warning in a friend's mouth, and fixes *tell theo im living the same day*, which today lets the moment happen.
> "How many times have you told me this?" "Eleven." "And how many times have you told *her*?"

*To build:* at `diner`, `words: { loop: ["loop", "same day", "again", "predict", "boat", "relive"] }` (above `nothing`'s *the same*) → an `accomplice` branch. The first case `needs: ["steering"]` (the sharp version), the second `needs: ["nobody_laughed"]` and `learn: ["steering"]`, and the fallback (no night) is *"How would you even prove it? You've never looked at what the counter's laughing at."* THINK line for `steering`: *"You've been driving the day from the back seat."*

**8. Small free replies for the planning mind** (none use up the day).
> *arm*: "Clean. Tuesday washed it off." · *alarm*: "It's already ringing. You can't get up before Tuesday does." · *drawer, money*: "Forty dollars. One bus ticket, or one very bad plan." · *plan, list, schedule, rehearse* (any moment): "You've already planned it. You planned it at 2 AM. The plan is the part you're good at." · *tv* on replay: "He wins the boat every Tuesday. He's just as happy every time."

*To build:* per-moment `freeReplies`, plus moment `words` for *plan*. Wednesday, Unplanned is data only: add a `plan` key to `wednesday.words` and `wednesday.replies`, above `end`. A night reply for *stay awake* (*"At 11:52 your eyes close like a phone being turned face down"*) would need a small change to `nightMove` in `game.js`.

**Stretch: The Perfect Tuesday.** A montage branch at `wake` (*perfect, everything right, all of it, the whole plan*), gated on three or more fixes and teaching `steering`. It costs only text, but it's the longest thing to write well.

---

_One thing I didn't settle: whether the five-Tuesday speedrun needs an answer inside the game. I'd leave it alone. Wednesday, Unplanned already answers it._
