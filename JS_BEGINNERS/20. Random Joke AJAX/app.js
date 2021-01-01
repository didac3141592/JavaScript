
const button = document.querySelector('#get-joke');
const joke = document.querySelector('#display-joke');

button.addEventListener('click', randomChuckJoke);

function randomChuckJoke() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            joke.textContent = data.value;
        }
    }
    xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhttp.send();
}

