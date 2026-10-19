/*
  TOMORROW: the story
  ===================
  Every word in the game lives in this file. game.js reads the STORY object at the
  bottom and shows it, so you can change the story without touching any code.

  LINES
    Text is written as lists of lines: ["first paragraph", "second paragraph"].
    Each line is one paragraph on screen. A marker at the start changes how it looks:
      "# TUESDAY | 11:40 AM"    a scene header (the | starts a new line)
      "~ ..."                   warped: how Nell felt it, not how it was
      "_ ..."                   dim: a note from the game, not the story
      "> ..."                   a text message
    *stars* make italics. {enter} becomes ENTER (or "return" on phones).
    {n} becomes the number of Tuesdays lived.

  TAGS: when a line shows
    Put tags in [brackets] at the start of a line. A line without tags always shows.
      [felt] [heal] [clear]     how honest the narrator is (see the moment's `truth`)
                                  felt  = Nell doesn't know the truth yet
                                  heal  = she knows it, but it still feels the old way
                                  clear = the last day, told the way it really was
      [first time] [replay]     the first time the player sees this moment, or after
      [if read] [if not read]   only if Nell knows (or doesn't know) a fact
      [from wake]               in a branch: only if the change was made at that moment
      [day two]                 only on the second Tuesday, the one day you can let go
                                without knowing the truth (see `withoutKnowing` below)
      [not day two]             every day except the second Tuesday
    Combine tags with commas: "[clear, if read] ...". Two tags of the same kind mean
    either one, so [felt, heal] shows on felt days and on heal days.

  FACTS
    Learned in branches:   tried_to_tell, nobody_laughed, read, reason, why_secret,
                           mom, photo, august, sketch, march, out_loud
    Set by the game:       feelings  (after sketch, or after both photo and august)
                           relived   (after day one)
                           ready     (the way out of the loop is open)
    The six fixes count as facts too: peace, keep, confess, sorry, station, permission.

  TYPOS
    A misspelled tag, fact or branch name prints a warning in the browser console,
    and `node tomorrow/test/test.js` fails until it's fixed.
*/

/* ---------------- passages used in more than one place ---------------- */

const DINER_TRUTH = [
  "Two truckers and a game show. Dot doing the crossword in pen. The laugh was at the TV.",
  "Nobody is looking at you.",
  "Nobody was ever looking at you.",
  "Theo’s hands are shaking. “I found out this morning, I swear to god. Her mom came in at six and said it like it was the weather.”",
  "He turns the order pad over and over. “Her mom said she was gonna tell you at the tower. Thursday. She said Maya tried.”",
  "[if not tried_to_tell] “She tried?”",
  "[if tried_to_tell]     You already knew. It’s different, hearing it from him.",
  "“She said you made a joke.”",
  "It only lasts so long. By six-thirty you’re in her driveway and it’s gone, and the rest of the day goes the way it goes.",
];

const DINER_TRUTH_NIGHT = [
  "Nobody was laughing. You keep turning that over.",
  "What else did you get wrong?",
  "Tomorrow.",
];

const TOWER_SCENE = [
  "Maya is on the catwalk with her legs through the railing and her sketchbook on her knees.",
  "She’s wearing your jacket. Of course she is.",
  "She doesn’t look surprised to see you. She looks like she’s been waiting so long she forgot she was.",
  "“Hey, Nellie.”",
  "“I’m leaving tonight,” she says to the sketchbook. “Chicago.” She makes herself look at you. “I know it’s late.”",
  "[if not why_secret] “Why didn’t you tell me?”",
  "[if why_secret]     You don’t ask why. You already know why. She tells you anyway.",
  "She picks at a thread on the jacket. Your jacket. “Because if I told you, you’d ask me to stay. And I would. And we’d be fine at each other in booth four until we died.”",
  "“I tried. Thursday. Up here.” She almost smiles. “You made a joke about the Dollar General.”",
  "And you do remember. The sun going down. *Nobody leaves Calder. It’s like the Hotel California, but with a Dollar General.* She laughed. Then she stopped laughing, and you’d already moved on.",
  "“They’re giving me money, Nell. For *drawing*. Nobody here even thinks that’s a thing a person does.”",
  "“I did.”",
  "“I know you did.” She looks at you. “You were the only one.”",
  "You stay up there until the sun goes down over the feed store, an orange that would look fake if she drew it.",
  "At the bottom of the ladder she hugs you, and it lasts exactly as long as you want it to.",
];

const PEACE_NIGHT = [
  "That was good. That was *so* good.",
  "It was good the way a photograph is good.",
  "[from wake, from street] So why does it feel like you’re still standing in the driveway?",
  "[from driveway]          You were in the driveway this time. You still feel like you’re standing in it.",
  "Tomorrow, then. Tomorrow you’ll get it right.",
];

const STORY = {
  /* ---------------- title screen ---------------- */

  title: [
    "TOMORROW",
    "_ a short game about one day, and letting it go",
    "This is the day you keep reliving.",
    "At each moment, type what you’d do differently, like GO TO THE TOWER or KNOCK. Or press {enter} to let it happen.",
    "You will not be shown every possible choice.",
  ],

  /* ---------------- small bits of text the game uses everywhere ---------------- */

  ui: {
    begin: "_ Press {enter} to begin.",
    resume: "_ Your Tuesday is still waiting. Press {enter} to wake up again, or type RESTART to start over.",

    // Shown in the empty prompt line.
    continue: "ENTER to continue ▾",
    continueOnPhone: "tap to continue ▾",
    yourMove: "type, or {enter} to let it pass",

    playAgain: "_ Restart, up top, to go back to the first Tuesday.",

    // The counter in the bar at the top, and the line under each end card (see `endings`).
    endingsCounter: "endings {found}/{total}",
    endingFound: "_ ending found: {name} ({found} of {total})",

    // Words on the page around the story: the bar at the top, the restart menu, and the
    // first screen. index.html marks where each one goes with data-ui="...".
    restartButton: "restart",
    restartMenu: {
      question: "Start over?",
      restart: "Back to the first Tuesday",
      restartNote: "Nell forgets everything she’s learned. You don’t. The endings you’ve found and your colors stay.",
      erase: "Erase everything",
      eraseNote: "Endings and colors too. You’ll be asked how you feel again.",
      cancel: "Keep playing",
    },
    // The four feelings match FEELINGS in game.js, which turns them into colors.
    mood: {
      question: "How do you feel today?",
      happy: "happy",
      sad: "sad",
      angry: "angry",
      anxious: "anxious",
      note: "Slide each one as far as it’s true.",
      begin: "begin",
    },

    // When the player tries something that belongs to a different moment.
    notYet: "Not yet.",
    herNotYet: "She isn’t here. Not yet.",
    gone: "That moment’s already gone. Today, anyway.",

    // Day one only. {what} is what the player typed.
    meantDo: "You mean to *{what}*.",
    meantSay: "You mean to say *“{what}.”*",

    inventory: "Your phone. Your keys. Forty dollars you’ve been saving for nothing in particular.",

    // When the game doesn't understand, one of these in turn. The hint shows from the second miss on.
    misses: [
      "You don’t know how to do that here.",
      "That isn’t something this moment has room for.",
      "You hold the thought for a second. Then you let it go.",
    ],
    missHint: "_ (Try something simple, or press {enter} to let the moment happen. LOOK and THINK don’t change anything.)",

    nightHint: "_ (Press {enter}.)",
  },

  // Answers that work anywhere, at any time, before anything else (see `words`).
  anywhere: {
    unsafe: [
      "No. You don’t want to stop. You want *Tuesday* to stop. Those aren’t the same thing.",
      "_ If you’re hurting for real, you can call or text 988 (in the US), any time.",
    ],
    stop: [
      "It doesn’t stop because you ask it to. You’ve asked.",
      "_ The day only ends one way: all the way through. Press {enter} to let it happen.",
    ],
    tired: "You’re tired. You’ve been tired since Thursday, probably. The day waits anyway.",
  },

  // Free replies that work at any moment, unless the moment has its own (see `words`).
  replies: {
    out: [
      "[if not feelings] The word comes around the corner. You cross the street.",
      "[if feelings]     You know. You’ve known. Saying it to the ceiling is practice.",
    ],
    awake: "You’re awake. You’ve been awake since 7:14.",
    notstay: "You almost say it. *I wasn’t going to stay either.* Out loud, it would sound like something you made up just now.",
    loop: "You could tell someone. Nobody would remember it tomorrow. That’s almost worse.",
    real: "It’s real. It’s the most real day you’ve ever had. That’s the problem.",
    thursday: "Thursday isn’t in here. You’ve checked. It only goes back as far as 7:14.",
    hand: "You write it on your hand in pen. Tomorrow at 7:14 your hand is clean. You remember it anyway. That’s the only kind of writing that keeps.",
    letter: "You start one in your head. *Maya,* and then nothing. You’ve been writing it since Thursday.",
    steal: "You’d have to be somebody who takes things back. You’ve never even asked for your jacket.",
    aloud: "Out loud is the hard part. You’ve said it a hundred times in your head.",
    count: "Eleven streets. Four booths. One crooked A. Counting is something to do with your head that isn’t the thing.",
    rehearse: [
      "You run it in your head. The driveway. *I’m not mad.* You get it perfect four times in a row.",
      "In your head, she never says anything back.",
      "[day two] You make a list. Tower. Knock. Say something. It’s the same list as last night.",
    ],
    drawer: "Forty dollars in a sock with no partner. For nothing in particular. You shut the drawer.",
    call: "You’d have to hear her voice. You put the phone back down.",
    who: "Somebody who remembers it this way.",
  },

  help: [
    "Today happens the way it happened. At each moment, you can do one thing differently, or press {enter} to let it happen.",
    "Once you change something, the rest of the day goes from there.",
    "LOOK, THINK, and HELP don’t change anything.",
    "_ RESTART takes you back to the first Tuesday. Nell forgets what she’s learned. You don’t.",
  ],

  // THINK shows every line whose fact Nell knows, in this order.
  think: {
    facts: {
      relived: "Maya is leaving tonight. The bus is at 8:45.",
      reason: "An art school in Chicago is paying her to draw.",
      mom: "Mom knew. Lourdes told her at the pharmacy. She tried to tell you sideways.",
      out_loud: "You told Mom. Out loud, in the kitchen. She put her keys down.",
      nobody_laughed: "Nobody in the diner was laughing at you.",
      tried_to_tell: "She tried to tell you, Thursday, at the tower. You made a joke.",
      read: "She did text you. You left it on Read.",
      why_secret: "She didn’t tell you because if you’d asked her to stay, she would have.",
      march: "The letter came in March. She’s carried it in your jacket ever since.",
      photo: "The fourth frame. She was looking at you.",
      august: "August, on the tower. You didn’t move for forty minutes.",
      sketch: "Her sketchbook: *I didn’t tell you because—* crossed out.",
      feelings: "You love her. You have for a long time.",
      peace: "You’ve said goodbye without a fight.",
      keep: "You’ve asked her to stay.",
      confess: "You’ve told her how you feel.",
      sorry: "You’ve knocked. You’ve said sorry.",
      station: "You’ve tried leaving with her.",
      permission: "You told her about the loop. She gave you her part back.",
      ready: ["There’s one thing you haven’t let yourself try.", "Letting every moment go by, on purpose."],
    },
    // Shown when Nell knows none of the above.
    nothing: "Nothing yet. It’s Tuesday. That’s all you know.",
  },

  /* ---------------- each morning ---------------- */

  // Said after the alarm, every morning after the first.
  again: {
    // The first time the day repeats: the second Tuesday, the worst one.
    first: [
      "Again.",
      "The alarm. The stain on the ceiling. The silence where her text should be. All of it exactly where you left it.",
      "You know how today goes. You know every place you could have done it differently.",
      "Your phone is face down on the nightstand. The tower is right there in the window. You could do anything today.",
      "That’s the worst part. You could do anything.",
    ],
    // After that, one of these lines each morning, in turn.
    more: [
      "Again.",
      "Again. Again.",
      "The stain on the ceiling has started to look like a face. It looks tired too.",
      "You could recite this morning. You could set it to music.",
      "Again. Of course again.",
    ],
    // The morning after the second Tuesday, by where she stopped letting it go.
    almost: {
      street: "Yesterday you almost let all of it go by. You made it as far as the tower.",
      driveway: "Yesterday you almost let all of it go by. You made it all the way to her driveway.",
      porch: "Yesterday you almost let all of it go by. You made it all the way to her porch.",
      home: "Yesterday you almost let all of it go by. You made it to the last eight minutes.",
    },
    // Once the way out is open: the first morning, the second, and every morning after.
    ready: [
      ["Again.", "You’ve lived enough versions of today now. Every one except the first."],
      ["Again.", "What if you didn’t change anything?"],
      ["Again.", "Let every chance go by. Let it happen the way it happened."],
    ],
  },

  /* ---------------- things that can happen on any day ---------------- */

  // When Nell finally admits how she feels.
  feelings: [
    "You knew.",
    "You’ve known for a long time. Since the tower, at least. Since before the tower.",
    "You just never let it have a name.",
    "It has one now.",
  ],

  // Making the exact same change a second time.
  repeat: {
    text: [
      "You’ve done this before. You do it again.",
      "You know where to stand. You know what she’ll say before she says it.",
      "“Why does it sound like you practiced that?” she asks.",
      "You don’t have an answer that isn’t insane. She looks at you like you’re very far away.",
      "The day goes exactly where you steer it. It’s like driving a car from the back seat.",
    ],
    night: [
      "You lie there running the numbers. If you’d stood a foot to the left. If you’d said it a minute sooner.",
      "Tomorrow you’ll try something you haven’t.",
    ],
  },

  // The night the way out opens.
  thinner: "Something about the dark feels different tonight. Thinner.",

  // Changing anything on the second Tuesday.
  differentDay: "And just like that, it’s a different day.",

  // Hiding on the second Tuesday, the first time.
  hideWarning: [
    "You could. Last Tuesday you didn’t. You got up.",
    "_ (Type it again to stay under. Or press {enter} to get up the way you got up.)",
  ],

  /* ---------------- nights that aren't part of a branch ---------------- */

  nights: {
    first: [
      "Somewhere out on the highway, the bus is getting smaller.",
      "You play it back. The driveway. The box. Her laughing. *Fine. Then go.*",
      "You should have gone to the tower.",
      "You should have knocked.",
      "You should have said— you don’t even know. Something. Anything else.",
      "Tomorrow will be different.",
      "You close your eyes.",
    ],

    // From the third Tuesday on: the player let every moment happen, but the way out isn't open yet.
    // (On the second Tuesday, letting everything happen is the other way out: see `withoutKnowing`.)
    tooSoon: {
      // She hasn't found out anything at all yet.
      noFacts: [
        "You let all of it happen. You’ve been letting it happen for days.",
        "You can’t let go of something you’ve never once picked up.",
        "Tomorrow.",
      ],
      noFixes: [
        "You let all of it happen. Every chance, you let it go by.",
        "But you already started pulling at the thread. You can’t stop halfway and call it letting go.",
        "Tomorrow will be different.",
      ],
      someFixes: [
        "You let all of it happen. Every chance, you let it go by.",
        "But at every one of them, you stopped and looked. There are still things you haven’t said to her. You can feel the shape of them in your mouth.",
        "Tomorrow will be different.",
      ],
      // Enough fixes, but she still doesn't know why Maya never told her.
      noWhy: [
        "You let all of it happen. Every chance, you let it go by.",
        "But you still don’t know *why*. She’s up there every afternoon. You’ve never once asked.",
        "Tomorrow.",
      ],
    },

    // The way out: every moment let happen, after the way out opened.
    final: [
      "# TUESDAY | 11:52 PM",
      "Somewhere out on the highway, the bus is getting smaller.",
      "You don’t play it back.",
      "You play it back a little.",
      "The driveway. The box. Her face when you said it.",
      "You hurt her.",
      "You wish you hadn’t.",
      "You wish you’d understood sooner. About Thursday.",
      "[if sketch]   About the drawings.",
      "[if read]     About the message you left sitting there, read, at 11:52 on a Monday.",
      "[if not read] About everything she was trying to hand you.",
      "[if march]    About March, and the jacket.",
      "But you didn’t.",
      "She should have told you, too. Months before Thursday. You both know that.",
      "It doesn’t make it not you.",
      "That’s what happened. You were there. It was you.",
      "You close your eyes.",
      "You don’t tell yourself anything about tomorrow.",
    ],
  },

  wednesday: {
    morning: [
      "# WEDNESDAY | 7:14 AM",
      "Your alarm is ringing.",
      "You open your eyes.",
      "Sunlight presses through the blinds. The stain on the ceiling is just a stain.",
      "Your phone says Wednesday.",
    ],

    // What the player types gets one of these replies (see `words` below).
    replies: {
      enter: "The alarm keeps going.",
      sleep: "No. You’ve slept enough.",
      phone: "Later.",
      remember: "Yesterday. It happened. You let it.",
      stain: "Just a stain. Not Ohio. Not anything.",
      real: "It’s Wednesday. That’s how you know.",
      other: "Not yet. Soon, though.",
    },

    // Which reply each word leads to, checked top to bottom, on either Wednesday.
    // "end" gets up: the end card (see `endings`).
    words: {
      stain: ["stain", "ceiling"],
      real: ["real", "dream"],
      sleep: ["sleep", "bed", "lie", "close", "nothing", "wait", "dont", "back"],
      end: ["get up", "stand", "rise", "up", "wake", "go", "leave", "open", "walk", "turn off"],
      phone: ["phone", "message", "read", "text", "maya"],
      remember: ["remember", "think"],
    },
  },

  /* ---------------- the other way out: letting go without knowing ----------------
     Only on the second Tuesday, and only once the player has found Knowing (so a first run
     of pressing ENTER doesn't count). The player feels every moment again, gets poked to change
     each one ([day two] lines), and lets all of it happen anyway, without ever learning
     the truth. That's closure the way it usually comes: you never find out, and you go on. */

  withoutKnowing: {
    night: [
      "# TUESDAY | 11:52 PM",
      "You lie on top of the covers in your clothes.",
      "Somewhere out on the highway, the bus is getting smaller.",
      "You let all of it happen. Again. Every word, every place you could have stopped it.",
      "You still don’t know why she didn’t tell you.",
      "You don’t know if she was laughing.",
      "You don’t know if you’ll ever know. You probably won’t.",
      "It happened anyway. It already happened. You were there.",
      "You don’t know if you let it go or just let it happen. Maybe the first time, it’s both.",
      "You close your eyes, and for the first time in two days, you don’t ask for another Tuesday.",
    ],

    // The morning after. Nothing got answered. The only way on is to get up.
    morning: [
      "# WEDNESDAY | 7:14 AM",
      "Your alarm is ringing.",
      "You open your eyes.",
      "Nothing about yesterday got answered.",
      "Your phone says Wednesday. There’s nothing new on it.",
    ],
    replies: {
      enter: "The alarm keeps going.",
      sleep: "No. You’ve slept enough.",
      phone: "Nothing new. There might never be. You put it in your pocket anyway.",
      remember: "Yesterday. You still don’t know. It happened anyway.",
      stain: "Just a stain. Not Ohio. Not anything.",
      real: "It’s Wednesday. That’s how you know.",
      other: "Not yet. First you have to get up.",
    },
    getUp: ["You do.", "You still don’t know why. You get up anyway."],

    // Years later. The whole game turns out to be Nell telling it.
    epilogue: [
      "# WEDNESDAY | ten years later",
      "Dot’s Diner. Burnt coffee and lemon cleaner, same as my whole life.",
      "“That’s how I remember it,” I say. “That’s the whole thing.”",
      "I always tell it like it happened to somebody else. *You wake up. You go to the diner. You say it.* It’s easier that way.",
      "Across the table, Maya turns her cup around and around. There’s charcoal on her thumb. There always is.",
      "“I wasn’t laughing,” she says. “In the driveway. I was crying.”",
      "“I know. I mean, I know now.”",
      "“I should have told you. Not Thursday. Months before Thursday. I kept putting it in my sketchbook instead of saying it to your face.”",
      "“I made a joke,” I say. “You tried, and I made a joke. And then I read your text and turned my phone over.”",
      "“I know.” She almost smiles. “I watched it say Read.”",
      "Neither of us says anything for a while. Somebody at the counter laughs at the TV.",
      "Then she reaches across the table and takes my hand.",
      "Same booth. Same smell.",
      "It’s different now.",
    ],
  },

  /* ---------------- the two endings ----------------
     Each way out ends on its card. Then the game names the ending, counts it in the bar
     at the top (RESTART keeps that count), and shows `again`, the invitation back in. */

  endings: {
    knowing: {
      name: "Knowing",
      card: [
        "You do.",
        "[if out_loud] Downstairs, Mom is at the screen door with her keys. This time you’ll tell her on a day that keeps.",
        "# TOMORROW",
        "_ {n} Tuesdays. You needed to know why before you could let go.",
        "_ Some people let go the very next day, without ever finding out.",
        "_ a game by Andy Tran",
      ],
      again: "_ Restart, up top, to go back to the first Tuesday. Nell forgets everything. You won’t.",
    },

    withoutKnowing: {
      name: "Without Knowing",
      card: [
        "# TOMORROW",
        "_ Two Tuesdays. You never found out. You went on anyway.",
        "_ a game by Andy Tran",
      ],
      again: "_ Restart, up top, to live it again.",
    },
  },

  /* ---------------- what the player can type ----------------
     Each action and the words that trigger it. Checked top to bottom and the first
     match wins, so put specific phrases above general ones.
     A word starting with "=" only counts if it's the whole input ("=wait").
     Each moment can add its own words; those are checked first. */

  words: {
    unsafe: [
      "kill myself", "suicide", "end my life", "want to die", "wanna die", "rather die", "hurt myself", "end it all",
      "dont want to wake up", "never wake up", "want to disappear", "wish i wasnt here", "dont want to be here",
      "dont want to exist", "better off without me",
    ],
    stop: ["make it stop", "make it end", "make this stop", "want it to stop", "=stop"],
    tired: ["whats the point", "no point", "im tired", "so tired", "im exhausted"],
    out: ["im gay", "im a lesbian", "i like girls", "im queer", "im bi", "gay", "lesbian", "queer"],
    awake: ["stay awake", "dont sleep", "dont close", "keep my eyes open", "stay up", "dont fall asleep"],
    notstay: ["not stay", "not staying", "wasnt going to stay", "never stay", "wont stay"],
    loop: ["lived today", "live today", "living today", "time loop", "loop", "same day", "tuesday again", "relive", "reliving"],
    real: ["this isnt real", "isnt real", "not real", "is this real", "dreaming"],
    thursday: ["go back to thursday", "back to thursday", "redo thursday"],
    hand: ["on my hand", "write it down", "write it on"],
    letter: ["write her a letter", "write a letter", "letter"],
    steal: ["steal", "her ticket", "hide her ticket", "rip her ticket"],
    aloud: ["out loud", "aloud"],
    count: ["count"],
    rehearse: ["rehearse", "practice what", "make a list", "plan what", "what to say", "run it in my head"],
    drawer: ["drawer", "money", "forty", "sock", "savings"],
    call: ["call her", "call maya", "phone call", "call"],
    who: ["who are you", "whos telling", "who is telling", "who is this"],
    hide: [
      "stay in bed", "stay home", "sleep", "back to bed", "hide", "blanket", "lie in bed", "close my eyes",
      "lie here", "lie still", "stay put", "dont get up", "dont want to get up",
    ],
    stay: ["dont let", "dont go", "dont leave", "stay", "stayed", "staying", "stop her", "keep her", "beg"],
    nothing: [
      "=wait", "=z", "=get up", "=go on", "=continue", "=leave",
      "nothing", "let it happen", "let it be", "let her go", "let go", "change nothing",
      "=the same", "same as before", "accept", "dont do anything", "dont say anything", "dont knock",
      "=eat", "eat the eggs", "go home", "walk away", "whatever", "i dont care",
      "dont ask", "dont answer", "dont reply", "dont text", "dont run", "dont look",
    ],
    breathe: ["breathe", "breath", "calm", "relax", "soup"],
    confess: ["love", "confess", "kiss", "feelings", "how i feel", "i like her", "crush", "tell her everything"],
    bus: ["bus", "station", "go with", "come with", "take me", "run away", "leave town", "chicago", "make it", "get on", "catch", "feed store"],
    knock: ["knock", "follow", "door", "go after", "run after", "go inside", "go in", "doorbell"],
    sorry: ["sorry", "apologize", "apologise", "make it right", "make up"],
    goodbye: ["goodbye", "bye", "hug", "see her off", "help her", "carry"],
    original: ["tell her to go", "then go", "go then", "fine", "everybody knew", "yell", "scream", "confront", "angry"],
    house: ["mayas", "her house", "her room", "reyes", "mrs", "search"],
    mom: ["mom", "mother", "lourdes", "kitchen", "pharmacy"],
    text: ["text", "reply", "answer", "message her"],
    phone: ["phone", "messages", "message", "texts", "scroll", "read"],
    theo: ["theo", "diner", "dot", "dots"],
    photos: ["photo", "photos", "corkboard", "board", "picture", "pictures", "strip"],
    remember: ["remember", "think back", "think about", "memory", "memories", "reminisce"],
    tower: ["tower", "climb", "go up", "go there", "find her", "find maya", "see her", "see maya"],
    talk: ["talk", "ask", "say", "speak", "tell", "why", "maya", "her"],
  },

  // Tried too early, these actions get "She isn’t here. Not yet."
  aimedAtMaya: ["confess", "stay", "goodbye", "sorry", "knock"],

  /* ---------------- the day: seven moments, in order ----------------
       id            its name (branches use it in [from ...] tags)
       truth         the fact that changes how honestly this moment is told
       tell          what happens, ending where Nell could do something different
       letItHappen   what happens when the player presses ENTER
       whatNellDid   said when the player types what Nell actually did
       look          the reply to LOOK
       dayOne        day one only: what happens instead of what they typed
       freeReplies   replies that don't use up the day: { "phrase, phrase": "reply" }
       words         extra words for this moment only: { action: ["word", "word"] }
                     (an action can also be the name of a free reply)
       changes       what each action does here: { action: "branch name" }
                     ("let it happen" means it happens the way it happened) */

  moments: [
    {
      id: "wake",
      truth: "read",
      tell: [
        "# TUESDAY | 7:14 AM",
        "Your alarm is already ringing when you open your eyes.",
        "[felt]               Maya never replied last night.",
        "[heal]               Maya never replied last night. That’s the story, anyway.",
        "[clear, if read]     Maya texted last night. You read it at 11:52 and put the phone face down.",
        "[clear, if not read] Your phone is face down on the nightstand. You never turned it over.",
      ],
      letItHappen: ["[day two] You don’t touch the phone. You get up the way you got up."],
      whatNellDid: "Later. First the kitchen.",
      look: "Your room. The water stain on the ceiling, shaped like a state nobody can name. A corkboard of photo-booth strips over the desk. Your phone, face down on the nightstand. From the kitchen, Mom’s radio. Through the blinds, the water tower over the Hendersons’ roof.",
      dayOne: "But it’s Tuesday, and Tuesday already knows how it goes.",
      freeReplies: {
        "ceiling, stain": "The stain. You and Maya used to argue about which state it was. She said Ohio. It isn’t Ohio.",
        "hook, jacket": "The hook on the back of the door. Your jean jacket used to hang there. It’s been empty since March.",
        "time": "7:14. It’s always 7:14.",
        "window": "Calder, in slices. Over the Hendersons’ roof, the water tower. She goes up there when she’s waiting on something.",
        "radio": "The weather, for a town forty miles from here.",
        "cry": "You don’t. You’re saving it for something. You don’t know what.",
        // Looking is free: these answer LOOK AT ...
        "phone": "Face down on the nightstand, where you left it last night. You could turn it over.",
        "photos, photo, corkboard, strip, strips": "Photo-booth strips: you and Maya, you and Maya, you and Maya. There’s one you never look at for too long.",
        "tower": "Over the Hendersons’ roof, the water tower. CALDER, the second A crooked.",
        "highway": "You can’t see the highway from here. You’ve checked. Just the tower, and past it, more Calder.",
        "text theo": "> u up — He sends back a picture of the diner’s fryer. That’s Theo for yes.",
      },
      words: {
        highway: ["highway", "look past"],
        "text theo": ["text theo", "message theo"],
        text: ["text", "reply", "message her"],
      },
      changes: {
        phone: "phone",
        text: "text",
        photos: "photos",
        remember: "remember",
        hide: "hide",
        house: "house",
        tower: "tower",
        talk: "tower",
        mom: "mom",
        breathe: "breathe",
        theo: "let it happen",
      },
    },

    {
      id: "kitchen",
      truth: "mom",
      tell: [
        "[first time] You get up. You eat the eggs. They’re cold.",
        "[first time] “You and Maya doing anything tonight?” Mom asks the coffee maker. A pause long enough to park a car in. “Lourdes came by the pharmacy yesterday, is all.”",
        "[first time] She’s at the screen door, keys in her hand. Not quite leaving.",
        "[replay]     The cold eggs. Mom, asking the coffee maker. *Lourdes came by the pharmacy yesterday.* Mom at the screen door.",
        "[heal]       Ninety days of prescriptions. You know what she isn’t saying now. You still can’t make her say it.",
        "[day two]    You could ask. One question. *Mom, what did Lourdes say?*",
      ],
      letItHappen: [
        "[day two]    You don’t ask. Keeping your mouth shut feels like holding a door closed with your whole body.",
        "[first time] She kisses the top of your head on the way out. She doesn’t usually do that.",
        "[replay]     She kisses the top of your head on the way out.",
      ],
      whatNellDid: "You eat. She goes.",
      look: "The kitchen. Cold eggs. Mom at the screen door with her keys, not quite leaving.",
      dayOne: "“Mom—” It comes out too quiet. She doesn’t turn around.",
      freeReplies: {
        "look at mom": "Keys already in her hand. She hasn’t opened the door. She’s waiting for you to ask.",
        "radio": "The weather, for a town forty miles from here.",
        "fridge": "Your whole life, under magnets. You and Maya at eight in matching swimsuits, already sunburnt.",
        "toast": "Half-eaten. She always leaves half.",
        "listen": "The radio, doing the weather for a town forty miles from here. Mom, not leaving.",
        "comfort": "You hug her from behind, keys and all. “What’s this for?” “Nothing.” She holds on a second longer than she has to.",
      },
      words: {
        comfort: ["hug", "kiss", "bye mom", "its okay", "are you okay", "i already know"],
        screen: [
          "finish her sentence", "finish the sentence", "who arent what", "arent what",
          "im gay", "im a lesbian", "i like girls", "im queer",
        ],
        mom: ["stop her", "follow", "stay"],
        listen: ["listen"],
      },
      changes: { mom: "mom", talk: "mom", screen: "screen door", theo: "let it happen" },
    },

    {
      id: "diner",
      truth: "nobody_laughed",
      tell: [
        "# TUESDAY | 11:40 AM",
        "[first time] Dot’s Diner. Burnt coffee and lemon cleaner, same as your whole life.",
        "[first time] Theo slides into your booth with the coffee pot still in his hand, which Dot hates.",
        "[first time] “Okay, so. Are you going to the station tonight, or are you doing the thing where you pretend you’re fine?”",
        "[first time] “What station.”",
        "[first time] “Her bus, Nell. Eight forty-five.” His face does something complicated. “She— oh my god. She didn’t tell you.”",
        "[replay]     Dot’s. Theo and the coffee pot. *Her bus, Nell. Eight forty-five. She didn’t tell you.*",
        "Somebody at the counter laughs.",
        "[felt]  ~ Then somebody else.",
        "[felt]  ~ The whole diner turns in its seats to look at you, slow, like sunflowers. Everybody knew. Dot knew. The truckers knew. The pies in the case knew.",
        "[felt]  ~ Theo is still talking. His mouth is very far away.",
        "[felt]  Your chest is doing the thing. Mom always says breathe in through your nose like you’re smelling soup.",
        "[heal]  At the TV. You know that now. It still feels like it’s at you.",
        "[heal]  Theo is still talking. You can’t hear him over your own heart.",
        "[clear, if nobody_laughed]     It’s at the TV. It was always at the TV.",
        "[clear, if nobody_laughed]     Two truckers and a game show. Dot doing the crossword in pen. Nobody is looking at you.",
        "[clear, if not nobody_laughed] You don’t turn around. You never did find out who it was.",
        "[clear] Theo’s hand is shaking. The coffee pot ticks against the table.",
        "[day two] You knew he was going to say it. You knew somebody would laugh. You could breathe. You could turn around and look.",
      ],
      letItHappen: [
        "[day two]    You don’t look. You let it be everybody. You let it be laughing.",
        "[felt, heal, not day two] You’re outside. You don’t remember standing up.",
        "[day two]    You stand up. This time you feel your legs do it.",
        "[clear]      You get up and leave. You remember standing up, this time.",
      ],
      look: "Booth four. Theo and the coffee pot. Dot and her crossword. The counter, where somebody laughed.",
      dayOne: "You try. Your body has already decided.",
      freeReplies: {
        "counter": [
          "[felt]        Two truckers. You can’t see their faces from here. You’d have to turn around.",
          "[heal, clear] Two truckers and a game show. Nobody is looking at you.",
        ],
        "tv": "A game show. A man is winning a boat.",
        "look at theo": "His hand is shaking. The coffee pot ticks against the table.",
        "pie": "The pies in the case. Lemon, cherry, something brown.",
        "order": "Theo brings you pie you didn’t order. “On the house. Don’t tell Dot.”",
        "cry": "Not here. You have a whole system for not-here.",
        "punch": "You don’t. Theo has never done one thing to deserve being the first person you hit.",
      },
      words: {
        order: ["order"],
        hold: ["hold my breath", "hold breath", "hold your breath"],
        kind: ["not your fault", "its okay"],
        turn: ["turn around", "whats so funny", "who laughed", "laughed", "laughing", "laugh", "confront", "yell", "throw"],
        theo: ["booth", "listen", "stay", "dont leave", "bus"],
        punch: ["punch", "hit"],
      },
      changes: { breathe: "breathe", hold: "hold", kind: "kind", turn: "turn", theo: "theo", talk: "theo" },
    },

    {
      id: "street",
      truth: "tried_to_tell",
      tell: [
        "# TUESDAY | 3:15 PM",
        "[felt]        You walk. You pass the Dollar General, the Baptist church, the feed store. The Dollar General.",
        "[felt]        ~ You pass the Dollar General.",
        "[heal, clear] You walk. Eleven streets. The Dollar General, the Baptist church, the feed store.",
        "[first time]  Over the roofs, the water tower says CALDER in letters you and Maya repainted, badly, at sixteen.",
        "[replay]      The water tower over the roofs.",
        "[felt]        She might be up there. She always goes up there when she’s—",
        "[heal]        She’s up there. You know exactly where she is now.",
        "[clear]       She’s up there. She’s been waiting for you since Thursday.",
        "[day two]     It’s five minutes to the tower. You could be up the ladder before you’d decided to go.",
      ],
      letItHappen: [
        "[felt, heal] You don’t go.",
        "[clear]      You don’t go. You let yourself not go.",
        "[day two]    You keep walking. Every step away from the tower, you can feel yourself choosing it.",
      ],
      whatNellDid: "You keep walking.",
      look: "Main Street. The Dollar General, the church, the feed store. Over the roofs: CALDER, the second A crooked.",
      dayOne: "You think about it so hard it’s almost the same as going. It isn’t.",
      freeReplies: {
        "dollar general": "You’ve been inside a thousand times. Nothing in there you need today.",
        "letters, look up": "CALDER. The second A is crooked because Maya was laughing when she painted it.",
        "sign": "The sign in the feed store window: CHICAGO 8:45 PM. You’ve walked past it every day of your life. It’s only tonight for you.",
        "cry": "Not on Main Street. Somebody would call your mom.",
      },
      words: {
        sign: ["feed store", "bus sign", "sign"],
        tower: ["=up", "=go", "maya", "her", "climb", "tower"],
        nothing: ["dont go", "keep walking", "=walk", "dont answer", "dont go up"],
      },
      changes: { tower: "tower", text: "tower" },
    },

    {
      id: "driveway",
      truth: "why_secret",
      tell: [
        "# TUESDAY | 6:30 PM",
        "[first time] The Reyeses’ driveway. Her mom’s trunk open like a mouth.",
        "[first time] Maya is coming down the steps with a box marked BOOKS (HEAVY) (SORRY), and she sees you, and she stops.",
        "[first time] She’s wearing your jean jacket. She’s been wearing it since March. You never asked for it back.",
        "[first time] “Nell.”",
        "[first time] “Everybody knew.” Your voice comes out flat and strange. “Theo knew. My *mom* knew.”",
        "[first time] “I was going to tell you.”",
        "[first time] “When? From the bus?”",
        "[replay]     The driveway. The trunk open like a mouth. Your jacket. *Everybody knew. I was going to tell you. When? From the bus?*",
        "[felt]  ~ She laughs. A small, mean laugh you’ve never heard before.",
        "[felt]  ~ “You were always going to stay here, Nell. That’s just you. That’s fine.”",
        "[felt]  ~ The streetlight above her flickers. Every time it comes back on, she’s standing a little farther down the driveway.",
        "[heal]  She laughs. Small and mean—",
        "[heal]  No. She didn’t. You’ve seen her face up close since. Her eyes were red.",
        "[heal]  “You were always going to stay,” she says, and you know what came after it now. You didn’t hear it then. It still lands like a slap.",
        "[clear] She isn’t laughing. She never was. Her eyes are red.",
        "[clear] “You were always going to stay,” she says, and it comes out cracked down the middle. “And if you’d asked, I would have stayed with you. That’s the whole problem, Nell.”",
        "[day two] You know exactly what you’re about to say. You’ve heard it every hour since. You could say anything else. *Stay. I’m sorry. I—* Anything.",
        "“Say something.”",
      ],
      whatNellDid: "It comes out the way it came out.",
      look: "Maya, holding the box. Your jacket, sleeves pushed up. Charcoal on her thumb. Waiting for you to say something.",
      dayOne: "What comes out is something else.",
      freeReplies: {
        "box": "BOOKS (HEAVY) (SORRY), in her handwriting. A sketchbook rides on top.",
        "look at her, look at maya": "Charcoal on her thumb, always. She’s chewing the inside of her cheek, the way she does when she’s not saying something.",
        "trunk": "Open like a mouth. Half full already.",
        "cry": "Not in front of her. Not today.",
        "jacket": "She’s wearing it. You don’t ask for it back. You never do.",
        "silence": [
          "You don’t say anything. She waits. You count to eleven, one for every street.",
          "The quiet gets so big it starts to sound like something.",
          "_ (It won’t stay quiet. Press {enter} to let it come out.)",
        ],
        "askif": [
          "[if reason]     Maya holds the box tighter. “Don’t ask me that, Nellie. Not unless you mean it. Because I’d say yes.”",
          "[if not reason] “Would I what? Stay for what, Nell?”",
          "_ (Say it. Or press {enter}.)",
        ],
        "accuse": [
          "[if not why_secret] “I was going to.” She looks at the box instead of you. That’s all you get.",
          "[if why_secret]     You know why. She told you on the tower. You ask anyway, so she has to say it twice. She doesn’t.",
          "_ (Say something else. Or press {enter}.)",
        ],
        "photo": [
          "[if photo]     “The photo booth. The last strip. You weren’t looking at the camera.” She goes very still, holding the box. “Nell. Not in the driveway.”",
          "[if not photo] You think of the corkboard over your desk. You’ve never really looked at it.",
        ],
        "mrs": "Mrs. Reyes is in the trunk up to her elbows. “Not now, mija.”",
        "out": [
          "[if feelings]     “I’m gay,” you say, in the driveway, to Maya, holding a box. She looks at you over it. “Okay. Nellie. Is that the whole sentence?”",
          "[if not feelings] The word comes around the corner. You cross the street.",
        ],
      },
      words: {
        silence: ["say nothing", "stay quiet", "dont say anything", "keep quiet", "be quiet", "silent"],
        askif: ["would you stay", "if i asked", "would you still go"],
        accuse: ["decided for me", "give me a choice", "should have told me", "you lied", "why didnt you"],
        go: ["you should go", "i want you to go", "you have to go", "you should leave"],
        jacketBack: [
          "jacket back", "give me my jacket", "have my jacket", "want my jacket", "ask for my jacket",
          "ask for the jacket", "take my jacket", "return my jacket",
        ],
        photo: ["photo", "frame", "photo booth"],
        mrs: ["mrs", "her mom"],
        goodbye: ["happy for", "proud of", "congratulations", "good luck", "luck", "its okay", "miss her", "miss you"],
        jacket: ["jacket"],
        talk: ["chicago"],
      },
      changes: {
        confess: "confess",
        stay: "stay",
        goodbye: "goodbye",
        sorry: "goodbye",
        loop: "loop",
        go: "go",
        jacketBack: "jacket",
        talk: "say what",
        original: "let it happen",
      },
    },

    {
      id: "porch",
      tell: [
        "“Fine,” you say. “Then go.”",
        "[day two]    It comes out exactly the same. You feel every word of it leave.",
        "[first time] For a second she looks like you hit her.",
        "[first time] Then she picks up the box and goes inside.",
        "[replay]     The flinch. The box. The door.",
        "The porch light is on. You could knock.",
        "[day two] Knock. Just knock. Your hand is already up.",
      ],
      letItHappen: [
        "[clear] You let it be what it was.",
        "[clear] And some small part of you — mean, or kind, you honestly can’t tell — meant it the other way too. *Go.* Get out of here. One of us should.",
        "[clear] You don’t knock. You didn’t, then.",
        "[day two] You put your hand down. You let it be the night it was.",
        "You stand there until the porch light clicks off.",
      ],
      whatNellDid: "You lift your hand. You put it down.",
      look: "The closed door. The porch light. Your hand, not knocking.",
      dayOne: "You lift your hand. You put it down.",
      freeReplies: {
        "window": "Her shape behind the curtain. She isn’t moving away from the door.",
        "porch light": "Still on. Someone inside is deciding when to turn it off.",
        "cry": "Not here. Not where she could hear.",
        "whisper": "You say it to the wood. *Sorry.* It doesn’t go anywhere. It doesn’t have to.",
        "shout": "You yell it at the door. The porch light stays on. Her shape behind the curtain doesn’t move toward the door or away.",
        "ditch": "Your finger is on the doorbell. You’d be down the steps before it stopped ringing. You take your finger off.",
        "text": "You type *sorry*. You delete it. She’s right there, on the other side of the door.",
      },
      words: {
        whisper: ["whisper", "under my breath", "so quiet", "quietly"],
        ditch: ["ding dong", "ring and run", "ditch"],
        shout: ["yell", "scream", "shout"],
        text: ["text", "message"],
        knock: ["call out", "call her name"],
        nothing: ["sit", "lift", "hand down", "put my hand"],
      },
      changes: { knock: "knock", sorry: "knock", talk: "knock" },
    },

    {
      id: "home",
      tell: [
        "# TUESDAY | 8:40 PM",
        "[first time] You walk home. You lie on top of the covers in your clothes.",
        "[first time] Across town, the bus to Chicago is idling by the feed store, late like always.",
        "[first time] You could still make it.",
        "[replay]     Home. The covers. The bus idling by the feed store. You could still make it.",
        "[day two]    Eight minutes. You could run. You’ve made that bus a hundred times in your head since last night.",
      ],
      letItHappen: [
        "[day two] You don’t run. You lie there and listen to the last chance in the day pull away.",
        "At 8:52 you hear it go.",
      ],
      whatNellDid: "You could. You don’t.",
      look: "Your room in the dark. The ceiling. Eight minutes from here, a bus.",
      dayOne: "You sit up. You lie back down.",
      freeReplies: {
        "listen": "The bus, idling, eight streets away. You could still make it.",
        "ceiling": "The stain looks different in the dark. Smaller.",
        "cry": "You do, a little, into the pillow, so it doesn’t count.",
        "text": "You type *have a safe trip*. Delete. You type *sorry*. Delete. You put the phone face down on the nightstand, like last night. Like every night.",
        "awake": "You lie there with your eyes open. That’s all staying awake is.",
      },
      words: {
        watch: [
          "watch it go", "watch the bus", "watch it leave", "watch her go", "watch it from",
          "climb the tower", "the tower", "from the tower",
        ],
        wave: ["see her off", "wave", "say goodbye at the bus"],
        nothing: ["dont run", "dont go", "lie there", "=lie"],
        text: ["text", "message"],
        bus: ["=leave", "=go", "=run", "=get up", "run", "get up and", "car"],
        listen: ["listen", "hear"],
      },
      changes: {
        watch: "watch",
        wave: "wave",
        bus: "bus",
        knock: "bus",
        talk: "bus",
        remember: "remember",
        hide: "let it happen",
      },
    },
  ],

  /* ---------------- branches: what happens when the player changes a moment ----------------
     A branch is a list of cases. The game plays the first case whose `needs` Nell knows:
       needs  facts this case requires, e.g. ["reason"]. Leave it out for "otherwise".
       learn  facts Nell learns, e.g. ["why_secret"]
       fix    which of the six fixes this counts as (peace, keep, confess, sorry, station, permission)
       text   what happens
       night  the night that ends the day. Leave it out and the text is just a reply:
              the moment stays open and the player can still choose.
       scene  (rare) another branch this one counts as, so doing both is a repeat
       wayOut (rare) "knowing": this case ends the loop, with `night` as the last night */

  branches: {
    phone: [
      // She already found the message.
      {
        needs: ["read"],
        text: [
          "Her message is still the last one in the thread.",
          "> can we talk tmrw. for real this time. i have to tell you something",
          "_ Read 11:52 PM",
          "It’s always going to be there. You could read it every morning for the rest of your life.",
        ],
        // No night: rereading it is free. It's always going to be there.
      },
      // Somebody told her Maya tried, so this time she reads to the bottom.
      {
        needs: ["tried_to_tell"],
        learn: ["read"],
        text: [
          "[if nobody_laughed]     *She said she tried.* You can’t stop hearing Theo say it.",
          "[if not nobody_laughed] *I tried. Thursday. Up here.* You can’t stop hearing her say it.",
          "So this time you read all the way to the bottom.",
          "The last message in the thread isn’t yours.",
          "It’s hers.",
          "> can we talk tmrw. for real this time. i have to tell you something",
          "_ Read 11:52 PM",
          "You remember now. Lying here last night. Reading it. Putting the phone face down on the nightstand like it might bite.",
          "She replied.",
          "You didn’t.",
          "The rest of Tuesday goes the way Tuesday goes.",
        ],
        night: ["She tried. You didn’t let her.", "Tomorrow."],
      },
      // Otherwise: she doesn't know yet, so she doesn't look all the way.
      {
        text: [
          "You pick up your phone and open the thread. The fish faces. The Ohio argument.",
          "Your eyes stop a line short of the bottom, the way they always do, like there’s wet paint there.",
          "You put it face down and lie there until it’s too late to do anything else with the day.",
        ],
        night: ["Something at the bottom of that thread you keep not reading.", "Somebody would have to make you.", "Tomorrow."],
      },
    ],

    photos: [
      {
        learn: ["photo"],
        text: [
          "You don’t get up. You look at the corkboard over your desk instead. Photo-booth strips: you and Maya, you and Maya, you and Maya.",
          "The last strip. Four frames. In three of them you’re both doing the fish face.",
          "In the fourth, she isn’t. She’s looking at you instead of the camera.",
          "You’ve looked at this strip a hundred times.",
          "You sit on the floor under the corkboard until the light changes, and then until it’s too late to fix anything today.",
        ],
        night: ["The fourth frame. You can still see it with your eyes closed.", "Tomorrow."],
      },
    ],

    remember: [
      {
        learn: ["august"],
        text: [
          "[from wake] You don’t get up. You lie there and remember on purpose.",
          "[from home] You lie there and remember on purpose, so you don’t have to listen for the bus.",
          "August. The night the whole town lost power and the two of you climbed the water tower to watch the stars come out all at once.",
          "She fell asleep against your shoulder. Her hair smelled like the town pool.",
          "You didn’t move for forty minutes. Your arm went dead. You’d have let it fall off.",
          "[if tried_to_tell] And Thursday. Same tower. The sun going down over the feed store.",
          "[if tried_to_tell] “What would you do,” she said, “if I left?”",
          "[if tried_to_tell] “Nobody leaves Calder,” you said. “It’s like the Hotel California, but with a Dollar General.”",
          "[if tried_to_tell] She laughed at the joke. Then she stopped laughing. You’d already started talking about something else.",
          "[if tried_to_tell] You didn’t look at her face. You remember that now.",
          "[from wake] By the time you’re done remembering, Tuesday is over. It went on without you.",
          "[from home] At 8:52 the bus goes. You don’t hear it. You’re on the tower, in August.",
        ],
        night: ["You always remember the tower.", "Tomorrow."],
      },
    ],

    hide: [
      {
        text: [
          "[day two] You could let it happen. You’d have to be there for it. You pull the blanket up anyway.",
          "You pull the blanket over your head.",
          "Mom calls your name once from the kitchen and then the screen door slaps shut.",
          "Tuesday goes on without you. That’s the thing about days.",
        ],
        night: ["At 8:52 you hear the bus through the blanket. It sounds exactly the same from under here.", "Tomorrow."],
      },
    ],

    house: [
      {
        learn: ["reason", "sketch"],
        text: [
          "You skip the diner. You go to Maya’s house instead.",
          "Mrs. Reyes opens the door before you knock, like she’s been watching the street. “Mija.” She hugs you hard. She smells like onions and Jergens.",
          "“She’s at the library. Four years of overdue books, she says it’s a matter of honor before—” She sees your face. “Oh. Oh, no. She didn’t tell you.”",
          "“Chicago,” she says, softer. “The art school. They’re giving her money, Nell. For drawing.” She says it the way you’d say *for walking on water.*",
          "She lets you wait in Maya’s room.",
          "It looks like someone took a photograph of it and then took everything out of the photograph. Pale rectangles where the posters were. Three boxes taped shut and one that isn’t.",
          "In the open one: a bus ticket, CALDER → CHICAGO, TUE 8:45 PM. And her sketchbooks.",
          "Page after page of Calder. The diner. The tower. Theo asleep on the register.",
          "Your hands. Your hands again. The back of your neck, from a booth behind you. You, asleep on the tower platform, drawn so carefully you have to put it down.",
          "On the inside cover, in pen: *Nell — I didn’t tell you because*",
          "Then it’s crossed out so hard the pen went through.",
          "You hear the car in the driveway. You put the sketchbook back exactly where it was and leave through the back door.",
        ],
        night: [
          "*I didn’t tell you because.*",
          "[if not why_secret] Because what?",
          "[if why_secret]     You know because. She told you on the tower. You just never knew she tried to write it down first.",
          "Tomorrow.",
        ],
      },
    ],

    mom: [
      // She already asked once. This time she asks the real question.
      {
        needs: ["mom"],
        text: [
          "“You didn’t think I knew,” you say.",
          "Mom stops with her hand on the screen door.",
          "“…No, baby. I didn’t.”",
          "“Then why’d you ask the coffee maker?”",
          "“Same reason you’re asking the back of my head.” She almost laughs. She goes.",
        ],
        night: ["She does it too. Asks things sideways.", "You learned it at that table.", "Tomorrow."],
      },
      {
        learn: ["mom"],
        text: [
          "[from wake] You get to the kitchen before she can leave.",
          "“Mom. What did Lourdes say?”",
          "She stops with her hand on the screen door.",
          "“She was picking up Maya’s prescriptions. Ninety days’ worth. For the trip.” She doesn’t turn around. “I thought you knew, baby. I figured you two knew everything about each other.”",
          "“Maybe it’s good. Some space. You’ll have more time for other people. Friends who aren’t—” She stops.",
          "“Who aren’t what.”",
          "“Who aren’t leaving.”",
          "She kisses the top of your head. The screen door slaps shut behind her.",
          "You stand in the kitchen a long time after it stops moving.",
          "The rest of Tuesday goes the way Tuesday goes.",
        ],
        night: ["*Friends who aren’t—*", "You finish her sentence a hundred ways. None of them end in *leaving*.", "Tomorrow."],
      },
    ],

    // Finishing Mom's sentence: "Friends who aren't—". The one change that only the loop undoes.
    "screen door": [
      {
        needs: ["mom", "feelings"],
        learn: ["out_loud"],
        text: [
          "“Mom.” She stops with her hand on the screen door.",
          "“Friends who aren’t what.”",
          "She doesn’t turn around. “Baby, I didn’t mean anything—”",
          "“I’m going to finish it.” Your voice is doing something. You let it. “Friends who aren’t her. Because it’s her, Mom. It’s been her for a long time.”",
          "The screen door stays shut.",
          "Then Mom puts her keys down on the counter. She’s going to be late. She’s never late.",
          "She turns around. Her face is wet and she’s smiling, both, like she can’t pick.",
          "“Eat your eggs,” she says, and sits down across from you, and doesn’t go anywhere.",
          "The rest of Tuesday goes the way Tuesday goes. Except the kitchen.",
        ],
        night: [
          "She put her keys down.",
          "You said it out loud, to a person, in the kitchen, and the kitchen is still there.",
          "Tomorrow she won’t remember. She’ll be at the screen door again with her keys.",
          "You will, though.",
        ],
      },
      {
        needs: ["mom"],
        text: [
          "“Friends who aren’t what, Mom.”",
          "She stops. “Who aren’t leaving. I said.”",
          "“That’s not what you were going to say.”",
          "“You’re my kid, is all.” She kisses the top of your head. The screen door slaps shut.",
        ],
        night: ["She didn’t finish it. Neither did you.", "It’s the same sentence.", "Tomorrow."],
      },
      // Otherwise: she hasn't started the sentence yet. Just a reply.
      {
        text: [
          "[if not feelings] The word comes around the corner. You cross the street.",
          "[if feelings]     It’s right there. But she hasn’t said anything you could finish. Not yet.",
        ],
      },
    ],

    breathe: [
      {
        learn: ["nobody_laughed", "tried_to_tell"],
        text: [
          "[from wake]  You breathe in through your nose like you’re smelling soup. It’s a stupid technique. Mom swears by it.",
          "[from wake]  You do it at the diner door.",
          "[from wake]  Theo slides into your booth. “Her bus, Nell. Eight forty-five. She didn’t tell you.”",
          "[from wake]  Somebody at the counter laughs.",
          "[from wake]  You make yourself look.",
          "[from diner] You breathe in through your nose like you’re smelling soup. It’s a stupid technique.",
          "[from diner] It’s a stupid technique that works.",
          "[from diner] The diner comes back to its normal size.",
          ...DINER_TRUTH,
        ],
        night: DINER_TRUTH_NIGHT,
      },
    ],

    // Talking to Theo instead of breathing gets to the same truth.
    theo: [
      {
        learn: ["nobody_laughed", "tried_to_tell"],
        text: ["You make yourself stay in the booth. You make yourself look at him.", ...DINER_TRUTH],
        night: DINER_TRUTH_NIGHT,
      },
    ],

    // Other ways into the same truth at the diner, each in its own temper.
    turn: [
      {
        learn: ["nobody_laughed", "tried_to_tell"],
        text: ["You turn around in the booth, ready to make somebody sorry.", ...DINER_TRUTH],
        night: ["There was nobody to yell at. There never was.", ...DINER_TRUTH_NIGHT],
      },
    ],
    hold: [
      {
        learn: ["nobody_laughed", "tried_to_tell"],
        text: [
          "You hold your breath. The diner gets loud, then far away, then very small.",
          "Then your body breathes for you, the way it always does. In through the nose. Soup.",
          ...DINER_TRUTH,
        ],
        night: DINER_TRUTH_NIGHT,
      },
    ],
    kind: [
      {
        learn: ["nobody_laughed", "tried_to_tell"],
        text: [
          "“Hey. It’s not your fault.”",
          "Theo looks at you like you handed him something. “Okay. Okay.” He sits down for real.",
          ...DINER_TRUTH,
        ],
        night: DINER_TRUTH_NIGHT,
      },
    ],

    // A nudge when the player says something vague at the driveway. No night, so the moment stays open.
    "say what": [
      {
        text: [
          "You open your mouth. You don’t know which of the hundred things to say.",
          "_ (Say it. Or press {enter} to let it happen.)",
        ],
      },
    ],

    tower: [
      {
        learn: ["reason", "why_secret", "tried_to_tell"],
        fix: "peace",
        text: [
          "[from wake]   You skip the diner. You skip all of it. At three you climb the water tower.",
          "[from street] You go.",
          "[from street] You climb. Up here the whole town is small enough to hold in one hand.",
          ...TOWER_SCENE,
        ],
        night: ["No fight. No *Fine. Then go.*", ...PEACE_NIGHT],
      },
    ],

    // Texting her first leads to the same tower scene (so doing both is a repeat).
    text: [
      {
        scene: "tower",
        learn: ["read", "reason", "why_secret", "tried_to_tell"],
        fix: "peace",
        text: [
          "[if read]     You type under her message, finally. It takes you four tries.",
          "[if read]     > sorry. yes. tower at 3?",
          "[if not read] You open the thread. Her message is right there above the keyboard, where it’s been since last night.",
          "[if not read] > can we talk tmrw. for real this time. i have to tell you something",
          "[if not read] _ Read 11:52 PM",
          "[if not read] She replied. You didn’t.",
          "[if not read] You type something. You read it back. You delete it. You send the smallest version.",
          "[if not read] > sorry. yes.",
          "Three dots. They go away. They come back.",
          "> tower. 3.",
          "You skip the diner. You skip all of it. At three you climb the water tower.",
          ...TOWER_SCENE,
        ],
        night: ["No fight. No *Fine. Then go.*", ...PEACE_NIGHT],
      },
    ],

    goodbye: [
      {
        fix: "peace",
        text: [
          "“I’m not mad,” you say. It’s almost true. “I’m sorry. I just wanted to say bye. Properly.”",
          "Maya sets the box down on the hood of the car.",
          "You say the small things instead of the big ones. The time Theo set the fryer on fire. The dog that followed you home from the tower in sixth grade. The eleven dollars she still owes you.",
          "She laughs. You laugh.",
          "You help her carry the rest. At eight her mom honks, and she hugs you by the car, and it lasts exactly as long as you want it to.",
          "The streetlight doesn’t flicker once. She goes.",
        ],
        night: PEACE_NIGHT,
      },
    ],

    stay: [
      // She knows what Maya would be giving up, and that Maya would say yes.
      {
        needs: ["reason", "why_secret"],
        fix: "keep",
        text: [
          "“Stay,” you say. “Please. Stay.”",
          "She looks at you for a long time. Then she sets the box down. Then she sits on it.",
          "“Okay,” she says. Just like that. Like she was waiting for permission to give up.",
          "Her mom calls the bus company. Maya unpacks the box back onto the same shelf. You help. You know which shelf every book goes on.",
          "At ten you walk home. At the corner you look back. Her window’s lit. She’s at her desk, not drawing. Just sitting there.",
          "~ The streets are shorter on the walk home. You’re sure of it. Eleven streets. Ten. Nine.",
        ],
        night: [
          "She stayed. You got what you wanted.",
          "Tomorrow she’ll be in booth four. And the day after. And the day after that.",
          "In your head, in her voice: *It’s fine. Chicago was a stupid idea anyway.*",
          "She never said that. You can hear it perfectly.",
          "You close your eyes. You don’t want to see tomorrow.",
        ],
      },
      // She knows what Maya would give up, but not that she'd say yes. So she asks like it's a bit.
      {
        needs: ["reason"],
        text: [
          "“Stay,” you say. “Please.” It comes out like a bit. Like the Dollar General.",
          "She almost laughs. “Nell. You don’t even know what you’re asking.”",
          "You know what she’d be giving up. You don’t know if she’d say yes. You don’t ask twice.",
          "She picks up the box and goes.",
        ],
        night: [
          "You asked like you were kidding, so it wouldn’t count if she said no.",
          "You don’t know why she never told you. Maybe that’s the answer.",
          "Tomorrow.",
        ],
      },
      // Otherwise: she doesn't know why Maya is going, so she has no reason to give.
      {
        text: [
          "“Stay,” you say. “Please.”",
          "“Stay?” She laughs, but not really. “For what? Give me one reason, Nell. One real one.”",
          "You open your mouth. You don’t know why she’s going. You don’t know what you’d be asking her to give up.",
          "She picks up the box and goes.",
        ],
        night: ["You don’t even know what she’s leaving *for*.", "Tomorrow."],
      },
    ],

    confess: [
      // She has admitted it to herself.
      {
        needs: ["feelings"],
        fix: "confess",
        text: [
          "“I’m in love with you,” you say. “Since the tower. Since before the tower.”",
          "Maya puts the box down very carefully, like it’s the thing that might break.",
          "It’s the first time you’ve said it out loud.",
          "She laughs, and she’s crying, and she grabs the front of your shirt.",
          "“I drew you,” she says. “For a *year*. Do you know how embarrassing that is.”",
          "She kisses you, and it’s not like a movie at all. Her nose is cold. Somebody’s sprinkler is going.",
          "Then, too early, her mom honks.",
          "“I still have to go,” Maya says against your mouth. “Nell. I still have to go.”",
          "“I know.”",
          "You do.",
        ],
        night: [
          "You touch your mouth like it might still be there.",
          "You said it. She said it back. The thing you’d have traded every other day of your life for.",
          "And she still got on the bus.",
          "You lie there and wait to feel finished. You don’t.",
          "Tomorrow, then. Tomorrow you’ll get it exactly right.",
        ],
      },
      // Otherwise: she hasn't, so the words won't come.
      {
        text: [
          "“Maya. I—”",
          "There’s something in your throat with no words attached to it.",
          "“Nothing. Forget it.”",
          "She looks at you like you dropped something and didn’t notice. Then she goes.",
        ],
        night: [
          "What were you going to say?",
          "[if photo, if not august] You looked at her looking. You still haven’t looked at you. Where were you, the night the power went out?",
          "[if august, if not photo] You remember the tower. You’ve never let yourself look at what she was looking at.",
          "[if not photo, if not august] You don’t know. You’ve never let yourself look.",
          "Tomorrow.",
        ],
      },
    ],

    knock: [
      {
        fix: "sorry",
        text: [
          "You knock.",
          "She opens the door before your hand comes down. She’s been standing right behind it.",
          "“I didn’t mean it.”",
          "“I know you didn’t.”",
          "“I meant some of it.”",
          "“I know that too.”",
          "She lets you help carry the last boxes. Neither of you brings it up again. At eight her mom honks, and Maya hugs you on the porch like nothing happened.",
          "Like nothing happened.",
        ],
        night: [
          "You said sorry. She said she knew.",
          "It felt like enough, on the porch.",
          "But sorry doesn’t make it un-happen. It just makes it happen nicer.",
          "Tomorrow, then.",
        ],
      },
    ],

    bus: [
      {
        fix: "station",
        text: [
          "[day two] Six times today you let it be. You were saving yourself for this one.",
          "You run.",
          "Past the Dollar General. The feed store. The bus is still there, idling.",
          "Maya is in a window seat. She sees you through the glass and her whole face changes.",
          "You buy a ticket with the forty dollars you’ve been saving for nothing. You sit next to her. She doesn’t ask. She just holds your hand.",
          "The bus pulls out. Past the feed store. Past the Dollar General. Past the sign that says THANKS FOR VISITING CALDER.",
          "~ Past the Dollar General.",
          "~ Past the sign that says WELCOME TO CALDER.",
          "~ Past the feed store. Past the Dollar General.",
          "Maya’s asleep on your shoulder. The road goes around and around the town like water around a drain.",
          "You can’t get out of a day on a bus.",
        ],
        night: [
          "You’re in your bed. You don’t remember getting off the bus. Your forty dollars is back in the drawer.",
          "Tomorrow you’ll find a road that actually goes somewhere.",
        ],
      },
    ],

    // Asking for the jacket back: the first thing she has ever asked Maya for.
    jacket: [
      {
        learn: ["march"],
        text: [
          "“Can I have my jacket back?”",
          "It’s the first thing you’ve ever asked her for. You can tell she knows it.",
          "Maya sets the box down. She takes the jacket off slowly, like a bandage, and folds it, which nobody does to a jean jacket. She’s in a T-shirt in September.",
          "“Anything else you want back?” Her voice cracks on *back*.",
          "She goes inside. You stand in the driveway holding your jacket. It’s still warm.",
          "There’s something in the inside pocket. Heavy paper, folded small, soft at the creases from being opened and folded again.",
          "*Dear Maya Reyes, We are delighted to inform you—*",
          "It’s dated March.",
          "March. The week she started wearing your jacket.",
          "She’s carried it on her every day since. In your pocket.",
        ],
        night: [
          "Since March.",
          "Every day in booth four. Every afternoon on the tower. It was right there, in your pocket, the whole time.",
          "You got your jacket back. You didn’t get March back.",
          "Tomorrow it’ll be on her again.",
        ],
      },
    ],

    // Telling her about the loop. The sixth fix: wanting someone else to let you off.
    loop: [
      {
        needs: ["why_secret"],
        fix: "permission",
        text: [
          "“I’ve lived today before,” you say. “A lot of times. I keep waking up on Tuesday.”",
          "Maya doesn’t laugh. She sets the box on the hood of the car.",
          "“How many?” “I stopped counting.” “And every time, I get on the bus.” “Yeah.”",
          "She’s quiet for a long time. Then she takes your hand, charcoal and all.",
          "“The part where I didn’t tell you? That part’s mine, Nellie. You can put it down. You can stop.”",
          "It’s the nicest thing anyone has ever said to you.",
          "At eight her mom honks. She goes.",
        ],
        night: [
          "She gave you her part back. She was so sure about it.",
          "You lie there holding it.",
          "It’s still Tuesday tomorrow.",
          "She can’t let go of it for you.",
        ],
      },
      {
        needs: ["tried_to_tell"],
        text: [
          "“I’ve lived today before,” you say. It comes out like a bit. Like the Dollar General.",
          "Maya flinches, like you made a joke at her again. “Okay, Nell.”",
          "She picks up the box and goes.",
        ],
        night: ["You told her the truth like it was a joke. She’s heard that one from you before.", "Tomorrow."],
      },
      // Otherwise: just a reply. The moment stays open.
      {
        text: [
          "“I’ve lived today before.”",
          "She looks at you like you’re very far away. “Is this a bit? *Now?*”",
          "You don’t know how to say it so it isn’t.",
        ],
      },
    ],

    // "Go," said kindly this time. Needs her to know why Maya never told her.
    go: [
      {
        needs: ["why_secret"],
        fix: "peace",
        text: [
          "“You should go,” you say. Not like before. “Chicago. All of it.”",
          "She stares at you. “Do you know how long I waited for you to ask what I wanted?”",
          "“I’m asking now.”",
          "“I want to go.”",
          "“Then go.” The same two words. They come out different.",
          "She hugs you by the car, box and all. At eight she goes.",
        ],
        night: [
          "*Then go.* The same two words.",
          "You said them right this time. She still went. That was always going to happen.",
          "So why can’t you stop saying them over and over?",
          "Tomorrow.",
        ],
      },
      {
        text: [
          "“You should go.” It comes out too close to the other thing. She flinches.",
          "_ (Say something else. Or press {enter}.)",
        ],
      },
    ],

    // Watching the bus go, from the tower. On a day when the way out is open, this is letting go
    // too: nobody but Nell will ever know she was up there.
    watch: [
      {
        needs: ["ready"],
        wayOut: "knowing",
        text: [
          "You don’t run. You go the other way, to the tower, and climb it in the dark.",
          "From up here the bus is a lit-up box by the feed store. You can’t see her. You know which window.",
          "At 8:52 it pulls out. Past the Dollar General. Past the sign.",
          "You watch it all the way. Two lights. One light. The place where a light was.",
          "You don’t wave. You don’t say anything. Nobody will ever know you were up here.",
        ],
        night: [
          "# TUESDAY | 11:53 PM",
          "You lie on top of the covers in your clothes.",
          "[if read]     Your phone is face up on the nightstand. Her message is still there. *Read 11:52 PM.* You don’t turn it over.",
          "[if not read] You turn your phone face up. You don’t open it. You just let it be face up.",
          "11:52.",
          "11:53.",
          "You’ve never seen 11:53 before.",
          "She should have told you, too. You both know that. It doesn’t make it not you.",
          "You close your eyes. You don’t tell yourself anything about tomorrow.",
        ],
      },
      {
        text: [
          "You don’t run. You go the other way, to the tower, and climb it in the dark.",
          "At 8:52 the bus pulls out. You watch it all the way. Two lights. One light. The place where a light was.",
        ],
        night: ["Seeing it go didn’t finish anything.", "Tomorrow it’ll be idling by the feed store again, like it never left."],
      },
    ],

    // Running to the bus, but only to wave.
    wave: [
      {
        text: [
          "You run. The bus is already pulling out.",
          "She’s in the window. You wave like an idiot, both arms. She puts her hand flat on the glass.",
          "[if feelings] So you say it. Out loud, through the glass, where she can’t hear.",
        ],
        night: [
          "You waved at the back of a bus until it was just a light.",
          "[if feelings] You said it where it couldn’t count.",
          "Then you walked home the long way, so it would take longer.",
          "Tomorrow.",
        ],
      },
    ],
  },
};
