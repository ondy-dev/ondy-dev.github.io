// Complete variable definitions and random functions
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters = [
  "Peashooter Commander",
  "Sunflower Medic",
  "Kernel Corn Sergeant",
  "Chomper Assassin",
  "Cactus Sniper",
  "Engineer Zombie",
  "Disco Zombie",
  "All-Star Zombie",
  "Scientist Zombie",
  "Imp"
];

const places = [
  "Crazy Dave's Backyard",
  "Suburbia Battlefield",
  "Zomboss's Secret Lab",
  "the Rooftop Defense Zone",
  "the Abandoned Taco Stand",
  "Moon Base Z",
  "the Garden Center",
  "Neighborville Streets",
  "the Cornfield Warzone"
];

const events = [
  "launched a full pea barrage directly at a fire hydrant",
  "accidentally triggered a chili bean bomb and took out three friendlies",
  "got launched 40 feet into the air by a potato mine",
  "started breakdancing mid-battle and nobody could stop them",
  "slipped on butter and got completely obliterated by a passing lawnmower",
  "accidentally summoned a zombie horde by sneezing on the radio",
  "activated a sunflower healing beam overload and healed the enemy team",
  "turned into a pile of leaves and respawned directly inside a trash can",
  "called in a lawnmower strike on the wrong coordinates"
];

// Partial return random string function
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  const storyText = `It was 94 Fahrenheit and pure chaos in ${randomPlace}, when ${randomCharacter} showed up fully armed and ready for battle. For exactly four seconds, everything seemed under control — until ${randomCharacter} ${randomEvent}. Bob witnessed the whole disaster from 300 pounds of lawn chair and just nodded, because honestly, this happens every Tuesday.`;

  return storyText;
}

// Event listener and partial generate function definition
generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
