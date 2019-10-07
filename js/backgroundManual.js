var r = document.getElementById("R");
var g = document.getElementById("G");
var b = document.getElementById("B");
var def = 0;
document.getElementById("hex").innerHTML = "#808080";
document.getElementById("type").innerHTML = "<h2>Decimal</h2> to Hexadecimal";


function join() {
    if (def == 0){
        var hexadecimal = rgb(r.value, g.value, b.value);
        var valor = rgb(r.value, g.value, b.value);
    }
    else {
        var hexadecimal = "#" + r.value + g.value + b.value;
        var valor = hex(hexadecimal);
    }
    document.getElementById("hex").innerHTML = valor;
    document.documentElement.style.setProperty('--colores', hexadecimal);
}

function change(){
    if (def == 0){
        document.getElementById("hex").innerHTML = "#808080";
        document.getElementById("type").innerHTML = "<h2>Hexadecimal</h2> to Decimal";
        def = 1;
    }
    else {
        document.getElementById("type").innerHTML = "<h2>Decimal</h2>  to Hexadecimal";
        def = 0;
    }
    join();
    r.oninput();
    g.oninput();
    b.oninput();
}

r.oninput = function () {
    join();
}
g.oninput = function () {
    join();
}
b.oninput = function () {
    join();
}
