// DOM elements
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const choicesList = document.getElementById('choices');
const scoreDisplay = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const submitBtn = document.getElementById('submit-btn');

// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;

// Quiz questions
const questions = [
  {
    question: "Question 1: What is JavaScript?",
    choices: ["A programming language", "A markup language", "A database language", "A styling language"],
    answer: 0
  },
  // Add more questions...
];

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

// Function to load a question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  choicesList.innerHTML = '';

  // Create list items for each choice
  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.setAttribute('data-index', index);
    choicesList.appendChild(li);
  });
}

// Function to handle user choice selection
function handleChoiceSelection(event) {
  if (event.target.matches('li')) {
    const selectedChoiceIndex = parseInt(event.target.getAttribute('data-index

    test this js page by pusing a commit