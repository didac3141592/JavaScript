/**
 * Los objetos en JavaScript nos permiten almacenar información de forma estrcturada https://www.w3schools.com/js/js_objects.asp
 * 
 */

let gatito = {
    edad: 2,
    raza: "Persa",
    vacunado: true
}

console.log("Gato #1", gatito)

/**
 * Los objetos pueden incluso contener datos estructurados como arrays, u otros objetos!
 */

 let gatito_dos = {
     edad: 5,
     raza: "Vulgaris",
     vacunado: false,
     latas_favoritas : ["Purina", "Wild Cat"],
     hermanos : gatito
 }

 console.log("Otro gato:", gatito_dos)