//ingresar nombres 
function names() {
    var nombres = [];
    var cont = "";
    for (var i = 0; i <= 3; i++) {
        var x = prompt("Ingresa tu nombre:");
        nombres[i] = x;
    }
    for (var i = 0; i <= 3; i++) {
        cont += nombres[i] + ", ";
    }
    console.log(cont)
}

names();
