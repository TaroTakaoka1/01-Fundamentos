

const dia = 4; //0 es domingo

//queremos imprimir un mensaje cuando es domingo cuando es lunes
//recordemos que aqui esta haciendo una evaluacion con el triple igual, esta evaluando el valor
//y que sea el mismo tipo de dato
switch( dia ) { //el switch va a evaluar el valor que tenemos entre parentesis en este caso dia
   //y lo va a comparar con el case 0
   //para decirle a js que queremos salirnos de todo el procedimiento hay que poner la palabra reservada break;
   //cada condicion case necesita su break a menos que queramos ejecutar todas las condiciones subsiguientes a la que queremos

    case 0:
        console.log('Domingo');
        break; //el break dice hasta aqui quiero llegar
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default: //el default es lo que queremos que se ejecute si el dia no corresponde a ninguna de las condiciones anteriores
        console.log('No es lunes, martes o domingo');
}