//podemos crear tantos metodos estaticos como necesiten pero esto es bastante util se queremos crear
//instancias de diferentes formas, muy util para hacer peticiones htpp y queremos crear
//en base a la respuesta http alguna clase o instancia de mi clase


class Persona {
//la idea es que este metodo estatico cree una nueva instancia de mi persona pero utilizando
//el constructor de abajo pero recibiendo un argumento diferente
//utilizaremos tambien la desestructuracion de argumentos con las llaves
    static porObjeto({ nombre, apellido, pais}) {//recibo persona que tiene su nombre, apellido, pais
      return new Persona(nombre, apellido, pais);//voy a regresar una nueva instancia de mi Persona pero utilizando este metodo estatico
    }

    constructor( nombre, apellido, pais ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais1 = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}


const Persona1 = new Persona( nombre1, apellido1, pais1 );

const persona2 = Persona.porObjeto( fher );

Persona1.getInfo();
persona2.getInfo();
