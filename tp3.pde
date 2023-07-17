int pantallaActual = 0; // Variable que controla la pantalla actual
int numPantallas = 24; // Número total de pantallas en la aventura
int[] opciones = new int[numPantallas]; // Arreglo para almacenar las opciones de cada pantalla
PImage[] imagenesPantallas = new PImage[numPantallas]; // Arreglo para almacenar las imágenes de cada pantalla
String[] textoPantallas = new String[numPantallas]; // Arreglo para almacenar el texto de cada pantalla

void setup() {
  size(600, 600);
  cargarImagenesPantallas();
  cargarTextoPantallas();
}

void draw() {
  background(255);
  image(imagenesPantallas[pantallaActual], 0, 0, width, height);
  textSize(20);
  textAlign(CENTER);
  text(textoPantallas[pantallaActual], width/2, height/2);
  
  if (opciones[pantallaActual] != 0) {
    int eleccion = opciones[pantallaActual];
    pantallaActual = ejecutarEleccion(eleccion);
    opciones[pantallaActual] = 0;
  }
}

void keyPressed() {
  if (key >= '1' && key <= '3') {
    int eleccion = key - '0';
    opciones[pantallaActual] = eleccion;
  }
}

void cargarImagenesPantallas() {
  for (int i = 0; i < numPantallas; i++) {
    imagenesPantallas[i] = loadImage("imagen" + i + ".jpg");
  }
}

void cargarTextoPantallas() {
  for (int i = 0; i < numPantallas; i++) {
    textoPantallas[i] = "Texto de la pantalla " + i;
  }
}

int ejecutarEleccion(int eleccion) {
  if (eleccion == 1) {
    return pantallaActual + 1;
  } else if (eleccion == 2) {
    return pantallaActual + 2;
  } else if (eleccion == 3) {
    return pantallaActual + 3;
  }
  return pantallaActual;
}

void mousePressed() {
  cambiarColorFondo();
}

void cambiarColorFondo() {
  float r = random(255);
  float g = random(255);
  float b = random(255);
  background(r, g, b);
}

void cambiarTransparencia(int pantalla, float valorTransparencia) {
  tint(255, valorTransparencia);
  image(imagenesPantallas[pantalla], 0, 0, width, height);
  noTint();
}

float calcularDistancia(int x1, int y1, int x2, int y2) {
  return dist(x1, y1, x2, y2);
}

float mapearValor(float valor, float valorMinimo, float valorMaximo, float nuevoMinimo, float nuevoMaximo) {
  return map(valor, valorMinimo, valorMaximo, nuevoMinimo, nuevoMaximo);
}


  
