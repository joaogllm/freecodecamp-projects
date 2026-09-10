function titleCase(sentence) {
  let result = [];
  let wordsArray = sentence.toLowerCase().split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    result.push(wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1));
  }
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
