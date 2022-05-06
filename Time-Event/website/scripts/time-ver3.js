"use strict"

//Variables
const timeChange = document.getElementById("time");
const dayButton = document.getElementById("Day");
const nightButton = document.getElementById("Night");
const bg = document.getElementById("bg")

//Prevents Default
timeChange.addEventListener('submit', (e)=> e.preventDefault());

//Background Change - Day
dayButton.addEventListener('click', (e)=> bg.className = 'day');

//Background Change - Night
nightButton.addEventListener('click', (e)=> bg.className = 'night');