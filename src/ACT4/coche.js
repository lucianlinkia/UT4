// paso 2: creamos la clase Coche que hereda de Vehiculo y 
// añade el atributo puertas, con sus métodos getter y setter.

// importamos la clase Vehiculo para poder heredar de ella.
const Vehiculo = require("./vehiculo");

class Coche extends Vehiculo {
  #puertas;

  constructor(marca, velocidad, puertas) {
    super(marca, velocidad); 
    // llamamos al constructor de la clase padre Vehiculo con super().
    // inicializamos el nuevo atributo puertas.
    this.#puertas = puertas;
  }

  // creamos los métodos getter y setter para el atributo puertas
  // los de velocidad y marca ya los hereda de la clase padre Vehiculo.
  get puertas() {
    return this.#puertas;
  }

  set puertas(nuevasPuertas) {
    this.#puertas = nuevasPuertas;
  }
}
// exportamos para poder usar la clase Coche en main.js
module.exports = Coche;
