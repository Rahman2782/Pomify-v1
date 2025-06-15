$("h1").css("color", "white");
$("#timer").css("color", "white");

const start = $("#start");
const pause = $("#pause");
const reset = $("#reset");
var timer = $("#timer");

var isRuuning = false;
var timeLeft = 1500; //25 x 60
var interval; //current time, will be constantly updated

const updateTimer = () => {
    const mins = Math.floor(timeLeft / 60); //getting mins on the left
    const seconds = timeLeft % 60;

    $("#timer").text(`${mins.toString().padStart(2,"0")}
    :${seconds.toString().padStart(2,"0")}`); 
    //padStart only works with strings (2,0) => 2 is the amount of numbers we want to display
    //if minutes is reduced to < 10 then "0" is hown in the first slot
    //convert mins to string to make it work
}

const startTimer = () => {
    start.css("background-color", "greenyellow");
    isRuuning = true;
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();


        if(timeLeft === 0) {
            clearInterval(interval)
            displayMessage("Time's up");
            updateTimer();
        }
    }, 1000) //takes 2 args, 1) a function 2) the time
}

const pauseTimer = () => {
    if(isRuuning) {
        clearInterval(interval);
        isRuuning = false;
        pause.addClass("paused");
        pause.text("Resume");
        start.css("background-color", "white");
    }
    else {
        pause.removeClass("paused");
        pause.text("Pause");
        startTimer()
    }
};



const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.on("click", startTimer);
pause.on("click", pauseTimer);
reset.on("click", resetTimer);
