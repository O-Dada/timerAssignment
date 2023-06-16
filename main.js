
// GET THE HTML ELEMENTS FOR JAVASCRIPT
const questionBody = document.getElementById("container");
const questions = document.getElementById("questions");
const choices = Array.from(document.querySelectorAll(".answer"));
const nextBtn = document.getElementById("next-btn");
const timer = document.querySelector('.timer');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionNum = document.getElementById("question-num");
const scorer = document.getElementById("scorer");
const scorerr = document.getElementById("scorerr");
const progress = document.querySelector(".progress-bar");
// const tst = document.querySelector(".tst");
// const submitButton = document.getElementById("submit");

// console.log(questionAll, questions, answerChoices);

let answerChoice = [a_text, b_text, c_text, d_text];
let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let score = 0;
let availableQuestions = [];

let frontendQuestions = [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: 0
    },
    {
      id: 2,
      question: "Which HTML tag is used to define an unordered list?",
      options: [
        "<list>",
        "<ul>",
        "<ol>",
        "<li>",
      ],
      answer: 1
    },
    {
      id: 3,
      question: "What is the correct way to include an external JavaScript file?",
      options: [
        "<script href='script.js'></script>",
        "<script link='script.js'></script>",
        "<script file='script.js'></script>",
        "<script src='script.js'></script>"
      ],
      answer: 3
    },
    {
      id: 4,
      question: "What is the purpose of the 'box-sizing' CSS property?",
      options: [
        "To control the sizing behavior of an element's box model.",
        "To specify the font family to be used for an element's text.",
        "To set the color of an element's border.",
        "To define the layout and positioning of elements on a web page."
      ],
      answer: 0
    },
    {
      id: 5,
      question: "Which CSS property is used to control the spacing between lines of text?",
      options: [
        "line-height",
        "letter-spacing",
        "word-spacing",
        "text-indent"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "What is the purpose of the 'git' command?",
      options: [
        "To manage and track changes in a software project.",
        "To create and modify HTML elements.",
        "To make asynchronous HTTP requests and handle responses.",
        "To define the transition effects for animations."
      ],
      answer: 0
    },
    {
      id: 7,
      question: "Which JavaScript function is used to add a new element to the end of an array?",
      options: [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "What is the purpose of the 'display' CSS property with a value of 'inline-block'?",
      options: [
        "To control the stacking order of positioned elements on the z-axis.",
        "To make an element inline-level but with block-level characteristics.",
        "To create a flexible and responsive layout using a grid system.",
        "To specify the size and dimensions of an element."
      ],
      answer: 1
    },
    {
      id: 9,
      question: "What is the purpose of the 'innerHTML' property in JavaScript?",
      options: [
        "To get or set the HTML content of an element.",
        "To select the first element that matches a specified CSS selector.",
        "To convert a value to a specific data type.",
        "To manipulate and traverse the Document Object Model (DOM) of an HTML document."
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Which CSS property is used to control the order of elements on the z-axis?",
      options: [
        "position",
        "display",
        "z-index",
        "float"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "What is the purpose of the 'map()' method in JavaScript arrays?",
      options: [
        "To create a new array by applying a function to each element of an existing array.",
        "To remove elements from an array that match a specified condition.",
        "To sort the elements of an array in ascending or descending order.",
        "To select the first element that matches a specified CSS selector."
      ],
      answer: 0
    },
    {
      id: 12,
      question: "Which JavaScript method is used to remove the last element from an array?",
      options: [
        "push()",
        "shift()",
        "unshift()",
        "pop()"
      ],
      answer: 3
    },
    {
      id: 13,
      question: "What is the purpose of the 'position' CSS property?",
      options: [
        "To control the spacing between lines of text.",
        "To control the positioning of an element on a web page.",
        "To specify the font family to be used for an element's text.",
        "To define the layout and positioning of elements on a web page."
      ],
      answer: 1
    },
    {
      id: 14,
      question: "What is the purpose of the 'Promise' object in JavaScript?",
      options: [
        "To represent the eventual completion or failure of an asynchronous operation and its resulting value.",
        "To specify the size and dimensions of an element.",
        "To validate the syntax of a JSON string.",
        "To compare two values for equality, regardless of their data types."
      ],
      answer: 0
    },
    {
      id: 15,
      question: "What is the purpose of the 'classList' property in JavaScript?",
      options: [
        "To round a number to the nearest integer.",
        "To manipulate the CSS classes of an element.",
        "To create strings that allow embedded expressions, such as variables or function calls.",
        "To make asynchronous HTTP requests and handle responses."
      ],
      answer: 2
    },
    {
      id: 16,
      question: "What is the purpose of the 'spread operator' in JavaScript?",
      options: [
        "To expand elements of an array or properties of an object into individual arguments or elements.",
        "To create and modify HTML elements.",
        "To handle errors that occur during the execution of JavaScript code.",
        "To specify the font family to be used for an element's text."
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Which CSS property is used to control the order of elements within a flex container?",
      options: [
        "flex",
        "align-items",
        "justify-content",
        "order"
      ],
      answer: 3
    },
    {
      id: 18,
      question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
      options: [
        "To attach an event handler function to an HTML element, listening for a specific event.",
        "To encode a URI component by replacing special characters with their UTF-8 encoding.",
        "To create and modify HTML elements.",
        "To schedule a function to be called before the next repaint of the web page, allowing for smoother animations."
      ],
      answer: 0
    },
    {
      id: 19,
      question: "What is the purpose of the 'async/await' syntax in JavaScript?",
      options: [
        "To write asynchronous code that looks like synchronous code, using Promises.",
        "To select all elements that match a specified CSS selector and return them as a NodeList.",
        "To control the spacing between lines of text.",
        "To manipulate and traverse the Document Object Model (DOM) of an HTML document."
      ],
      answer: 0
    },

      {
        id: 20,
        question: 'How do you write "Hello World" in an alert box using JavaScript?',
        choices: ['alert("Hello World");', 'prompt("Hello World");', 'console.log("Hello World");', 'document.write("Hello World");'],
        answerIndex: 0
      }
  ];

  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 5; 

  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...frontendQuestions];
    getNewQuestions();
  };

  getNewQuestions = () => {
    questionCounter++;
    questionNum.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questions.innerText = currentQuestion.question;

  a_text.innerText = currentQuestion.options[0];
  b_text.innerText = currentQuestion.options[1];
  c_text.innerText = currentQuestion.options[2];
  d_text.innerText = currentQuestion.options[3];

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;

  choices.forEach((choice) => {
    choice.checked = false;
  });
  
  };

startGame();

let timeLeft = 60; // Input Assessment Time


function startTimer() {
  const timerInterval = setInterval(() => {
    
    // For slider animation
    const width = (timeLeft / 60) *100;
    progress.style.width = `${width}%`;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    //When Time Up
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (questionCounter >= MAX_QUESTIONS) {
        const percentageScore = Math.round((score / (MAX_QUESTIONS * CORRECT_BONUS)) * 100);
        scorerr.innerText = `${percentageScore}%`;
        document.getElementById("timeUp").style.display = "block";      
      } else {
        handleTimeUp();
      }
    }

    timeLeft--;
  }, 1000);
}

function handleTimeUp() {
  // questionBody.style.display = "none";
  const percentageScore = Math.round((score / (MAX_QUESTIONS * CORRECT_BONUS)) * 100);
  scorerr.innerText = `${percentageScore}%`;
  document.getElementById("timeUp").style.display = "block";
}


  nextBtn.addEventListener("click", () => {
    if (acceptingAnswers) {
      const selectedChoice = choices.find((choice) => choice.checked);
      if (selectedChoice) {
          const selectedAnswer = choices.indexOf(selectedChoice);
          const isCorrect = selectedAnswer === currentQuestion.answer;
          
          if (isCorrect) {
            score += CORRECT_BONUS;
          }
       
        if (questionCounter >= MAX_QUESTIONS) {
          const percentageScore = Math.round((score / (MAX_QUESTIONS * CORRECT_BONUS)) * 100);
        scorer.innerText = `${percentageScore}%`;
          // All questions have been answered, replace the main section with congrats
          questionBody.style.display = "none";
          document.getElementById("congrats").style.display = "block";
          clearInterval(timerInterval);
        } else {
          getNewQuestions();
        }
      }
    }
  });

 window.addEventListener("load", startTimer);
