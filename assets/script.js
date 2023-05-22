// DOM elements
const timerElement = document.getElementById('time-left');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const choicesList = document.getElementById('choices');
const scoreDisplay = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const submitBtn = document.getElementById('submit-btn');
const choiceSelected = document.getElementById('choices');

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 75;

// Quiz questions
const questions = [
  {
    question: "Question 1: What is JavaScript?",
    choices: ["A programming language", "A markup language", "A database language", "A styling language"],
    answer: 0
  },
  {
    question: "Question 1: What is JavaScript?",
    choices: ["A programming language", "A markup language", "A database language", "A styling language"],
    answer: 0
  },
  // I can add more questions here...//
];
//
// Event listeners
startBtn.addEventListener('click', startQuiz);
choicesList.addEventListener('click', handleChoiceSelection);
submitBtn.addEventListener('click', saveScore);

// Function to start the quiz
function startQuiz() {
  // Hide start screen, show quiz screen
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('quiz-screen').classList.remove('hide');

  // Start the timer
  startTimer();

  // Load the first question
  loadQuestion();
}

//create a function for the timer
function startTimer() {
  timerElement.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz(); //redirect page to a new highscore.html doc
    }
  }, 1000);
}

// Function to load a question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  choicesList.innerHTML = '';

  // Create list items for each choice
  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = choice;
    li.appendChild(button);
    choicesList.appendChild(li);

    button.addEventListener('click', function () {
      userSelection(index);
    });
  });
}

// Function to handle user choice selection
function handleChoiceSelection(event) {
  if (event.target.matches('li')) {
    const selectedChoiceIndex = parseInt(event.target.getAttribute('data-index'));
console.log(selectedChoiceIndex)
  }

}

function userSelection(selectedChoiceIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  // Check if the selected choice index matches the correct answer index
  if (selectedChoiceIndex === currentQuestion.answer) {
    // Correct answer
    score++; // Increase the score
    // You can add more actions here, such as displaying a message or updating the UI

  } else {
    // Incorrect answer
    // You can add actions here for an incorrect answer, such as decreasing the time left or displaying a message
  }

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(); // Load the next question
  } else {
    endQuiz(); // All questions have been answered, end the quiz
  }
}


//I need to:
// create a saveScore function
// add more questions under questions function as well as corrisponding IDs?
