// import functions and grab DOM elements
import {didUserWin, randomThrow} from './utils.js'

const playButton = document.querySelector('#play')
const resultsText = document.querySelector('#results')
const winsText = document.querySelector('#wins')
const totalText = document.querySelector('#total')
const drawsText = document.querySelector('#draws')
const rock = document.querySelector('#rock').value
const paper = document.querySelector('#paper').value
const scissors = document.querySelector('#scissors').value
 


// initialize state
let wins = 0;
let total =0;
let draws =0;



// set event listeners to update state and DOM

playButton.addEventListener ('click',() => {
    
    const player = document.querySelector('input:checked').value;
    const computer = randomThrow();
    
    const results = didUserWin(player, computer)
    console.log(results);






})
