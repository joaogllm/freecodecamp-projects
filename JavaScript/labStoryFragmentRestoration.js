const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  let compactFrag = [];
  let compacted = false;
  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] === undefined) {
      compacted = true;
    } else {
      compactFrag.push(fragments[i]);
    }
  }
  if (compacted) {
    console.log("[COMPACTED]");
  }
  return compactFrag;
}
let compactedShuffledFragments = compactFragments(shuffledFragments);
// console.log(compactedShuffledFragments);

function sortFragments(fragments) {
  let sortedFragments = [];
  let used = new Set();

  for (let j = 0; j < fragments.length; j++) {
    let smallestIndex = -1;

    for (let i = 0; i < fragments.length; i++) {
      if (!used.has(i)) {
        if (
          smallestIndex === -1 ||
          fragments[i].id < fragments[smallestIndex].id
        ) {
          smallestIndex = i;
        }
      }
    }

    sortedFragments.push(fragments[smallestIndex]);
    used.add(smallestIndex);
  }

  return sortedFragments;
}

let sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(sorted) {
  let dedupedFragments = [];
  let seenIds = new Set();
  for (let i = 0; i < sorted.length; i++) {
    if (seenIds.has(sorted[i].id)) {
      console.log("[DEDUPED]");
    } else {
      dedupedFragments.push(sorted[i]);
      seenIds.add(sorted[i].id);
    }
  }
  return dedupedFragments;
}

let dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(sorted) {
  let filledFragments = [];

  let lowestId = sorted[0].id;
  let highestId = sorted[sorted.length - 1].id;

  for (let i = lowestId; i <= highestId; i++) {
    let fragment = sorted.find(function (fragment) {
      return fragment.id === i;
    });
    if (fragment === undefined) {
      filledFragments.push({
        id: i,
        text: "[...]",
      });

      console.log(`[FILLED] ${i}`);
    } else {
      filledFragments.push(fragment);
    }
  }

  return filledFragments;
}
let filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(sorted) {
  return sorted
    .map(function (fragment) {
      return fragment.text;
    })
    .join("\n");
}

console.log(assembleStory(filledFragments));
