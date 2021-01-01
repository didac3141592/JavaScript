let buttons = document.querySelectorAll('.button');

buttons.forEach(element => { 
    element.addEventListener('click', function(e) {
        document.body.style.backgroundColor = e.target.id;
    })
    
});