"use strict"

const bg = document.getElementById("bg");

var date_time = new Date();
var time_input = date_time.toString().split(" ")[4];


if (time_input >= '00:00:00' && time_input <= '11:59:59') {
    bg.className = 'day';
}

else if (time_input >= '15:00:00' && time_input <= '17:59:59') {
    bg.className = 'afternoon';
}

else {
    bg.className = 'night';

}