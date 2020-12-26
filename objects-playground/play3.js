/**
 * Más sobre métodos de objetos y la palabra reservada 'this'
 * https://www.w3schools.com/js/js_this.asp
 */

/**
 * Es bastante común que los métodos de un objeto, cambien alguno de los valores del mismo. Por ejemplo, veamos a continuación el método "cumplegato". Dicho método va a incrementar en uno la edad del felino cuando se invoque
 */

 let otro_gato = {
     nombre: "John",
     edad: 1,
     cumplegato: function() {
         this.edad++
     }
 }

console.log("Esa es mi edad: ", otro_gato.edad)
otro_gato.cumplegato() // Invocamos a la función cumplegato
console.log("Esta es mi nueva edad: ", otro_gato.edad)

/**
 * La palabra reservada 'this' es un elemento frecuente en diversos lenguajes de programación. Suele hacer referencia al contexto en el que se encuentra la ejecución del código. En nuestro caso, 'this' hace referencia al objeto 'otro_gato'. Entonces, this.edad hace referencia a la propiedad 'edad' del objeto.
 */

 /**
  * Para ver esto prueba lo siguiente:
  * 
  * 1. Pon un punto de parada en la línea 14
  * 2. Ejecuta Run->Start Debuggung
  * 3. Selecciona Node.js
  * 4. Fíjate donde se para la ejecución del código. Inspecciona el valor de la variable 'this' en dicho contexto (si no ves nada a la izquierda, haz click en el icono del bicho con el símbolo de play)
  */
