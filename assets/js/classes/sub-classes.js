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
                       //esto es la herencia
//es una clase que se llama heroe que extiende las propiedades y metodos de Persona
    class Heroe extends Persona {
        clan = 'sin clan';
//en el momento que ponemos un constructor en la clase heroe me esta obligando a llamar al constructor de persona
// y para eso usamos la palabra reservada super
        constructor(nombre, codigo, frase) {
            super(nombre, codigo, frase);//esto hace referencia a la clase que extiende directamente en este caso es persona
//se debe de llamar primero al constructor padre antes de acceder a cualquier propiedad que use this
//es una regla que despues del constructor se llame el super a menos que no requiera la palabra this en lo absoluto

            this.clan = 'Los Avengers';
        }
        //si necesitamos llamar al metodo quiensoy de persona y tambien mantener el metodo quiensoy de heroe
        //perfectamente se puede hacer, si necesitamos llamar algo directamente de la clase padre y estamos sobre escribiendo
        //en la clase y necesitamos llamar el del padre, simplemente utilizamos el super que hace referencia a la clase
        //a la cual me extiendo, ahi tendremos primero el mensaje de quien soy de la clase heroe
        //y abajo el mensaje de quien soy de la clase persona
        //esto es importante para no reescribir el codigo o cualquier cosa que necesitaramos acceso directo a un metodo
        //de las clases a las cuales se extiende , dentro de otro metodo que hayamos creado en nuestra clase
        quienSoy() {
            console.log(`Soy ${ this.nombre }, ${ this.clan } `);

            super.quienSoy();
        }
    }
    
    //para crear una nueva instancia de esta clase
    
    const spiderman = new Heroe('Peter Parker', 'Spider', 'Soy tu amigable vecino spiderman');
    //const spiderman = new Heroe();
    console.log( spiderman );
    spiderman.quienSoy();

    
    