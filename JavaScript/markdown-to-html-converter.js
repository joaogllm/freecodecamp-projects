const mkdownText = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  const text = mkdownText.value;
  let result = text.replace(
    /^(#{1,3})\s+(.+?)$/gm,
    (match, hashes, headingText) => {
      const level = hashes.length;
      return `<h${level}>${headingText}</h${level}>`;
    },
  );
  result = result.replace(/(\*\*|__)(.+)\1/g, (match, delimiter, content) => {
    return `<strong>${content}</strong>`;
  });
  return result;
}
mkdownText.addEventListener("input", () => {
  const convertedText = convertMarkdown();
  htmlOutput.textContent = convertedText;
  preview.innerHTML = convertedText;
});
