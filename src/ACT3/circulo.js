//Paso 3: Crear la clase Circulo
// Aqui se define la clase Circulo, que hereda de la clase Figura. 
// Tiene un constructor que recibe el radio del circulo y 
// un método area() que calcula el área del circulo 
// usando la fórmula PI * radio * radio.  

// viene a ser lo mismo que la clase cuadrado, pero con su propia 
// fórmula para calcular el área.
const Figura = require("./figura");

class Circulo extends Figura {
  constructor(radio) {
    super("Círculo");
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio * this.radio;
  }
}

module.exports = Circulo;
