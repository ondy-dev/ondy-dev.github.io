# Tomorrow: Design Notes

**Play:** `/tomorrow/` · **Writing:** `game/story.js` · **Engine:** `game/game.js` · **Check:** `node tomorrow/test/test.js` · **Every path:** [decision map](decision-map.html)

---

## Author's note

### The idea

A game about a time loop where you try to fix your mistakes in the past.

### Thematic statement

A melancholic, reflective game about regret, accepting the past, and learning that moving forward means letting go of the desire to change what has already happened.

### Why I made it

Once I had the idea, I had to ask myself how I would actually do this. How do I put myself in the shoes of a teenager who just ruined the last day she had with her best friend?

I didn't have to imagine very hard. This game is a reflection of me and of my own growth in dealing with anxiety, overthinking, and a lot of regret about my past. Overthinking is the part I know best: going back over something that already happened, again and again, looking for the one thing I could have done differently. I wanted to make a game that feels like that, and then shows a way out of it.

### The story, simply

Nell is seventeen and has lived her whole life in Calder, a town eleven streets long. Her best friend Maya is leaving tonight for an art school in Chicago. Nell finds out from someone else, at the diner, and by evening she's standing in Maya's driveway saying "Fine. Then go." Maya goes.

Nell wakes up and it's Tuesday again.

- On the first day you can type whatever you want, but nothing changes. That day already happened.
- After that, the day replays and stops at seven moments where Nell could have done something different. You get one change per day, and the rest of the day follows from it.
- Every attempt teaches you something new about what really happened, and every one fails in its own way.
- The only way out is acceptance: living the day exactly as it happened, on purpose. There are two ways to get there. You can learn the truth and then let go. Or, on the second Tuesday only, you can let go without ever finding out.

### Inspiration

My biggest inspiration was *Aisle* by Sam Barlow. You get one input, and the story of what's going on builds up across a lot of short replays. I liked that you never get a list of options. You find out what's possible by trying things.

---

## How I built the decision tree: working backwards

At first I tried designing the branches forward: here's the morning, what could you do, and where would that lead. It spread out fast, and none of it felt like regret.

Then I realized regret doesn't move forward. It starts at the end, at the moment you wish you could change, and works backwards. *I should have said this. But I couldn't have, because I didn't know that. But I would have known if I'd asked. But I could only ask if…* Every "but" is a step further back into the day.

So that's how I built the game:

1. **Pick the endings.** Every version of the day Nell would lie awake imagining.
2. **Write the thought chain for each one.** The way a teenager overthinks it, one "but" at a time.
3. **Turn every link into part of the game.** A moment where you can make the change, a fact you need to know first, or a scene where you learn it.

The chains are the decision tree. A choice is locked exactly when Nell would say "but I couldn't have, because I didn't know…", and the way to unlock it is whatever the next link in her chain says.

### The endings I wanted

| Ending | What Nell imagines | Counts as |
|---|---|---|
| What actually happened | "Fine. Then go." | — |
| A perfect goodbye | No fight. We part the way we should have. | the *peace* fix |
| She stays | I ask her, and she doesn't leave. | the *keep* fix |
| I tell her | I finally say how I feel. | the *confess* fix |
| I apologize | I knock, and I take it back. | the *sorry* fix |
| I go with her | I get on the bus too. | the *station* fix |
| Tomorrow | I stop trying to fix it. | the **Knowing** ending |
| Tomorrow, without knowing | I never find out why, and I go on anyway. | the **Without Knowing** ending |

### The chains

#### She stays

> Why didn't I just ask her to stay?
> But it wouldn't have mattered. I didn't even know why she was going.
> I would have known why if I'd asked her earlier. Or asked someone else.
> And if I'd known why, I could have asked her to stay, and she would have.
> But how would I even know she'd stay? I'd only be guessing.
> I'd only know for sure if I'd gone to the tower and actually talked to her.

What it became:
- Asking her to stay, at the driveway, is locked until Nell knows **why** Maya is leaving.
- There are two ways to find out, exactly like the chain says: ask her (go to the tower) or ask someone else (Mrs. Reyes, at Maya's house).
- Asking too early plays the failure, and it names what's missing: *"Give me one reason, Nell. One real one." You don't know why she's going.*
- The tower is where Maya says the thing Nell could only guess: *"If I told you, you'd ask me to stay. And I would."*

#### A perfect goodbye

> If I'd just gone up to the tower, there wouldn't have been a fight.
> But I didn't know she was leaving until Theo told me.
> She would have told me herself if I'd gone where she was.
> And I knew where she'd be. She always goes up there when she's waiting on something.

What it became:
- The first day already says it on the walk home: *"She might be up there. She always goes up there when she's—" You don't go.* So the tower is never locked. Nell always knew where Maya was. She just didn't go.
- You can go when you pass it at 3:15, skip the whole day from 7:14 and wait for her there, or text her first.
- The shortest version of this regret skips the detour: *even after I found out the way I did, I could have just said goodbye.* That's saying goodbye at the driveway.

#### I tell her

> I should have told her how I felt.
> But I didn't really know. Not in words. I never let it have a name.
> I would have known if I'd let myself look.
> The photo strip where she's looking at me instead of the camera. The night she fell asleep on my shoulder at the tower. Her sketchbook.

What it became:
- Telling her is locked until Nell admits her feelings to herself.
- That happens by looking: the sketchbook at Maya's house, or both the photo strip and the August memory.
- When it unlocks, Nell admits it before she ever says it to Maya: *"You knew. … You just never let it have a name. It has one now."*
- Trying too early: *"Maya. I—" … "Nothing. Forget it."* The night points back to the chain: *"You've never let yourself look."*

#### I apologize

> I should have knocked. The door was right there.

What it became: the porch, right after "Fine. Then go." No lock. Some regrets really are that simple, and I wanted one fix that's only about doing the obvious thing in time.

#### I go with her

> I could have just gone with her.
> I knew when the bus left. Theo said eight forty-five.

What it became: 8:40 PM, lying in bed, *"You could still make it."* No lock, because Nell has known the time since the first morning.

#### What actually happened

Not every chain ends in a fix. Some are Nell trying to understand what really happened:

> Everybody knew but me. They were all laughing at me.
> Were they, though?

Breathing at the diner, or making yourself talk to Theo, shows the truth: the laugh was at the TV. Theo found out that morning.

> Did she even try to tell me?

Theo says she tried, on Thursday, and Nell made a joke. After that, looking at the phone means actually scrolling up: Maya texted the night before, and Nell left it on Read.

> What was Mom about to say? "Friends who aren't—"

Asking Mom. She never finishes the sentence.

#### Tomorrow

This is the chain the whole game builds toward, and it's the only one that doesn't end in a better version of the day:

> If I'd said goodbye… I did. It was good the way a photograph is good.
> If I'd asked her to stay… she stayed, and stopped drawing.
> If I'd told her… I did. She said it back. She still got on the bus.
> So what's left?
> Letting it be what it was.

What it became: the way out opens after three different fixes, once Nell also knows why Maya never told her. Then you press ENTER through all seven moments: the same day and the same words, told honestly for the first time.

I tied it to knowing why because once you start pulling at the thread, you can't stop halfway and call it letting go. And you can't let go of something you never tried to change.

#### Tomorrow, without knowing

I think this ending reflects the best meaning of closure:

> I'll never know why she didn't tell me.
> I'll never know if she was laughing.
> I could keep going back to it forever.
> It still happened.
> I still have to get up tomorrow.

Most of the time you never really figure out what happened. You suffer over it, and at the end of the day you still have to move on.

What it became: a second ending, **Without Knowing**, that can only happen on the second Tuesday, the day right after the first. That day is the worst one. Every moment comes with Nell's worst spiraling and second-guessing, and a small push to do something different: *"You could ask. One question." "Knock. Just knock. Your hand is already up." "Eight minutes. You could run."* If you resist all of it, feel everything again, and still let every moment play out, the night says what you never found out, and Nell lets it go anyway.

Only this ending gets the epilogue. It jumps years ahead, to a Wednesday in the same booth at Dot's Diner. Nell is finishing telling the story, and that's the surprise: the whole game was her telling it, in the second person, the way she always tells it, "like it happened to somebody else." She admits her part. Maya admits hers. Maya takes her hand across the table. Same booth, same smell, but it's different now.

I like that the truth does come out in the end, but only years later, from Maya, after Nell stopped trying to control the past. You don't get the answers by going back. Sometimes you get them by going forward.

### Rules that came out of the chains

- **A lock has to be Nell's own logic.** If you can't make a change yet, it's because Nell herself would say "but I didn't know…". Never an arbitrary key.
- **A locked attempt still teaches.** Trying too early plays a short scene that names the missing piece, so the failure points to the next step instead of feeling like a wall.
- **Every fix fails for a different reason.** Each one is a different kind of wanting, so trying them all says something:

| Fix | The wanting | Why it isn't enough |
|---|---|---|
| Peace | avoiding the hard part | *"It was good the way a photograph is good."* |
| Keep | holding on | She stays, and stops drawing. *"Chicago was a stupid idea anyway."* She never said that. |
| Confess | being seen | *"She said it back. And she still got on the bus."* |
| Sorry | repairing it | *"Sorry doesn't make it un-happen. It just makes it happen nicer."* |
| Station | escaping | *"You can't get out of a day on a bus."* |

---

## Decisions along the way

1. **Scope.** The first version was much bigger. You walked around town on a clock, visiting places, and it played more like an adventure game. It lost what I liked about *Aisle*, so I cut it down to one choice per day.
2. **Where you get to choose.** One choice per day made me ask *where* in the day. The first day already had places where Nell says "you could have": *She might be up there. You could knock.* I turned those into seven moments the day stops at. You let them pass with ENTER, or you change one.
3. **The way out.** An earlier version ended when you chose to say "Fine. Then go." on purpose. I changed it, because that's still doing something. The point is letting go, so the way out is letting every moment happen the way it happened.
4. **The narrator lies.** I wanted reality to bend to Nell's state of mind, like *Aisle*, where you're never sure what's real. When she's spiraling the text literally warps on screen (the whole diner turning to stare at her). Once she learns the truth it shows through, and on the last day the day is told the way it really was.
5. **Two true endings.** I wanted a true ending where you find out the truth and let go. The way out used to open after any three fixes, which meant the "honest" last day could mention things Nell had never found out, so now it also needs her to know why Maya never told her. But I also wanted a true true ending, because finding out the truth isn't what closure usually looks like. On the second Tuesday, and only then, you can live the day again exactly as it was, resisting every chance to change it, and get out without ever knowing. That ending is the only one with the epilogue, where you find out the whole game was Nell telling the story.
   Later I named them **Knowing** and **Without Knowing**. I also decided texting Maya can stay the fastest way to Knowing: talking to her is the quickest way out in real life too, and you can reach an ending without knowing the rest of the story.
6. **Playtesting.**
   - The text scrolled too fast to read, so now it comes a page at a time.
   - Players weren't sure when ENTER meant "keep reading" and when it meant "let it happen." Now the prompt says which, and there are fewer page breaks in the way.
   - Some players wanted more description of the places. I didn't want to bury the important lines, so I did what *Aisle* does: things you can look at or try that answer without using up your day (*look at the ceiling*, *cry*). Many of them quietly hint at a change you haven't found yet.
7. **Keeping the writing editable.** I wanted every word in one file I could edit without touching the code. I tried writing it as plain text, like a script, but that threw away the structure. So I went back to organized objects: the story is data in `story.js`, and `game.js` is a few classes that each do one job.
8. **Replaying.** I wanted you to be able to start over at any point, and to come back for the second ending after the first. A bar at the top has a restart button (typing RESTART works too) and a counter of the endings you've found. Restarting has two levels, and the menu says exactly what each one does. **Back to the first Tuesday** makes Nell forget everything she's learned, but you don't, and your endings and colors stay. That's how you go back for Without Knowing, which only happens on the second Tuesday. **Erase everything** wipes the endings and colors too and asks how you feel again. Each end card names the ending you just found, and the Knowing card hints at the other one: *"Some people let go the very next day, without ever finding out."* I also replaced the old end-card line, *"There were other ways to spend them,"* because it read like a scold.
9. **Hosting on itch.io.** The game's home is itch.io, which runs it inside a frame on its own page. Testing it that way showed that every page turn scrolled the whole itch.io page, so the game now scrolls only inside its own window. I also took out the link back to my portfolio, since the game lives on itch.io.
10. **Simulated playthroughs.** To stress-test the branches, I ran AI-simulated playthroughs: one in-depth Nell, ten Nells with different levels of anxiety and personalities (frozen, perfectionist, joker, angry, romantic, detective, people-pleaser, runner, numb, steady), and five who tried to invent actions and endings the game doesn't have. Their notes are in `notes/`. The big findings: nine of ten reached Knowing, but only one reached Without Knowing, by pressing ENTER, and half of them lost the second Tuesday by accident before they ever saw a push to change something. I'm going through the rest and deciding what to change.
11. **How do you feel today?** Before the game starts, it asks how you feel, with four sliders: happy, sad, angry and anxious. When you begin, the title appears and the page slowly fades from the default colors into yours, and they stay for the whole playthrough. The colors come from research on color and emotion. Across 30 countries, people link joy with yellow, anger with red, sadness with grey and fear with black (Jonauskaite et al., 2020). Brighter colors feel more pleasant, and more saturated ones feel more intense (Valdez & Mehrabian, 1994). The text stays readable in every mood. Only *Erase everything* asks again.
12. **What I took from the playthroughs.** I went through the merged list (`playtests/review-decisions.md`) and decided:
    - **Fix everything that's clearly broken.** That includes the safety gaps (hopeless or self-harm phrasing that the game answered like any other input) and about 35 places where the game misread what you typed, like *"dont ask"* asking, or texting then climbing the tower replaying the whole scene.
    - **The second Tuesday is felt, not explained.** Changing something that day gets one quiet line, *"And just like that, it's a different day."* Hiding in bed that day warns you once first. No rules are spelled out.
    - **LOOK is free everywhere,** including 7:14, where looking at the corkboard used to secretly use up your day.
    - **Texting Maya also shows you her message, left on Read.** The fast route stays fast, but now it runs into Nell's own part.
    - **Asking her to stay needs Nell to know why Maya never told her,** like my original chain: she only asks once she knows the answer would be yes.
    - **The honest last day only says what Nell actually found out,** and the Knowing night gets one line of Maya's half: she should have told you too.
    - **Without Knowing gets a Wednesday morning** before the epilogue, where the only way forward is to get up. *I still have to get up tomorrow.*
    - **New scenes:**
      - *Watching It Go*: on a day you're ready to leave the loop, you watch the bus leave from the tower instead of chasing it.
      - *That Part's Mine*: you tell Maya about the loop, and she can't let go of it for you. It's a sixth fix, **Permission**.
      - *The Screen Door*: Nell finally finishes her sentence to Mom.
      - Small free replies for the things players kept trying.
    - **My own addition: asking for your jacket back.** It's the first thing Nell has ever asked Maya for. In the pocket is the Chicago acceptance letter, dated March. She's been carrying it on her, in your jacket, for months.
13. **Organizing the project and mapping every path.** As the game grew, the folder got messy, so I split it by job: what the page loads (`game/`), the test, the docs and playtests, and the itch.io art. I also wanted one place that shows every possible path, so the decision map (`docs/decision-map.html`) is generated straight from `story.js`. When I change the story, the map changes with it.

---

## How the game works

### The rule

You relive the same Tuesday. It plays out the way it happened and **stops at seven moments** where Nell could have done something different.

- **Press ENTER** to let the moment happen. The day goes on as it did.
- **Type something** to change it. The rest of the day branches from there, then night, then Tuesday again.

You get **one change per day**. LOOK, THINK, HELP and small free actions (*look at the ceiling*, *look at theo*, *cry*) never use up the day. **The day resets. What you've learned doesn't.** Progress is saved in the browser.

### The two ways out

| | When | How | What you get |
|---|---|---|---|
| **Without Knowing** | only the second Tuesday | let all seven moments happen, resisting the pokes | the night of not knowing, then the epilogue ten years later |
| **Knowing** | after 3 different fixes, once Nell knows why Maya never told her | let all seven moments happen | the day told honestly, then Wednesday morning |

From the third Tuesday on, letting everything happen too early just loops, and the night says what's missing.

### The seven moments

| # | Time | The moment | What you could do differently |
|---|---|---|---|
| 1 | 7:14 AM | "Maya never replied last night." | look at phone, look at photos, remember, stay in bed, go to her house, go to the tower, text her, ask Mom, breathe |
| 2 | Kitchen | Mom at the screen door: "Lourdes came by the pharmacy…" | ask Mom |
| 3 | 11:40 AM | Theo: "She didn't tell you." Somebody laughs. | breathe, talk to Theo |
| 4 | 3:15 PM | "She might be up there…" | go to the tower |
| 5 | 6:30 PM | "Say something." | tell her, ask her to stay, say goodbye |
| 6 | Porch | "You could knock." | knock |
| 7 | 8:40 PM | "You could still make it." | run for the bus, remember |

Trying something in the wrong place doesn't use up the day: too early gets *"Not yet."*, too late gets *"That moment's already gone. Today, anyway."*

### The unreliable narrator

Each distorted moment can be told three ways:

| | When | At the diner |
|---|---|---|
| **felt** | Nell doesn't know the truth yet | *The whole diner turns to look at you, like sunflowers.* (the text wobbles) |
| **heal** | she knows the truth, but it still feels the old way | *At the TV. You know that now. It still feels like it's at you.* |
| **clear** | the last day | *It's at the TV. It was always at the TV.* |

| How Nell remembers it | What happened | How you find out |
|---|---|---|
| "Maya never replied." | Maya texted at 11:52 PM. Nell left it on Read. | look at the phone, after learning she tried |
| The diner laughed at her. | Two truckers and a game show. | breathe, or talk to Theo |
| Everybody knew. | Theo found out that morning and dreaded the booth. | breathe, or talk to Theo |
| Maya laughed: *"That's just you. That's fine."* | She was crying: *"If you'd asked, I would have stayed."* | the tower |
| She never tried to tell her. | Thursday at the tower; Nell made a joke. | Theo, or the tower |

### Repetition

- From the second time you see a moment, it's told shorter. The first honest telling is always in full.
- The first line of the morning changes once you know the truth: *"Maya never replied last night. That's the story, anyway."*
- Once the way out is open, the mornings start hinting: *"What if you didn't change anything?"*
- Making the exact same change twice counts for nothing: *"Why does it sound like you practiced that?"*

---

## Characters

**Nell (Eleanor), "you."** Seventeen and has never lived anywhere but Calder. Funny as a defense; every hard moment gets a joke. She has never said the word *gay* about herself, not even in her head. Maya is the one place she doesn't perform. What scares her isn't Maya leaving, it's change. Calder is an eleven-street loop, and she was already living in it. *Shows it by:* making jokes when she should listen, putting the phone face down, never asking for her jacket back.

**Maya Reyes.** Charcoal on her thumb, always. Got into an art school in Chicago with real scholarship money and kept it secret, because she knew that if Nell asked her to stay, she would. She has worn Nell's jean jacket since March and drawn Nell for a year. She tried to tell her on Thursday and lost her nerve at a joke. *Voice:* short, teasing ("Nellie"), honest when cornered.

**Mom (Denise).** Pharmacy tech. Loves Nell in practical ways: cold eggs, a kiss on the head she doesn't usually give. She talks to the coffee maker instead of to you. *"Friends who aren't—"* She never finishes it.

**Theo Park.** Works at Dot's Diner. Nervous, sweet, talks fast, pours coffee nobody ordered. Found out at 6 AM and dreaded the booth all morning.

**Mrs. Reyes (Lourdes).** Hugs too hard, smells like onions and Jergens. Can't keep a secret, which is how the whole town found out. Calls Nell *mija*.

**Calder.** Eleven streets: the Dollar General, the Baptist church, the feed store, Dot's, and the water tower with CALDER painted on it, badly, by Nell and Maya at sixteen. The time loop is the town made literal.

---

## Files

- `index.html`: the page. It stays at the top so the game lives at `/tomorrow/`.
- `game/story.js`: every word in the game, as organized data. The guide at the top explains the format.
- `game/game.js`: the engine, as a few small classes (Line, Story, Saved, Progress, Command, Terminal, Mood, Game).
- `game/style.css`: the terminal look, and the colors the mood screen fades into.
- `test/test.js`: plays the game without a browser and checks the rules. Run `node tomorrow/test/test.js`.
- `docs/decision-map.html`: every moment, action, case and knowledge check, generated from `story.js`.
- `docs/playtests/`: the simulated playthroughs and the review that shaped my decisions.
- `itch/cover.png`: the cover art for itch.io.
- `tools/`: the scripts that rebuild the decision map and the itch.io zip.
