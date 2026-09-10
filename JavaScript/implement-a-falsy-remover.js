function bouncer(arrFalsyElements) {
  let result = [];
  for (let i = 0; i < arrFalsyElements.length; i++) {
    if (arrFalsyElements[i]) {
      result.push(arrFalsyElements[i]);
    }
  }
  return result;
}
console.log(bouncer([null, NaN, 1, 2, undefined]));
