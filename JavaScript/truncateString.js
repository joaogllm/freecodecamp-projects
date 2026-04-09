const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else if (str.length <= num) {
    return str;
  }
};
let result = truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length,
);
console.log(result);
