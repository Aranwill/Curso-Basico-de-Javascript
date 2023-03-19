// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 

/*********************RETO**************************** */

// CREAMOS UN JUEGO DE PIEDRA PAPEL Y TIJERAS 


let piedra = 0; // reference
let papel = 1; // reference
let tijeras = 2; // reference


// CREAMOS UNA FUNCION UTILIZANDO SWITCH PARA C/U DE LOS POSIBLES CASOS A ESCOJER
var GAME = function Game(User, Machine){
  switch(true){
    case (User === 0 && Machine === 2):
      console.log("User Win");
      break;
    case (Machine === 0 && User === 2):
      console.log ("Machine Win");
      break;
    case (User === 2 && Machine === 1):
      console.log("User Win");
      break;
    case (Machine === 2 && User === 1):
      console.log("Machine Win");
      break;
    case (User === 1 && Machine === 0):
      console.log("User Win");
      break;
    case (Machine === 1 && User === 0):
      console.log("Machine Win");
      break;
    case (Machine === User):
      console.log("Tie");
      break;
  };
}

// ESCOJEMOS NUM (VALOR TOMADO DE LA REFERENCIA) Y PROBAMOS LA VALIDACION DE CASOS
GAME(2,2);

