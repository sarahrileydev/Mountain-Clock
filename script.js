var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var mountainTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isMountainTime = false;
var mountainTimeButton = document. getElementById("mountainTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var updateClock = function () {

    var message = document.getElementById("timeEvent");
    var messageText;
    var mountainImage = document.getElementById("mountainImage");
    var image = "img/earth-608366-unsplash.jpg";

    if (time == mountainTime) {
        image = "img/cam-adams-39417-unsplash.jpg";
        messageText = "You don't really conquer \na mountain,you conquer \nyourself. ~James Whittaker";
    } else if (time == napTime) {
        image = "img/kate-joie-542341-unsplash.jpg";
        messageText = "Take a nap. Then conquer \nthe world. ~Earlene Grey";
    } else if (time == lunchTime) {
        image = "img/teddy-kelley-76880-unsplash.jpg";
        messageText = "The best of all sauces \nis hunger. ~Edward Abbey";
    } else if (time == wakeupTime) {
        image = "img/sebastian-unrau-47679-unsplash.jpg";
        messageText = "The mountains are \n calling... ~John Muir";
    } else if (time < noon) {
        messageText = "Time to get moving!";
    } else if (time > evening) {
        messageText = "Early to bed. Early to rise.";
    } else {
        messageText = "Burning daylight!";
    }
    message.innerText = messageText;
    mountainImage.src = image;

    var showCurrentTime = function () {
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

        clock.innerText = clockTime;
    };
    showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

function summitEvent() {
    if (isMountainTime === false) {
        isMountainTime = true;
        time = mountainTime;
        mountainTimeButton.innerText = "Summit";
        mountainTimeButton.style.backgroundColor = "#222";
    } else {
        isMountainTime = false;
        time = new Date().getHours();
        mountainTimeButton.innerText = "Head Back";
        mountainTimeButton.style.backgroundColor = "#0a8dab";
    };
};
mountainTimeButton.addEventListener('click', summitEvent);

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
 
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
 
var napEvent = function() {
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
