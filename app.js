

//were grabbing the buttons from html using dom methods
const yosemiteButton = document.getElementById('yosemitebutton');
const hollywoodButton = document.getElementById('hollywoodbutton');
const sanFranciscoButton = document.getElementById('sfbutton');


//were grabbing each container from html using dom methods
const yosemiteContainer = document.getElementById('YosemiteContainer');
const hollywoodContainer = document.getElementById('HollywoodContainer');
const sanFranciscoContainer = document.getElementById('SanFranciscoContainer');
//hiding places

//were  grabbing these span elements from html, although im not sure why we're putting El in front of 
//new variable names 
let totalEl = document.getElementById(total);
let lossesEl = document.getElementById(losses);
let winsEl = document.getElementById(wins);


//we created two variables to hold the person's  correct guesses and total guesses
//for losses, we will subtract correct guesses from total guesses

let correctGuesses = 0;
let totalGuesses = 0;


yosemiteButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('yosemite', correctSpot);
});

hollywoodButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('hollywood', correctSpot);
});

sanFranciscoButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('sf', correctSpot);
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'yosemite',
        'sf',
        'hollywood'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);
    // returns a random number based on the length of array
}

function handleGuess(userGuest, correctSpot) {
    if (userGuest === correctSpot) {
        correctGuesses++;
    }
    yosemiteContainer.classList.remove('face');
    hollywoodContainer.classList.remove('face');
    sanFranciscoContainer.classList.remove('face');

    totalGuesses++;

    let hidingspotEl = document.getElementById(correctSpot + '-container');

    hidingspotEl.classList.toggle('face');

//update correctGuesses, totalGuesses and losses accordingly 
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    totalEl.textContent = totalGuesses;
}


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
//update correctGuesses, totalGuesses and losses accordingly 