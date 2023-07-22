let defusing = false;
let defuseInterval;
let stopInterval;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');

function startDefuse() {
  let startTime = Date.now();
  defusing = true;
  startButton.innerText = 'Defusing...';

  defuseInterval = setInterval(() => {
    let currentTime = Date.now();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);

    if (elapsedTime >= 20) {
      clearInterval(defuseInterval);
      defusing = false;
      statusDisplay.innerText = 'Bomb has been Defused!';
      startButton.innerText = 'Hold to Start Defuse (5 sec)';
    } else {
      let remainingTime = 20 - elapsedTime;
      let minutes = Math.floor(remainingTime / 60);
      let seconds = remainingTime % 60;
      timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function stopDefuse() {
  if (defusing) {
    clearInterval(defuseInterval);
    defusing = false;
    statusDisplay.innerText = 'Defuser Stopped!';
    timerDisplay.innerText = '00:00';
    startButton.innerText = 'Hold to Start Defuse (5 sec)';
  }
}

startButton.addEventListener('mousedown', () => {
  stopInterval = setTimeout(startDefuse, 5000);
});

startButton.addEventListener('touchstart', () => {
  stopInterval = setTimeout(startDefuse, 5000);
});

startButton.addEventListener('mouseup', () => {
  clearTimeout(stopInterval);
});

startButton.addEventListener('touchend', () => {
  clearTimeout(stopInterval);
});

stopButton.addEventListener('mousedown', () => {
  stopDefuse();
});

stopButton.addEventListener('touchstart', () => {
  stopDefuse();
});

stopButton.addEventListener('mouseup', () => {
  clearTimeout(stopInterval);
});

stopButton.addEventListener('touchend', () => {
  clearTimeout(stopInterval);
});
