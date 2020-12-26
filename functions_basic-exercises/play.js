// JavaScript define varias funciones globales
// por ejemplo la función 'parseInt'. 
// Esta función toma por agumento un valor.
// Transforma el valor del string en un number

let soyUnString = '123';
console.log("Ves? Soy un string: " + typeof(soyUnString))
let soyUnNumero = parseInt(soyUnString);
console.log("Me he convertido en un: " + typeof(soyUnNumero))


// Existe una 'variable' global en JavaScript llamada
// 'console'.
// Dicha variable tiene una función, de nombre 'log'
// La función tiene uno o varios parámetros de entrada.
// En el ejemplo, le pasamos UN parámetro a la función. El VALOR de la variable 'myText'
let myText = 'Hola! Hola!';
console.log(myText);

// No solo eso. JavaScript define muchas funciones en "variables" globales para poder usar.
let numeroAleatorio = Math.random()
console.log("Número aleatorio entre 0 y 1")