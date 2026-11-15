// Actividad 4:
// paso 1: creamos la clase Vehiculo con los atributos marca y 
// velocidad, y sus métodos getter y setter.

class Vehiculo {
  #marca;       // con el símbolo # indicamos que el atributo es privado.
  #velocidad;

  // el constructor sirve para inicializar los atributos.
  constructor(marca, velocidad) {
    this.#marca = marca;
    this.velocidad = velocidad;
  }

  // el metodo getter nos permite acceder al 
  // valor del atributo privado marca.
  get marca() {
    return this.#marca;
  }

  // el metodo setter nos permite modificar el
  // valor del atributo privado marca.
  set marca(nuevaMarca) {
    this.#marca = nuevaMarca;
  }

  get velocidad() {
    return this.#velocidad;
  }
// en el settter de velocidad, validamos que la nueva velocidad no sea negativa.
// usamos un bucle if para verificar si la nueva velocidad es mayor o igual a cero.
// en caso contrario, mostramos un mensaje de error en la consola.
  set velocidad(nuevaVelocidad) {
    if (nuevaVelocidad >= 0) {
      this.#velocidad = nuevaVelocidad;
    } else {
      console.log("Error: la velocidad no puede ser negativa");
    }
  }
}

// exportamos la clase Vehiculo para poder usarla en otros archivos.
module.exports = Vehiculo;
