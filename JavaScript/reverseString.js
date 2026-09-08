function reverseString(string) {
  let reversedWord = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord += string[i];
  }

  return reversedWord;
}

console.log(reverseString("hello"));
