

//siempre es recomendado poner la primera letra de la clase en mayuscula

//el objetivo de las clases es que podamos tener propiedades y metodos
//que sean comunes en todas las instancias de esta misma clase
class Persona {
//si estamos trabajando con propiedades estaticas quiere decir que no se esta trabajando con una clase instanciada
//se esta trabajando con la estructura y las propiedades y metodos estaticos
//quiere decir que son metodos y propiedades que la gente va a poder acceder sin  necesidad de crear una instancia
//todas las propiedades estaticas que se utilizan en la clase se definan dentro de la clase 
//se acostumbra que las propiedades y metodos estaticos vayan justo abajo de la definicion de mi clase
static _conteo = 0; //propiedad estatica
    static get conteo() { //get estatico
        return Persona._conteo + 'instancias';
    }

    static mensaje() { //metodo estatico
        console.log('Hola a todos, soy un metodo estatico');


    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
//vamos a inicializar cada uno de los valores en el constructor y para ello
//debemos colocar los argumentos al constructor en el cual yo recibiria el nombre, codigo, frase
//esta es la manera basica de inicializar una clase   
constructor(nombre, codigo, frase) {
    //para hacer referencia a la instancia necesitamos utilizar la palabra reservada this. y el nombre de la instancia
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
//ponemos persona con la p en mayusculas para hacer referencia a la clase como tal y no a la instancia 
//   este ejercicio me permite saber cuantas instancias de mi clase se han inicializado
Persona._conteo++;

    }

                   //set y get
//el set solo recibe un argumento que es el que vamos a utilizar para establecerselo 
//el set es para establecer un valor 
//lo que queremos hacer con el sed es que la comida siempre este capitalizada en mayuscula

set setComidaFavorita( comida) {
        this.comida = comida.toUpperCase(); //lo que dice es que lo que sea que recibas como comida lo pases a mayusculas y eso es lo que establezcas en la propiedad comida
    }
//el get es para recuperar un valor o una propiedad construida
get getComidaFavorita() {
    return `La comida favorita de ${ this.nombre } es ${ this.comida}`;

}
//para crearse un metodo, es buena practica hacerlo despues del constructor
//los metodos son funciones que se ejecutan dentro del contexto de la clase o mejor dicho dentro de la instancia de la clase

quienSoy() {//este es la manera de crearse un metodo
    console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);

}

miFrase() {
    console.log(`${ this.codigo} dice: ${ this.frase }`);
}



}

//para crear una nueva instancia de esta clase

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino spiderman');
// si necesito crear otro objeto que tenga las mismas propiedades que use la misma estructura
//lo unico que tengo que hacer es crearme una nueva instancia 
const ironman = new Persona('Tony Star', 'Ironman', 'Yo soy ironman');


console.log( ironman );
//los metodos necesitan estos parentesis para indicar que queremos ejecutarlo , si lo ponemos
//sin parentesis solo estamos haciendo referencia pero no lo estamos ejecutando
spiderman.quienSoy();//para utilizar el metodo se llama de esta manera
//si necesito ahora hacer lo mismo con la otra instancia, basicamente es hacer el llamado a esa instancia de la clase
//en este caso ironman
ironman.quienSoy();

//para hacer llamada a otro metodo que creamos seria de la misma manera
spiderman.miFrase();
//ironman.miFrase();

//para utilizar el set es como si fuera cualquier otra propiedad de mi clase
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
//el get se imprime como si fuera una propiedad de la clase
//console.log(spiderman.getComidaFavorita);

//console.log( spiderman );


console.log('conteo estatico', Persona._conteo);
console.log( Persona.conteo );//este conteo es el get 

//para utilizar el mensaje estatico
Persona.mensaje();



