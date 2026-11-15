//por ultimo, en main.js, creamos un objeto de la clase Coche y 
// mostramos sus atributos y métodos en la consola.
// importamos la clase Coche para poder crear un objeto de ella.

const Coche = require("./coche");

// en el parentesis del constructor, pasamos los valores
//  de marca, velocidad y puertas.
const miCoche = new Coche("Toyota", 120, 5);

// mostramos los atributos del objeto miCoche en la consola.
console.log("Marca: " + miCoche.marca);
console.log("Velocidad: " + miCoche.velocidad + " km/h");
console.log("Puertas: " + miCoche.puertas);

// usamos los métodos setter para modificar los atributos del objeto miCoche.
miCoche.marca = "Honda";
console.log("Nueva marca: " + miCoche.marca);

miCoche.puertas = 3;
console.log("Nuevas puertas: " + miCoche.puertas);

miCoche.velocidad = 185;
console.log("Nueva velocidad: " + miCoche.velocidad + " km/h");

miCoche.velocidad = -10; // no debería dejar cambiarla
console.log("Velocidad final: " + miCoche.velocidad + " km/h");

// en la terminal ejecutamos el comando node src/ACT4/main.js 
// para ver el resultado en la consola.