

//Vogliolo Bianca 93545/1 
// comicion 3 profesor David Bedoian.
//trabajo practico nro 3
//link del video: https://youtu.be/9_3ifTG0OSs


int estado = 0; // la variable "estado" controla en qué parte de la historia nos encontramos. Se utiliza para determinar qué contenido mostrar en cada paso.
int c = 21; //Esta variable define la cantidad de imágenes en la historia. Cada imagen corresponde a una etapa de la historia.
PImage [] imagen = new PImage [c]; // es un arreglo de objetos PImage para almacenar las imágenes de la historia.
String [] historia = new String [c]; // es un arreglo de strings para almacenar los textos narrativos correspondientes a cada imagen.
PFont fuente;// para establecer la fuente utilizada en el texto.
float y;
void setup () {
  size (600, 600);

  for (int i = 0; i < c; i++) {
    imagen[i] = loadImage ( "imagen" + i + ".jpg" ) ;
  }


  textSize (25); // Establece el tamaño del texto.
  textAlign(CENTER, CENTER);// Configura la alineación del texto al centro. Se cargan las fuentes y se inicializan las primeras líneas de la historia en el arreglo historia.
  fuente = loadFont("Alef-Bold-15.vlw");

  historia[0]="la sirenita";
  historia[1]="Ariel era una de las tantas hijas de Triton, \n era una de las mas curiosas de todas,\n siempre soñando con ir a la superficie."; //imagen 1
  historia[2]="A medida que ariel crecia, su curiosidad lo hacia con ella,\n y a los 17 decidio que subiria a la superficie \n  a saciar todas sus dudas.";// imagen 2 
  historia[3]="Ariel subio a la superficie,\n la alegria de ver todo la superaba por lo que empezo a cantar,\n lo que ella no sabia es que había a pocos metros un grupo de hombres\n dispuestos a hacer todo por volver a escuchar esa voz,\n y debajo de ella una bruja mas que dispuesta a arrebatarsela.\n ¿que hara Ariel, se quedara un rato mas en la superficie (A)\n o volvera al fondo del mar(B)?"; //imagen 3
  historia[4]="Ursula, la bruja,\n intercepta a ariel para proponerle un trato,\n ella le daria piernas por 1 dia a cambio de su voz,\n Ariel acepta el trato\n y le da su voz a ursula sin saber a lo que se enfrentaba"; // imagen 4
  historia[5]="ursula le roba la voz a ariel,\n dejandola muda pero cumpliendo con su parte del trato,\n le da sus piernas";//imagen 5
  historia[6]="Ursula se convierte en humana,\n mas que dispuesta a probar lo que su nueva voz podia hacer\n y sale a la superficie"; //imagen 6
  historia[7]="Ursula comienza a cantar\n y ahi es cuando Eric, nuestro principe oye nuevamente esa voz que tanto lo había cautivado,\n decide pedirle matrimonio\n a la hermosa dama portadora de dicha voz"; // imagen 7
  historia[8]="Comienza la ceremonia de la boda,\n ariel estaba observando todo desde el mar ¿ que es lo que le pasara a Ariel, se enojara(A) o no hara nada(B)?"; // imagen 8
  historia[9]="uno de los amigos de ariel \n va a l rescate del gran amor de su amiga,\n una gaviota con un espejo en su pico\n  muestra su verdadera apariencia,\n haciendo que el principe se de cuenta\n de quien era la persona con la que se estaba por casar"; //imagen 9
  historia[10]="eric se da cuenta que la voz de su verdadero amor reside en el collar que ursula traia puesto,\n por lo cual decide arretarselo y lanzarlo al mar"; //imagen 9.5
  historia[11]="ariel recupera su hermosa voz\n y decide salir a la superficie en busca de su principe"; // imagen 10
  historia[12]="se dan un gran beso de amor verdadero y deciden casarse";//imagen 11
  historia[13]=" se casan y viven felices para siempre. FIN"; // imagen 12 
  historia[14]="Ariel observaba toda la ceremonia enojada desde el mar,\n por lo que decide tomar venganza…"; //imagen 14
  historia[15]="ariel decide secuestrar a su gran amor al fondo,\n del oceano, pero lo que ella no recordo,\n es que el era un simple humano,por lo que Eric fallece ahogado. FIN" ;// imagen 15
  historia[16]="Ariel estaba en la roca cantando,\n pero ignoraba la presencia de un barco al asecho,\n por lo cual se distrajo y fue secuestrada"; //imagen 7
  historia[17]="Ariel fue arrastrada en una red de pescador\n hasta la cubierta del barco"; // imagen 16
  historia[18]=" estaba tirada en la cubierta del barco,\n como si fuese uno de los peces que esos pescadores habian arrebatado del mar,\n no había forma de escapar"; //imagen 17
  historia[19]="ariel fue puesta en una bañera para que no muriera,\n ya que pronto seria traslladada a au nuevo hogar,\n y sus captores obtendria muchisimo dinero por ella"; //imagen 18
  historia[20]="ariel fue trasladada a su nuevo hogar, \nel acuario, donde fue expluesta a los turistas hasta el dia de su muerte. FIN";// imagen 19
 }
 
void draw() {
  textFont(fuente);
  fill(255);
  tint(150);

  switch (estado) {
  case 0:
    tint(150);
    image (imagen [0], 0, 0 );
   // textSize(0);
    //text(historia[0], 170, 200);
    boton (530, 530, 70);
    flecha();
    break ;

  case 1: //historia[1]="Ariel era una de las tantas hijas de Triton, \n era una de las mas curiosas de todas,\n siempre soñando con ir a la superficie."; //imagen 1

    image (imagen[1], 0, 0 );
    text(historia[1], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 2: // historia[2]="A medida que ariel crecia, su curiosidad lo hacia con ella,\n y a los 17 decidio que subiria a la superficie \n  a saciar todas sus dudas.";// imagen 2 
    image (imagen[2], 0, 0 );
    text(historia[2],100, 400, 400, 60);

    boton (530, 530, 70);
    flecha();
    break ;

 case 3: //historia[3]="Ariel subio a la superficie, la alegria de ver todo la superaba por lo que empezo a cantar, lo que ella no sabia es que había a pocos metros un hombre mas que dispuesto a hacer todo por volver a escuchar esa voz, y debajo de ella una bruja mas que dispuesta a arrebatarsela."; //imagen 3
    image (imagen[3], 0, 0 );
    text(historia[3], 300, 430);
    boton (530, 530, 70);
    boton (420, 530, 70);
    textSize(10);
    fill(255);
    text("B", 532, 530);
    text("A", 419, 530);

    break;

  case 4: //  historia[4]="Ursula, la bruja, intercepta a ariel para proponerle un trato, ella le daria piernas por 1 dia a cambio de su voz, Ariel acepta el trato y le da su voz a ursula sin saber a lo que se enfrentaba"; // imagen 4
    image (imagen[4], 0, 0 );
    text(historia[4], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break ;

  case 5: //historia[5]="ursula le roba la voz a ariel, dejandola muda pero cumpliendo con su parte del trato, le da sus piernas";//imagen 5
    image (imagen[5], 0, 0 );
    text(historia[5], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 6: // historia[6]="Ursula se convierte en humana, mas que dispuesta a probar lo que su nueva voz podia hacer sale a la superficie"; //imagen 6
    image(imagen[6], 0, 0);
    text(historia[6], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 7: //historia[7]="Ursula comienza a cantar y ahi es cuando Eric, nuestro principe oye nuevamente esa voz que tanto lo había cautivado, decide pedirle matrimonio a la hermosa dama portadora de dicha voz"; // imagen 7
    image(imagen[7], 0, 0);
    text(historia[7], 100, 400, 400, 60);
    //boton (300, 230, 70);
    //boton (520, 230, 70);
    boton (530, 530, 70);
    flecha();
    
    break;

 case 8: // historia[8]="Comienza la ceremonia de la boda, ariel estaba observando todo desde el mar"; // imagen 8
    image(imagen[8], 0, 0);
    text(historia[8], 100, 300, 400, 60);
    boton (300, 530, 70);
    boton (530, 530, 70);
     textSize(10);
    fill(255);
    text("A", 302, 530);
    text("B", 530, 530);

    break;

  case 9: //historia[9]="uno de los amigos de ariel va a l rescate del gran amor de su amiga, una gaviota con un espejo en su pico se acerca a ursula, mostrando en el reflejo su verdadera aparienci, haciendo que el principe se de cuenta de quien era la persona con la que se estaba por casar"; //imagen 9
    tint(70);
    image(imagen[9], 0, 0);
    text(historia[9], 100, 300, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 10://eric se da cuenta que la voz de su verdadero amor reside en el collar que ursula traia puesto, por lo cual decide arretarselo y lanzarlo al mar"; //imagen 9.5
    tint(70);
    image(imagen[10], 0, 0);
    text(historia[10], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 11: // historia[11]="ariel recupera su hermosa voz y decide salir a la superficie en busca de su principe"; // imagen 10
    tint(170);
    image(imagen[11], 0, 0);
    text(historia[11], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 12: //historia[12]="se dan un gran beso de amor verdadero y deciden casarse";//imagen 11
    tint(170);
    image(imagen[12], 0, 0);
    text(historia[12],100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 13: // historia[13]=" se casan y viven felices para siempre. FIN"; // imagen 12 
    image(imagen[13], 0, 0);
    text(historia[13],100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 14: ///  historia[14]="Ariel observaba toda la ceremonia enojada desde el mar, por lo que decide tomar venganza…"; //imagen 14
    image(imagen[14], 0, 0);
    text(historia[14], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;
    
  case 15: //  historia[15]="ariel decide secuestrar a su gran amor al fondo, del oceano, pero lo que ella no recordo, es que el era un simple humano, por lo que Eric fallece ahogado en brazos de ariel. FIN";// imagen 15
    image(imagen[15], 0, 0);
    text(historia[15], 100, 300, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 16: // historia[16]="Ariel estaba en la roca cantando, pero ignoraba la presencia de un barco al asecho, por lo cual se distrajo y fue secuestrada"//imagen 7
    image(imagen[16], 0, 0);
    text(historia[16],100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;
    
  case 17:// historia[18]="ariel estaba tirada en la cubierta del barco como si fuese uno de los peces que esos pescadores habian arrebatado del mar, no había forma de escapar"; //imagen 17
    image(imagen[17], 0, 0);
    text(historia[18], 100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;
    

  case 18: //   historia[19]="ariel fue puesta en una bañera para que no muriera, ya que pronto seria traslladada a au nuevo hogar, y sus captores obtendria muchisimo dinero por ella"; //imagen 18
    image(imagen[18], 0, 0);
    text(historia[19],100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 19: //  historia[20]="ariel fue trasladada a su nuevo hogar, el acuario, donde fue expluesta a los turistas hasta el dia de su muerte. FIN";// imagen 19  
    image(imagen[19], 0, 0);
    text(historia[20],100, 400, 400, 60);
    boton (530, 530, 70);
    flecha();
    break;

  case 20:  fill(255);
    background(6, 14, 149);
    textSize(30);
    y = y + 2;
    text("FIN ", 300, y);
    if (y > 150) {
      text("TP3 - Vogliolo Bianca", 300, y -150);
    }
    if (y > 250) {
      text(" la historia  es un cuento de hadas,\n hecho por escritor danes \n Hans Christian Andersen,\n famoso por sus cuentos para niños. ", 300, y -250);
    }
    if (y > 300) {
      text("Programadora:Vogliolo Bianca ", 300, y -100);
    }
    if (y > 350) {
      text("Cuento: La sirenita  ", 300, y -350);
    }
    if (y > 450) {
      text("Gracias por ver, toca para reiniciar\n y buscar otro final", 300, y -450);
    }
    if ( y > 900) {
      botonCuadrado();
    }
  }
}


  
   


void mousePressed() {

 //final uno
  if (estado == 0 && zonaCircular(530, 530, 100)) {
    estado = 1;
  } else if (estado == 1 && zonaCircular(530, 530, 100)) {
    estado= 2;
  } else if (estado == 2 && zonaCircular(530, 530, 100)) {
    estado= 3;
  } else if (estado == 3 && zonaCircular(530, 530, 70)) {
    estado= 4;
  } else if (estado == 4 && zonaCircular(530, 530, 100)) {
    estado= 5;
  } else if (estado == 5 && zonaCircular(530, 530, 100)) {
    estado= 6;
  } else if (estado == 6 && zonaCircular(530, 530, 100)) {
    estado= 7;
  } else if (estado == 7 && zonaCircular(530, 530, 100)) {
    estado= 8;
  } else if (estado == 8 && zonaCircular(530, 530, 100)) {
    estado= 9;
  } else if (estado == 9 && zonaCircular(530, 530, 100)) {
    estado= 10;
  } else if (estado == 10 && zonaCircular(530, 530, 100)) {
    estado= 11;
  } else if (estado == 11 && zonaCircular(530, 530, 100)) {
    estado= 12;
  } else if (estado == 12 && zonaCircular(530, 530, 100)) {
    estado= 13;
  } else if (estado == 13 && zonaCircular(530, 530, 100)) {
    estado= 20;
  }

  //final dos
  if (estado == 8 && zonaCircular(300, 530, 70)) {
    estado= 14;
  } else if (estado == 14 && zonaCircular(530, 530, 100)) {
    estado= 15;
  } else if (estado == 15 && zonaCircular(530, 530, 100)) {
    estado= 20;
  }

  //final tres
  if (estado == 3 && zonaCircular(420, 530, 70)) {
    estado= 16;
  } else if (estado == 16 && zonaCircular(530, 530, 100)) {
    estado= 17;
  } else if (estado == 17 && zonaCircular(530, 530, 100)) {
    estado= 18;
  } else if (estado == 18 && zonaCircular(530, 530, 100)) {
    estado= 19;
  } else if (estado == 19 && zonaCircular(530, 530, 100)) {
    estado= 20;

  }


  if (estado == 20 && zonaCircular(300, 300, 200)) {
    y = 0;
    estado = 0;
  }
}
