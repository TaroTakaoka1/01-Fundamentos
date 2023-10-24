/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy...
//ocupar saber cual es el dia actual
//esto significa que la persona esta haciendo la consulta el dia domingo a las 10 de la ma;ana
//const dia = 1;//ya tenemos que el dia es 0 ,se empieza con el domingo, dia 0 y asi sucesivamente
//const horaActual = 10;

//variables
//let horaApertura;
//let mensaje; //esta abierto, esta cerrado, hoy abrimos a las xx
//ejercicio sin los operadores ternarios
//primero evaluamos el dia
//primero debo saber si es fin de semana
//este es la condicion de la hora de apertura

//if ( dia === 0 || dia ===6){//la condicion significaria que es fin de semana
    //console.log('Fin de semana');
    //horaApertura = 9;//y el horario de apertura del fin de semana es a las 9
//}else { //esto es si no es fin de semana y es un dia de la semana
    //console.log('Dia de semana');
    //horaApertura = 11;
//} 
//debemos determinar la hora actual
// la condicion diria, la hora actual es mayor o igual a la hora de apertura entonces el mensaje dira esta abierto
//if ( horaActual >= horaApertura ) {
   // mensaje = 'Esta abierto';
//}else {//caso contrario esta cerrado y hoy abrimos y  lo concatenamos con la hora de apertura 
    // para concatenar usamos en ves de las comillas sencillas un back tick y poner un signo de dolar y abro y cierro llaves
    // y lo que sea que se ponga dentro puede ser una exprecion valida de JS como por ejemplo imprimir la hora de apertura
    // es una manera bastante comun ahora de hacer interpolaciones de string o concatenaciones de strings
    //mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura}`;// cuando concatenamos debemos de cambiar las comillas sencillas por back tick
//}
//console.log({ horaApertura, mensaje });



// se podria simplificar el codigo utilizando ahora los operadores ternarios

/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy...
//ocupar saber cual es el dia actual
//esto significa que la persona esta haciendo la consulta el dia domingo a las 10 de la ma;ana
const dia = 1;//ya tenemos que el dia es 0 ,se empieza con el domingo, dia 0 y asi sucesivamente
const horaActual = 10;

//variables
let horaApertura;
let mensaje; //esta abierto, esta cerrado, hoy abrimos a las xx

//primero evaluamos el dia
//primero debo saber si es fin de semana
//este es la condicion de la hora de apertura

//if ( [0,6].includes( dia ) ){//la condicion significaria que es fin de semana
   // console.log('Fin de semana');
   // horaApertura = 9;//y el horario de apertura del fin de semana es a las 9
//}else { //esto es si no es fin de semana y es un dia de la semana
    //console.log('Dia de semana');
   // horaApertura = 11;
//}

        //todo el codigo comentado podriamos resumirlo

//si en el arreglo de 0,6 incluye  el dia actual osea da un true entonces ahi viene la condicion ternaria
// el signo de interrogacion luego sigue el valor que yo quiero retornar si la condicion se cumple
//si se cumple quiere decir que es fin de semana y abrimos a las 9 caso contrario quiere decir que es dia de la semana
//para poner el else seria : espacio 11 en este caso que es el valor que quiero retornar ya que entre semana abrimos a las 11
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11; //todo esto es la condicion ternaria
//debemos determinar la hora actual
// la condicion diria, la hora actual es mayor o igual a la hora de apertura entonces el mensaje dira esta abierto

//if ( horaActual >= horaApertura ) {
   // mensaje = 'Esta abierto';
//}else {
   // mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura}`;
//}


//todo la condicion comentada  podriamos resumirlo  con el operador ternario
mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura}`;
console.log({ horaApertura, mensaje });