const VOWELS = new Set("aeiou");

function translatePigLatin(word) {
  if (!word) return word;

  const lower = word.toLowerCase();

  if (VOWELS.has(lower[0])) {
    return word + "way";
  }

  const vowelIndex = [...lower].findIndex((ch) => VOWELS.has(ch));

  if (vowelIndex === -1) {
    return word + "ay";
  }

  return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
}
