//*Method 1

/* let startTime = 0;
let elapsedTime = 0;
let timer = null;
const display = document.querySelector(".display");

function start() {
  timer = setInterval(stopwatch, 10);
  const date = Date.now();
  startTime = date - elapsedTime;
}

function stop() {
  clearInterval(timer);
  timer = elapsedTime - startTime;
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = "00:00:00:00";
}

function stopwatch() {
  const date = Date.now();
  elapsedTime = date - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let miliseconds = Math.floor(elapsedTime % 60 /10);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  miliseconds = miliseconds < 10 ? "0" + miliseconds : miliseconds;

  let timeString = `${hours}:${minutes}:${seconds}:${miliseconds}:`
  display.textContent = timeString;
}
 */

//* Method 2

let hours = 0, minutes = 0, seconds = 0;
const display = document.querySelector(".display");
let stopwatchInterval;

function start() {
  stopwatchInterval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    let timeString = `${hours}:${minutes}:${seconds}`;
    display.textContent = timeString;
  }, 1000);
}

function stop() {
  clearInterval(stopwatchInterval);
}

function reset() {
  clearInterval(stopwatchInterval);
  hours, minutes, seconds = 0;
  display.textContent = `00:00:00`;
}