let hourHeading = document.getElementById("hourHeading");
let minHeading = document.getElementById("minHeading");
let secHeading = document.getElementById("secHeading");
let msecHeading = document.getElementById("msecHeading");
let startBtn = document.getElementById("startBtn");


let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let interval;

function updateDisplay() {
    hourHeading.innerText = hour.toString().padStart(2, '0');
    minHeading.innerText = min.toString().padStart(2, '0');
    secHeading.innerText = sec.toString().padStart(2, '0');
    msecHeading.innerText = msec.toString().padStart(2, '0');
}

function setTime() {
    hour = parseInt(document.getElementById("inputHour").value) || 0;
    min = parseInt(document.getElementById("inputMin").value) || 0;
    sec = parseInt(document.getElementById("inptSec").value) || 0;
    msec = 0;
    updateDisplay();
}

function timer() {
    if (hour === 0 && min === 0 && sec === 0 && msec === 0) {
        clearInterval(interval);
        alert("⏰ Time's up!");
        startBtn.disabled = false;
        return;
    }

    if (msec === 0) {
        if (sec === 0) {
            if (min === 0) {
                if (hour !== 0) {
                    hour--;
                    min = 59;
                    sec = 59;
                    msec = 99;
                }
            } else {
                min--;
                sec = 59;
                msec = 99;
            }

        } else {
            sec--;
            msec = 99;
        }
    } else {
        msec--;
    }
    updateDisplay();
}

function startTimer() {
    clearInterval(interval);
    interval = setInterval(timer, 10)
    startBtn.disabled = true;
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    updateDisplay();
    startBtn.disabled = false;
}