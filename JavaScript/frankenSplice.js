function frankenSplice(arr1, arr2, index) {
  let shallowCopy = [...arr2];

  shallowCopy.splice(index, 0, ...arr1);

  return shallowCopy;
}
