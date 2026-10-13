function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  for (let candidate = 1; ; candidate++) {
    if (numbers.every((number) => candidate % number === 0)) {
      return candidate;
    }
  }
}
console.log(smallestCommons([1, 3]));
