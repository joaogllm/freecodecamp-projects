function fearNotLetter(string) {
  for (let i = 0; i < string.length - 1; i++) {
    let currentLetterCode = string[i].charCodeAt(0);
    let nextLetterCode = string[i + 1].charCodeAt(0);
    if (nextLetterCode - currentLetterCode > 1) {
      return String.fromCharCode(currentLetterCode + 1);
    }
  }
  return undefined;
}
