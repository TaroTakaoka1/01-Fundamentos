

                                                        //Tipos de datos primitivos
                                                   //Asignacion de String
                                                   //Es una cadena de caracteres, ej:Palabras,nombre de personas
let nombre = 'Peter Parker';
console.log( nombre );

nombre= 'Ben Parker'; //como cambiar el valor a lo que apunta la variable pero si ponemos let no funcionara por que estamos reinicializando
console.log( nombre );

nombre = "Tia May"; //las comillas es lo mismo , solo que una es mas lijera que la otra
nombre = 'Tia May';

console.log(typeof nombre); //operador interno, dira que es de tipo string

nombre = 123;
console.log(typeof nombre); //dira que es de tipo numerico


                                                       //Tipo de datos boolean
                                                       //solo aceptan valores true/false ::verdadero o falso

  let esMarvel = false; //true/false no poner en comillas o sino toma como string
  console.log(typeof esMarvel); 



                                                           // Numericos
                                                           // solo tenemos un tipo de dato que es el numerico, no hay diferencia entre los enteros,flotantes es lo mismo 1 que 1.000,integers, floats.etc.

  let edad = 33;
  console.log(typeof edad);

  edad = 33.00001; //sigue siendo un numero en otros lenguajes seria flotantes en este no, sigue siendo lo mismo
  console.log(typeof edad);


                                                          //undefined es una variable declarada que aun no se le asigna valor
                                                          //camelCase se acostumbra trabajar iniciar la primera palabra de la variable en minuscula y si tiene una segunda palabra empieza con una letra capitalizada o mayuscula  

  let superPoderDeSpiderman; //esto seria undefined por que la variable no se a inicializado con ningun valor 
  console.log(typeof superPoderDeSpiderman);



                                                   //nul es sin valor en lo absoluto
  let soyNull = null; // null seria un tipo primitivo pero se le considera como objeto por que el tipo de un nulo es un objeto para los navegadores web y para el interprete de javaScrip
  console.log(typeof superPoderDeSpiderman);


  
                                                            //simbol es un valor unico que no es igual a ningun otro valor
                      //los simbolos permiten crear identificadores unicos a javaScrip
  let symbol1 = Symbol('a');
  let symbol2 = Symbol('a');

  console.log(typeof symbol1);
 // === esto es una comparacion si son exactamente igual
  console.log(symbol1===symbol2); //comparacion si son exactamente igual daria true pero en este caso da false por que no son lo mismo


