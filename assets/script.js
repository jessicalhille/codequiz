var countdown = 75;
var currentQuestionNumber = 0;

var timerEl = document.getElementById("countdown");
var questionsEl = document.getElementById(".question");
var optionsEl = document.getElementById("options");
var startBtn = document.getElementById("start");

function startQuiz() {
    // start timer
    timerId = setInterval(function(){
        clockCountdown();
    }, 1000);
    // show the time
    timerEl.textContent = countdown;

    getQuestion();
}

function clockCountdown() {
    countdown--;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        quizEnd();
    }
}

// list of all questions and answers
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "CSS is an acronym of",
        options: ["Cascading Style Sheets", "Codename Style Sheets", "Cascaded Starter Sheets", "Cascading Style Staircase"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
]

function getQuestion() {
    var currentQuestion = questions[currentQuestionNumber];
    questionsEl = currentQuestion.question;
    for(var i = 0; i < currentQuestion.options.length; i++) {
        var optionButton = document.createElement("button");
        optionButton.textContent = currentQuestion.options[i];
        optionsEl.appendChild(optionButton);
    }

    optionsEl.children[0].addEventListener("click", function(event) {
        optionClick(optionsEl.children[0]);
    });
    optionsEl.children[1].addEventListener("click", function(event) {
        optionClick(optionsEl.children[1]);
    });
    optionsEl.children[2].addEventListener("click", function(event) {
        optionClick(optionsEl.children[2]);
    });
    optionsEl.children[3].addEventListener("click", function(event) {
        optionClick(optionsEl.children[3]);
    });
}

function optionClick(answerSelection) {
    if (answerSelection.textContent !=questions[currentQuestionNumber].answer) {
        // penalty
        countdown -= 10;
    };

    // bring up next question
    currentQuestionNumber++;

    if (currentQuestionNumber === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    };
}

// user clicks button to start the quiz
startBtn.onclick = startQuiz;
