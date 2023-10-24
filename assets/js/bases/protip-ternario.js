//cuando la funcion de flecha tiene un unico return se puede simplificar y quedaria de esta manera
//eliminando el return y las llaves  
const elMayor = (a, b) =>  ( a > b ) ? a : b;//si a es mayor a b entonces voy a regresar a , caso contrario b
//si la persona es miembro entonces le costara 2 dolares y si no es miembro entonces le costara 10 dolares
const tieneMembresia = ( miembro ) => (miembro) ? '2 dolares' : '10 dolares'
console.log( elMayor(10, 15) );
console.log( tieneMembresia(true) );


//el operador ternario tambien es util cuando queremos generar arreglos o objetos con alguna condicion
//implicita dentro de su creacion

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki', //si es un amigo entonces es thor y si no es un amigo entonces es loki
     
    //para tener en cuenta que podremos ejecutar cualquier codigo de js con tal de que regrese un valor
    //esto es una funcion anonima autoinvocada por eso los parentesis al final
    //(() => 'Nick Fury')()

//tambien podemos colocar el mayor y tendriamos el valor de 15 dentro
     elMayor(10, 15)
];

console.log( amigosArr );

//otros usos con el operador ternario ,imaginemonos que tengamos mas de una condicion
//sistema de notas donde esta persona saco 65, pero necesito saber si es A+ o A, B+
 const nota = 65;
 const grado = nota >= 95 ? 'A+' : //si esto es mayor o igual a 95 entonces el valor que tendria es A+ caso contrario ejecuta el siguiente codigo y asi sucesivamente hasta llegar a saber que tan bien o mal rindio
               nota >= 90 ? 'A'  :
               nota >= 85 ? 'B+' :
               nota >= 80 ? 'B'  :
               nota >= 75 ? 'C+' :
               nota >= 70 ? 'C'  : 'F'; //si no es ninguna de estas condiciones pondre una f de reprobado 

  console.log({ nota, grado });



