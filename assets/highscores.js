function showHighscores() {
    // get scores from local storage
    var highScores = JSON.parse(localStorage.getItem("highscores"));
    for (var i = 0; i < highScores.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.textContent = highScores[i].initials + " - " + highScores[i].score;
        document.getElementById("highscores").appendChild(scoreLi);
    };
}

function clearHighscores() {
    localStorage.clear();
    location.reload();
}

var clearButton = document.getElementById("clearscores");
clearButton.addEventListener("click", function() {
    clearHighscores();
})

showHighscores();