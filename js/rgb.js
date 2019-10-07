function rgb(r, g ,b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);

  r = isNotANumber(r);
  g = isNotANumber(g);
  b = isNotANumber(b);

  r = outOfRange(r);
  g = outOfRange(g);
  b = outOfRange(b);

  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  r = onlyOneDigit(r);
  g = onlyOneDigit(g);
  b = onlyOneDigit(b);

    var hexa = "#" + r + g + b;
    return (hexa.toUpperCase(hexa));
}

function hex(h) { 
  h = " " + h;
  red = "";
  for (i = 2; i < 4; i++){
      red += h[i];
  }
  green = "";
  for (i = 4; i < 6; i++){
      green += h[i];
  }
  blue = "";
  for (i = 6; i < 8; i++){
      blue += h[i];
  }
  red = parseInt(red, 16);
  green = parseInt(green, 16);
  blue = parseInt(blue, 16);

  red = isNotANumber(red);
  green = isNotANumber(green);
  blue = isNotANumber(blue);

  red = outOfRangeHex(red);
  green = outOfRangeHex(green);
  blue = outOfRangeHex(blue);

  red = onlyOneHex(red);
  green = onlyOneHex(green);
  blue = onlyOneHex(blue);

  var entero = "" + red + green + blue;
  return(entero);
}

function onlyOneHex(x){
  x = parseInt(x, 10);
  if (x < 10)
    x = "00" + x; 
  else if (x < 100)
    x = "0" + x;
  return (x);
}

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

function outOfRangeHex(x) {
  x = parseInt(x, 10);
  if (x > 255)
    x = "255";
  else if (x < 0)
    x = "000";
  return (x);
}

function outOfRange(x) {
  x = parseInt(x);
  if (x > 255)
    x = "FF";
  else if (x < 0)
    x = "0";
  return (x);
}

function isNotANumber(x){
  if (Number.isNaN(x))
    x = 0;
  return (x);
}

