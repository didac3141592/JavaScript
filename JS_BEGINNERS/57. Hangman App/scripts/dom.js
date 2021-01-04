
const WORD = document.querySelector('#puzzle');
const ATTEMPTS = document.querySelector('#guesses');
const BUTTON = document.querySelector('#reset');
const HEADER = document.querySelector('#header');

const WIN = document.querySelector('#win');
const LOSE = document.querySelector('#lose');

function printGame() {
    WORD.textContent = "";
    game.forEach(character => {
        WORD.textContent += character;
    });
}

function printStatus() {
    ATTEMPTS.textContent = `You have ${guessesLeft} guesses left`;
}

function printWin() {
    WORD.textContent = "Congratulations!"
    ATTEMPTS.textContent = `You got it right! The answer was: `;
    puzzle.forEach(character => {
        ATTEMPTS.textContent += character.toUpperCase();
    });
}

function printLose() {
    WORD.textContent = "Tough luck! You'll do better next time!"
    ATTEMPTS.textContent = "The answer was: ";
    puzzle.forEach(character => {
        ATTEMPTS.textContent += character.toUpperCase();
    });
}

const PREVIOUS = document.createElement('p');
const ABCDE = document.createElement('p');
ABCDE.style.margin = "4rem"
ABCDE.style.textAlign = "center"
ABCDE.style.letterSpacing = "2.5rem"
PREVIOUS.textContent = "Previous attempts: "
PREVIOUS.style.margin = "4rem"
PREVIOUS.style.textAlign = "center"
HEADER.appendChild(PREVIOUS);
HEADER.appendChild(ABCDE);


