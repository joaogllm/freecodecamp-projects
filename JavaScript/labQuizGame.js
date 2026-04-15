const questions = [
  {
    category: "JavaScript",
    question: "What does '===' mean in JavaScript?",
    choices: [
      "Equal value only",
      "Equal value and type",
      "Assignment operator",
    ],
    answer: "Equal value and type",
  },
  {
    category: "General Knowledge",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Beijing", "Tokyo"],
    answer: "Tokyo",
  },
  {
    category: "Math",
    question: "What is 7 × 8?",
    choices: ["54", "56", "64"],
    answer: "56",
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "Programming",
    question: "Which method converts a JSON string into a JavaScript object?",
    choices: ["JSON.stringify()", "JSON.parse()", "JSON.convert()"],
    answer: "JSON.parse()",
  },
];

const getRandomQuestion = (questions) => {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const getRandomComputerChoice = (choices) => {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getResults = (question, computerChoice) => {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);

const result = getResults(question, computerChoice);
console.log(result);
