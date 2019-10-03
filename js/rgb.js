
var red = document.getElementById("R");
var green = document.getElementById("G");
var blue = document.getElementById("B");
document.getElementById("outR").innerHTML = red.value;
document.getElementById("outG").innerHTML = blue.value;
document.getElementById("outB").innerHTML = red.value;
document.getElementById("hex").innerHTML = "#808080";
//document.getElementById("colorbox").innerHTML = "#808080";


function hexa() {
  var redS = parseInt(red.value).toString(16);
  var greenS = parseInt(green.value).toString(16);
  var blueS = parseInt(blue.value).toString(16);

  if (red.value < 16)
    redS = "0" + redS;
  if (green.value < 16)
    greenS = "0" + greenS;
  if (blue.value < 16)
    blueS = "0" + blueS;
  
  hex = "#" + redS + greenS + blueS;
  document.getElementById("hex").innerHTML = hex;
  document.documentElement.style.setProperty('--colores', hex);
}

red.oninput = function() {
  red = document.getElementById("R");
  document.getElementById("outR").innerHTML = red.value;
  hexa();
}
green.oninput = function() {
  green = document.getElementById("G");
  document.getElementById("outG").innerHTML = green.value;
  hexa();
}
blue.oninput = function() {
  blue = document.getElementById("B");
  document.getElementById("outB").innerHTML = blue.value;
  hexa();
}

