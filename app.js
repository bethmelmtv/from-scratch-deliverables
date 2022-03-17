

//were grabbing the buttons from html using dom methods
const yosemiteButton = document.getElementById('yosemitebutton');
const hollywoodButton = document.getElementById('hollywoodbutton');
const sanFranciscoButton = document.getElementById('sfbutton');


//were grabbing each container from html using dom methods
const yosemiteContainer = document.getElementById('Yosemite-Container');
const hollywoodContainer = document.getElementById('Hollywood-Container');
const sanFranciscoContainer = document.getElementById('SanFrancisco-Container');
//hiding places

//were  grabbing these span elements from html, although im not sure why we're putting El in front of 
//new variable names 
let totalEl = document.getElementById('total');
let lossesEl = document.getElementById('losses');
let winsEl = document.getElementById('wins');


//we created two variables to hold the person's  correct guesses and total guesses
//for losses, we will subtract correct guesses from total guesses


//initialize state

let correctGuesses = 0;
let totalGuesses = 0;


yosemiteButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('Yosemite', correctSpot);
});

hollywoodButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('Hollywood', correctSpot);
});

sanFranciscoButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('SanFrancisco', correctSpot);
});


function getRandomHidingSpot() {
    const hidingPlaces = [
        'Yosemite',
        'SanFrancisco',
        'Hollywood' 
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);
    const randomPlace = hidingPlaces[index];
    return randomPlace;

}


function handleGuess(userGuest, correctSpot) {
    if (userGuest === correctSpot) {
        correctGuesses++;
    }
    yosemiteContainer.classList.remove('face');
    hollywoodContainer.classList.remove('face');
    sanFranciscoContainer.classList.remove('face');

    totalGuesses++;

    //reveal face/image on correct spot div 
    let hidingSpotEl = document.getElementById(correctSpot + '-Container');

    hidingSpotEl.classList.toggle('face');


    winsEl.textContent = correctGuesses;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}


//

//update correctGuesses, totalGuesses and losses accordingly 




//let  = document.getElementById(correctSpot + '-container');


//how to approach this project
//Figure out what I need: i need the person's guess 
//I need a computer generated guess 
//I need an image that shows Carmen SanDiego with a transparent background that popup
//in front of each image 
// I need to update the correct guesses, total guesses and losses on the page 

// my steps of order 
//import functions and grab DOM elements 
// let state
// write event listeners for each button
// write functions for repetitive actions (one to generate the correct answer, one to reveal the right hiding spot )

//how many functions do i need to build?
//i need to generate a take a a guess based on the button that a person clicks, and generate a correct
//answer. if the correct answer and the  computer generated answer equals to each other, then increase the amount
//of correct answers and total answers. 

//return(reveals correct image + adds to total guesses and correct guesses, and losses if lost)
//click, then tells you if you got it right 



//with this function, i want to create a random computer generated answer, then check that against the user's choice, and then 
//update correctGuesses, totalGuesses and losses accordingly //

//