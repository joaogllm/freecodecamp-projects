function diffArray(arr1, arr2) {
  const result1 = arr1.filter((item) => !arr2.includes(item));
  const result2 = result1.concat(arr2.filter((item) => !arr1.includes(item)));
  return result2;
}
const arr1 = [
  "diorite",
  "andesite",
  "grass",
  "dirt",
  "pink wool",
  "dead shrub",
];
const arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
console.log(diffArray(arr1, arr2));
