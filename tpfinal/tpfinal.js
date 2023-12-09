// Pestaña 3: Sketch.js
let Historia;
let pantallas;
let imagenes;
//let textos;
let botones;


function setup() {
  createCanvas(600, 600);
  textos = new textos ();
  imagenes = new ManejoDeImagenes();
  pantallas = [];//new Pantalla ();
  botones =[];
  
  //Pantalla 0
  botones[0] = new Boton(10,10,5,2);
  botones[1] = new Boton(90,90,5,3);
  
  //Pantalla 1
  
  
   pantallas[0] = new Pantalla(0,textos[0],[botones[0],botones[1]]);
  
}

function draw() {
    background(0);
   textos.mostrarTexto(1);
   pantallas[0].draw();
   //image(imagenes.fondos[1],0,0,width,height);
  //textFont(fuente);
  fill(255);
  tint(150);

}

function preload() {
  //for (let n = 0; n < 19; n++) {
  //  img[n] = loadImage('libraries/img/i' + n + '.jpg');
  //}
  //textos = loadStrings('libraries/textos.txt');
}

function mousePressed() {
  pantallas[estado].buttons.forEach(button => button.onClick());
}

function flecha() {
  fill(142, 88, 44);
  strokeWeight(5);
  stroke(0);
  line(520, 510, 545, 530);
  line(520, 550, 545, 530);
}

 function cambiarEstado(nuevoEstado) {
    estado = nuevoEstado;
  }
