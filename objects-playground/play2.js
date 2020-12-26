/**
 * Los objetos pueden tener funciones.
 * A las funciones de los objetos se les suele llamar "métodos" (methods, en inglés)
 */

let gato = {
    nombre: 'Bigotes',
    edad: 10,
    maullar: function () {
        console.log("Miau!")
    }
}

console.log("Nombre", gato.nombre)
console.log("Edad", gato.edad)

gato.maullar()


/**
 * Actualizar un objeto
 */
/**
 * Las popiedades de los objetos se pueden actualizar.
 * Lo hacemos de manera muy similar a como actualizamos variables (de hecho, al fin y al cabo, un objeto se compone de un conjunto de variales)
 */

gato.edad++
console.log("Feliz cumpleaños, gato! Tu edad es ahora: " + gato.edad)