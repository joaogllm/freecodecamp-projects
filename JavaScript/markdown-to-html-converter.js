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
  // quote
  const quoteRegex = /^> ?(.+)$/gm;
  result = result.replace(quoteRegex, "<blockquote>$1</blockquote>");
  // image
  const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;
  result = result.replace(imageRegex, (match, alt, src, title) => {
    const titleAttr = title ? ` title="${title}"` : "";
    return `<img src="${src}" alt="${alt}"${titleAttr}>`;
  });
  //links
  const linksRegex = /\[([^\]]*)\]\(([^)\s]+)\)/g;
  result = result.replace(linksRegex, '<a href="$2">$1</a>');
  //strong
  const boldRegex = /(\*\*|__)(.+?)\1(?!\*|_)/g;
  result = result.replace(boldRegex, (match, delimiter, content) => {
    return `<strong>${content}</strong>`;
  });
  // italic
  const italicRegex = /(\*(?!\*)|_(?!_))(.+?)\1/g;
  result = result.replace(italicRegex, (match, delimiter, content) => {
    return `<em>${content}</em>`;
  });

  return result;
}

mkdownText.addEventListener("input", () => {
  const convertedText = convertMarkdown();

  htmlOutput.textContent = convertedText;

  preview.innerHTML = convertedText;
});
