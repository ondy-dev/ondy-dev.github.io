"use strict";

/*
  TOMORROW
  ---------------------------------------------------------------
  You relive the same Tuesday. It plays out the way it happened,
  and it stops at seven moments where Nell could have done something
  different. At each one, type what you'd do instead (the rest of the
  day branches from there) or press ENTER to let it happen.

  The day resets. Your knowledge doesn't.
    K — what the player has learned, tried, and seen. Persists (and is saved).

  Every change is a "what if," and none of them end the loop. The only
  way out is to try to fix the day enough times that you can finally
  stop, then let every moment go by: the same day, the same words,
  chosen this time, with everything you know now.

  The narrator is unreliable. Moments are told the way Nell felt them,
  then (once she's learned the truth) with the truth showing through,
  and on the last day, the way they actually were.
*/

(function () {
  const SAVE_KEY = "tomorrow-save-v3";
  const FIXES = ["peace", "keep", "confess", "sorry", "station"];
  const READY_AT = 3; // different fixes to try before letting it happen can work

  const out = document.getElementById("out");
  const form = document.getElementById("line");
  const input = document.getElementById("cmd");

  /* =============================================================
     OUTPUT
     ============================================================= */

  // Text is revealed one paragraph at a time, a page at a time.
  // A page ends at every scene header and after about a screenful of text;
  // then the game waits for ENTER (or a tap) before going on.
  const PAGE_CHARS = 520;
  const touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

  let queue = [];
  let timer = null;
  let waiting = false; // at the end of a page
  let pageChars = 0; // characters shown on this page so far
  let pageFresh = true; // next element starts a page (scroll it to the top)
  let pagesShown = 0;
  let idleSince = 0; // when the text last finished appearing
  let wasBusy = false;

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function fmt(s) {
    return esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
  }

  const warp = (text) => ({ text, cls: "warp" });
  const dim = (text) => ({ text, cls: "dim" });
  const msg = (text) => ({ text, cls: "msg" });
  const pause = (ms) => ({ pause: ms });
  const hdr = (...lines) => ({ hdr: lines });

  function say(...items) {
    for (const it of items.flat()) {
      if (it == null || it === false || it === "") continue;
      queue.push(typeof it === "string" ? { text: it } : it);
    }
    pump();
  }

  function render(it) {
    let el;
    if (it.hdr) {
      el = document.createElement("div");
      el.className = "hdr";
      el.innerHTML = it.hdr.map(fmt).join("<br>");
    } else if (it.text !== undefined) {
      el = document.createElement("p");
      if (it.cls) el.className = it.cls;
      el.innerHTML = fmt(it.text);
      pageChars += it.text.length;
    } else {
      return;
    }
    out.append(el);
    if (pageFresh) {
      pageFresh = false;
      el.scrollIntoView({ block: "start" });
    } else {
      keepVisible(el);
    }
  }

  // Scroll only as much as needed to show the newest line. Never past the top of the page.
  function keepVisible(el) {
    const r = el.getBoundingClientRect();
    const overflow = r.bottom - (window.innerHeight - 64);
    if (overflow > 0) window.scrollBy(0, overflow);
  }

  function endsPage(it) {
    if (!it || it.pause) return false;
    if (it.hdr) return pageChars > 0;
    return it.text !== undefined && pageChars > 0 && pageChars + it.text.length > PAGE_CHARS;
  }

  function pump() {
    if (timer !== null || waiting) return status();
    if (queue.length === 0) return status();
    const it = queue[0];
    if (endsPage(it)) {
      waiting = true;
      return status();
    }
    queue.shift();
    if (it.pause) {
      timer = setTimeout(() => {
        timer = null;
        pump();
      }, it.pause);
      return status();
    }
    render(it);
    const len = it.text ? it.text.length : 24;
    timer = setTimeout(() => {
      timer = null;
      pump();
    }, Math.min(400 + len * 10, 1600));
    status();
  }

  // ENTER / tap while text is appearing: finish this page. At the end of a page: turn it.
  function advance() {
    if (waiting) {
      waiting = false;
      pageChars = 0;
      pageFresh = true;
      pagesShown++;
      return pump();
    }
    clearTimeout(timer);
    timer = null;
    while (queue.length && !endsPage(queue[0])) {
      const it = queue.shift();
      if (!it.pause) render(it);
    }
    if (queue.length) waiting = true;
    status();
  }

  // A new response starts a new page, beginning with the player's own words.
  function newPage() {
    pageChars = 0;
    pageFresh = true;
  }

  const busy = () => timer !== null || waiting || queue.length > 0;

  function status() {
    const b = busy();
    input.readOnly = b;
    form.classList.toggle("busy", b);
    if (waiting) {
      input.placeholder = pagesShown < 2 ? (touch ? "tap to continue ▾" : "press ENTER to continue ▾") : "▾";
      keepVisible(form);
    } else {
      input.placeholder = !b && mode === "moment" && K.loop === 1 ? "type something, or press ENTER to let it happen" : "";
      if (!b) keepVisible(form);
    }
    if (!b && wasBusy) idleSince = performance.now();
    wasBusy = b;
  }

  /* =============================================================
     STATE
     ============================================================= */

  function freshK() {
    return { loop: 0, know: {}, tried: {}, hearts: {}, seen: {}, readyAt: null, done: false };
  }

  let K = freshK();
  let D = { seg: 0 }; // where we are in today
  let mode = "title";
  let C = "";
  let RAW = "";
  let misses = 0;
  let confirmFrom = null;

  function save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(K));
    } catch (e) {
      /* storage unavailable — play on without saving */
    }
  }

  function load() {
    try {
      const s = localStorage.getItem(SAVE_KEY);
      return s ? Object.assign(freshK(), JSON.parse(s)) : null;
    } catch (e) {
      return null;
    }
  }

  function wipe() {
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch (e) {
      /* nothing to wipe */
    }
  }

  const learn = (k) => (K.know[k] = true);
  const triedCount = () => FIXES.filter((f) => K.tried[f]).length;
  const ready = () => triedCount() >= READY_AT;

  // How honestly a memory is told:
  //   felt  — the way Nell felt it (distorted)
  //   heal  — she knows the truth now, but it still feels the old way
  //   clear — the way it actually was (only once she's ready to let go)
  function level(truth) {
    if (ready()) return "clear";
    return truth && K.know[truth] ? "heal" : "felt";
  }

  /* =============================================================
     PARSER
     ============================================================= */

  function norm(s) {
    return s
      .toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const has = (...p) => p.some((x) => C.includes(" " + x + " "));
  const only = (...p) => p.some((x) => C.trim() === x);

  function meant() {
    const r = RAW.replace(/[.!?]+$/, "").slice(0, 70);
    if (!r) return null;
    const speech = /^(i|im|i'm|you|youre|you're|we|it|its|please|sorry|no|dont|don't|maya|hey|hi)\b/i.test(r);
    return speech ? `You mean to say *“${r}.”*` : `You mean to *${r}*.`;
  }

  // What is the player trying to do?
  function intent() {
    if (has("kill myself", "suicide", "end my life", "die", "dying", "hurt myself")) return "unsafe";
    if (
      only("wait", "z", "get up", "get out of bed", "go on", "continue", "leave") ||
      has("nothing", "let it happen", "let it be", "let her go", "let go", "let it play", "change nothing",
        "the same", "same as before", "accept", "dont do anything", "dont say anything", "dont knock",
        "eat", "eggs", "go home", "walk away")
    )
      return "nothing";
    if (has("stay in bed", "sleep", "back to bed", "hide", "blanket", "lie in bed", "lie down", "close my eyes")) return "hide";
    if (has("breathe", "breath", "calm", "relax", "soup")) return "breathe";
    if (has("love", "confess", "kiss", "feelings", "how i feel", "i like her", "crush", "in love")) return "confess";
    if (has("stay", "dont go", "dont leave", "stop her", "keep her", "beg", "make her stay")) return "stay";
    if (has("tell her to go", "then go", "go then", "confront", "yell", "scream", "fight", "argue", "angry", "everybody knew", "why", "fine"))
      return "original";
    if (has("knock", "follow", "door", "go after", "run after", "go inside", "chase")) return "knock";
    if (has("sorry", "apologize", "apologise", "make it right", "make up")) return "sorry";
    if (has("goodbye", "bye", "hug", "see her off", "help her", "carry")) return "goodbye";
    if (has("station", "bus", "go with", "run away", "leave town", "chicago", "make it", "get on", "catch")) return "bus";
    if (has("mayas", "her house", "her room", "reyes", "maya house", "mayas house", "search")) return "house";
    if (has("mom", "mother", "lourdes", "kitchen", "pharmacy")) return "mom";
    if (has("phone", "messages", "message", "scroll", "texts", "read")) return "phone";
    if (has("theo", "diner", "dot", "dots", "talk to him")) return "theo";
    if (has("photo", "photos", "corkboard", "board", "pictures", "picture", "strip", "strips")) return "photos";
    if (has("remember", "think back", "memory", "memories", "reminisce")) return "remember";
    if (has("tower", "climb", "maya", "her", "text", "call", "go there", "go up")) return "tower";
    if (has("talk", "ask", "say", "speak", "tell")) return "talk";
    return null;
  }

  /* =============================================================
     THE DAY
     The original Tuesday, as seven moments. Each one ends where Nell
     could have done something different. ENTER lets it happen.
     ============================================================= */

  const T = (lv, felt, heal, clear) => (lv === "clear" ? clear : lv === "heal" ? heal : felt);

  const SEGS = [
    {
      id: "wake",
      tell() {
        say(
          hdr("TUESDAY", "7:14 AM"),
          "Your alarm is already ringing when you open your eyes.",
          K.know.read ? "Maya never replied last night. That’s the story, anyway." : "Maya never replied last night."
        );
        againLines();
      },
      look: "Your room. The water stain on the ceiling, shaped like a state nobody can name. A corkboard of photo-booth strips over the desk. Your phone, face down on the nightstand. From the kitchen, Mom’s radio. Through the blinds, the water tower over the Hendersons’ roof.",
      forced: "But it’s Tuesday, and Tuesday already knows how it goes.",
      branches: { phone: "phone", photos: "photos", remember: "remember", hide: "hide", house: "house", tower: "tower", mom: "mom", breathe: "breathe", theo: "let" },
    },
    {
      id: "kitchen",
      tell(short) {
        const lv = level();
        if (short) {
          say("The cold eggs. Mom, asking the coffee maker. *Lourdes came by the pharmacy yesterday.* Mom at the screen door.");
        } else {
          say(
            "You get up. You eat the eggs. They’re cold.",
            "“You and Maya doing anything tonight?” Mom asks the coffee maker. A pause long enough to park a car in. “Lourdes came by the pharmacy yesterday, is all.”",
            "She’s at the screen door, keys in her hand. Not quite leaving."
          );
        }
        if (lv === "clear") say("She knows. She’s trying to tell you the only way she knows how: sideways.");
      },
      after: () => "She kisses the top of your head on the way out. She doesn’t usually do that.",
      look: "The kitchen. Cold eggs. Mom at the screen door with her keys, not quite leaving.",
      forced: "“Mom—” But she’s already kissing the top of your head. She’s already gone.",
      branches: { mom: "mom", talk: "mom", theo: "let" },
    },
    {
      id: "diner",
      tell(short) {
        const lv = level("nobody_laughed");
        say(hdr("TUESDAY", "11:40 AM"));
        if (short && lv !== "clear") {
          say("Dot’s. Theo and the coffee pot. *Her bus, Nell. Eight forty-five. She didn’t tell you.*", "Somebody at the counter laughs.");
          say(T(lv, warp("The whole diner turns to look at you."), "At the TV. You know that now. It still feels like it’s at you.", null));
        } else {
          say(
            "Dot’s Diner. Burnt coffee and lemon cleaner, same as your whole life.",
            "Theo slides into your booth with the coffee pot still in his hand, which Dot hates.",
            "“Okay, so. Are you going to the station tonight, or are you doing the thing where you pretend you’re fine?”",
            "“What station.”",
            "“Her bus, Nell. Eight forty-five.” His face does something complicated. “She— oh my god. She didn’t tell you.”",
            pause(500),
            "Somebody at the counter laughs."
          );
          say(
            T(
              lv,
              [
                warp("Then somebody else."),
                warp("The whole diner turns in its seats to look at you, slow, like sunflowers. Everybody knew. Dot knew. The truckers knew. The pies in the case knew."),
                warp("Theo is still talking. His mouth is very far away."),
              ],
              ["At the TV. You know that now.", "It still feels like it’s at you.", "Theo is still talking. You can’t hear him over your own heart."],
              [
                "It’s at the TV. It was always at the TV.",
                "Two truckers and a game show. Dot doing the crossword in pen. Nobody is looking at you.",
                "Theo’s hand is shaking. The coffee pot ticks against the table. He found out at six this morning. He’s been dreading this booth ever since.",
              ]
            )
          );
        }
        if (K.loop > 0 && lv === "felt")
          say(dim("Your chest is doing the thing. Mom always says breathe in through your nose like you’re smelling soup."));
      },
      after: () =>
        ready() ? "You get up and leave. You remember standing up, this time." : "You’re outside. You don’t remember standing up.",
      look: "Booth four. Theo and the coffee pot. Dot and her crossword. The counter, where somebody laughed.",
      forced: "You try. Your body has already decided.",
      branches: { breathe: "breathe", theo: "talk", talk: "talk" },
    },
    {
      id: "street",
      tell(short) {
        const lv = level("tried_to_tell");
        say(hdr("TUESDAY", "3:15 PM"));
        if (short && lv !== "clear") say("The walk. The Dollar General, twice. The water tower over the roofs.");
        else if (lv === "felt")
          say("You walk. You pass the Dollar General, the Baptist church, the feed store. The Dollar General.", warp("You pass the Dollar General."));
        else say("You walk. Eleven streets. The Dollar General, the Baptist church, the feed store.");
        if (!short || lv === "clear") say("Over the roofs, the water tower says CALDER in letters you and Maya repainted, badly, at sixteen.");
        say(
          T(
            lv,
            "She might be up there. She always goes up there when she’s—",
            "She’s up there. She’s waiting for you. You know that now.",
            "She’s up there. She’s been waiting for you since Thursday."
          )
        );
      },
      after: () => (ready() ? "You don’t go. You let yourself not go." : "You don’t go."),
      look: "Main Street. The Dollar General, the church, the feed store. Over the roofs: CALDER, the second A crooked.",
      forced: "You think about it so hard it’s almost the same as going. It isn’t.",
      branches: { tower: "tower" },
    },
    {
      id: "driveway",
      tell(short) {
        const lv = level("why_secret");
        say(hdr("TUESDAY", "6:30 PM"));
        if (short && lv !== "clear") {
          say("The driveway. The trunk open like a mouth. Your jacket. *Everybody knew. I was going to tell you. When? From the bus?*");
        } else {
          say(
            "The Reyeses’ driveway. Her mom’s trunk open like a mouth.",
            "Maya is coming down the steps with a box marked BOOKS (HEAVY) (SORRY), and she sees you, and she stops.",
            "She’s wearing your jean jacket. She’s been wearing it since March. You never asked for it back.",
            "“Nell.”",
            "“Everybody knew.” Your voice comes out flat and strange. “Theo knew. My *mom* knew.”",
            "“I was going to tell you.”",
            "“When? From the bus?”"
          );
        }
        say(
          T(
            lv,
            [
              warp("She laughs. A small, mean laugh you’ve never heard before."),
              warp("“You were always going to stay here, Nell. That’s just you. That’s fine.”"),
              short ? null : warp("The streetlight above her flickers. Every time it comes back on, she’s standing a little farther down the driveway."),
            ],
            [
              "In your memory, she laughs. Small and mean.",
              "She doesn’t. You know that now. Her eyes are red.",
              "“You were always going to stay,” she says. In your memory it’s cruel. It isn’t.",
            ],
            [
              "She isn’t laughing. She never was. Her eyes are red.",
              "“You were always going to stay,” she says, and it comes out cracked down the middle. “And if you’d asked, I would have stayed with you. That’s the whole problem, Nell.”",
            ]
          ),
          "“Say something.”"
        );
      },
      look: "Maya, holding the box. Your jacket, sleeves pushed up. Charcoal on her thumb. Waiting for you to say something.",
      forced: "What comes out is something else.",
      branches: { confess: "confess", stay: "stay", goodbye: "goodbye", sorry: "goodbye", talk: "talk_driveway", original: "let" },
    },
    {
      id: "porch",
      tell(short) {
        const clear = ready();
        say("“Fine,” you say. “Then go.”");
        if (clear) say("You hear yourself say it. You don’t stop it. You let it be what it was.");
        if (short && !clear) {
          say("The flinch. The box. The door.");
        } else {
          say(pause(500), "For a second she looks like you hit her.", "Then she picks up the box and goes inside.");
        }
        if (clear) say("And some small part of you — mean, or kind, you honestly can’t tell — means it the other way too. *Go.* Get out of here. One of us should.");
        say("The porch light is on. You could knock.");
      },
      after: () =>
        ready()
          ? ["You don’t knock. You didn’t, then.", "You stand there until the porch light clicks off."]
          : "You stand there until the porch light clicks off.",
      look: "The closed door. The porch light. Your hand, not knocking.",
      forced: "You lift your hand. You put it down.",
      branches: { knock: "knock", sorry: "knock" },
    },
    {
      id: "home",
      tell(short) {
        say(hdr("TUESDAY", "8:40 PM"));
        if (short && !ready()) say("Home. The covers. The bus idling by the feed store. You could still make it.");
        else
          say(
            "You walk home. You lie on top of the covers in your clothes.",
            "Across town, the bus to Chicago is idling by the feed store, late like always.",
            "You could still make it."
          );
      },
      after: () => "At 8:52 you hear it go.",
      look: "Your room in the dark. The ceiling. Eight minutes from here, a bus.",
      forced: "You sit up. You lie back down.",
      branches: { bus: "bus", remember: "remember", hide: "let" },
    },
  ];

  // Which moments accept which actions (for "not yet" / "already gone").
  function momentsFor(act) {
    return SEGS.map((s, i) => (s.branches[act] ? i : -1)).filter((i) => i >= 0);
  }

  /* =============================================================
     WALKING THROUGH THE DAY
     ============================================================= */

  function morning() {
    D = { seg: 0 };
    misses = 0;
    if (ready() && K.readyAt === null) K.readyAt = K.loop;
    save();
    tellMoment();
  }

  function againLines() {
    if (K.loop === 0) return;
    say(pause(500));
    if (ready()) {
      const since = K.loop - K.readyAt;
      say("Again.");
      if (since === 0) say("You’ve lived every version of today now. Every one except the first.");
      else if (since === 1) say("What if you didn’t change anything?");
      else say("Let every chance go by. Let it happen the way it happened.");
      return;
    }
    if (K.loop === 1) {
      say(
        "Again.",
        "The alarm. The stain on the ceiling. The silence where her text should be. All of it exactly where you left it.",
        "You know how today goes. You know every place you could have done it differently."
      );
      return;
    }
    const lines = [
      "Again.",
      "Again. Again.",
      "The stain on the ceiling has started to look like a face. It looks tired too.",
      "You could recite this morning. You could set it to music.",
      "Again. Of course again.",
    ];
    say(lines[(K.loop - 2) % lines.length]);
  }

  function tellMoment() {
    mode = "moment";
    const s = SEGS[D.seg];
    const seen = K.seen[s.id] || 0;
    s.tell(seen >= 2 && !ready());
    K.seen[s.id] = seen + 1;
  }

  function letItHappen() {
    const s = SEGS[D.seg];
    if (s.after) say(s.after());
    D.seg++;
    if (D.seg < SEGS.length) return tellMoment();
    if (K.loop === 0) return firstNight();
    if (ready()) return finalNight();
    night(
      "You let all of it happen. Every chance, you let it go by.",
      "But at every one of them, you stopped and looked. You held it in your hands and thought about it.",
      "It doesn’t feel like letting go. It feels like holding your breath.",
      "Tomorrow will be different."
    );
  }

  function momentInput() {
    if (only("help", "h", "commands", "how do i play")) return help();
    if (only("look", "l", "look around", "where am i")) return say(SEGS[D.seg].look);
    if (has("think", "what do i know", "notes")) return think();
    if (only("i", "inv", "inventory")) return say("Your phone. Your keys. Forty dollars you’ve been saving for nothing in particular.");

    const act = intent();
    if (act === "unsafe") return unsafe();

    const s = SEGS[D.seg];

    // Day one: you can try. Nothing changes.
    if (K.loop === 0) {
      if (C.trim() && act !== "nothing") say(meant(), s.forced);
      return letItHappen();
    }

    if (!C.trim() || act === "nothing") return letItHappen();

    const branch = s.branches[act];
    if (branch === "let") return letItHappen();
    if (branch) return BRANCH[branch](D.seg);
    if (!act) return miss();
    notHere(act);
  }

  function notHere(act) {
    const at = momentsFor(act);
    const herself = ["confess", "stay", "goodbye", "sorry", "knock"].includes(act);
    if (!at.length) return miss();
    if (at.some((i) => i > D.seg)) return say(herself ? "She isn’t here. Not yet." : "Not yet.");
    say("That moment’s already gone. Today, anyway.");
  }

  /* =============================================================
     BRANCHES
     Change one moment, and the rest of the day goes from there.
     ============================================================= */

  function rest(line) {
    say(pause(400), line || "The rest of Tuesday goes the way Tuesday goes. Theo. The driveway. The box. *Fine. Then go.*");
  }

  const BRANCH = {
    // ---- learning -------------------------------------------------
    phone() {
      if (K.know.read) {
        say(
          "Her message is still the last one in the thread.",
          msg("can we talk tmrw. for real this time. i have to tell you something"),
          dim("Read 11:52 PM"),
          "It’s always going to be there. You could read it every morning for the rest of your life."
        );
        rest();
        return night("It doesn’t change, no matter how many times you read it.", "Tomorrow.");
      }
      if (K.know.tried_to_tell) {
        say(
          "*She said she tried.* You can’t stop hearing Theo say it.",
          "So this time you scroll up.",
          pause(600),
          "The last message in the thread isn’t yours.",
          "It’s hers.",
          msg("can we talk tmrw. for real this time. i have to tell you something"),
          dim("Read 11:52 PM"),
          pause(600),
          "You remember now. Lying here last night. Reading it. Putting the phone face down on the nightstand like it might bite.",
          "She replied.",
          "You didn’t."
        );
        learn("read");
        rest();
        return night("She tried. You didn’t let her.", "Tomorrow.");
      }
      say(
        "You pick up your phone. The thread ends where it always ends. Nothing new from her.",
        "Your thumb hovers. You don’t scroll up. There’s nothing up there you need.",
        "You put it face down and lie there until it’s too late to do anything else with the day."
      );
      rest("The rest of Tuesday happens anyway. It doesn’t need you.");
      night("Tomorrow will be different.");
    },

    photos() {
      say(
        "You don’t get up. You look at the corkboard over your desk instead. Photo-booth strips: you and Maya, you and Maya, you and Maya.",
        "The last strip. Four frames. In three of them you’re both doing the fish face.",
        "In the fourth, she isn’t. She’s looking at you instead of the camera.",
        "You’ve looked at this strip a hundred times."
      );
      heart("photo");
      rest("You sit on the floor under the corkboard until Mom’s car pulls away, and then until the light changes, and then until it’s too late to fix anything today.");
      night("The fourth frame. You can still see it with your eyes closed.", "Tomorrow.");
    },

    remember(from) {
      say(
        from === 0 ? "You don’t get up. You lie there and remember on purpose." : "You lie there and remember on purpose, so you don’t have to listen for the bus.",
        "August. The night the whole town lost power and the two of you climbed the water tower to watch the stars come out all at once.",
        "She fell asleep against your shoulder. Her hair smelled like the town pool.",
        "You didn’t move for forty minutes. Your arm went dead. You’d have let it fall off."
      );
      if (K.know.tried_to_tell) {
        say(
          pause(600),
          "And Thursday. Same tower. The sun going down over the feed store.",
          "“What would you do,” she said, “if I left?”",
          "“Nobody leaves Calder,” you said. “It’s like the Hotel California, but with a Dollar General.”",
          "She laughed at the joke. Then she stopped laughing. You’d already started talking about something else.",
          "You didn’t look at her face. You remember that now."
        );
      }
      heart("tower");
      rest(
        from === 0
          ? "By the time you’re done remembering, Tuesday is over. It went on without you."
          : "At 8:52 the bus goes. You don’t hear it. You’re on the tower, in August."
      );
      night("You always remember the tower.", "Tomorrow.");
    },

    hide() {
      say(
        "You pull the blanket over your head.",
        "Mom calls your name once from the kitchen and then the screen door slaps shut.",
        "Tuesday goes on without you. That’s the thing about days."
      );
      night("Hiding isn’t the same as letting go.", "You know that. You did it anyway.", "Tomorrow.");
    },

    house() {
      say(
        "You skip the diner. You go to Maya’s house instead.",
        "Mrs. Reyes opens the door before you knock, like she’s been watching the street. “Mija.” She hugs you hard. She smells like onions and Jergens.",
        "“She’s at the library. Four years of overdue books, she says it’s a matter of honor before—” She sees your face. “Oh. Oh, no. She didn’t tell you.”",
        "“Chicago,” she says, softer. “The art school. They’re giving her money, Nell. For drawing.” She says it the way you’d say *for walking on water.*",
        pause(500),
        "She lets you wait in Maya’s room.",
        "It looks like someone took a photograph of it and then took everything out of the photograph. Pale rectangles where the posters were. Three boxes taped shut and one that isn’t.",
        "In the open one: a bus ticket, CALDER → CHICAGO, TUE 8:45 PM. A letter on heavy paper that begins *We are delighted.* And her sketchbooks.",
        pause(500),
        "Page after page of Calder. The diner. The tower. Theo asleep on the register.",
        "Your hands. Your hands again. The back of your neck, from a booth behind you. You, asleep on the tower platform, drawn so carefully you have to put it down.",
        "On the inside cover, in pen: *Nell — I didn’t tell you because*",
        "Then it’s crossed out so hard the pen went through."
      );
      learn("reason");
      heart("sketch");
      rest("You hear the car in the driveway. You put the sketchbook back exactly where it was and leave through the back door. The rest of the day goes the way it goes.");
      night("*I didn’t tell you because.*", "Because what?", "Tomorrow.");
    },

    mom(from) {
      say(
        from === 0 ? "You get to the kitchen before she can leave." : null,
        "“Mom. What did Lourdes say?”",
        "She stops with her hand on the screen door.",
        "“She was picking up Maya’s prescriptions. Ninety days’ worth. For the trip.” She doesn’t turn around. “I thought you knew, baby. I figured you two knew everything about each other.”",
        pause(500),
        "“Maybe it’s good. Some space. You’ll have more time for other people. Friends who aren’t—” She stops.",
        "“Who aren’t what.”",
        "“Who aren’t leaving.”",
        "She kisses the top of your head. The screen door slaps shut behind her.",
        "You stand in the kitchen a long time after it stops moving."
      );
      learn("mom");
      rest();
      night("*Friends who aren’t—*", "You finish her sentence a hundred ways. None of them end in *leaving*.", "Tomorrow.");
    },

    breathe(from) {
      if (from === 0) {
        say(
          "You breathe in through your nose like you’re smelling soup. It’s a stupid technique. Mom swears by it.",
          "You do it all the way to the diner.",
          "Theo slides into your booth. “Her bus, Nell. Eight forty-five. She— oh my god. She didn’t tell you.”",
          "Somebody at the counter laughs.",
          "You make yourself look."
        );
      } else {
        say(
          "You breathe in through your nose like you’re smelling soup. It’s a stupid technique.",
          "It’s a stupid technique that works.",
          "The diner comes back to its normal size."
        );
      }
      dinerTruth();
    },

    talk() {
      say("You make yourself stay in the booth. You make yourself look at him.");
      dinerTruth();
    },

    talk_driveway() {
      say("You open your mouth. You don’t know which of the hundred things to say.", dim("(Say it. Or press ENTER to let it happen.)"));
      return "stay";
    },

    // ---- fixing ---------------------------------------------------
    tower(from) {
      if (repeat("peace")) return;
      if (from === 0) {
        if (has("call", "text")) say("You text her before you can stop yourself. *hi.*", "Three dots. They go away. They come back.", msg("tower. 3?"));
        say("You skip the diner. You skip all of it. At three you climb the water tower.");
      } else {
        say("You go.", "You climb. Up here the whole town is small enough to hold in one hand.");
      }
      say(
        "Maya is on the catwalk with her legs through the railing and her sketchbook on her knees.",
        "She’s wearing your jean jacket. She’s been wearing it since March. You never asked for it back.",
        "She doesn’t look surprised to see you. She looks like she’s been waiting so long she forgot she was.",
        "“Hey, Nellie.”",
        pause(500),
        "“I’m leaving tonight,” she says to the sketchbook. “Chicago.” She makes herself look at you. “I wanted you to hear it from me. I know it’s late.”",
        "It hurts. But it’s hers. She handed it to you.",
        "“Why didn’t you tell me?”",
        "She picks at a thread on the jacket. Your jacket. “Because if I told you, you’d ask me to stay. And I would. And we’d be fine at each other in booth four until we died.”",
        "“I tried. Thursday. Up here.” She almost smiles. “You made a joke about the Dollar General.”",
        pause(500),
        "“They’re giving me money, Nell. For *drawing*. Nobody here even thinks that’s a thing a person does.”",
        "“I did.”",
        "“I know you did.” She looks at you. “You were the only one.”",
        pause(500),
        "You stay up there until the sun goes down over the feed store, the exact orange of a movie.",
        "At the bottom of the ladder she hugs you, and it lasts exactly as long as you want it to."
      );
      learn("reason");
      learn("why_secret");
      learn("tried_to_tell");
      K.tried.peace = true;
      night("No fight. No *Fine. Then go.* That was good. That was *so* good.", "It was good the way a photograph is good.", "So why does it feel like you’re still standing in the driveway?", "Tomorrow, then. Tomorrow you’ll get it right.");
    },

    goodbye() {
      if (repeat("peace")) return;
      say(
        "“I’m not mad,” you say. It’s almost true. “I just wanted to say bye. Properly.”",
        "Maya sets the box down on the hood of the car.",
        "You say the small things instead of the big ones. The time Theo set the fryer on fire. The dog that followed you home from the tower in sixth grade. The eleven dollars she still owes you.",
        "She laughs. You laugh.",
        "At the car she hugs you, and it lasts exactly as long as you want it to.",
        "The streetlight doesn’t flicker once. Her mom honks. She goes."
      );
      K.tried.peace = true;
      night("That was good. That was *so* good.", "It was good the way a photograph is good.", "So why does it feel like you’re still standing in the driveway?", "Tomorrow, then. Tomorrow you’ll get it right.");
    },

    stay() {
      if (!K.know.reason && !K.know.why_secret) {
        say(
          "“Stay,” you say. “Please.”",
          "“Stay?” She laughs, but not really. “For what? Give me one reason, Nell. One real one.”",
          "You open your mouth. You don’t know why she’s going. You don’t know what you’d be asking her to give up.",
          "She picks up the box and goes."
        );
        return night("You don’t even know what she’s leaving *for*.", "Tomorrow.");
      }
      if (repeat("keep")) return;
      say(
        "“Stay,” you say. “Please. Stay.”",
        "She looks at you for a long time. Then she sets the box down. Then she sits on it.",
        "“Okay,” she says. Just like that. Like she was waiting for permission to give up.",
        pause(500),
        "Her mom calls the bus company. Maya unpacks the box back onto the same shelf. You help. It’s like watching a movie rewind.",
        "At ten you walk home. At the corner you look back. Her window’s lit. She’s at her desk, not drawing. Just sitting there.",
        warp("The streets are shorter on the walk home. You’re sure of it. Eleven streets. Ten. Nine.")
      );
      K.tried.keep = true;
      night(
        "She stayed. You got what you wanted.",
        "Tomorrow she’ll be in booth four. And the day after. And the day after that.",
        "In your head, in her voice: *It’s fine. Chicago was a stupid idea anyway.*",
        "She never said that. You can hear it perfectly.",
        "You close your eyes. You don’t want to see tomorrow."
      );
    },

    confess() {
      if (!K.know.feelings) {
        say(
          "“Maya. I—”",
          "There’s something in your throat with no words attached to it.",
          "“Nothing. Forget it.”",
          "She looks at you like you dropped something and didn’t notice. Then she goes."
        );
        return night("What were you going to say?", "You don’t know. That’s the problem.", "Tomorrow.");
      }
      if (repeat("confess")) return;
      say(
        "“I think I’m in love with you,” you say. “I think I have been since— I don’t know. Since the tower. Since forever.”",
        "Maya puts the box down very carefully, like it’s the thing that might break.",
        "“You *think*.”",
        "“I know.” It’s the first time you’ve said it out loud. It’s the first time you’ve said it inside, either.",
        pause(500),
        "She laughs, and she’s crying, and she grabs the front of your shirt.",
        "“I drew you,” she says. “For a *year*. Do you know how embarrassing that is.”",
        "She kisses you, and it’s not like a movie at all. Her nose is cold. Somebody’s sprinkler is going. It’s better than a movie. It’s real.",
        pause(700),
        "Then her mom honks.",
        "“I still have to go,” Maya says against your mouth. “Nell. I still have to go.”",
        "“I know.”",
        "You do."
      );
      K.tried.confess = true;
      night(
        "You touch your mouth like it might still be there.",
        "You said it. She said it back. The thing you’d have traded every other day of your life for.",
        "And she still got on the bus.",
        pause(500),
        "You lie there and wait to feel finished. You don’t.",
        "Tomorrow, then. Tomorrow you’ll get it exactly right."
      );
    },

    knock() {
      if (repeat("sorry")) return;
      say(
        "You knock.",
        "She opens the door before your hand comes down. She’s been standing right behind it.",
        "“I didn’t mean it.”",
        "“I know you didn’t.”",
        "“I meant some of it.”",
        "“I know that too.”",
        pause(500),
        "She lets you help carry the last boxes. Neither of you brings it up again. At eight her mom honks, and Maya hugs you on the porch like nothing happened.",
        "Like nothing happened."
      );
      K.tried.sorry = true;
      night("You said sorry. She said she knew.", "It felt like enough, on the porch.", "But sorry doesn’t make it un-happen. It just makes it happen nicer.", "Tomorrow, then.");
    },

    bus() {
      if (repeat("station")) return;
      say(
        "You run.",
        "Past the Dollar General. Past the feed store. The bus is still there, idling, late like always.",
        "Maya is in a window seat. She sees you through the glass and her whole face changes.",
        "You buy a ticket with the forty dollars you’ve been saving for nothing. You sit next to her. She doesn’t ask. She just holds your hand.",
        "The bus pulls out. Past the feed store. Past the Dollar General. Past the sign that says THANKS FOR VISITING CALDER.",
        pause(500),
        warp("Past the Dollar General."),
        warp("Past the sign that says WELCOME TO CALDER."),
        warp("Past the feed store. Past the Dollar General."),
        "Maya’s asleep on your shoulder. The road goes around and around the town like water around a drain.",
        "You can’t get out of a day on a bus."
      );
      K.tried.station = true;
      night("You’re in your bed. You don’t remember getting off the bus. Your forty dollars is back in the drawer.", "Tomorrow you’ll find a road that actually goes somewhere.");
    },
  };

  function dinerTruth() {
    say(
      "Two truckers and a game show. Dot doing the crossword in pen. The laugh was at the TV.",
      "Nobody is looking at you.",
      pause(500),
      "Nobody was ever looking at you.",
      "Theo’s hands are shaking. “I found out this morning, I swear to god. Her mom came in at six and said it like it was the weather.”",
      "He turns the order pad over and over. “She said she was gonna tell you at the tower. Thursday. She said she tried.”",
      "“She tried?”",
      "“She said you made a joke.”"
    );
    learn("nobody_laughed");
    learn("tried_to_tell");
    rest("The breathing only lasts so long. By six-thirty you’re in her driveway and it’s gone, and the rest of the day goes the way it goes.");
    night("Nobody was laughing. You keep turning that over.", "What else did you get wrong?", "Tomorrow.");
  }

  // Doing the same fix twice: you're not living the day anymore, you're managing it.
  function repeat(fix) {
    if (!K.tried[fix]) return false;
    say(
      "You’ve done this before. You do it again.",
      "You know where to stand. You know when she’ll laugh. She laughs.",
      "“Why does it sound like you practiced that?” she asks.",
      "You don’t have an answer that isn’t insane. She looks at you like you’re very far away.",
      "The day goes exactly where you steer it. It’s like driving a car from the back seat."
    );
    night("You’re not living today anymore. You’re managing it.", "Tomorrow you’ll get the timing right.");
    return true;
  }

  function heart(key) {
    K.hearts[key] = true;
    const h = K.hearts;
    if (!K.know.feelings && (h.sketch || (h.photo && h.tower))) {
      K.know.feelings = true;
      say(
        pause(800),
        "You knew.",
        "You’ve known for a long time. Since the tower, at least. Since before the tower.",
        "You just never let it have a name.",
        pause(600),
        "It has one now."
      );
    }
  }

  /* =============================================================
     NIGHT
     ============================================================= */

  function night(...lines) {
    mode = "night";
    K.loop++;
    say(hdr("TUESDAY", "11:52 PM"), ...lines);
    if (ready() && K.readyAt === null) say(pause(600), dim("Something about the dark feels different tonight. Thinner."));
    save();
  }

  function firstNight() {
    mode = "night";
    K.loop++;
    say(
      hdr("TUESDAY", "11:52 PM"),
      "Somewhere out on the highway, the bus is getting smaller.",
      "You play it back. The driveway. The box. Her laughing. *Fine. Then go.*",
      "You should have gone to the tower.",
      "You should have knocked.",
      "You should have said— you don’t even know. Something. Anything else.",
      pause(700),
      "Tomorrow will be different.",
      "You close your eyes.",
      dim("(Press ENTER.)")
    );
    save();
  }

  function finalNight() {
    mode = "wed";
    K.done = true;
    save();
    say(
      hdr("TUESDAY", "11:52 PM"),
      "Somewhere out on the highway, the bus is getting smaller.",
      "You don’t play it back.",
      pause(600),
      "You play it back a little.",
      "The driveway. The box. Her face when you said it.",
      pause(600),
      "You hurt her.",
      "You wish you hadn’t.",
      K.know.read
        ? "You wish you’d understood sooner. About Thursday. About the drawings. About the message you left sitting there, read, at 11:52 on a Monday."
        : "You wish you’d understood sooner. About Thursday. About everything she was trying to hand you.",
      pause(700),
      "But you didn’t.",
      "That’s what happened. You were there. It was you.",
      pause(700),
      "You close your eyes.",
      "You don’t tell yourself anything about tomorrow.",
      hdr("WEDNESDAY", "7:14 AM"),
      "Your alarm is ringing.",
      pause(1500),
      "You open your eyes.",
      pause(900),
      "Sunlight presses through the blinds. The stain on the ceiling is just a stain.",
      "Your phone says Wednesday."
    );
  }

  /* =============================================================
     NOT A CHOICE (doesn't change anything)
     ============================================================= */

  function think() {
    const k = K.know;
    const t = K.tried;
    const lines = [];
    if (K.loop > 0) lines.push("Maya is leaving tonight. The bus is at 8:45.");
    if (k.reason) lines.push("An art school in Chicago is paying her to draw.");
    if (k.nobody_laughed) lines.push("Nobody in the diner was laughing at you.");
    if (k.tried_to_tell) lines.push("She tried to tell you, Thursday, at the tower. You made a joke.");
    if (k.read) lines.push("She did text you. You left it on Read.");
    if (k.why_secret) lines.push("She didn’t tell you because if you’d asked her to stay, she would have.");
    if (k.feelings) lines.push("You love her. You have for a long time.");
    if (t.peace) lines.push("You’ve given her a perfect goodbye.");
    if (t.keep) lines.push("You’ve asked her to stay.");
    if (t.confess) lines.push("You’ve told her everything.");
    if (t.sorry) lines.push("You’ve knocked. You’ve said sorry.");
    if (t.station) lines.push("You’ve tried leaving with her.");
    if (ready()) lines.push("There’s one thing you haven’t tried.", "Letting every moment go by.");
    if (!lines.length) lines.push("Nothing yet. It’s Tuesday. That’s all you know.");
    say(...lines);
  }

  function help() {
    say(
      "Today happens the way it happened. At each moment, you can do one thing differently, or press ENTER to let it happen.",
      "Once you change something, the rest of the day goes from there.",
      "LOOK, THINK, and HELP don’t change anything.",
      dim("Type RESTART to erase everything and begin again.")
    );
  }

  function miss() {
    const lines = [
      "You think about it. It doesn’t feel like the kind of thing that would change anything.",
      "That isn’t something this moment has room for.",
      "You hold the thought for a second. Then you let it go.",
    ];
    say(lines[misses % lines.length]);
    misses++;
    if (misses >= 2) say(dim("(Try something simple, or press ENTER to let the moment happen. LOOK and THINK don’t change anything.)"));
  }

  function unsafe() {
    say("No. You don’t want to stop. You want *Tuesday* to stop. Those aren’t the same thing.", dim("If you’re hurting for real, you can call or text 988 (in the US), any time."));
  }

  /* =============================================================
     TITLE / WEDNESDAY
     ============================================================= */

  function title() {
    mode = "title";
    say(
      { text: "TOMORROW", cls: "title" },
      dim("a short game about one day"),
      pause(500),
      "This is the day you keep reliving.",
      "At each moment, type what you want to do differently, like LOOK AT PHONE or KNOCK. Or press ENTER to let it happen.",
      "You will not be shown every possible choice."
    );
    const saved = load();
    if (saved && saved.loop > 0 && !saved.done) {
      K = saved;
      say(dim("Your Tuesday is still waiting. Press ENTER to wake up again, or type RESTART to start over."));
    } else {
      say(dim("Press ENTER to begin."));
    }
  }

  function wednesday() {
    if (has("get up", "stand", "rise", "up", "get out of bed", "wake", "go", "leave", "open", "walk")) {
      mode = "end";
      say("You do.", pause(2000), { text: "TOMORROW", cls: "end" }, dim("Thank you for playing."), dim("Type RESTART to live it again."));
      return;
    }
    if (has("phone", "message", "read", "text", "maya")) return say("Later.");
    if (has("sleep", "bed", "lie", "close", "nothing", "wait")) return say("No. You’ve slept enough.");
    if (has("remember", "think")) return say("Yesterday. It happened. You let it.");
    say("Not yet. Soon, though.");
  }

  /* =============================================================
     INPUT
     ============================================================= */

  function handle(raw) {
    RAW = raw;
    C = " " + norm(raw) + " ";

    if (mode === "confirm") {
      if (has("restart")) {
        wipe();
        K = freshK();
        out.innerHTML = "";
        title();
      } else {
        mode = confirmFrom;
        say("Okay. Nothing’s erased.");
      }
      return;
    }
    if (has("restart") && mode !== "title") {
      confirmFrom = mode;
      mode = "confirm";
      say(dim("Type RESTART again to erase everything you’ve learned. Anything else to keep going."));
      return;
    }

    switch (mode) {
      case "title":
        if (has("restart")) {
          wipe();
          K = freshK();
        }
        out.innerHTML = "";
        return morning();
      case "moment":
        return momentInput();
      case "night":
        return morning();
      case "wed":
        if (!raw) return;
        return wednesday();
      case "end":
        return say(dim("Type RESTART to live it again."));
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (busy()) return advance();
    const raw = input.value.trim();
    // A quick ENTER right as a moment appears is probably a page-turn, not a choice.
    if (!raw && mode === "moment" && performance.now() - idleSince < 700) return;
    input.value = "";
    newPage();
    render({ text: "> " + (raw || "…"), cls: "echo" });
    pageChars = 0; // the echo doesn't count toward the page
    handle(raw);
  });

  document.addEventListener("keydown", (e) => {
    if (busy() && (e.key === "Escape" || e.key === " ")) {
      e.preventDefault();
      advance();
    }
  });

  document.addEventListener("click", () => {
    if (window.getSelection && String(window.getSelection())) return;
    if (busy()) advance();
    input.focus();
  });

  title();
  input.focus();
})();
