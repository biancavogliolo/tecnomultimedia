//Vogliolo Bianca
//https://youtu.be/WAoKcNYjXA8



// Declaración de variables para las imágenes y los objetos del juego
let ursulaImg;
let gaviota1Img, gaviota2Img, gaviota3Img;
let ursula;
let gaviota1, gaviota2, gaviota3;
let gameOver = false;
let ganaste = false;
let pantallaInicio = true;
let botonJugar;
let botonReiniciar;
let tiempoInicio;

// Función preload() para cargar las imágenes antes de que comience el juego
function preload() {
  ursulaImg = loadImage('data/ursula.png');
  gaviota1Img = loadImage('data/gaviota1.png');
  gaviota2Img = loadImage('data/gaviota2.png');
  gaviota3Img = loadImage('data/gaviota3.png');
}

// Función setup() que se ejecuta al inicio para configurar el lienzo y otros elementos
function setup() {
  createCanvas(600, 400);
  crearBotonJugar(); // Se llama a la función para crear el botón "Jugar"
}

// Función draw() que se ejecuta continuamente para dibujar y actualizar el juego
function draw() {
  background(7, 133, 240); // Fondo azul

  // Dibujar líneas verticales en el lienzo
  stroke(0);
  line(200, 0, 200, height);
  line(400, 0, 400, height);

  // Verificar el estado del juego y realizar acciones según el estado
  if (pantallaInicio) {
    mostrarPantallaInicio();
  } else if (!gameOver && !ganaste) {
    ursula.mostrar();
    ursula.mover();

    gaviota1.mostrar();
    gaviota1.caer();
    gaviota2.mostrar();
    gaviota2.caer();
    gaviota3.mostrar();
    gaviota3.caer();

    // Verificar colisiones entre Ursula y las gaviotas
    if (ursula.colision(gaviota1) || ursula.colision(gaviota2) || ursula.colision(gaviota3)) {
      console.log("¡Colisión! Juego terminado");
      gameOver = true;
      mostrarBotonReiniciar();
    }

    // Verificar si ha pasado 30 segundos sin colisiones
    if (millis() - tiempoInicio > 30000) {
      ganaste = true;
      mostrarBotonReiniciar();
    }
  } else if (ganaste) {
    mostrarMensajeFinal("¡Ganaste!");
    mostrarBotonReiniciar();
  } else {
    mostrarMensajeFinal("Perdiste");
    mostrarBotonReiniciar();
  }
}

// Función para crear el botón "Jugar"
function crearBotonJugar() {
  botonJugar = createButton('Jugar');
  botonJugar.position(width / 2 - botonJugar.width / 2, height / 2 + 20);
  botonJugar.mousePressed(iniciarJuego); // Se asigna la función iniciarJuego al evento de clic
}

// Función que se ejecuta al presionar el botón "Jugar"
function iniciarJuego() {
  pantallaInicio = false; // Se cambia el estado del juego a iniciar
  ganaste = false;
  botonJugar.remove(); // Se elimina el botón "Jugar"
  gameOver = false;
  tiempoInicio = millis(); // Iniciar temporizador
  ursula = new Ursula(); // Se crea una nueva instancia de la clase Ursula

  // Definir las velocidades y barajarlas aleatoriamente
  let velocidades = [6, 9, 3];
  shuffle(velocidades, true);

  // Se crean nuevas instancias de la clase Gaviota con diferentes velocidades
  gaviota1 = new Gaviota(100, velocidades[0]);
  gaviota2 = new Gaviota(300, velocidades[1]);
  gaviota3 = new Gaviota(500, velocidades[2]);
}

// Función para mostrar la pantalla de inicio
function mostrarPantallaInicio() {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Iniciar Juego", width / 2, height / 2 - 20);
}

// Función para mostrar el mensaje final
function mostrarMensajeFinal(mensaje) {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text(mensaje, width / 2, height / 2 - 20);
}

// Función para mostrar el botón "Reiniciar"
function mostrarBotonReiniciar() {
  if (!botonReiniciar) {
    botonReiniciar = createButton('Reiniciar');
    botonReiniciar.position(width / 2 - botonReiniciar.width / 2, height / 2 + 20);
    botonReiniciar.mousePressed(reiniciarJuego); // Se asigna la función reiniciarJuego al evento de clic
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  pantallaInicio = true;
  ganaste = false;
  if (botonReiniciar) {
    botonReiniciar.remove(); // Se elimina el botón "Reiniciar"
    botonReiniciar = null;
  }
  crearBotonJugar(); // Se crea nuevamente el botón "Jugar"
}

// Función que se ejecuta cuando se presionan las teclas
function keyPressed() {
  if (!gameOver && !ganaste && !pantallaInicio) {
    if (keyCode === LEFT_ARROW) {
      ursula.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      ursula.moverDerecha();
    }
  }
}

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
