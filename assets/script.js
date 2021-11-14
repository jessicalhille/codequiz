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
    // hide start screen after quiz starts
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
    // get current question from array
    var currentQuestion = questionsList[currentQuestionIndex];
    questionsEl.children[0].textContent = currentQuestion.question;

    // erase old text
    while (optionsEl.hasChildNodes()) {
        optionsEl.removeChild(optionsEl.lastChild);
    };

    for (var i = 0; i < currentQuestion.options.length; i++) {
        // create buttons for each answer choice
        var optionsButton = document.createElement("button");
        optionsButton.textContent = currentQuestion.options[i];
        optionsEl.appendChild(optionsButton);
    };

    // create click listener for each answer choice
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
    // check to see if user clicked wrong answer
    if (answerChoice.textContent != questionsList[currentQuestionIndex].answer) {
        // penalize
        countdown -= 10;
        // give user feedback
        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    };

    feedbackEl.setAttribute("class", "feedback");

    // move on to next question after feedback
    currentQuestionIndex++;

    // check if there are more questions
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

function saveHighscore() {
    // get user input
    var initials = initialsEl.value;
    // make sure the user didn't leave it blank
    if (initials === "") {
        alert("Initials cannot be blank!");
        return;
    } else {
        var highscores;
        if (JSON.parse(localStorage.getItem("highscores")) !=null) {
            highscores = JSON.parse(window.localStorage.getItem("highscores"));
        } else {
            highscores = [];
        };
        // get the information for current user input
        var newScore = {
            initials: initials,
            score: countdown
        };
        highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
        // send user to the high scores page
        location.href = "highscores.html";
    };
}

// user clicks button to submit initials and score
submitBtn.onclick = saveHighscore;

// user clicks button to start the quiz
startBtn.onclick = startQuiz;
