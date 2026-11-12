const textArea = document.querySelector("#text-input");
const charCountP = document.querySelector("#char-count");
textArea.addEventListener("input", () => {
  if (textArea.value.length > 50) {
    textArea.value = textArea.value.slice(0, 50);
  }
  charCountP.classList.toggle("letterLimit", textArea.value.length === 50);
  charCountP.textContent = `Character Count: ${textArea.value.length}/50`;
});
