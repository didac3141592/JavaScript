// Tu código aquí
let button = document.querySelector("#btn")
let colorItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', function(){
    let color = getRandomColor();
    document.body.style.backgroundColor = color;
    let text = document.querySelector('h1');
    text.innerHTML = color;
})

function getRandomColor(){
    let color = "#"
    for(let i=0; i<6; i++) {
        color += colorItems[Math.floor(Math.random() * colorItems.length)];
    }
    return color;
}

