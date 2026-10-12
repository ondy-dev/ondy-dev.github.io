# Tomorrow

A short text game about one day, regret, and letting go. Play it at `/tomorrow/`.

```
tomorrow/
  index.html          the page
  game/               everything the page loads
    story.js            every word in the game, as data (start here to edit the story)
    game.js             the engine that reads story.js
    style.css           the terminal look
  test/test.js        plays the game without a browser and checks the rules
  docs/
    DESIGN.md           the design journal: the idea, the decisions, how it works
    playtests/          simulated playthroughs and the review of what they found
  itch/cover.png      cover art for the itch.io page (630×500)
  tools/
    build-itch.sh       builds the zip to upload to itch.io
```

From the repository folder:

```
node tomorrow/test/test.js            # check the game after any change
sh tomorrow/tools/build-itch.sh       # make ~/Desktop/tomorrow-itch.zip
```
