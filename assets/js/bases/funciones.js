

//el objetivo principal de las funciones es centralizar la logica de un procedimiento que nosotro podemos
//reutilizar varias veces o ejecutar varias veces con solo llamarla en donde necesitemos en este para llamar seria 
//saludar();
//lo que esta dentro del parentesis es el identificador del  argumento
function saludar(nombre){ //el indicativo de una funcion es los parentesis, es muy utilizada esta forma de crear funciones, pero no me recomendada
    //console.log(arguments); //todas las funciones tradicionales que tienen la palabra function explicita internamente cuando se ejecutan tienen un objeto implicito llamado arguments 
    //console.log('Hola ' + nombre);
}
//el beneficio es como le estoy asignando a una constante no hay manera de que esta funcion pueda ser reutilizado en mi aplicacion , es una medida de seguridad
//es mas recomendado crear funciones de esta manera
const saludar2 = function(nombre){ //esto se conoce como funcion anonima por que no tiene el nombre pero al asignarselo a una funcion esta funcion va a responder al nombre de saludar2
  // console.log('Hola ' + nombre);
}

//Funciones de flecha
//seria despues del igual los parentesis para indicar que es una funcion y ponemos la funcion flecha => y luego abrimos las llaves
const saludarFlecha = () => { 
    //console.log( 'Hola Flecha');
}


//esto es para mandarle un argumento a la funcion de flecha
const saludarFlecha2 = (nombre) => {  //los argumentos funcionan sin los parentesis pero es buena practica para identificarlos
   // console.log( 'Hola ' + nombre);
}




//toda informacion adicional en teoria son recibidos por la funcion
//si en realidad necesito trabajar con la informacion adicional se utiliza arguments para saber todo lo que se le envio a la variable nombre en este caso
saludar('Taro', 40, true, 'Costa Rica');// aqui llamamos a la funcion y estamos inicializando el argumento nombre


//saludar2('Taro') //aqui mandamos la variable a la funcion que voy a mandar desde el momento que lo ejecuto 

//saludarFlecha();//para llamar a la funcion flecha 

//saludarFlecha2('Melissa');//aqui mandamos la variable a la funcion que voy a mandar desde el momento que lo ejecuto 

//Return

function saludar4( nombre) {//cuando se ejecuta esta funcion empieza linea por linea y cuando encuentra un return entonces se queda hasta esa linea sale de la funcion y no se ejecuta nada mas 
    return 10;

    //esto nunca se va a ejecutar
    console.log('soy un codigo que esta despues del return');
}

const retornoDeSaludar = saludar4('Taro', 40, true, 'Costa Rica');
//console.log( retornoDeSaludar);






function sumar( a, b){ //a y b son los argumentos
    return a + b;//pueden haber mas argumentos, pero ahora mismo son de dos y es una suma de a+b
}


//funcion flecha
//const sumar2 = (a,b)=>{
    //return a + b;
//}


//este es una funcion de flecha resumido en una sola linea, es lo mismo que tenemos arriba solo que sin el return y las llaves
//solo utilizar cuando solo tenemos la linea de return , si hay mas valores que a;adir es mejor tipear el return
//seria para un codigo mas limpio
const sumar2 = (a,b)=> a + b; 


function getAleatorio() {
    return Math.random(); //genera numeros al azar 
}

//funcion flecha
const getAleatorio2 = ()=> Math.random();


console.log( sumar(1,2));//el 1 es el argumento del a y el 2 del b 
console.log( sumar2(1,2));//este seria imprimir con la funcion flecha
console.log( getAleatorio() );//que imprima el retorno de getAleatorio
console.log( getAleatorio2() );//que imprima el retorno de getAleatorio