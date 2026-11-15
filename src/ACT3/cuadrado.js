// Paso 2: Crear la clase Cuadrado
// Aqui se define la clase Cuadrado, que hereda de la clase Figura. 
// Tiene un constructor que recibe el lado del cuadrado y 
// un método area() que calcula el área del cuadrado 
// usando la fórmula lado * lado.

// require("./figura") importa la clase Figura.
const Figura = require("./figura");

class Cuadrado extends Figura {
  // extends es la palabra clave que indica que Cuadrado hereda de Figura.
  // super("Cuadrado") llama al constructor de la clase base Figura,
  // pasando el nombre "Cuadrado" como argumento.
  constructor(lado) {
    super("Cuadrado");
    this.lado = lado;
  }
// definimos la funcion para calcular el area del cuadrado, que es lado * lado.
  area() {
    return this.lado * this.lado;
  }
}
// module.exports = Cuadrado es para exportar la clase Cuadrado,
// para que pueda ser utilizada en otros archivos, en este caso en main.js.
module.exports = Cuadrado;
