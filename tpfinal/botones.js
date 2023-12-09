// Pestaña 2: Boton.js
class Boton {
  constructor(x, y, diameter, nextState) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.nextState = nextState;
  }

  dibujarBotones() {
    if (this.isMouseOver()) {
      fill(85, 74, 245);
    } else {
      fill(20, 9, 180);
    }
    circle(this.x, this.y, this.diameter);
  }

  isMouseOver() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.diameter / 2;
  }

  onClick() {
    if (this.isMouseOver()) {
      cambiarEstado(this.nextState);
    }
  }
}
