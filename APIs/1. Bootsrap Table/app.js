const table = document.querySelector('#table');
let url = `https://disease.sh/v3/covid-19/countries/Portugal%2C%20Spain%2C%20France%2C%20Germany%2C%20Belgium%2C%20United%20Kingdom`;

addForm();

const button = document.querySelector('#btn');
// button.addEventListener('click', addCountry)

const form = document.querySelector('form');
form.addEventListener('submit', addCountry);

$('#table').bootstrapTable({
    url: url,
    columns: [{
      field: 'country',
      title: 'País',
    }, {
      field: 'population',
      title: 'Población total'
    }, {
      field: 'activePerOneMillion',
      title: 'Casos activos por millón de habitantes',
      sortable: true,
      cellStyle: setBgColor
    }, {
      field: 'updated',
      title: 'Datos actualizados por última vez',
      formatter: setDateFormat
    }]
})


function addCountry(e) { 
    e.preventDefault();
    let country = document.querySelector('#new-country').value;
    url += `%2C%20${country}`;
    $('#table').bootstrapTable('refresh', { 
        url : url
    })
};

function setDateFormat(value) {
    let date = new Date(value)
    return date.toLocaleDateString();
};

function setBgColor(value, row, index) {
    if(value > 10000) {
        return {classes: 'bg-warning'}
    }
    else return {classes: 'bg-success'}
};

function addForm() {
    let div = document.createElement('div');
    div.setAttribute("class", "container");
    div.style.margin = "25px"
    let form = document.createElement('form');
    let label = document.createElement('label');
    label.textContent = "Add country:"
    label.style.margin = "10px"
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "e.g. Canada")
    input.setAttribute("id", "new-country");
    let button = document.createElement('input');
    button.setAttribute("type", "submit");
    button.setAttribute("id", "btn");
    button.style.margin = "10px"
    document.body.appendChild(div);
    div.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
};