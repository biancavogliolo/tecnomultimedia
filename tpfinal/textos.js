class textos {
  constructor() {
    this.textos = [];
    this.inicializarTextos();
  }

  inicializarTextos(){
  this.textos[0] = "la sirenita"; //imageen 0
  this.textos[1] = "Ariel era una de las tantas hijas de Triton, \n era una de las mas curiosas de todas,\n siempre soñando con ir a la superficie."; //imagen 1
  this.textos[2] = "A medida que Ariel crecía, su curiosidad lo hacía con ella,\n y a los 17 decidió que subiría a la superficie \n  a saciar todas sus dudas.";// imagen 2
  this.textos[3] = "Ariel subió a la superficie,\n la alegría de ver todo la superaba por lo que empezó a cantar,\n lo que ella no sabía es que había a pocos metros un grupo de hombres\n dispuestos a hacer todo por volver a escuchar esa voz,\n y debajo de ella una bruja más que dispuesta a arrebatársela.\n ¿qué hará Ariel, se quedará un rato más en la superficie (A)\n o volverá al fondo del mar(B)?"; //imagen 3
  this.textos[4] = "Ursula, la bruja,\n intercepta a Ariel para proponerle un trato,\n ella le daría piernas por 1 día a cambio de su voz,\n Ariel acepta el trato\n y le da su voz a Ursula sin saber a lo que se enfrentaba"; // imagen 4
  this.textos[5] = "Ursula le roba la voz a Ariel,\n dejándola muda pero cumpliendo con su parte del trato,\n le da sus piernas";//imagen 5
  this.textos[6] = "Ursula se convierte en humana,\n más que dispuesta a probar lo que su nueva voz podía hacer\n y sale a la superficie"; //imagen 6
  this.textos[7] = "Ursula comienza a cantar\n y ahí es cuando Eric, nuestro príncipe, oye nuevamente esa voz que tanto lo había cautivado,\n decide pedirle matrimonio\n a la hermosa dama portadora de dicha voz"; // imagen 7
  this.textos[8] = "Comienza la ceremonia de la boda,\n Ariel estaba observando todo desde el mar ¿ qué es lo que le pasará a Ariel, se enojará(A) o no hará nada(B)?"; // imagen 8
  this.textos[9] = " una gaviota con un espejo en su pico\n  muestra su verdadera apariencia,\n haciendo que el príncipe se de cuenta\n de quien era la persona con la que se estaba por casar"; //imagen 9
  this.textos[10] = "Eric se da cuenta que la voz de su verdadero amor reside en el collar que Ursula traía puesto,\n por lo cual decide arréstarselo y lanzarlo al mar"; //imagen 9.5
  this.textos[11] = "Ariel recupera su hermosa voz\n y decide salir a la superficie en busca de su príncipe"; // imagen 10
  this.textos[12] = "se dan un gran beso de amor verdadero y deciden casarse";//imagen 11
  this.textos[13] = " se casan y viven felices para siempre. FIN"; // imagen 12
  this.textos[14] = "Ariel observaba toda la ceremonia enojada desde el mar,\n por lo que decide tomar venganza…"; //imagen 14
  this.textos[15] = "Ariel decide secuestrar a su gran amor al fondo,\n del océano, pero lo que ella no recordó,\n es que él era un simple humano, por lo que Eric fallece ahogado. FIN"; // imagen 15
  this.textos[16] = "Ariel estaba en la roca cantando,\n pero ignoraba la presencia de un barco al acecho,\n por lo cual se distrajo y fue secuestrada"; //imagen 7
  this.textos[17] = "Ariel fue arrastrada en una red de pescador\n hasta la cubierta del barco"; // imagen 16
  this.textos[18] = " estaba tirada en la cubierta del barco,\n como si fuese uno de los peces que esos pescadores habían arrebatado del mar,\n no había forma de escapar"; //imagen 17
  this.textos[19] = "Ariel fue puesta en una bañera para que no muriera,\n ya que pronto sería trasladada a su nuevo hogar,\n y sus captores obtendrían muchísimo dinero por ella"; //imagen 18
  this.textos[20] = "Ariel fue trasladada a su nuevo hogar, \nel acuario, donde fue expuesta a los turistas hasta el día de su muerte. FIN";// imagen 19
  }
  
   mostrarTexto(indice) {
    textSize(18);
    textAlign(LEFT);
    fill(255);
    text(this.textos[indice], 20, 20, width - 40, height - 40);
  }
}
