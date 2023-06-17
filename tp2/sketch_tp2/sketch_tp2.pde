

//vogliolo bianca
// legajo 93545/1
//comision 3 profesor david bedoian
// https://youtu.be/WpI9zaisooQ


//declaro la variable que va a almacenar la imagen de referencia
PImage imagenop;

void setup() {
  //tamaño de la ventana
  size(800, 400);
   //cargar imagen.
 imagenop= loadImage ("arteoptico.jpg");
}

void draw() {
  //fondo blanco
  background(255);
  //guardado de matriz de transformacion
  pushMatrix();
  //llamado a la funcion cuadrado 1 
  cuadrado1(cant, tam, ancho, colorlinea);
  //se restaura la matriz de transformacion
  popMatrix();
  //se muestra la imagen de referencia en la mitad izquierda de la ventana
  image(imagenop, 0, 0, 400, 400);
}

//variables globales
//cant, tam,ancho y color linea son variables que almacenan valores iniciales
int cant=2;
int tam=200;
int ancho=180;
int colorlinea=0;

void cuadrado1(int cant, int tam, int ancho, int colorlinea) {
  noFill(); // establece que los objetos no se dibujen con relleno.
  strokeWeight(8);//establece el grosor del trazo en 8 píxeles.
  stroke(colorlinea);//establece el color del trazo utilizando el valor de la variable colorlinea.
  translate(495, 100);//desplaza el sistema de coordenadas a la posición (495, 100).
  rectMode(CENTER);//configura el modo de dibujo de los rectángulos para que se dibujen a partir de su centro.



  for (int x=0; x<cant; x++) {
    for (int r=ancho; r>cant; r-=30) {
      rect(x*tam, 0, r, r);
      for (int y=0; y<cant; y++) {
        float d=dist(mouseX, mouseY, x, y);
        float m=map(d, 0, 565, 10, 130);
        for (int z=ancho; z>cant; z-=30) {
          rect(x*tam, y*tam, z, z);
          rect(x*tam, y*tam, m, m );
        }
      }
    }
  }
}

//Esta función se ejecuta cuando se presiona un botón del mouse
void mousePressed() {
  //Si el botón presionado es el botón derecho, se asigna un color aleatorio a la variable colorlinea
  if (mousePressed&&(mouseButton==RIGHT)) {
    colorlinea= color(random(278), random(190), random(292));
    ancho++;
  } 
  // Si no es el botón derecho, se asigna otro color aleatorio a colorlinea
  else {
    colorlinea= color(random(48), random(450), random(255));
    ancho--;
  }
} 


//Esta función se ejecuta cuando se presiona una tecla del teclado. Si la tecla presionada es el espacio (' '), se asigna el valor 0 a colorlinea y se restablece ancho a 180.
void keyPressed() {
  if (key==' ') {
    colorlinea=0;
    ancho=180;
  }
} 
