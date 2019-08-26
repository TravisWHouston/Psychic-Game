let wins = 0
let losses = 0
let guessesLeft = 9
let guessesSoFar = 0
let arrayOfLettersToGuess = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

document.getElementById('Title').innerHTML = `
    <h1>Psychic Game!</h1>

`

 let mysteryLetter = (arrayOfLettersToGuess[Math.floor(Math.random() * 26)])
console.log(mysteryLetter)
 document.onkeyup = function (event) {
     if (event.keyCode >= 65 && event.keyCode <= 90){
         if (event.target.value === mysteryLetter) {
             wins = wins + 1
             document.getElementById(`wins`).innerHTML = wins
             }
         
     }
 }




// need to generate a random letter

// wins go up if guess letter right

// need to keep track of letters guessed

// losses go up if run out of guesses

