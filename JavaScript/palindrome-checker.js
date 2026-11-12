const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  if (textInput.value.trim() === "") {
    alert("Please input a value");
    return;
  }
  const normalizedInput = textInput.value
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  if (normalizedInput === "") {
    alert("Please input a value");
    return;
  }
  const reversedInput = normalizedInput.split("").reverse().join("");

  if (normalizedInput === reversedInput) {
    resultOutput.textContent = textInput.value + " is a palindrome";
  } else {
    resultOutput.textContent = textInput.value + " is not a palindrome";
  }
});
