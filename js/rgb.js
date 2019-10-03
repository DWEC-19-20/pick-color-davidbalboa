'use strict';

//var convert = document.getElementById("boton1").addEventListener("click", prueba());

function rgb() { 

  var r = document.getElementById("r").value;
  var g = document.getElementById("g").value;
  var b = document.getElementById("b").value;

  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  //alert(r+g+b);

  var resultado = r + g + b;
  //alert(resultado);
  
  document.getElementById("show").innerHTML = resultado;
  
}

function hex(h) {
   return "000000000";
}

