function convertHTML(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (current === "&") {
      result += "&amp;";
    } else if (current === "<") {
      result += "&lt;";
    } else if (current === ">") {
      result += "&gt;";
    } else if (current === '"') {
      result += "&quot;";
    } else if (current === "'") {
      result += "&apos;";
    } else {
      result += current;
    }
  }
  return result;
}

console.log(convertHTML("<>"));
