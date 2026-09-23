function sumFibs(num) {
  let previousNum = 0;
  let currentNum = 1;
  let nextNum = previousNum + currentNum;
  let sum = 0;
  while (currentNum <= num) {
    if (currentNum % 2 !== 0) {
      sum += currentNum;
    }
    previousNum = currentNum;
    currentNum = nextNum;
    nextNum = previousNum + currentNum;
  }
  return sum;
}
console.log(sumFibs(4));
