
        //function crearPersona( nombre, apellido ){
        //return { nombre, apellido}//quedaria asi en una sola linea
        // nombre: nombre, //esto se puede reducir cuando queremos retornar algo en un objeto y el nombre de la propiedad es exactamente el mismo que el nombre de la variable no hace falta expecificarlo 2 veces
        //apellido: apellido,
        //nombre,// quedaria asi al reducir
        //apellido//tambien se puede en una sola linea para reducir mas
//}

                 //funcion flecha para regresar se utiliza los parentesis ya que no estamos poniendo el return
        const crearPersona= ( nombre, apellido)=>({ nombre,apellido});//los parentesis lo que hacen es indicarle a JavaScript es todo lo que esta dentro de esos parentesis como un objeto y no el cuerpo de mi funcion

        const persona = crearPersona( 'Taro', 'Takaoka');
        console.log( persona );



        function imprimeArgumentos(){
        console.log(arguments );
}
//una funcion de flecha no lo maneja o no lo crea el objeto arguments solo lo hacen las funciones tradicionales pero si necesitaramos
//trabajar con los argumentos en una funcion de flecha es poner args donde va los argumentos entre los parentesis pero ahi solo me traeria el primer argumento
//para traer todos los argumentos seria poner ...args los puntos hacen referencia a un parametro rest el cual le dice que todos los argumentos que sean enviados aqui a imprimeArgumentos2 en este caso
//create un arreglo con cada uno de ellos, despues del parametro rest no puede venir ningun otro argumento pero antes si necesitaramos extraer una variable antes del parametro rest
//si por ejemplo queremos extraer la edad que seria 10, entonces la edad tendria su propio valor o argumento independiente
//y todo lo demas que le sigue a la edad va a ser mi arreglo con los argumentos siguientes en este caso de la edad


        //const imprimeArgumentos2 =(edad,...args) =>{
        //console.log(edad, args);
//}



        imprimeArgumentos(10, true, false, 'Fernando', 'Hola');
        //imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');

        const imprimeArgumentos3 = (edad, ...args )=> {
        return args;
}
//como esto esta retornando un arreglo se puede poner en la definicion de mi constante llaves cuadradas y darle inmediatamente un nombre a cada una de las posiciones del arreglo
//y de esa manera creo las constantes o variables
//recordemos que el 10 lo estoy extrayendo en el argumento edad y cuando imprimo los args no viene la edad
       const [casado, vivo, nombre, saludo] = imprimeArgumentos3(10, true, false, 'Fernando', 'Hola');
       console.log({casado, vivo, nombre, saludo});//se ponee las llaves en el console.log para cree un objeto con pares de valores para que sea mas facil ver en la consola


//en este caso solo nos interesa el apellido asi que debemos poner entre llaves el nombre de la propiedad que me interesa en ese caso el apellido
//para cambiar el nombre a la variable en este caso apellido ponemos apellido: y el nuevo nombre que le queremos dar a la variable que seria nuevoApellido
       const {apellido: nuevoApellido} = crearPersona( 'Taro', 'Takaoka');
       console.log({ nuevoApellido});





//otro protip es la destructuracion de argumentos
      let tony = {
      nombre: 'Tony Stark', 
      codeName: 'Ironman',
      vivo: false,
      //edad:40, 
      trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}; 
//no es buena practica definir una funcion abajo de codigo pero para practicar sera por una sola vez
//como se ve el codigo ya es un poco feo y bastante largo y dificil de leer y mucho trabajo el que hay que hacer
      //const imprimePropiedades = ( personaje ) => {

      // console.log( 'nombre', personaje.nombre);
      // console.log( 'codeName', personaje.codeName);
      // console.log( 'vivo', personaje.vivo);
      // console.log( 'edad', personaje.edad);
      // console.log( 'trajes', personaje.trajes);

//}
//esto es la diferencia y es donde entra la destructuracion de argumentos
//en esta funcion estoy recibiendo un personaje que tiene las propiedades de mas arriba y si pongo llaves dentro de los parentesis puedo 
//extraer las propiedades que me interesan de ese objeto y ponemos todo lo que buscamos en este caso, nombre,codename,vivo,edad,trajes
//supongamos que la edad no viene como argumento pero la estamos trabajando entonces daria undifined pero esto puede ser un problema
// solucion es que en la constante imprimePropiedades en el argumento de la edad puedo definirle un valor por defecto y ahi si se soluciona el problema
//en cambio si mandamos la edad y dejamos asi el valor por defecto que le pusimos volvera a lo que inicialmente estaba definido 
     const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes  }  ) => { 
     console.log({nombre});
     console.log({codeName});
     console.log({vivo});
     console.log({edad});
     console.log({trajes});


}

     imprimePropiedades( tony );
