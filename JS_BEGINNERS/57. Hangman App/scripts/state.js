
let puzzle;
let game = [];
let letters = [];
const GUESSES = 5;
let guessesLeft = GUESSES;

function wrongGuess(character) {
    if(guessesLeft == 1){
        gameOver();
    }
    else {
        guessesLeft--;
        printStatus();
    }
};

function goodGuess(character) {
    let index = puzzle.indexOf(character);
    while(index != -1) {
        game[index] = character;
        index = puzzle.indexOf(character, index + 1);   
    }
    printGame();
    if(game.indexOf("*") == -1) {
        endGame();
    }
   
}

function updateAttempts(character) {
    letters.push(character);
    ABCDE.textContent += character;
}