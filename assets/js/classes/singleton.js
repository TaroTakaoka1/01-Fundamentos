
//un singleton es una instancia unica de mi clase que no importa si
//decimos new un monton de veces siempre regresa la misma instancia de mi clase

class singleton {
   //hay dos cosas que se pueden poner que son opcionales pero es bueno ponerlas
   //para saber que es un singleton
   //la primera es poner la palabra static instancia es decir esta va a ser la instancia
   //inicializada de mi clase que cuando alguien intente inicializarla y ya lo este
   // va  a regresar este valor
    static instancia; //undefined
    //este es una propiedad que queramos mantener global, pueden ser objetos o mas propiedades
    nombre = '';

    constructor( nombre = '' ) {
        //que si ya existe una instancia  entonces hacemos un return y regresa singleton.instancia
       //y cuando se ejecuta un return ya no va a seguir ejecutando las siguientes lineas de codigo
       //posteriores al return, es decir ejecuto este return y salte de este constructor por que estamos regresando
       //esta instancia
        if ( !!singleton.instancia ) {//estamos comprobando si esta condicion no existe con !!
            return singleton.instancia;
        }
//el this esta haciendo referencia a esta instancia de la clase en este preciso momento
        singleton.instancia = this;
        this.nombre = nombre;

        
    }

}
//todas estas instancias que tenemos creadas apuntan exactamente al mismo espacio en memoria
//al mismo objeto por consecuencia todas sus propiedades , todos los metodos que tengamos
//va a apuntar al mismo lugar
//y nos puede ayudar a ahorrar memoria
const instancia1 = new singleton('Ironman');

const instancia2 = new singleton('Spiderman');

const instancia3 = new singleton('BlackPanther');




console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);

console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);

console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);



//un ejercicio de la negacion

//const a = undefined;
//el a por defecto es undefined
//console.log(a);
//si yo hago la negacion entonces tendremos un true, por que es lo opuesto de undefined
//console.log(!a);
//al poner la doble negacion entonces estoy diciendo que haga lo opuesto de true entonces da falso
//console.log(!!a);