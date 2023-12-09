class Juego
{
  constructor(ursula, gavi1, gavi2, gavi3) {
    this.ursulaImg = ursula;
    this.gaviota1Img = gavi1;
    this.gaviota2Img = gavi2;
    this.gaviota3Img = gavi3;
    this.ursula = new Ursula();
    this. gaviota1, gaviota2, gaviota3;
    this. gameOver = false;
    this. ganaste = false;
    this. pantallaInicio = true;
    this. botonJugar;
    this.botonReiniciar;
    this. tiempoInicio;
  }
  
  // Función preload() para cargar las imágenes antes de que comience el juego
function preload() {
  ursulaImg = loadImage('data/ursula.png');
  gaviota1Img = loadImage('data/gaviota1.png');
  gaviota2Img = loadImage('data/gaviota2.png');
  gaviota3Img = loadImage('data/gaviota3.png');
}
}
