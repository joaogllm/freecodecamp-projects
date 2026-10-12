function destroyer(arr, ...num) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
