var r = document.getElementById("R");
var g = document.getElementById("G");
var b = document.getElementById("B");
document.getElementById("outR").innerHTML = r.value;
document.getElementById("outG").innerHTML = g.value;
document.getElementById("outB").innerHTML = b.value;
document.getElementById("hex").innerHTML = "#808080";
//document.getElementById("colorbox").innerHTML = "#808080";


function join() {
    var hexadecimal = rgb(r.value, g.value, b.value);
    alert(hexadecimal);
    document.getElementById("hex").innerHTML = hexadecimal;
    document.documentElement.style.setProperty('--colores', hexadecimal);
}


r.oninput = function () {
    r = document.getElementById("R");
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
