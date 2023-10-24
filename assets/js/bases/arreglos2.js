let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

let primero = juegos[ 2 - 2 ]; //se pueden hacer calculos matematicos para saber que posicion necesitamos del arreglo

//esto seria por si no sabemos exactamente la posicion como puede ser un arreglo dinamico, entonces ponemos juegos.length que nos tira el largo
//que tiene el arreglo, y podemos hacer el -1 para obtener la ultima posicion y asi sucesivamente , solo cuando no sabemos a ciencia exacta
//la posicion y no podamos hacerlo con codigo.
let ultimo = juegos[ juegos.length - 1];

console.log({ primero, ultimo})


//el metodo forEach va a ejucutar una instruccion por cada uno de los elementos que se encuentran en el arreglo
//imprime el elemento, el indice donde se encuentra dicho elemento y el numero de elementos dentro del arreglo
juegos.forEach((elemento, indice, arr ) => {
   console.log({ elemento, indice, arr });
});

//este es un metodo en donde podemos añadir un juego mas o un elemento mas
//el push sirve para colocar un nuevo elemento al final del arreglo
//para ver la mutacion del arreglo ponemos una , y llamamos a nuestro arreglo que en este caso seria juegos
let nuevaLongitud = juegos.push('F-Zero' );
console.log({ nuevaLongitud, juegos });



//El metodo unshift sirve para colocar un nuevo elemento al principio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });


//el metodo pop lo que hace es borrar o remueve el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos}); //es para imprimir el juego borrado y como quedo el arreglo



//el metodo splice remueve o elimina cualquier elemento que asignemos dentro del arreglo y si es necesario puede insertarlo en ese lugar
//es para borrar cualquier elemento dentro del arreglo
let pos = 1;

console.log( juegos); //esto es para imprimir como estaba el arreglo en este punto y luego como queda despues del splice

let juegosBorrados = juegos.splice(pos, 2); //en el splice vamos a mandar la posicion que queremos borrar y cuantos elementos quiero borrar a partir de eso en este caso es 2

console.log({ juegosBorrados, juegos}); //imprime los juegos que se borraron y como quedo el arreglo



//indexOf es para saber la posicion indice de un juego o un elemento dentro del arreglo
//cuidar el nombre de los elementos y escribir como lo hayamos declarado por que o sino saldra -1 que significa que no encontro dicho elemento, no daria
//0 por que daria la primera posicion por eso el -1
// cuidar las mayusculas y minisculas en JavaScrip
let metroidIndex = juegos.indexOf('Metroid'); //necesitamos poner lo nos interesa buscar dentro del arreglo por eso ponemos el nombre del juego o del elemento que querramos saber el indice
console.log({ metroidIndex });

//TODO: Referencia

