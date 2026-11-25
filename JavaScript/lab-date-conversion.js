const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(param) {
  const result = new Intl.DateTimeFormat("en-US").format(param);
  return `Formatted Date (MM/DD/YYYY): ${result}`;
}

function formatDateLong(dateobj) {
  let options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const result = new Intl.DateTimeFormat("en-US", options).format(dateobj);
  return `Formatted Date (Month Day, Year): ${result}`;
}
