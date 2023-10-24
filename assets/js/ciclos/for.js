

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
// lo que buscamos es barrer cada uno de estos elementos y imprimirlos en consola

console.warn('For tradicional');

//el ciclo for tiene tres partes, tiene una parte donde se inicializa la variable, una parte
//que nos va a servir como la condicion del while y el incrementador
//estamos inicializando la i en 0, luego viene la condicion que es que i se ejecute mientras es menor a 5 y el incrementador
for(let i = 0 ; i < heroes.length ; i++ ){//dentro de las llaves es lo que se va a repetir tantas veces como la condicion que coloquemos se haga
    console.log( heroes[i]);
}

console.warn('For in');
//el for in es basicamente lo mismo que tenemos arriba
//el for in se va a encargar de manejar mi condicion y salir del ciclo cuando
//no haya mas elementos dentro de este caso heroes
for( let i in heroes ){ //la variable i solo va a vivir dentro del ciclo
    console.log(heroes[i] );
}

console.warn('For of');
//es bastante utilizado para poder obtener referencias a valores de objetos o arreglos de una manera mas sencilla
//basicamente lo que hace el for of es extraer el valor que se encuentra dentro del arreglo y lo
//regresa a esta variable heroe y cada hiteracion vamos a tener cada una de las posiciones de mi
//arreglo o objeto dependiendo de lo que estemos barriendo
//no se acostumbra en el for of nombrar la variable con i, usualmente se le pone el modo singular del arreglo
//como es heroes por consecuencia es heroe
for( let heroe of heroes ){ 
    console.log( heroe );//simplemente debemos hacer referencia a la variable en este caso heroe
}