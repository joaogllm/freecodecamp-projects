console.log("Hello! I'm your coding fun fact guide!");
let botName = "Robson";
let botLocation = "Brazil";
let favoriteLanguage = "Javascript";
console.log(`My name is ${botName} and I live on ${botLocation}.`);
console.log(`My favorite programming language is ${favoriteLanguage}.`);
let codingFact = `Despite the name, ${favoriteLanguage} is a completely different language from Java.`;
console.log(codingFact);
codingFact = `In ${favoriteLanguage}, NaN stands for (Not-a-Number), but when you check its type using the typeof operator, it returns (number).`;
console.log(codingFact);
codingFact = `Following from the previous point, in ${favoriteLanguage}, NaN does not even equal itself. If you run console.log(NaN === NaN), the result will be false.`;
console.log(codingFact);
console.log(
  `It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`,
);
