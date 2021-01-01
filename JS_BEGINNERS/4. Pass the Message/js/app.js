// Tu código aquí

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e);
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    let message = document.querySelector('#message');

    if(message.value == '') {
       let alert = document.querySelector('.alert');
       alert.classList.remove('feedback');
       setTimeout(function() {
           alert.classList.add('feedback');
       }, 1500)

    }

    else {

        let passedValue = message.value;
        let messageContent = document.querySelector('.message-content');
        messageContent.innerHTML = passedValue;

    }




   






    
    console.log("Hemos hecho clic en el botón de submit!");
    form.reset();
    
})
