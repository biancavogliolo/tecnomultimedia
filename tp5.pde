// Clase Juego
class Juego {
  constructor() {
    // En el constructor de la clase Juego, se inicializa el estado, Messi y los franceses.
    this.estado = new EstadoInicio(this); // Inicia en el estado de inicio.
    this.messi = new Personaje(300, 450, loadImage('assets/messi.png')); // Inicializa a Messi.
   this.franceses = [
  new Personaje(100, -400, loadImage('assets/frances1.png')),
  new Personaje(300, -300, loadImage('assets/frances2.png')),
  new Personaje(500, 50, loadImage('assets/mbappe.png'))
];

  }


  setup() {
    createCanvas(600, 600); // Configura el lienzo del juego.
  }

  draw() {
    this.estado.mostrar(); // Llama al método mostrar() del estado actual.
  }

  mousePressed() {
    this.estado.click(); // Llama al método click() del estado actual en respuesta al clic del mouse.
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado; // Cambia el estado del juego.
  }
}

// Clase Personaje
class Personaje {
  constructor(x, y, imagen) {
    // Constructor de la clase Personaje, inicializa las propiedades del personaje.
    this.x = x;
    this.y = y;
    this.imagen = imagen; // La imagen del personaje.
  }

  mostrar() {
    // Muestra al personaje en la posición actual con la imagen asignada.
    image(this.imagen, this.x, this.y, 90, 150);
  }
}

// Clase EstadoInicio
class EstadoInicio {
  constructor(juego) {
    // Constructor del estado de inicio, recibe el juego como parámetro.
    this.juego = juego;
  }

  mostrar() {
    // Muestra la pantalla de inicio.
    background(5, 152, 20);
    fill(255);
    stroke(5);
    line(200, 0, 200, 600);
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

  click() {
    // Maneja el clic en la pantalla de inicio.
    if (zonaRect(300, 350, 300, 50)) {
      this.juego.cambiarEstado(new EstadoJuego(this.juego)); // Cambia al estado del juego.
    }
  }
}

// Clase EstadoJuego
class EstadoJuego {
  constructor(juego) {
    // Constructor del estado del juego, recibe el juego como parámetro.
    this.juego = juego;
    this.tiempoInicio = millis(); // Registra el tiempo de inicio.
  }

  mostrar() {
    const { messi, franceses } = this.juego;
    // Muestra el juego en curso, incluyendo a Messi y los franceses.
    background(5, 152, 20);
    line(200, 0, 200, 600);
    line(400, 0, 400, 600);

    // Dibujar a Messi
    messi.mostrar();

    // Dibujar a los franceses
    franceses.forEach(frances => frances.mostrar());

    // Aquí puedes agregar más código para el juego, como colisiones y movimiento.
  }

  click() {
    // Lógica de eventos en el juego.
  }
}

// Resto del código (EstadoPérdida, EstadoVictoria, EstadoCréditos, resetJuego)

function zonaRect(x, y, w, h) {
  // Función para verificar si el mouse está dentro de un rectángulo.
  return mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2;
}

// Crear una instancia de la clase Juego
let juego;

function setup() {
  juego = new Juego(); // Inicializa el juego.
  juego.setup(); // Configura el lienzo.
}

function draw() {
  juego.draw(); // Dibuja el juego actual.
}

function mousePressed() {
  juego.mousePressed(); // Maneja el clic del mouse en el juego.
}
