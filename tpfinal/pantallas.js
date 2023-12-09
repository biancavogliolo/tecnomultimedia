// Pestaña 1: Pantalla.js
class Pantalla {
  constructor(imgIndex, textContent, buttons) {
    this.imgIndex = imgIndex;
    this.textContent = textContent;
    this.buttons = buttons;
  }

  draw() {
    image(imagenes.fondos[this.imgIndex], 0, 0);
    text(this.textContent, 100, 400, 400, 100);
    this.buttons.forEach(button => button.dibujarBotones());
    //flecha();
  }
}
