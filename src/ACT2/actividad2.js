// Actividad 2:
const prompt = require("prompt-sync")();

// Definimos la clase Alumno con un constructor que recibe nombre, edad y nota.
class Alumno {
  constructor(nombre, edad, nota) { 
    // el constructor sirve para inicializar los atributos 
    // de la clase cuando se crea un nuevo objeto.
    // se usa this para referirse a los atributos del objeto actual.
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  mostrar() {
    return this.nombre + " (" + this.edad + " años) - Nota: " + this.nota;
  }
  // el método mostrar devuelve un string con la información del alumno.
}

// Creamos un array vacío para almacenar los objetos Alumno.
const alumnos = [];

// Pedimos los datos de 3 alumnos con un bucle for:
for (let i = 1; i <= 3; i++) {
  const nombre = prompt("Alumno " + i + " - Nombre: ");
  // prompt muestra un mensaje en la consola indicando el 
  // número de alumno y el dato que se está solicitando.
  const edad = parseInt(prompt("Alumno " + i + " - Edad: "));
  // parseInt convierte la entrada del usuario (que es un string) en un número entero.
  // const edad es donde almacenamos la edad introducida por el usuario.
  // i es el número de alumno que estamos solicitando, empezando desde 1 hasta 3.
  const nota = parseFloat(prompt("Alumno " + i + " - Nota: "));
  // parseFloat convierte la entrada del usuario (que es un string) en un número decimal.

// alumnos.push() agrega el nuevo objeto Alumno al final del array alumnos.
// new Alumno(nombre, edad, nota) crea un nuevo objeto Alumno con los datos introducidos.
  alumnos.push(new Alumno(nombre, edad, nota));
  // el bucle se repite 3 veces, solicitando los datos de cada alumno y agregándolos al array.
}

// Alumno con la nota más alta:
// declaramos la variable mejor y le asignamos el primer elemento del array alumnos.
// luego recorremos el array desde el segundo elemento (i = 1) hasta el último (alumnos.length).
// si el bucle encuentra un alumno con una nota mayor que la del alumno actual en "mejor",
// se actualiza "mejor" con ese alumno.
let mejor = alumnos[0];
for (let i = 1; i < alumnos.length; i++) {
  if (alumnos[i].nota > mejor.nota) {
    mejor = alumnos[i];
  }
}

// Promedio de notas:
// declaramos la variable sumaNotas y le asignamos 0.
// luego recorremos el array alumnos y vamos sumando las notas de cada alumno a sumaNotas.
// finalmente, calculamos el promedio dividiendo sumaNotas entre la cantidad de alumnos 
// (alumnos.length).
let sumaNotas = 0;
for (let i = 0; i < alumnos.length; i++) {
  sumaNotas += alumnos[i].nota;
}
const media = sumaNotas / alumnos.length;

// Mostramos en la consola el alumno con la nota más alta y el promedio de notas.
// usamos el método mostrar() del objeto mejor para obtener la información del alumno.
console.log("Alumno con la nota más alta: " + mejor.mostrar());
// usamos toFixed(2) para mostrar el promedio con 2 decimales.
// toFixed() es un método que formatea un número para mostrarlo con una cantidad 
// específica de decimales.
console.log("Promedio de notas: " + media.toFixed(2));

// ejecutamos el código con node src/ACT2/actividad2.js 
// y seguimos las instrucciones en la consola.