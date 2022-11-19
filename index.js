var readLine = require("readline-sync");
console.log("How well do you know me?");

var score = 0;
var qusetionAndAnswer = [
  {
    question: "Where do I live? ",
    answer: "Satna",
    options: ["Delhi", "Jaipur", "Satna", "Kanpur"]
  },
  {
    question: "What is my favorite sport? ",
    answer: "Cricket",
    options: ["Cricket", "Football", "Tennis", "Golf"]
  },
  {
    question: "What is my favorite colour? ",
    answer: "Blue",
    options: ["Black", "White", "Blue", "Green"]
  },
  {
    question: "Where do I want to go outside India? ",
    answer: "Switzerland",
    options: ["London", "Switzerland", "Canada", "Maldiv"]
  },
  {
    question: "Which is my favorite car brand? ",
    answer: "BMW",
    options: ["Ferrari", "Hyundai", "Nissan", "BMW"]
  }
]

function welcome() {
  var userName = readLine.question("What is your name? ");
  console.log("Welcome " + userName + " , Do you know me...let's play a quiz");
  console.log("\n");
}



function quizToKnowMe(question, answer, options) {
  console.log("Q." + question);
  for (var i = 0; i < options.length; i++) {
    console.log((i + 1) + ". " + options[i]);
  }

  var userAnswer = readLine.question("Your answer: ");
  if (options[userAnswer - 1].toUpperCase() === answer.toUpperCase()) {
    console.log("Right");
    score++;
  } else {
    console.log("Wrong");
  }
  console.log("\n");
}
function playQuiz() {
  for (var i = 0; i < qusetionAndAnswer.length; i++) {
    var currentQuestion = qusetionAndAnswer[i];
    quizToKnowMe(currentQuestion.question,
      currentQuestion.answer,
      currentQuestion.options);
  }
}
function showScore() {
  console.log("Your score is " + score);
}

welcome();
playQuiz();
showScore();