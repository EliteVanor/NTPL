var questions = [
  "An adjective to descibe people of Physics class (13 characters)",
  "An adjective to descibe people of Literature class (11 characters)",
  "An adjective to descibe people of Mathematics class (9 characters)",
  "An adjective to descibe people of Informatics class (10 characters)",
  "An adjective to descibe people of English class (13 characters)",
  "An adjective to descibe people of Chinese class (11 characters)",
  "An adjective to descibe people of French class (8 characters)",
  "An adjective to descibe people of Russian class (9 characters)",
  "An adjective to descibe people of Geography class (7 characters)",
  "An adjective to descibe people of History class (8 characters)",
  "An adjective to descibe people of Biology class (6 characters)",
  "An adjective to descibe people of Chemistry class (9 characters)",
  "An adjective to descibe people of Song Bang class (10 characters)"
];

var answers = [
  "Extravagant",
  "Magnificent",
  "Ingenious",
  "Innovative",
  "Comprehensive",
  "Dexterous",
  "Romantic",
  "Proactive",
  "Wealthy",
  "Graceful",
  "Gentle",
  "Scholarly",
  "Boisterous"
];


// Get a reference to the HTML elements
var questionButton = document.getElementById("question-button");
var questionElement = document.getElementById("question");
var answerInput = document.getElementById("answer-input");
var submitButton = document.getElementById("submit-button");
var feedbackElement = document.getElementById("feedback");
var hintButton = document.getElementById("hint-button");
var saveButton = document.getElementById("save-button");
var savedAnswerElement = document.getElementById("saved-answer");
var hintCount = 0;
var points = 0;
var isPointIncreased = false;


// Generate a random question
function getRandomQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Display the question
function displayQuestion() {
  var question = getRandomQuestion();
  document.getElementById("question").innerHTML = question;
  hintCount = 0; // Reset the hint count when the question is reset
  hintButton.style.display = "none"; // Hide the hint button initially
  saveButton.style.display = "none";
  submitButton.style.display = "inline";
  savedAnswerElement.innerHTML = "";
  isPointIncreased = false;
  feedbackElement.innerHTML = " Your current points: " + points;
}

// Display a hint
function displayHint() {
  var currentQuestion = document.getElementById("question").innerHTML;
  var questionIndex = questions.indexOf(currentQuestion);
  if (questionIndex !== -1) {
      if (hintCount < 3) {
          var hint = "Hint " + (hintCount + 1) + ": " + getPartialHint(answers[questionIndex], hintCount + 1);
          if (hintCount === 2) hint = "Last hint: " + getPartialHint(answers[questionIndex], hintCount + 1);
          feedbackElement.innerHTML = hint;
          hintCount++;
      } else {
          feedbackElement.innerHTML = "The answer is " + answers[questionIndex] + ".";
          hintButton.style.display = "none";
          saveButton.style.display = "inline";
          submitButton.style.display = "none";
          isPointIncreased = true;
      }
  }
}

// Get partial hint
function getPartialHint(answer, count) {
  var partialHint = "";
  for (var i = 0; i < count; i++) {
      partialHint += answer.charAt(i);
  }
  return partialHint;
}

// Check the answer
function checkAnswer(answer) {  
  var correctAnswer = answers[questions.indexOf(questionElement.innerHTML, 0)];
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackElement.innerHTML = "Correct!";
    hintButton.style.display = "none";
    saveButton.style.display = "inline";
    submitButton.style.display = "none";
    if (isPointIncreased === false) {
      points++;
      isPointIncreased = true;
    }
  } else {
    feedbackElement.innerHTML = "Incorrect. Try again or use the hint.";
    hintButton.style.display = "inline";
    saveButton.style.display = "none";
  }
  feedbackElement.innerHTML += " Your current points: " + points; // Display current points
}

// Submit the answer
submitButton.addEventListener("click", function () {
  var answer = answerInput.value;
  checkAnswer(answer);
});

var savedAnswers = {}; // Initialize an object to store saved answers for each question

// Save the answer
function saveAnswer() {
    var currentQuestion = document.getElementById("question").innerHTML;
    var questionIndex = questions.indexOf(currentQuestion);
    if (questionIndex !== -1) {
        var correctAnswer = answers[questionIndex];
        savedAnswers[currentQuestion] = correctAnswer;
        savedAnswerElement.innerHTML = "Saved Answer for '" + currentQuestion + "': " + correctAnswer;
    } else {
        savedAnswerElement.innerHTML = "No answer saved. Generate a question first.";
    }
}