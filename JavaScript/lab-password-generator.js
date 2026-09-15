function generatePassword(pswLength) {
  let randomPassword = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  for (let i = 0; i < pswLength; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomPassword;
}

let password = generatePassword(10);
console.log(`Generated password: ${password}`);
