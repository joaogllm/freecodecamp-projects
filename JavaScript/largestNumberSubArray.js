function largestOfAll(groupOfNumbers) {
  let largestNumbers = [];

  for (let i = 0; i < groupOfNumbers.length; i++) {
    let largest = groupOfNumbers[i][0];

    for (let j = 0; j < groupOfNumbers[i].length; j++) {
      if (groupOfNumbers[i][j] > largest) {
        largest = groupOfNumbers[i][j];
      }
    }

    largestNumbers.push(largest);
  }

  return largestNumbers;
}

console.log(
  largestOfAll([
    [4, 5, 1],
    [27, 6, 12],
    [39, 3, 20],
    [1001, 2, 3],
  ]),
);
