

const tableBody = document.querySelector('tbody');
const table = document.querySelector('table');
const updateButton = document.querySelector('#cats-update');


addCheckboxControl();
const newCheckbox = document.querySelector('#checkbox');

addSliderControls();
const controlSlider = document.querySelector('#slider');


window.addEventListener('load', updateTable('n'));

let refresh = setInterval(() => {
    if(newCheckbox.checked) {
        updateTable('y');
    }
    else updateTable('n');
}, 10000);

newCheckbox.addEventListener('change', function(e) {
    if(newCheckbox.checked) {
        updateTable('y');
    }
    else {
        updateTable('n');
    }


});

controlSlider.addEventListener('change', function(e) {
    if(newCheckbox.checked) {
        removeInterval(refresh);
        refresh = setInterval(() => {
            updateTable('y');
        }, e.target.value * 1000);
        console.log(`Updating table every ${e.target.value} seconds with all the cats.`)
    }
    else {
        removeInterval(refresh);
        refresh = setInterval(() => {
            updateTable('n');
        }, e.target.value * 1000);
        console.log(`Updating table every ${e.target.value} seconds without released cats.`)
    }

})


function removeInterval(interval) {
    clearInterval(interval);
}

function updateTable(all) {
    clearTable();
    let catData = new XMLHttpRequest();
    catData.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            if(all == 'n') {
                for(let i = 0; i < data.length; i++) {
                    if(!data[i]["fechaAlta"]) {
                        let newTableRow = document.createElement("tr");
                        let nameData = document.createElement("td");
                        nameData.innerHTML = data[i]["nombre"];
                        newTableRow.appendChild(nameData);
                        let breedData = document.createElement("td");
                        breedData.innerHTML = data[i]["raza"];
                        newTableRow.appendChild(breedData);
                        let turnInData = document.createElement("td");
                        let turnInDate = new Date(data[i]["ingresado"]).toLocaleDateString("es-ES");
                        turnInData.innerHTML = turnInDate;
                        newTableRow.appendChild(turnInData);
                        tableBody.appendChild(newTableRow);
                    }
                }
            }
            else if(all == 'y') {
                for(let i = 0; i < data.length; i++) {
                    let newTableRow = document.createElement("tr");
                    let nameData = document.createElement("td");
                    nameData.innerHTML = data[i]["nombre"];
                    newTableRow.appendChild(nameData);
                    let breedData = document.createElement("td");
                    breedData.innerHTML = data[i]["raza"];
                    newTableRow.appendChild(breedData);
                    let turnInData = document.createElement("td");
                    let turnInDate = new Date(data[i]["ingresado"]).toLocaleDateString("es-ES");
                    if (data[i]["fechaAlta"]) {
                        let turnOutDate = new Date(data[i]["fechaAlta"]).toLocaleDateString("es-ES");
                        turnInData.innerHTML = `${turnInDate} (and was released on ${turnOutDate})`;

                        if (turnOutDate < turnInDate) {
                            console.log(`There is a mistake with the dates for cat ${data[i]["nombre"]}`);
                        }
                    }
                    else {
                        turnInData.innerHTML = turnInDate;
                    }
                    newTableRow.appendChild(turnInData);
                    tableBody.appendChild(newTableRow);
                }
            }
        }
    };  
    catData.open("GET", "http://localhost:1337/gatos-ingresados", true);
    catData.send();
};

function clearTable() {
    tableBody.innerHTML = "";
};

function addSliderControls() {
    let controlSlider = document.createElement('input');
    controlSlider.setAttribute("id", "slider");
    controlSlider.setAttribute("type", "range");
    controlSlider.setAttribute("min", "10");
    controlSlider.setAttribute("max", "60");
    controlSlider.setAttribute("value", "10");
    controlSlider.style.marginTop = "2rem"
    document.body.insertBefore(controlSlider, table);
    let label = document.createElement('label');
    label.innerHTML = " How often do you want the table to be refreshed? ";
    controlSlider.insertAdjacentElement('beforebegin', label);
};

function addCheckboxControl() {
    updateButton.remove();
    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute("id", "checkbox");
    newCheckbox.setAttribute("type", "checkbox");
    table.insertAdjacentElement('afterend', newCheckbox);
    let label = document.createElement('label');
    label.innerHTML = " Show released cats as well";
    newCheckbox.insertAdjacentElement('afterend', label);
};

