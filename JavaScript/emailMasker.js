let email = "freecodecamp@example.com";
const maskEmail = (email) => {
  let atIndex = email.indexOf("@");
  let firstLetter = email.slice(0, 1);
  let lastLetterAndDomain = email.slice(atIndex - 1);
  let hiddenPart = "*".repeat(atIndex - 2);
  return firstLetter + hiddenPart + lastLetterAndDomain;
};
console.log(maskEmail(email));
