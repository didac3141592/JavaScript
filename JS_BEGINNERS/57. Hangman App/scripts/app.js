

const startGame = async () => {
    resetStatus();
    const MOVIE = await getMovie();
    puzzle = MOVIE.toLowerCase().split("");
    setGame(puzzle);
    console.log(puzzle);
};

window.addEventListener('keypress', playGame);

function playGame(character) {
    const CHAR = character.key.toLowerCase();
    if(puzzle.indexOf(CHAR) == -1) {
        if(letters.indexOf(CHAR) == -1) {
            wrongGuess();
            updateAttempts(CHAR);
        }
    }
    else if(letters.indexOf(CHAR) == -1) {
        goodGuess(CHAR);
        updateAttempts(CHAR);
    }
};

function setGame(movie) {
    for(let i=0; i<movie.length; i++) {
        if(movie[i] != " ") {
            game[i] = "*";
        }
        else if(movie[i] == " ") {
            game[i] = movie[i];
        }
    }
    printGame();
    printStatus();
};

function resetStatus() {
    game = [];
    letters = [];
    guessesLeft = GUESSES;
    ABCDE.textContent = ""
};

function endGame() {
    WIN.play();
    printWin();
};

function gameOver() {
    LOSE.play();
    printLose();
};

BUTTON.addEventListener('click', startGame);

startGame();


