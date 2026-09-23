function pairElement(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (current === "A") {
      result.push(["A", "T"]);
    } else if (current === "T") {
      result.push(["T", "A"]);
    } else if (current === "C") {
      result.push(["C", "G"]);
    } else if (current === "G") {
      result.push(["G", "C"]);
    } else {
      console.log("Only DNA's base");
    }
  }
  return result;
}

console.log(pairElement("ATCGA"));
