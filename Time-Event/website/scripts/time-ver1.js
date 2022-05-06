"use strict"

const time_change = document.getElementById("time");
const submit = document.getElementById("submit")

//Prevents Default
time_change.addEventListener('submit', (e)=>{
    e.preventDefault();
})

//Submit Button
submit.addEventListener('click', (e)=>{
    const time_input = document.getElementById("time-input").value;
    const bg = document.getElementById("bg");

    if (time_input >= '00:00' && time_input <= '14:59') {
        bg.className = 'day';
    }
 
    else if (time_input >= '15:00' && time_input <= '17:59') {
        bg.className = 'afternoon';
    }

    else {
        bg.className = 'night';
    }
})