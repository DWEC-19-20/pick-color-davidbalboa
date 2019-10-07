var r = document.getElementById("R");
var g = document.getElementById("G");
var b = document.getElementById("B");
var def = 0;
document.getElementById("outR").innerHTML = r.value;
document.getElementById("outG").innerHTML = g.value;
document.getElementById("outB").innerHTML = b.value;
document.getElementById("hex").innerHTML = "#808080";


function join() {
    if (def == 0){
        var hexadecimal = rgb(r.value, g.value, b.value);
        var valor = rgb(r.value, g.value, b.value);
    }
    else {
        var hexadecimal = rgb(r.value, g.value, b.value);
        var valor = hex(rgb(r.value, g.value, b.value));
    }
    document.getElementById("hex").innerHTML = valor;
    document.documentElement.style.setProperty('--colores', hexadecimal);
}

function change(){
    if (def == 0)
        def = 1;
    else   
        def = 0;

    join();
    r.oninput();
    g.oninput();
    b.oninput();
}

r.oninput = function () {
    if (def == 0){
        red = document.getElementById("R");
        red = red.value;
    }
    else {
        red = document.getElementById("R");
        red = parseInt(r.value).toString(16).toUpperCase(red);
    }
    document.getElementById("outR").innerHTML = red;
    join();
}
g.oninput = function () {
    if (def == 0){
        green = document.getElementById("G");
        green = green.value
    }
    else {
        green = document.getElementById("G");
        green = parseInt(g.value).toString(16).toUpperCase(green);
    }
    document.getElementById("outG").innerHTML = green;
    join();
}
b.oninput = function () {
    if (def == 0){
       blue = document.getElementById("B");
       blue = blue.value;
    }
    else {
        blue = document.getElementById("B");
        blue = parseInt(b.value).toString(16).toUpperCase(blue);
    }
    document.getElementById("outB").innerHTML = blue;
    join();
}
