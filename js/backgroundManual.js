var r = document.getElementById("R");
var g = document.getElementById("G");
var b = document.getElementById("B");
document.getElementById("hex").innerHTML = "#808080";

function join() {
    var hexadecimal = rgb(r.value, g.value, b.value);

    document.getElementById("hex").innerText = hexadecimal;
    document.documentElement.style.setProperty('--colores', hexadecimal);
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
