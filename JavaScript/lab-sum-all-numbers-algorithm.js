function sumAll(numbers) {
  let smaller = Math.min(numbers[0], numbers[1]);
  let larger = Math.max(numbers[0], numbers[1]);
  let sumAccumulator = 0;
  for (let i = smaller; i <= larger; i++) {
    sumAccumulator += i;
  }
  return sumAccumulator;
}

console.log(sumAll([10, 5]));
