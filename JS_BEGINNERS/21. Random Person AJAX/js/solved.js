const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  getPerson(getData);
});

// use a callback for the getPerson function
function getPerson(callback) {
  const url = `https://randomuser.me/api/`;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      callback(this.responseText, showData);
    } else {
      console.log(this.statusText);
    }
  };

  ajax.onerror = function() {
    console.log("there was an error");
  };
  ajax.send();
}

function getData(response, callback) {
  const data = JSON.parse(response);

  //using destructuring to pull the data from the response
  const {
    name: { first },
    name: { last },
    picture: { large },
    phone,
    email
  } = data.results[0];

  const location = data.results[0].location.country;

  callback(first, last, large, location, phone, email);
}
function showData(first, last, large, country, phone, email) {
  document.getElementById("first").textContent = first;
  document.getElementById("last").textContent = last;
  document.getElementById("phone").textContent = phone;
  document.getElementById("country").textContent = country;
  document.getElementById("email").textContent = email;
  document.getElementById("photo").src = large;
}
