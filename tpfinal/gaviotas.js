// Definición de la clase Gaviota (enemigo)
class Gaviota {
  constructor(x, velocidad) {
    this.x = x;
    this.y = 0; // Posición inicial en la parte superior del lienzo
    this.velocidad = velocidad * 0.15; // Velocidad de caída reducida
  }

  // Método para mostrar a la gaviota en el lienzo
  mostrar() {
    image(gaviota1Img, this.x, this.y, 80, 80); // Se muestra la imagen de la gaviota con un tamaño de 80x80 píxeles
  }

  // Método para simular la caída de la gaviota
  caer() {
    this.y += this.velocidad;
    if (this.y > height) {
      this.y = 0; // Reiniciar la posición cuando la gaviota llega al fondo del lienzo
    }
  }
}
