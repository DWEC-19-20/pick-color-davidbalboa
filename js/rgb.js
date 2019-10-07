function rgb(r, g ,b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);


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
  r = "";
  for (i = 2; i < 4; i++){
      r += h[i];
  }
  g = "";
  for (i = 4; i < 6; i++){
      g += h[i];
  }
  b = "";
  for (i = 6; i < 8; i++){
      b += h[i];
  }
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  r = onlyOneHex(r);
  g = onlyOneHex(g);
  b = onlyOneHex(b);

  var entero = "" + r + g + b;
  return(entero);
}

function onlyOneHex(x){
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

function outOfRange(x) {
  if (x > 255)
    x = "FF";
  else if (x < 0)
    x = "0";
  return (x);
}

