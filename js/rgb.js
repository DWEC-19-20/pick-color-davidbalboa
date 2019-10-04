function rgb(r, g ,b) { //convert to hexa
  
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);

  r = outOfRange(r);
  g = outOfRange(g);
  b = outOfRange(b);

  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

    if (r < 16)
      r = "0" + r;
    if (g < 16)
      g = "0" + g;
    if (b < 16)
      b = "0" + b;
    var hexa = "#" + r + g + b;
    return (hexa);
}

function hex() { //convert to int

}

function outOfRange(x) {
  //valores fuera de rango
  if (x > 255)
    x = "FF";
  else if (x < 0)
    x = "00";
  return (x);
}

//no hay que hacer funcion para dentro de rango por que ya esta hecha en el propio ejericio

