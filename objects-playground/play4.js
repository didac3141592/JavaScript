/**
 * Imagina el árbol DOM como un montón de objetos JavaScript
 */

 /**
  * Imagina que existe el siguiente objeto
  */

let div,span,img

 div = {
    width: '100%',
    height: 'auto',
    class: ['container', 'text-align'],
    margin: {
        top: '1rem',
        bottom: '1rem'
    },

    backgroundImage: 'images/patronFondo.jpeg',
    children: [span, img]
}

/**
 * <div>
 *    <span></span>
 *    <img>
 * </div>
 */

span = {
    width: '100%',
    textContent: 'Hola! Estamos a punto de adentrarnos en la manipulación del DOM con JavaScript!',
    
    parent: div
}

img = {
    width: 'auto',
    src: 'img/jsIsCool.png',

    parent: div
}

/**
 * ¿De que manera estan relacionados estos dos objetos?
 * ¿Verdad que las propiedades que tienen te resultan familiares? 
 */