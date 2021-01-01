//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function getRandomColor() {
    let color = colors[Math.floor(Math.random() * 7)]
    return color
}

 let body = document.querySelector('#body')
 let button = document.querySelector('#button')

 function myFunction() {
     body.style.backgroundColor = getRandomColor()
 }


