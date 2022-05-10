const questions = [
  {
    text: "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both var and let", "none"],
    correctAnswer: "Both var and let",
  },
  {
    text: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>"],
    correctAnswer: "<script>",
  },
  {
    text: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    options: [
      " alertBox(“Hello DataFlair!”)",
      "alert(Hello DataFlair!)",
      " alert(“Hello DataFlair!”)",
    ],
    correctAnswer: " alert(“Hello DataFlair!”)",
  },
  {
    text: "Which of the following statements will throw an error?",
    options: [
      "  var fun = function bar( ){ }",
      "var fun = function bar{ }",
      "  function fun( ){ }",
    ],
    correctAnswer: "var fun = function bar{ }",
  },
  {
    text: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    options: ["  if(x = 2)", " if(x == 2)", " if(x 2)"],
    correctAnswer: "  if(x == 2)",
  },
];

let questionIndex = 0;
let timer = 10; /*10 * questions.length;*/

const startButton = document.getElementById("start-quiz-button");
const main = document.getElementById("main");
const timerSpan = document.getElementById("timer-span");
const formElement = document.getElementById("submit-score-button");

const startQuiz = () => {
  //Remove start quiz section
  const sectionStart = document.getElementById("start-quiz-id");
  sectionStart.remove();

  renderQuestion();
  setTimer();
  timerSpan.textContent = timer;
};

startButton.addEventListener("click", startQuiz);
