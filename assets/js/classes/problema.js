//esto hace a;os era el estandar para crear algo parecido a una clase
//en programacion orientada a objetos, el incoveniente principal es que si no tenemos
//una documentacion que diga esto se debe de crear con la palabra new, otros desarrolladores
//no tienen idea de que esto es obligatorio
//ya no es recomendado trabajar de esta manera
const fher = {
    nombre: 'fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre} - edad: ${ this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre} - edad: ${ this.edad}`);
    }
}
fher.imprimir();
//este es una funcion que me permitira crear instancias
function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');
//la palabra reservada this esta haciendo referencia al objeto en este caso a la funcion Persona
//y le esta asignando una propiedad
    this.nombre = nombre;
    this.edad = edad;

}
//la palabra reservada new le indica a JS que quiero crear una nueva instancia
//
const maria = new Persona('Maria', 18 );
const melissa = new Persona('Melissa', 18 );
console.log( maria, melissa);
