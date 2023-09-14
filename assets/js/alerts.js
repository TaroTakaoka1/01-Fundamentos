
  

  alert('Hola Mundo');// intruccion bloqueante


  let nombre =  prompt('Cual es tu nombre?'); //todo lo que el usuario escriba va a ser almacenado en la variable nombre
  
  console.log( nombre); //null no es lo mismo que undefined, pueden recibir un string vacio, un valor o null en un prompt

  console.log( '*****' + nombre + '*****');// string vacio

  const seleccion = confirm('Esta seguro de borrar esto? ');
  console.log( seleccion );
   // console.log( global );