
//en JavaScript todos los primitivos son pasados por valor
//en javascript todo es un objeto excepto los primitivos
let a = 10;
let b = a;
a = 30;

console.log({ a, b});

//en javascript todos los objetos son pasados por referencia
//por eso como vemos el nombre de juan y ana , ahora dan ana
let juan = { nombre: 'Juan' };
//existe un operador para separar todas las propiedades y los valores de un objeto , el operador spread
//diferencias en ... que pusimos en juan con poner dentro de los argumentos

                    //Parametro rest
//cuando se pone despues de los parentesis como argumento es un parametro rest y quiere decir une todo 
//los argumentos en una sola variable y transformalo como un objeto.

                    //Parametro spread
//Cuando se utiliza fuera de ese lugar (argumentos) es el operador Spread y simboliza separa los elementos
//la ventaja de hacerlo de esta manera es que tambien rompe la referencia que hay en javascript y de esa
//manera poder trabajar objetos y hacer igualaciones que apunten a diferentes espacios en memoria


let ana = { ...juan};
ana.nombre = 'Ana';
console.log({ juan, ana});

//ponemos entre parentesis el argumento persona para luego poder utilizar el operador spread 
const cambiaNombre = ( {...persona} ) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony});

//hacer el mismo ejercicio pero con arreglos

const frutas = ['Manzana', 'Pera', 'Pina'];
//si es un arreglo debemos poner entre llaves cuadradas en este caso Frutas para crear un nuevo arreglo
//y ahi poder utilizar el operador spread para separar cada uno de los elementos que vienen en el arreglo
// y poder retornarlo de manera independiente rompiendo dicha relacion


//console.time('spread'); //el console.time es para medir el rendimiento de varias cosas la aplicacion
const otrasFrutas = [...frutas];
//console.timeEnd('spread');

otrasFrutas.push('Mango'); //aqui anadimos una nueva fruta

console.table({ frutas, otrasFrutas}); //hacemos con table para revisar los dos arreglos


//es el mismo ejercicio con arreglos pero es otra manera de romper la relacion y poder separar las propiedades y los valores de un objeto.
//y es el poner el slice sin ningun argumento
// el slice es un metodo que viene en los arreglos que dice cortamelo el arreglo y regresame los elementos que yo especifico 
//pero si yo no mando ningun argumento esto regresa un nuevo arreglo rompiendo dicha relacion

//const frutas = ['Manzana', 'Pera', 'Pina'];
//const otrasFrutas = [frutas.slice()];

//otrasFrutas.push('Mango'); //aqui anadimos una nueva fruta

//console.table({ frutas, otrasFrutas}); //hacemos con table

























