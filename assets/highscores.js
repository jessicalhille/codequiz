function showHighscores() {
    // get scores from local storage
    var highScores = JSON.parse(localStorage.getItem("highscores"));
    for (var i = 0; i < highScores.length; i++) {
        // li tag for each score
        var scoreLi = document.createElement("li");
        scoreLi.textContent = highScores[i].initials + " - " + highScores[i].score;
        document.getElementById("highscores").appendChild(scoreLi);
    };
}

function clearHighscores() {
    localStorage.clear();
    location.reload();
}

// link button to clear event
var clearButton = document.getElementById("clearscores");
clearButton.addEventListener("click", function() {
    clearHighscores();
})

showHighscores();