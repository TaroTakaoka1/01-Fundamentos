
//funcion
const regresaTrue = () => {//un indicador si este codigo se ejecuta
    console.log('Regresa true');
    return true;
}
//funcion
const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

//la logica booleana nos referimos basicamente a una manera que nosotros tenemos para trabajar con valores booleanos


//esto es la negacion que se representa  con este signo de admiracion [!]
//se puede hacer la negacion en cualquier cosa que regrese un valor booleano
console.warn('Not o la negacion');
console.log( true ); //true
console.log( !true ); //false
console.log( !regresaFalse() ); // va a ejecutar primero la funcion y en base a lo que retorna va a ser negado

//el operador and
//el and unicamente va a resultar true si todos los valores son verdaderos
// el operador and es &&
console.warn('And');
console.log( true && true); //true por que ambos tienen que ser verdaderos
console.log( true && false); //esto regresa falso por que para que regrese true todos los valores deben de ser verdaderos



console.log('=================================');
//cuando estamos llamando al and pero la primera instruccion regreso falso, va a ignorar cualquier otra instruccion que venga despues,
// ya que javascript al ver que es falso la primera instruccion ya no ejecuta lo demas 
console.log( regresaFalse() && regresaTrue()); //false,

//si lo ejecutamos de esta manera viniendo el verdadero primero y luego el falso ahi si mostrara en consola el regresa true y luego vendra el
//regresa false y ahi lo da como false pero se ejecutan las dos instrucciones
console.log( regresaTrue() && regresaFalse());
//le dice a javascript que ejecuta unicamente el regresa falso si la otra es verdadera
//Tampoco se necesita o es necesario colocarlo en una funcion o algo asi
//tambien se puede ejecutar de esta manera y tambien se utiliza mucho  es lo mismo que console.log( regresaTrue() && regresaFalse()); 
//regresaTrue() && regresaFalse(); 

//se puede hacer con mas condiciones no necesariamente solo se puede utilizar dos condiciones
//para un and todas las condiciones deben de ser verdaderas para que el resultado sea verdadero, caso contrario daria falso
console.log( '4 condiciones', true && true && true && false); //daria false


//operador or ||
//es basicamente lo opuesto de and
//para que el or regrese true por lo menos una condicion debe regresar true y lo demas ya no importa siempre va a regresar true
//la unica condicion para que salga falso seria que los dos sean false
console.warn('OR');

console.log( true || false );//daria true
console.log( false || false);//daria false

//veamos que pasaria utilizando funciones
//ejecuta solo el regresa true ya que al saber Javascript que la primera 
//intruccion es verdadera entonces no necesita evaluar lo demas por que sabe que va a dar un verdadero sin importar que venga despues
console.log( regresaTrue() || regresaFalse()); //daria true



console.log( regresaFalse() || regresaTrue());


console.log( '4 condiciones', true || true || true || false); //daria true





console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
//si todas las condiciones tienen un valor se ejecutara la ultima condicion como en este caso a1
//si de entrada es false entonces lo demas no se ejecuta y da como falso
const a1 = false && 'Hola Mundo' && 150;
//daria falso por que todas las condiciones deben de ser verdaderos 
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
//lo que mas se utiliza 
const a3 = soyFalso || 'Ya no soy falso';
//como ninguno de las 3 variables tiene valor entonces se ejecuta el string
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';
//daria true por que true es un valor permitido entonces no seguira ejecutando lo demas
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso';



console.log({a1, a2, a3, a4, a5 });
//la mayor parte de la logica booleana es en funciones como las decisiones
if (true || true || true || false) {
    console.log('Hacer algo')
}else {
    console.log('Hacer otra cosa');
}
