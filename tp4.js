
//link al video https://youtu.be/JjNJPm1PeYs
//vogliolo bianca, legajo 93545/1
//comision 3, profesor david bedoian

// Declaración de variables
let estado = 0; // Estado actual del juego
let messiX = 300; // Posición en el eje X de Messi
let messiY = 450; // Posición en el eje Y de Messi
let francesX = [100, 300, 500]; // Posiciones en el eje X de los franceses
let francesY = [-400, -300, 50]; // Posiciones en el eje Y de los franceses
let numFranceses = 3; // Número de franceses en el juego
let estado1StartTime = 0; // Tiempo de inicio del estado 1
let tiempoTranscurridoDesdeEstado1 = 0; // Tiempo transcurrido desde el inicio del estado 1
let caidasFranceses = [0, 0, 0]; // Contador de caídas de los franceses
let maxCaidas = 15; // Número máximo de caídas permitidas
let messi, frances1, frances2, mbappe, francia, campeones; // Imágenes y fondos del juego

// Función para cargar imágenes antes de iniciar el juego
function preload() {
  messi = loadImage('assets/messi.png');
  frances1 = loadImage('assets/frances1.png');
  frances2 = loadImage('assets/frances2.png');
  mbappe = loadImage('assets/mbappe.png');
  francia = loadImage('assets/francia.jpg');
  campeones = loadImage('assets/campeones.jpg');
}

// Configuración inicial del juego
function setup() {
  createCanvas(600, 600);
}

// Bucle principal del juego
function draw() {
  if (estado == 0) {
    estado0();
  } else if (estado == 1) {
    estado1();
  } else if (estado == 2) {
    estado2();
  } else if (estado == 3) {
    estado3();
  } else if (estado == 4) {
    estado4();
  }
}

// Estado 0: Pantalla de inicio
function estado0() {
  background(5, 152, 20);
  tiempoTranscurridoDesdeEstado1 = 0; // Restablecer el tiempo al volver al estado 0
  fill(255);
  stroke(5);
  line(200, 0, 200, 600);
  stroke(5);
  line(400, 0, 400, 600);
  fill(120, 40, 255);
  rectMode(CENTER);
  rect(300, 350, 300, 50);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255);
  text("el baile de la gambeta", 300, 250);
  fill(255);
  textSize(25);
  text("comenzar a jugar", 300, 350);
}

// Función para manejar el evento de clic del mouse
function mousePressed() {
  if (estado == 0 && zonaRect(300, 350, 300, 50)) {
    estado = 1;
    estado1StartTime = millis(); // Iniciar el temporizador del estado 1
  } else if (estado == 2 && zonaRect(width / 2, height / 2 + 50, 200, 50)) {
    estado = 0;
    resetJuego();
  } else if (estado == 3) {
    if (zonaRect(width / 2 - 120, height / 2 + 50, 200, 50)) {
      estado = 0;
      resetJuego();
    } else if (zonaRect(width / 2 + 120, height / 2 + 50, 200, 50)) {
      estado = 4; // Cambia al estado 4 (Créditos)
    }
  } else if (estado == 4 && zonaRect(width / 2, height / 2 + 150, 200, 50)) {
    estado = 0; // Cambia al estado 0 (Nuevo juego)
    resetJuego(); // Reinicia el juego
  }
}

// Función para verificar si el mouse está dentro de un rectángulo
function zonaRect(x, y, w, h) {
  return mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2;
}

// Estado 1: Juego principal
function estado1() {
  tiempoTranscurridoDesdeEstado1 = millis() - estado1StartTime;

  background(5, 152, 20);
  line(200, 0, 200, 600);
  line(400, 0, 400, 600);

  // Controlar el movimiento de Messi con las flechas
  if (keyIsDown(LEFT_ARROW)) {
    messiX -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    messiX += 10;
  }

  // Limitar la posición de Messi para que no salga de la pantalla
  messiX = constrain(messiX, 0, width - 90); // Restamos 90 para que Messi no se salga completamente

  // Dibujar a Messi como una imagen
  image(messi, messiX, messiY, 90, 150);

  // Comprobar colisiones con los jugadores franceses
  for (let i = 0; i < numFranceses; i++) {
    if (
      abs(messiX - francesX[i]) <= 60 &&
      abs(messiY - francesY[i]) <= 60
    ) {
      estado = 2; // Cambiar a estado 2 en caso de colisión
    }
  }

  // Dibujar a los jugadores franceses
  dibujarFranceses();

  for (let i = 0; i < numFranceses; i++) {
    if (
      messiX + 25 > francesX[i] - 50 &&
      messiX - 25 < francesX[i] + 50 &&
      messiY + 25 > francesY[i] - 25 &&
      messiY - 25 < francesY[i] + 25
    ) {
      estado = 2;
    }
  }

  if (tiempoTranscurridoDesdeEstado1 >= 30000) {
    estado = 3;
  }
}

// Función para dibujar a los jugadores franceses
function dibujarFranceses() {
  fill(5, 152, 20);
  for (let i = 0; i < numFranceses; i++) {
    // Determinar qué imagen usar según la posición del "francés"
    let imagen;
    rect(francesX[i], francesY[i], 90, 150);
    if (i === 0) {
      imagen = frances1; // Usar la imagen frances1 para el primer "francés"
    } else if (i === 1) {
      imagen = mbappe; // Usar la imagen mbappe para el segundo "francés"
    } else {
      imagen = frances2; // Usar la imagen frances2 para el tercer "francés"
    }
    
    // Dibujar la imagen
    image(imagen, francesX[i] - 50, francesY[i] - 70, 100, 150); // Dibujar la imagen con el ancho y alto de 50 y 100
    francesY[i] += 2 + caidasFranceses[i];

    if (francesY[i] > height && caidasFranceses[i] < maxCaidas) {
      francesY[i] = -200;
      caidasFranceses[i]++;
    }
  }
}

// Estado 2: Pantalla de pérdida
function estado2() {
  background(5, 152, 20);
  // Dibujar la imagen "francia.jpg" ocupando toda la pantalla
  image(francia, 0, 0, width, height);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text("Perdiste", width / 2, height / 2);

  fill(120, 40, 255);
  rectMode(CENTER);
  rect(width / 2 - 120, height / 2 + 50, 200, 50);
  fill(255);
  textSize(20);
  text("Volver a Jugar", width / 2 - 120, height / 2 + 50);
  textSize(20);
  text("Presiona el botón para volver a jugar ", width / 2, height / 2 + 100);
}

// Estado 3: Pantalla de victoria
function estado3() {
  background(5, 152, 20);
  // Dibujar la imagen "campeones.jpg" ocupando toda la pantalla
  image(campeones, 0, 0, width, height);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(0, 255, 0);
  text("Ganaste", width / 2, height / 2);

  fill(120, 40, 255);
  rectMode(CENTER);
  rect(width / 2 - 120, height / 2 + 50, 200, 50);
  fill(255);
  textSize(20);
  text("Volver a Jugar", width / 2 - 120, height / 2 + 50);

  fill(120, 40, 255);
  rectMode(CENTER);
  rect(width / 2 + 120, height / 2 + 50, 200, 50);
  fill(255);
  textSize(20);
  text("Ver Créditos", width / 2 + 120, height / 2 + 50);

  textSize(20);
  text("Presiona los botones para volver a jugar o ver los créditos", width / 2, height / 2 + 100);

  if (tiempoTranscurridoDesdeEstado1 >= 30000) {
    estado = 3;
  }
}

// Estado 4: Pantalla de créditos
function estado4() {
  background(5, 152, 20);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill(255, 165, 0);
  text("Créditos", width / 2, height / 2);

  textSize(24);
  fill(255);
  text("Vogliolo bianca, legajo: 9545/1", width / 2, height / 2 + 50);
  text("Comisión 3, profesor David Bedoian", width / 2, height / 2 + 100);

  fill(120, 40, 255);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 150, 200, 50);
  fill(255);
  textSize(20);
  text("Volver a Jugar", width / 2, height / 2 + 150);
}

// Función para reiniciar el juego
function resetJuego() {
  messiX = 300;
  estado1StartTime = millis(); // Reiniciar el temporizador del estado 1
  tiempoTranscurridoDesdeEstado1 = 0;
  for (let i = 0; i < numFranceses; i++) {
    francesY[i] = random(-300, 0);
    caidasFranceses[i] = 0;
  }
}
