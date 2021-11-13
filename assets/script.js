var countdown = 75;
var currentQuestionIndex = 0;
var timerId;

var timerEl = document.getElementById("countdown");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("question-options");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");
var initialsEl = document.getElementById("initials");

function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hidden");
    
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
var questionsList = [
    {
        question: "Commonly used data types do NOT include __________.",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "CSS is an acronym of __________.",
        options: ["Cascading Style Sheets", "Codename Style Sheets", "Cascaded Starter Sheets", "Cascading Style Staircase"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is __________.",
        options: ["JavaScript", "console.log", "terminal/bash", "for loops"],
        answer: "console.log"
    },
]

function getQuestion() {
    var currentQuestion = questionsList[currentQuestionIndex];
    questionsEl.children[0].textContent = currentQuestion.question;

    while (optionsEl.hasChildNodes()) {
        optionsEl.removeChild(optionsEl.lastChild);
    };

    for (var i = 0; i < currentQuestion.options.length; i++) {
        var optionsButton = document.createElement("button");
        optionsButton.textContent = currentQuestion.options[i];
        optionsEl.appendChild(optionsButton);
    };

    optionsEl.children[0].addEventListener("click", function(event) {
        buttonClick(optionsEl.children[0]);
    });
    optionsEl.children[1].addEventListener("click", function(event) {
        buttonClick(optionsEl.children[1]);
    });
    optionsEl.children[2].addEventListener("click", function(event) {
        buttonClick(optionsEl.children[2]);
    });
    optionsEl.children[3].addEventListener("click", function(event) {
        buttonClick(optionsEl.children[3]);
    });
}

function buttonClick(answerChoice) {
    if (answerChoice.textContent != questionsList[currentQuestionIndex].answer) {
        // penalize
        countdown -= 10;
        // give user feedback
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    };

    feedbackEl.setAttribute("class", "feedback");

    currentQuestionIndex++;

    if (currentQuestionIndex === questionsList.length) {
        quizEnd();
    } else {
        getQuestion();
    };
}

function quizEnd() {
    // stop timer
    clearInterval(timerId);
    timerEl.textContent = countdown;

    // hide question
    var questionsDone = document.getElementById("questions");
    questionsDone.setAttribute("class", "hidden");

    // hide feedback
    feedbackEl.setAttribute("class", "hidden");

    // show the ending screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class", "hidden");
    
    // show the score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = countdown;
}

function saveFinalScore() {
    // get user input
    var initials = initialsEl.value.toUpperCase();

    // notify user if input was empty
    if (initials === "") {
        alert("Initials cannot be blank!");
        return;
    } else if (initials.length > 3) {
        alert("Initials cannot be more than 3 letters.");
        return;
    };
}

// user clicks button to submit score
submitBtn.onclick = saveFinalScore;

// user clicks button to start the quiz
startBtn.onclick = startQuiz;
