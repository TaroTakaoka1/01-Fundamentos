
//no existe limite de propiedades asi que se pueden agregar varias
//para seguir poniendo propiedades poner una , al final
//poner const delante del nombre del objeto nos permite bloquear este tipo de asignacion personaje = 123;
//pero no bloquea a este tipo de asignacion personaje.casado = true;, se podria cambiar lo que tiene el objeto internamente 
let personaje = {//las llaves debemos asociarlo con que es un objeto
    nombre: 'Tony Stark', //esto es conocido como llave y luego el valor de la llave
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords:{
        lat:34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],//podemos agregar arreglos
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War' //se le pone entre comillas a la variable si son dos palabras y queremos que haya un espacio para javascrip entienda como un string
}; 


//asi es como podemos acceder a las propiedades y los arreglos 
//si no esta por orden al imprimir es por que se maneja por orden alfabetico
console.log( personaje );
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );
console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );
console.log('Lng', personaje.coords.lng );
console.log('Nro. Trajes', personaje.trajes.length ); //esto seria para saber el numero de trajes con length
console.log('ultimo traje', personaje.trajes [personaje.trajes.length - 1]);//quiero saber el nombre del ultimo traje


const x = 'vivo'; //es una variable para tener informacion de un onjeto este caso vivo
console.log('Vivo', personaje[x] );

console.log('ultima pelicula', personaje['ultima-pelicula']);//de esta forma seria para acceder a la propiedad que deseemos recuperar



//si queremos borrar una propiedad debemos utilizar la palabra reservada delete al principio

delete personaje.edad;

console.log( personaje );


//como crear una nueva propiedad en el objeto que va a suceder al momento de ejecucion
//simplemente le hacemos mencion

personaje.casado= true;


//si queremos trabajar nuestro objeto como si fuera un objeto, con el metodo entries
const entriesPares = Object.entries( personaje);
console.log( entriesPares);

//si deseamos bloquear las propiedades o las modificaciones del objeto utilizamos el metodo Object.freeze y entre parentesis el objeto;
// las modificaciones o nuevas propiedades quedaran congeladas y no podran ser modificadas
Object.freeze( personaje );

personaje.dinero = 10000000000;
personaje.casado = false;

//no se puede cambiar lo que apunta directamente en este caso direccion pero si las propiedades
//no se congela los objetos dentro de este objeto, es el problema que tiene esta propiedad
personaje.direccion.ubicacion = 'Costa Rica'; 
console.log( personaje);


//como hacer un listado de todo lo que contiene el objeto
//con este metodo se puede obtener el listado
const propiedades = Object.getOwnPropertyNames ( personaje);
const valores = Object.values( personaje); //esto ya es para obtener los valores que contiene cada propiedad
console.log({ propiedades, valores });























