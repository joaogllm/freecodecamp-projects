const lunches = [];

const addLunchToEnd = (array, argument) => {
  array.push(argument);
  console.log(`${argument} added to the end of the lunch menu.`);
  return array;
};
addLunchToEnd(lunches, "Tacos");

const addLunchToStart = (array, string) => {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
};

const removeLastLunch = (array) => {
  if (array.length > 0) {
    console.log(`${array.pop()} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
};

const removeFirstLunch = (array) => {
  if (array.length > 0) {
    console.log(`${array.shift()} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
};

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * lunches.length);
  const randomLunch = lunches[randomIndex];

  console.log(`Randomly selected lunch: ${randomLunch}`);
}

const showLunchMenu = (lunches) => {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
};
showLunchMenu(["Greens", "Corns", "Beans"]);
