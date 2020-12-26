# Slider de imágenes

Implementa el siguiente slider, donde todas las imágenes se encuentran en una carpeta de nombre **img**

[Demo](https://js-beginners.github.io/background-image-slider-project/)

1. Asocia dos eventos __click__ a cada uno de los botones. Comprueba que funciona correctamente haciendo un simple console.log cuando 
hagas clic en cada uno de ellos.
2. Fíjate que el nombre de las imágenes está en una posición del array, pero estas, se encuentran dentro de la carpeta **img**. 
¿Cómo vas a conseguir el string que representa la URL hacia la imagen correcta? Pon por console.log, la ruta URL a la imagen que corresponde
a la posición 0 del array.
3. Muestra la imagen de la posición 0 del array como fondo del contenedor del __slider__
4. Cada vez que hagas clic en el botón derecho, debes incrementar en uno el índice del array, y actualizar la foto de fondo del contenedor.
Hay que hacer algo similar para el botón izquierdo.
5. En algún momento, vas a llegar a la posición **pictures.length-1**. Pero la posición  **pictures.length** no existe! ¿Qué debemos hacer?

### BONUS
1. Crea una función que te devuelva la ruta URL a la siguiente imagen a mostrar, en función de la posición del array.
2. Parametriza la carpeta donde se encuentran las imágenes. Es decir, crea una variable global que albergue la carpeta donde se ubican
todas las imágenes; y úsala en tu código.
