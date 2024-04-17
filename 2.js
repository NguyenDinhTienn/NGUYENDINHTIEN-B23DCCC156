const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');

let countdown;

function startCountdown() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    let totalSeconds = minutes * 60 + seconds;

    countdown = setInterval(() => {
        totalSeconds--;

        const minutesRemaining = Math.floor(totalSeconds / 60);
        const secondsRemaining = totalSeconds % 60;

        timerDisplay.textContent = `${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;

        if (totalSeconds === 0) {
            clearInterval(countdown);
            timerDisplay.textContent = 'Time\'s up!';
            // Phát âm thanh báo
            const audio = new Audio('bt.mp3'); // Đường dẫn đến file âm thanh
            audio.play();
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdown);
    timerDisplay.textContent = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetCountdown);
