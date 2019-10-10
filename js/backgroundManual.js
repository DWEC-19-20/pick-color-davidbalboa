var r = document.getElementById("R");
var g = document.getElementById("G");
var b = document.getElementById("B");
var h = document.getElementById("hex");

/* Comprobamos la cifra introducida en Hexadecimal y modificamos */
document.getElementById("hex").addEventListener('input', function () {
        dividir(hex("#" + h.value));
        if (validaColors() == true)
            document.documentElement.style.setProperty('--colores',("#" + h.value));
        checkNAN();
});

/* junta los 3 valores introducidos por R G B y los imprime en hex
a la vez los manda a la variable colores */
function join() {
    if (validaColors() == true)
        var hexadecimal = rgb(r.value, g.value, b.value);
    var text = document.getElementById('hex');
    text.value = hexadecimal.substring(1, 7);
    if (validaColors() == true)
        document.documentElement.style.setProperty('--colores', hexadecimal);
}

document.getElementById("R").addEventListener('input', function () {
    join();
});
document.getElementById("G").addEventListener('input', function () {
    join();
});
document.getElementById("B").addEventListener('input', function () {
    join();
});

/* Dividimos el valor de hexadecimal
 para mostrarlo en los campos de RGB */
function dividir(str){
    r.value = str.substring(0, 3);
    g.value = str.substring(3, 6);
    b.value = str.substring(6, 9);
}
 /* Si es no hay valor, no escribes nada */
function checkNAN(){
    if (Number.isNaN(parseInt(r.value)))
        r.value = "";
    if (Number.isNaN(parseInt(g.value)))
        g.value = "";
    if (Number.isNaN(parseInt(b.value)))
        b.value = "";
}

/* Valida si el numero introducido
es solo un numero */
function validaNum(event) {
    if(event.charCode >= 48 && event.charCode <= 57)
        return true;
    return false;        
}

/* Valida si el hexadecimal introducido
esta correctamente formateado */
function validaHex(event) {
    if((event.charCode >= 48 && event.charCode <= 57) 
    || (event.charCode >= 65 && event.charCode <= 70)
    || (event.charCode >= 97 && event.charCode <= 102))
      return true;
    return false;        
}

/* valida si los valores de los input son correctos,
si lo son, cambia el color */
function validaColors(){
    if (Number.isNaN(parseInt(r.value)))
        return false;
    else if (Number.isNaN(parseInt(g.value)))
        return false;
    else if (Number.isNaN(parseInt(b.value)))
        return false;
    else if ((h.value).length == 5)
        return false;
    return true;
}