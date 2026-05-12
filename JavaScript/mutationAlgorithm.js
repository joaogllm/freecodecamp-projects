function mutation(array) {
  const firstWord = array[0].toLowerCase();
  const secondWord = array[1].toLowerCase();
  for (let i = 0; i < secondWord.length; i++) {
    if (!firstWord.includes(secondWord[i])) {
      return false;
    }
  }
  return true;
}
console.log(mutation(["hello", "Hello"]));
