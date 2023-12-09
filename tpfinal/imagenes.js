class ManejoDeImagenes {
  constructor() {
    this.fondos = [];
    this.inicializarFondos();
  }

  inicializarFondos() {
    for (let i = 0; i < 19; i++) {
      let nombreImagen = "historia/imagen" + i + ".jpg";
      this.fondos[i] = loadImage(nombreImagen);
      this.fondos[i].resize(600, 600);
    }
  }
}
