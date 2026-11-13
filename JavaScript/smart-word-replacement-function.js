function myReplace(sentence, oldW, newW) {
  const result =
    oldW[0] === oldW[0].toUpperCase()
      ? newW[0].toUpperCase() + newW.slice(1)
      : newW[0].toLowerCase() + newW.slice(1);
  return sentence.replace(oldW, result);
}
console.log(myReplace("Let us go to the store", "store", "dog"));
