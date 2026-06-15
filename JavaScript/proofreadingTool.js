function isPalindrome(word) {
  let normalizedWord = word.toLowerCase();
  let reversedWord = normalizedWord.split("").reverse().join("");
  return normalizedWord === reversedWord;
}

function findPalindromeBreaks(words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }
  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  const result = [];
  const seen = {};
  if (phraseLength >= words.length) {
    return [];
  }
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (seen[phrase] === undefined) {
      seen[phrase] = i;
    } else {
      if (!result.includes(seen[phrase])) {
        result.push(seen[phrase]);
      }
      result.push(i);
    }
  }
  return result;
}
function analyzeTexts(texts, phraseLength) {
  const result = [];
  if (texts.length === 0) {
    return [];
  }
  for (let element of texts) {
    const objectText = {};
    objectText.repeatedPhrases = findRepeatedPhrases(element, phraseLength);
    objectText.palindromeBreaks = findPalindromeBreaks(element);
    result.push(objectText);
  }
  return result;
}
