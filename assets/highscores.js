function showHighscores() {
    // get scores from local storage
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    for (var i = 0; i < highscores.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.textContent = highscores[i].initials + " - " + highscores[i].score;
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