/* ##################################################################### */
/* #################            DECIMAL              ################### */
/* ##################################################################### */

function rgb(r, g ,b) {
  /* Comprobamos los valores introducidos */
  var hexa = checkRGB(r, g, b);
  hexa = "#" + hexa;
  return (hexa.toUpperCase(hexa));
}

function checkRGB(r, g, b){
  var r, g, b;
  /* Pasamos el valor de r a un int y 
  comprobamos que esté dentro del rango */
  r = outOfRange(parseInt(r));
  g = outOfRange(parseInt(g));
  b = outOfRange(parseInt(b));
  
  /* Pasamos el int a hexadecimal y 
  comprobamos si solo tiene un digito */
  r = onlyOneDigit(r.toString(16));
  g = onlyOneDigit(g.toString(16));
  b = onlyOneDigit(b.toString(16));
  return("" + r + g + b);
}

/* Comprobamos si tiene solo un digito, 
en caso de ser así añadimos 0 */
function onlyOneDigit(x) {
  letras = "abcdef";
  var i = 0;
  if (x < 10 && x >= 0)
    return(x = "0" + x);
  while (i < 6) {
    if (x == letras[i])
      return (x = "0" + x);
    i++;
  }
  return(x);
}

/* Comprobamos que está dentro del rango */
function outOfRange(x) {
  var x = parseInt(x);
  if (x > 255)
    x = "FF";
  else if (x < 0)
    x = "0";
  return (x);
}

/* ##################################################################### */
/* #################          HEXADECIMAL            ################### */
/* ##################################################################### */

function hex(h) { 
  /* Compruebo el hexadecimal */
  var entero = checkHEX(h);
  entero = "" + entero;
  return(entero);
}

function checkHEX(h) {
  /* Comprobamos si empieza por #
  y si es así añadimos un ' ' */
  if (h[0] == "#")
    h = " " + h;

  /* Divide el string en 3 variables */
  var red = h.substring(2, 4);
  var green = h.substring(4, 6);
  var blue = h.substring(6, 8);

  /* Convierte las variables a hexadecimal 
  y calcula el rango y si delante tiene un
  solo digito */
  red = onlyOneHex(outOfRangeHex(parseInt(red, 16)));
  green = onlyOneHex(outOfRangeHex(parseInt(green, 16)));
  blue = onlyOneHex(outOfRangeHex(parseInt(blue, 16)));

  /* Devolvemos la concatenacion de los 3 */
  var entero = "" + red + green + blue;
  return (entero);
}

/* Comprueba si solo tiene un digito */
function onlyOneHex(x){
  var x = parseInt(x, 10);
  if (x < 10)
    x = "00" + x; 
  else if (x < 100)
    x = "0" + x;
  return (x);
}

/* Comprueba si esta fuera de rango */
function outOfRangeHex(x) {
  var x = parseInt(x, 10);
  if (x > 255)
    x = "255";
  else if (x < 0)
    x = "000";
  return (x);
}