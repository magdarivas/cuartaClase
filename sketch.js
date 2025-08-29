var x = 0; /* un = es equivalente al : en escritura, es un "le voy a asignar este valor", el == es consultar si es igual a ese valor, !== es consultar si es distinto*/
var y = 0;
var canvas; 
/* let (un var en contexto determinado) y const son otras consideraciones de variables*/
/* Las var son variables, son como cajitas, que pueden ir variando. vale para todo javascript*/
/* Se puede escribir una variable con cualquier nombre, siempre y cuando no sea separado, con tildes o ñ */
/*al estar fuera de function son var globales*/

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); /* El canvas podría llamarse de otra forma, ya que la función createCanvas es la que produce el resultado */
  canvas.parent("cuerpo"); /* Quiero que este canva se ubique en este lugar. Es decir, cambia la ubicación que queda por defecto (el main) */
  canvas.position(0,0); /* Posición que aprovecha tamaño en línea 6 */
  canvas.style('z-index','-1'); /* Indica el cambio de capa */
  noStroke();
  frameRate(12); /* Definir la velocidad de fotograma del emoji  */
}

function draw() { /* Es un loop */ 
  colorMode(HSB,359,100,100)
  background(map(mouseX, 0, windowWidth, 0, 359),100,map(mouseY, 0, windowHeight, 50, 100)); /*color,saturación,brillo*/
  /* el poner mouseX y mouseY hace que el cambio de c/u se produzca según si se mueve hacia el lado o vertical*/
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(random(100,200)); /* Cambiar tamaño */
  text("🧋",x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}