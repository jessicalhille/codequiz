var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Time is up!';
            clearInterval(timeInterval);
            displayMessage();
        };
    }, 1000);
}

countdown();