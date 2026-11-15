// Actividad 1
// require("prompt-sync")() es una libreria que permite
//  leer datos del usuario desde la consola.
// se instala con npm install prompt-sync.
const prompt = require("prompt-sync")();

//Suma:
// declaramos la funcion suma
// (numeros) es un array de numeros que solicitamos al usuario.
function suma(numeros) {
  let total = 0;   //total es una variable con valor inicial de 0.
  // con for recorremos el array, sumando cada elemento al total.
  // numeros.length es la longitud del array, es decir, el número de elementos que contiene.
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i]; // total = total + elemento actual del array. 
  }
  return total; 
  //la funcion termina devolviendo el total de la suma del array.
}

// Máximo:
// declaramos la funcion maximo
// (numeros) es un array de numeros que solicitamos al usuario.
function maximo(numeros) {
  let max = numeros[0]; 
  // max es una variable con valor inicial del primer elemento del array.
  // si ponemos 2,6,9 en el array, max empieza en 2, y luego se compara con 6 y 9.
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) { 
    //usamos if para comparar cada elemento del array con el valor actual de max.
      max = numeros[i];
    }
  }
  return max;
}
// Mínimo:
// Funciona igual que maximo, pero buscando el valor mas pequeño del array.
function minimo(numeros) {
  let min = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < min) {
      min = numeros[i];
    }
  }
  return min;
}

// Promedio:
// declaramos la funcion promedio
// (numeros) es un array de numeros que solicitamos al usuario.
function promedio(numeros) { 
  // la funcion promedio llama a la funcion suma para obtener el total de los elementos del array,
  // luego divide ese total entre la cantidad de elementos del array (numeros.length).
  return suma(numeros) / numeros.length;
}

// una vez definidas las funciones, pedimos al usuario que introduzca
// la cantidad de números que desea ingresar y luego 
// los almacenamos en un array llamado numeros.
const numeros = []; // array vacío para almacenar los números introducidos.
const cantidad = parseInt(prompt("¿Cuántos números quieres introducir? "));
// cantidad es el numero de elementos que el usuario quiere ingresar.
// parseInt convierte la entrada del usuario (que es un string) en un número entero.
// prompt es la función que muestra un mensaje en la consola y espera
// que el usuario escriba algo y presione Enter.

// con un bucle for, pedimos al usuario que introduzca cada número.
for (let i = 0; i < cantidad; i++) {
  // parseFloat convierte la entrada del usuario (que es un string) en un número decimal.
  // const n es la variable que almacena el número introducido por el usuario.
  // prompt muestra un mensaje en la consola indicando el número que se está solicitando.
  const n = parseFloat(prompt("Número " + (i + 1) + ": "));
  numeros.push(n);
  // push agrega el número introducido al final del array numeros y n es el número 
  // que se acaba de introducir.
}

console.log("Lista:", numeros);
console.log("Suma:", suma(numeros));
console.log("Máximo:", maximo(numeros));
console.log("Mínimo:", minimo(numeros));
console.log("Promedio:", promedio(numeros));
// finalmente, mostramos en la consola la lista de números introducidos
// y los resultados de las funciones suma, maximo, minimo y promedio.

// ejecutamos el código con node src/ACT1/actividad1.js en la terminal 
// para verificar que funciona correctamente.