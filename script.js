
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let milliSecond = document.getElementById("split-second");

let trigger = 0;

let minuteCount = 0;
let secondCount = 0;
let milliSecondCount = 0;
let btnClick = false;

let myInterval;

function start () {
    //prevent button
    if (trigger == 0) {
        btnClick = true;
        trigger = 1;
    }
    else if (trigger != 0) {
        btnClick = false;
    }

    if (btnClick) {
        myInterval = setInterval(function () {
            // if the value is less than 10, it adds a zero to its left, otherwise it just returns the value.
            milliSecondCount < 10 ? milliSecond.value = "0" + milliSecondCount : milliSecond.value = milliSecondCount;
            secondCount < 10 ? second.value = "0" + secondCount : second.value = secondCount;
            minuteCount < 10 ? minute.value = "0" + minuteCount : minute.value = minuteCount;
            milliSecondCount++;

            if (milliSecondCount == 100) {
                milliSecondCount = 0;
                secondCount++;
            }

            if (secondCount == 60) {
                secondCount = 0;
                minuteCount++;
            }
        }, 10);
    }
   
}

function stop () {
    clearInterval(myInterval);
    trigger = 0;
}

function reset () {
    clearInterval(myInterval);
    minuteCount = 0;
    secondCount = 0;
    milliSecondCount = 0;
    
    // Sets the displayed value to zero when the button is clicked 
    minute.value = "00";
    second.value = "00";
    milliSecond.value = "00";
    btnClick = true;
}


