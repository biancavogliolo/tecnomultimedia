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



// Función setup() que se ejecuta al inicio para configurar el lienzo y otros elementos
function setup() {
  createCanvas(600, 400);
  ursula = new Ursula();
  //gaviota1 = new Gaviota();
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
