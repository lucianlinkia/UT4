// Por ultimo, en el archivo main.js, importamos las clases Cuadrado y Circulo.
// creamos una lista de figuras y usamos polimorfismo para calcular 
// el área de cada figura llamando al método area() correspondiente.


const Cuadrado = require("./cuadrado");
const Circulo = require("./circulo");

// Lista con varias figuras:
// para crear la lista de figuras, instanciamos objetos de las clases 
// Cuadrado y Circulo con diferentes dimensiones.
// en cada parentesis pasamos el valor del lado o radio correspondiente.
const figuras = [new Cuadrado(4), new Circulo(3), new Cuadrado(2.5), new Circulo(1)];

// Polimorfismo: desde figura podemos llamar al método area() de cada figura,
// y se ejecutará el método area() correspondiente a cada tipo de figura.
// usamos un bucle for para recorrer la lista de figuras y mostrar el nombre 
// y el área de cada figura en la consola.
for (let i = 0; i < figuras.length; i++) {
  // usamos toFixed(2) para mostrar el área con 2 decimales.
  // usamos console.log para mostrar el nombre y el área de cada figura en la consola.
  // figuras[i].nombre accede al nombre de la figura, y figuras[i].area() llama al 
  // método area() de la figura correspondiente.
  console.log(figuras[i].nombre + ": área = " + figuras[i].area().toFixed(2));
}
