let wins = 0
let losses = 0
let guessesLeft = 9
let guessesSoFar = 0
const arrayOfLettersToGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let guessedLetters = []
document.getElementById('Title').innerHTML = `
    <h1>Psychic Game!</h1>

`

 let mysteryLetter = (arrayOfLettersToGuess[Math.floor(Math.random() * 26)])
 console.log(mysteryLetter)
 document.onkeyup = function (event) {
     if (event.keyCode >= 65 && event.keyCode <= 90){
         if (event.key === mysteryLetter) {
             wins = wins + 1
             document.getElementById(`wins`).innerHTML = wins
             guessedLetters = ``
             document.getElementById(`guessedLetters`).innerHTML = guessedLetters
             mysteryLetter = (arrayOfLettersToGuess[Math.floor(Math.random() * 26)])
             guessesLeft = 9
             document.getElementById(`guessesLeft`).innerHTML = 9
             console.log(mysteryLetter)
             } 
             else { 
                 guessedLetters = guessedLetters + event.key + `, ` 
                 guessedLetters.includes(event.key)
                 document.getElementById(`guessedLetters`).innerHTML = guessedLetters 
                 guessesLeft = guessesLeft - 1
                 document.getElementById('guessesLeft').innerHTML = guessesLeft
                 if (guessesLeft === 0) {
                     losses = losses + 1
                     document.getElementById(`losses`).innerHTML = losses
                     guessesLeft = 9
                     guessedLetters = ``
                     document.getElementById(`guessedLetters`).innerHTML = guessedLetters
                     mysteryLetter = (arrayOfLettersToGuess[Math.floor(Math.random() * 26)])
                     console.log(mysteryLetter)
                 }
             }    
        }
    }
     

// need to generate a random letter

// wins go up if guess letter right

// need to keep track of letters guessed

// losses go up if run out of guesses

