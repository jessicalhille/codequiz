var countdown = 75;
var questionNumber = 0;
var timerId;

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
var questionsList = [
    {
        question: "Commonly used data types do NOT include:",
        options: {
            a: "strings",
            b: "booleans",
            c: "alerts", 
            d: "numbers"
        }, 
        correctAnswer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        options: {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        options: {
            a: "numbers and strings", 
            b: "other arrays", 
            c: "booleans", 
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "CSS is an acronym of:",
        options: {
            a: "Cascading Style Sheets", 
            b: "Codename Style Sheets", 
            c: "Cascaded Starter Sheets", 
            d: "Cascading Style Staircase"
        },
        correctAnswer: "a"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: {
            a: "JavaScript",
            b: "console.log", 
            c: "terminal/bash", 
            d: "for loops"
        },
        correctAnswer: "b"
    },
]

function getQuestion() {

    for (var i = 0; i < questionsList.length; i++) {
        console.log(questionsList);
    };
    document.getElementById("question-text").innerHTML = questionsList;
}

function quizEnd() {
    // stop timer
    clearInterval(timerId);
    timerEl.textContent = countdown;

    // show the ending screen
    var endScreenEl = document.getElementById(".end-screen");
    
    // show the score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = countdown;
}

// user clicks button to start the quiz
startBtn.onclick = startQuiz;
