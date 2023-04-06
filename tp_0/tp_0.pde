


void setup() {

  //hice uso de la funcion size para determinar el tamaño de la ventana que en este caso es de 800 en el eje X y de 400 en el eje Y
  size (800, 400);

  // use la funcion background para determinar el color de fondo usando los parametros RGB
  background (193, 182, 92);


  
}

void draw () {
  


  // use la funcion fill para determinar el color del cual yo iba a querer mi ellipse
  fill (230, 150, 100);
  // use la funcion ellipse para formar un ovalo que simulara ser un cara
  ellipse (200, 200, 200, 300);


  // la funcion fill para pintarlos de blanco utilize la funcion ellipse para formar los ojos (espacios en blanco)
  fill (255);
  ellipse (250, 170, 50, 30);
  fill (255);
  ellipse(150, 170, 50, 30);

  fill (0, 150, 150);
  // la funcion ellipse la use para hacer el espacio de las pupilas del ojo derecho
  ellipse (250, 170, 15, 15);
  // la funcion ellipse la use para hacer el espacio de las pupilas del ojo derecho


  fill (0, 255);
  ellipse (250, 170, 4, 4);


  // fill para elegir el color de la pupilla y ellipse para elegir ubicacion y tamaño de la pupila del ojo izquierdo
  fill (0, 150, 150);
  ellipse (150, 170, 15, 15);


  //use la funcion fill para generar el color negro y la funcion ellipse para generar el punto de la pupila del ojo izquierdo
  fill(0, 255);
  ellipse (150, 170, 4, 4);


  // fill lo use para elegir el color de los labios y las ellipses la use para generar la forma de los labios
  fill (255, 0, 70);
  ellipse (200, 280, 70, 10);
  ellipse (200, 290, 60, 10);


  // fill para generar el color del triangulo
  fill (230, 150, 100);
  //el triangulo para generar una representacion de la nariz, el primer triangulo lo saque con la funcion line para entender cuales eran X1/2/3 y para entender cuales eran Y1/2/3
  triangle (200, 180, 220, 240, 180, 240);

  // utilizo la funcion ellipse con distintos parametros para hacer el pelo;
  fill (236, 235, 174);
  ellipse (150, 50, 40, 40);
  ellipse (150, 70, 40, 40);
  ellipse (130, 90, 40, 40);
  ellipse (120, 110, 40, 40);
  ellipse (110, 130, 40, 40);
  ellipse (100, 150, 40, 40);
  ellipse (100, 170, 40, 40);
  ellipse (100, 190, 40, 40);
  ellipse (100, 210, 40, 40);
  ellipse (100, 230, 40, 40);
  ellipse (100, 250, 40, 40);
  ellipse (100, 270, 40, 40);
  ellipse (100, 290, 40, 40);
  ellipse (100, 310, 40, 40);
  ellipse (100, 330, 40, 40);
  ellipse (80, 110, 40, 40);
  ellipse (80, 130, 40, 40);
  ellipse (80, 150, 40, 40);
  ellipse (80, 170, 40, 40);
  ellipse (80, 190, 40, 40);
  ellipse (80, 210, 40, 40);
  ellipse (80, 230, 40, 40);
  ellipse (80, 250, 40, 40);
  ellipse (80, 270, 40, 40);
  ellipse (80, 290, 40, 40);
  ellipse (80, 310, 40, 40);
  ellipse (80, 330, 40, 40);
  ellipse (120, 60, 40, 40);
  ellipse (140, 60, 40, 40);
  ellipse (100, 80, 40, 40);
  ellipse (230, 40, 40, 40);
  ellipse (280, 60, 40, 40);
  ellipse (280, 100, 40, 40);
  ellipse (310, 80, 40, 40);
  ellipse (210, 50, 40, 40);
  ellipse (180, 50, 40, 40);
  ellipse (250, 50, 40, 40);
  ellipse (270, 70, 40, 40);
  ellipse (290, 90, 40, 40);
  ellipse (300, 110, 40, 40);
  ellipse (300, 130, 40, 40);
  ellipse (305, 150, 40, 40);
  ellipse (305, 170, 40, 40);
  ellipse (305, 190, 40, 40);
  ellipse (305, 210, 40, 40);
  ellipse (305, 230, 40, 40);
  ellipse (305, 250, 40, 40);
  ellipse (305, 270, 40, 40);
  ellipse (305, 290, 40, 40);
  ellipse (305, 310, 40, 40);
  ellipse (305, 330, 40, 40);
  ellipse (320, 110, 40, 40);
  ellipse (320, 130, 40, 40);
  ellipse (320, 150, 40, 40);
  ellipse (320, 170, 40, 40);
  ellipse (320, 190, 40, 40);
  ellipse (320, 210, 40, 40);
  ellipse (320, 230, 40, 40);
  ellipse (320, 250, 40, 40);
  ellipse (320, 270, 40, 40);
  ellipse (320, 290, 40, 40);
  ellipse (320, 310, 40, 40);
  ellipse (320, 330, 40, 40);
  
  //fill para elegir el color
  fill (232, 216, 89);
  
  // funcion rectangle para las cejas
  rect (115,140, 50, 10);
  rect (230, 140, 50, 10);
}
