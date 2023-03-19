// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

var edad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

var edad = 18; 
var accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

var numero = 1; 
var resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

var numero = 1; 
var resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una funcion que reciba el parametro con el que vamos a jugar, y me regrese si gane o perdí. 


let piedra = 0; // reference
let papel = 1; // reference
let tijeras = 2; // reference

function Game(user, machine){
    if (user == 0 && machine == 2) {
        console.log ("User Win");
    } else if (machine == 0 && user == 2){
        console.log ("Machine Win");
    } else if (user == 2 && machine == 1){
        console.log("User Win");
    } else if (machine == 2 && user == 1){
        console.log("Machine Win");
    } else if (user == 1 && machine == 0){
        console.log("User Win")
    } else if (machine == 1 && user == 0){
        console.log("Machine Win")
    } else console.log("Tie")
}

Game(1, 2);



/*  
Variables piedra, papel y tiejeras 
una funcion que utilice cindicionales para validar si el parametro que le estoy pasando gana o pierde. 
y que la funcion al final me regrese el resultado de si gané, o  perdí. 
*/ 