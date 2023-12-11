function countdownTimer(durationInSeconds) {
    const timerDisplay = document.getElementById('timer');

    function updateTimerDisplay() {
        const days = Math.floor(durationInSeconds / (24 * 60 * 60));
        const hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
        const seconds = durationInSeconds % 60;

        timerDisplay.textContent = `Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function countDown() {
        if (durationInSeconds > 0) {
            durationInSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
        }
    }
    // Initial display
    updateTimerDisplay();

    // Start the countdown
    const timerInterval = setInterval(countDown, 1000);
}

// countdown duration in seconds
const duration = 1 * 24 * 60 * 60;

// Start the countdown timer
countdownTimer(duration);



//rsvp form submit button
document.getElementById('rsvpForm').addEventListener('submit', function (event) {
    event.preventDefault();

    alert('RSVP Submitted!\nName: ' + this.name.value + '\nEmail: ' + this.email.value + '\nAttendance: ' + this.attend.value + '\nMessage: ' + this.message.value);
});

//contact form submit button
document.getElementById('cocntactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    alert('RSVP Submitted!\nName: ' + this.name.value + '\nEmail: ' + this.email.value + '\nAttendance: ' + this.attend.value + '\nMessage: ' + this.message.value);
});

