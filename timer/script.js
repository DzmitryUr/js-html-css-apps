const timeEmelent = document.getElementById("time");

const INTERVAL = 1000;
let intervalId = null;
let time = 0;
let isActive = false;

function showTime() {
  timeEmelent.textContent = formatTime(time);
}

function formatTime(initialTime) {
  return new Date(initialTime).toISOString().slice(11, 19);
}

function start() {
  if (isActive) return;

  isActive = true;
  intervalId = setInterval(() => {
    time += INTERVAL;
    showTime();
  }, INTERVAL);
}

function stop() {
  if (isActive) {
    isActive = false;
    clearInterval(intervalId);
  }
}

function reset() {
  time = 0;
  stop();
  showTime();
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
