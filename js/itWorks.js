var r = document.getElementById("R");
var g = document.getElementById("G");
var b = document.getElementById("B");
var def = 0;
document.getElementById("outR").innerHTML = r.value;
document.getElementById("outG").innerHTML = g.value;
document.getElementById("outB").innerHTML = b.value;
document.getElementById("hex").innerHTML = "#808080";


function join() {
    if (def == 0)
        var valor = rgb(r.value, g.value, b.value);
    else
        var valor = rgb(r.value, g.value, b.value);
    document.getElementById("hex").innerHTML = valor;
    document.documentElement.style.setProperty('--colores', valor);
}

function change(){
    def = 1;
}

r.oninput = function () {
    r = document.getElementById("R");
    r = r.value.toString(16);
    document.getElementById("outR").innerHTML = r.value;
    join();
}
g.oninput = function () {
    g = document.getElementById("G");
    document.getElementById("outG").innerHTML = g.value;
    join();
}
b.oninput = function () {
    b = document.getElementById("B");
    document.getElementById("outB").innerHTML = b.value;
    join();
}
