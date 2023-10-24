
//Los arreglos son un objeto muy parecido a una lista de informacion, que contiene un grupo de elementos, usualmente esa informacion dentro del arreglo es del mismo tipo de dato
//los arreglos en javaScrip empiezan con la posicion en 0

//const arr = new Array(10);  //poco comun pero hay personas que la utilizan 
//const arr = []; //lo mas comun
//console.log(arr);

let videoJuegos = ['Mario 3' , 'Megaman' , 'Chrono Trigger'];
console.log({videoJuegos}); //para imprimir el valor del arreglo
console.log(videoJuegos[0]); //del arreglo me interesa la primera posicion
console.log(videoJuegos[1]); // del arreglo me interesa la segunda posicion
console.log(videoJuegos[2]); // del arreglo me interesa la tercera posicion

//otro tipo de arreglo
let arregloCosas = [   
    true,
    123,
    'Taro',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1},
    
    //estos son dos arreglos dentro de un arreglo, luego trataremos de imprimir sus posiciones
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr.Willy',
        'Woodman',
    ]]  
     
];

//console.log({arregloCosas});
//console.log(arregloCosas[2]);
console.log(arregloCosas[7][4][1]); //identificar en que numero esta el primer arreglo que necesitamos, buscamos el segundo arreglo y luego la posicion del String
