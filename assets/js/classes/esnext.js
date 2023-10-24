
//Propiedades privadas
//si intentamos cambiar el valor del area accidentalmente se podria hacer
//pero nosotros no deberiamos de poder cambiar el area directamente por lo cual el area deberia
//de ser una propiedad privada, como podemos poner una propiedad privada  para que no pueda
//ser modificada fuera de esta clase lo hacemos con el caracter numeral
class Rectangulo {

    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

//instancia del rectangulo
const rectangulo = new Rectangulo(10, 15);
//si intentamos cambiar el valor de la propiedad area nos saltara un error
//por que un campo privado debe de ser declarado dentro de la clase
//rectangulo.area = 100;

console.log( rectangulo);