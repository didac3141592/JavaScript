// tu código aquí

const balloons = document.querySelectorAll('.balloon');
const balloonGallery = document.querySelector('#balloon-gallery');
const message = document.querySelector('#yay-no-balloons');
const wrapper = document.querySelector('.wrapper');


let count = 0;

resetGameFunctionality();
createCounter();

balloons.forEach(element => {
    element.addEventListener('mouseover', popBalloon);
});

function popBalloon(e) {
    e.target.classList.add('popped');
    e.target.textContent = 'POP!';
    count++;
    e.target.removeEventListener('mouseover', popBalloon);
    e.target.addEventListener('dblclick', pumpBallon);
    hasGameFinished();
    updateCounter();
}

function pumpBallon (e) {
    e.target.classList.remove('popped');
    e.target.textContent = '';
    count--
    e.target.addEventListener('mouseover', popBalloon);
    updateCounter();
}

function hasGameFinished() {
    if(count == balloons.length) {
        message.style.display = 'inherit';
        balloonGallery.style.display = 'none';
    }    
}

function resetGameFunctionality() {
    let resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset game!';
    resetButton.addEventListener('click', resetGame);
    resetButton.style.padding = '2.5rem';

    let div = document.createElement('div');
    div.style.margin = '2rem auto';
    div.style.width = '25%';
    div.style.justifyContent = 'center';

    document.body.appendChild(div);
    div.appendChild(resetButton);      

}

function resetGame() {
    balloons.forEach(element => {
        element.classList.remove('popped');
        element.textContent = '';
        count = 0;
        element.addEventListener('mouseover', popBalloon);
        
    });
    balloonGallery.style.display = 'inherit';
    message.style.display = 'none';
    updateCounter();
}

function createCounter() {
    let counter = document.createElement('h3');
    counter.id = 'counter';
    counter.innerHTML = `There are ${balloons.length-count} balloons left to pop!`;
    let title = document.querySelector('h1');
    title.insertAdjacentElement('afterbegin', counter);

}

function updateCounter() {
    let counter = document.querySelector('#counter');
    counter.innerHTML = `There are ${balloons.length-count} balloons left to pop!`;
}


