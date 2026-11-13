const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";
  flags +=
    (globalFlag.checked ? "g" : "") + (caseInsensitiveFlag.checked ? "i" : "");
  return flags;
}

testButton.addEventListener("click", () => {
  const myRegex = new RegExp(regexPattern.value, getFlags());
  const text = stringToTest.textContent;
  const matches = text.match(myRegex);

  if (matches === null) {
    testResult.textContent = "no match";
    stringToTest.textContent = text; // clear old highlights
    return;
  }

  testResult.textContent = matches.join(", ");
  stringToTest.innerHTML = text.replace(
    myRegex,
    (match) => `<span class="highlight">${match}</span>`,
  );
});
