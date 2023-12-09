// Definición de la clase Ursula (jugador)
class Ursula {
  constructor() {
    this.x = width / 2;
    this.y = height - 70; // Posición inicial en la parte inferior del lienzo
    this.velocidad = 200; // Velocidad de movimiento
  }

  // Método para mostrar a Ursula en el lienzo
  mostrar() {
    image(ursulaImg, this.x, this.y, 70, 70); // Se muestra la imagen de Ursula con un tamaño de 70x70 píxeles
  }

  // Método para mover a Ursula hacia la izquierda
  moverIzquierda() {
    this.x -= this.velocidad;
    this.x = constrain(this.x, 0, width - 40); // Se asegura de que Ursula no salga del lienzo
  }

  // Método para mover a Ursula hacia la derecha
  moverDerecha() {
    this.x += this.velocidad;
    this.x = constrain(this.x, 0, width - 40); // Se asegura de que Ursula no salga del lienzo
  }

  // Método para la lógica de movimiento (puedes ajustar según tus necesidades)
  mover() {
    // Lógica de movimiento de Ursula (puedes ajustar según tus necesidades)
  }

  // Método para verificar la colisión con una gaviota
  colision(gaviota) {
    let distancia = dist(this.x + 35, this.y + 35, gaviota.x + 40, gaviota.y + 40);
    return distancia < 45; // Valor ajustado para la detección de colisiones
  }
}
