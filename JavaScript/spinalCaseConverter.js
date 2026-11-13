function spinalCase(word) {
  const normalizedWord = word
    .replace(/[\s_]/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
  return normalizedWord;
}

console.log(spinalCase("Teletubbies say Eh-oh"));
