
const button = document.querySelector('#btn');

const photo = document.querySelector('#photo');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const country = document.querySelector('#country');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');

button.addEventListener('click', generatePerson);

function generatePerson() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).results[0];
            firstName.textContent = data["name"]["first"];
            lastName.textContent = data["name"]["last"];
            country.textContent = data["location"]["country"];
            phone.textContent = data["phone"];
            email.textContent = data["email"];
            photo.setAttribute("src", data["picture"]["large"]);
        }
    };
    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
};