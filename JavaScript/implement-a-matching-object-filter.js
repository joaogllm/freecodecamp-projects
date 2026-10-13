function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  return collection.filter((item) =>
    keys.every((key) => item[key] === source[key]),
  );
}
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 },
  ),
);
