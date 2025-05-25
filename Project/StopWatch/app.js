let minHeading = document.getElementById("minHeading");
let secHeading = document.getElementById("secHeading");
let msecHeading = document.getElementById("msecHeading");
let startBtn = document.getElementById("startBtn");

let min = 0;
let sec = 0;
let msec = 0;

function timer() {
    msec++;
    // console.log(msec);

    msecHeading.innerHTML = msec;

    if (msec === 100) {
        console.log("1 sec Complete")
        msec = 0;
        sec++
        secHeading.innerHTML = sec
    }

    if (sec > 59) {
        sec = 0;
        console.log("1 min complete");
        min++;
        minHeading.innerHTML = min
    }
}


let interval;

function startTimer() {
    interval = setInterval(timer, 10)
    startBtn.disabled = true
}

function stopTimer() {
    clearInterval(interval)
    startBtn.disabled = false
}

function resetTimer() {
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    msecHeading.innerHTML = 0;
    
   startBtn.disabled = false

}