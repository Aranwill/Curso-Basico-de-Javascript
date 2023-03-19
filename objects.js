// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);

/***********************************RETO**********************************************/

// CREAR UNA FUNCCION DONDE CREE UNA LISTA DE 30 AUTO CON LAS SIGUIENTES DESCRIPCIONES - DENTRO DE UN CONSTRUCTOR

//INICIALIZAMOS UN OBJETO VACIO
var cars = [];

//LE ASIGNAMOS LOS VALORES POR DEFAULT
var marcas = ["Wolswagen", "Toyota", "Chevrolet", "Fiat", "Hyundai", "Ford"];

var modelos = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

var color = ["Blanco", "Negro", "Gris", "Rojo", "Azul", "Verde", "Plateado"];

var nombre = ["Vento", "Corolla", "Palio", "Ranger", "Accent", "Focus"]; //ANEXO 

// CREAMOS EL CONSTRUCTOR
function Car (marca, modelo, color, nombre) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.nombre = nombre;
}

//RECOREMOS EL CONSTRUCTOR CON UN FOR Y LE ASIGNAMOS VALORES ALEATORIOS CON MATH.RANDOM PARA C/U DE LOS PARAMETROS A INCLUIR EN EL OBJETO
for (let i = 0; i < 30; i++){
    (cars.push(new Car(marcas[Math.floor(Math.random() * marcas.length)],
    modelos[Math.floor(Math.random() * modelos.length)], 
    color[Math.floor(Math.random() * color.length)],
    nombre[Math.floor(Math.random() * nombre.length)])))
}

// IMPRIMOS LOS OBJETOS CON TODOS LOS PARAMETROS RANDOM
console.log(cars);
