const timerElement = document.getElementById('time-left');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const choicesList = document.getElementById('choices');
const scoreDisplay = document.getElementById('score');
const initialsInput = document.getElementById('initials');
const submitBtn = document.getElementById('submit-btn');
const choiceSelected = document.getElementById('choices');

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 75;

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
  }
];

startBtn.addEventListener('click', startQuiz);
choicesList.addEventListener('click', handleChoiceSelection);
submitBtn.addEventListener('click', saveScore);

function startQuiz() {
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('quiz-screen').classList.remove('hide');
  startTimer();
  loadQuestion();
}

function startTimer() {
  timerElement.textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  choicesList.innerHTML = '';
  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const feedback = document.createElement('span'); // Add this line
    feedback.classList.add('feedback'); // Add this line
    button.textContent = choice;
    li.appendChild(button);
    li.appendChild(feedback); // Add this line
    choicesList.appendChild(li);
    button.addEventListener('click', function () {
      userSelection(index);
    });
  });
}


function handleChoiceSelection(event) {
  if (event.target.matches('li')) {
    const selectedChoiceIndex = parseInt(event.target.getAttribute('data-index'));
    console.log(selectedChoiceIndex)
  }
}

function userSelection(selectedChoiceIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const choices = choicesList.querySelectorAll('li');

  choices.forEach((choice, index) => {
    const feedback = choice.querySelector('.feedback');

    if (index === selectedChoiceIndex) {
      if (selectedChoiceIndex === currentQuestion.answer) {
        feedback.textContent = 'Correct';
      } else {
        feedback.textContent = 'Incorrect';
      }
    } else {
      feedback.textContent = '';
    }
  });

  if (selectedChoiceIndex === currentQuestion.answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}


function saveScore() {
  
}

function createHighScoreButton() {
  const button = document.createElement('button');
  button.textContent = 'View High Scores';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.left = '10px';
  document.body.appendChild(button);
  button.addEventListener('click', function () {
    
    window.location.href = './assets/newhighscore.html';

  });
}

createHighScoreButton();

//test push for changes to user selection function
