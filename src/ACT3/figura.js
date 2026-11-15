// Paso 1: Crear la clase Figura
// Aqui se define la clase Figura, que es la clase base para 
// todas las figuras geométricas. 
// Tiene un constructor que recibe el nombre de la figura y 
// un método area() que devuelve 0 por defecto, ya que 
// cada figura tendra su calculo de area especifico.

class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  area() {
    return 0;
  }
}

// module.exports = Figura es para exportar la clase Figura,
// para que pueda ser utilizada en otros archivos, en este caso 
// en cuadrado.js y circulo.js.
module.exports = Figura;
