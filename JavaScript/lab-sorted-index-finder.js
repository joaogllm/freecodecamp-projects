function getIndexToIns(arr, target) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex((number) => number >= target);
  if (index === -1) {
    return arr.length;
  }
  return index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 60));
