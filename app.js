// import functions and grab DOM elements
import {didUserWin, randomThrow} from './utils.js'

const playButton = document.querySelector('#play')
const resultsText = document.querySelector('#results')
const winsText = document.querySelector('#wins')
const totalText = document.querySelector('#total')
const drawsText = document.querySelector('#draws')
const lossesText = document.querySelector('#losses')
const joeText = document.querySelector('#joe')
const rock = document.querySelector('#rock').value
const paper = document.querySelector('#paper').value
const scissors = document.querySelector('#scissors').value
const theRock = document.querySelector('#the-rock')
const paperJet = document.querySelector('#paper-jet')
const med = document.querySelector('#med')
 


// initialize state
let wins = 0;
let draws =0;
let losses =0;
let total =0;


// set event listeners to update state and DOM

playButton.addEventListener ('click',() => {
    
    const player = document.querySelector('input:checked').value;
    const computer = randomThrow();
    
    const results = didUserWin(player, computer)
    

    if (results === 'draw') {
        draws++
        total++
        drawsText.textContent = `${draws} Draws`
        totalText.textContent = `${total} Total`
        joeText.textContent = 'Game is a draw!'
    }

    if (results === 'win') {
        wins++
        total++
        winsText.textContent = `${wins} Wins`
        totalText.textContent = `${total} Total`
        joeText.textContent = 'You Win!'
    }

    if (results === 'loss') {
        losses++
        total++
        lossesText.textContent = `${losses} losses`
        totalText.textContent = `${total} Total`
        joeText.textContent = 'You Lose!'
    }

    if (computer === 'rock') {

        resultsText.textContent = 'Computer Chose Rock!'
        theRock.style.display = 'initial'
        paperJet.style.display = 'none'
        med.style.display = 'none'
    }

    if (computer === 'paper') {

        resultsText.textContent = 'Computer Chose Paper!'
        paperJet.style.display = 'initial'
        theRock.style.display = 'none'
        med.style.display = 'none'
    }

    if (computer === 'scissors') {

        resultsText.textContent = 'Computer Chose Scissors!'
        med.style.display = 'initial'
        theRock.style.display = 'none'
        paperJet.style.display = 'none'
    }

})
