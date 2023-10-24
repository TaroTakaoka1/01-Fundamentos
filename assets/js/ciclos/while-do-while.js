

const carros = ['Ford','Mazda','Honda','Toyota'];

console.warn('While');
//queremos imprimir en consola o procesar cada uno de estos nombres de manera indivual mediante un ciclo
//comencemos con el ciclo tradicional que es el while

let i = 0;
while(i< carros.length ) {//se va a ejecutar este bloque de codigo siempre y cuando la condicion que se coloque entre los parentesis sea verdadera
    console.log( carros[i] ); //en este punto aun estariamos en un bucle infinito, debemos incrementar i
    //i = i + 1; //este es una forma de incrementar
    i++; //es otra forma de incrementar y es el  mas utilizado

}
//undefined,null,false
while( carros[i] ) { //seria una condicion falsa por lo tanto no se estaria ejecutando
    console.log( carros[i] );
    i++;
}



console.warn('Do while');
let j = 0;//hay una diferencia importante que si j valiera 10 siempre entrara a la condicion do y por consecuencia daria undefined
//la unica diferencia entre el while y el do while va a ejecutar el bloque interno una vez

do{ //empieza con la palabra reservada do, este do siempre se va a ejecutar una vez y se va a seguir repitiendo siempre y cuando la condicion del while sea la correcta
    console.log( carros[j]);
    j++;
} while(carros[j]);//la condicion del while va abajo del do


