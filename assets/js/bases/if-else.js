

//estructura de control

let a = 5;

//el if tiene estos parentesis y simboliza que es una funcion y lo que esta
//esperando esta funcion es un valor boolean "true,false"

if ( a >= 10  ) { //aqui preguntamos si a es mayor o igual a 10
     console.log('A es mayor o igual a 10');//si a es mayor a 10 ejecuta esto
//si queremos ejecutar una condicion si a es menor a 10, ahi ponemos el else
    }else {

        console.log('A es menor a 10'); //si a es menor ejecuta esto


}

//console.log('Fin de programa');

//el new me permite crear una nueva instancia de un objeto 
//Date obtiene la informacion del momento actual(dia,fecha,ano,hora)
const hoy = new Date();
let dia = hoy.getDay(); //0:domingo, 1:lunes, 2:,martes....
console.log( hoy);
console.log( dia );//imprime el numero del dia que corresponde







//si queremos que imprima en lugar del numero, imprimir si es domingo,lunes,martes....
//nunca utilizar el = si estamos haciendo condiciones
//el doble igual lo que hace es confirmar si en este caso el dia es igual al valor 0 pero no me importa el tipo si es string o numero

if ( dia === 0 ) {//el triple igual es evaluar que los valores internos sean lo mismo y el tipado de los mismos tambien
    console.log('Domingo');
    //se puede hacer en dos formas las condiciones anidadas
    //tambien se puede poner directamente en el else y se conoce como else-if
}else if( dia === 1 ) {
    console.log('lunes');
    //if ( dia === 1 ){ 
    //console.log('Lunes');
    //} else {
     //   console.log('No es lunes ni domingo');
    //}
  
}else if ( dia === 2 ){
    console.log('Martes');
}else {
    console.log('No es lunes, martes o domingo..');
}

//como hacer lo mismo pero sin el if o el else solo con objetos
//tenemos un objeto que cuya llaves son los dias de la semana y su valor es el dia de la semana
dia = 10; //para cambiar manualmente el dia de la semana
const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
    
}

//el operador or para asignar o preguntar si en este caso el objeto tiene valor si  no es 
//null o undifined  entonces va a tomar en este caso el valor de dia no definido pero si tiene valor jamas va a llegar a la otra condicion 
console.log( diasLetras [dia] || 'Dia no definido')





