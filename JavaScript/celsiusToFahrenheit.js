const convertCtoF = (temperatureC) => {
  let fahrenheit = temperatureC * (9 / 5) + 32;
  return fahrenheit;
};
console.log(convertCtoF(30));
