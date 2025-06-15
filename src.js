$("h1").css("color", "white");
$("#timer").css("color", "white");

const start = $("#start");
const pause = $("#pause");
const reset = $("#reset");
var timer = $("#timer");

var timeLeft = 1500; //25 x 60
var interval; //current time, will be constantly updated

const updateTimer = () => {
    const mins = Math.floor(timeLeft / 60); //getting mins on the left
    const seconds = timeLeft % 60;

    $("#timer").text(`${mins.toString().padStart(2,"0")}:${seconds}`); 
    //padStart only works with strings (2,0) => 2 is the amount of numbers we want to display
    //if minutes is reduced to < 10 then "0" is hown in the first slot
    //convert mins to string to make it work
}
