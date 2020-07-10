

let operandoa;
let operandob;
let operandoigual;
let tipo_operacion;

function operacion() {

    //variables
    let resultado = document.getElementById('resultado');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let limpiar = document.getElementById('limpiar');
}


//funcion que muestra teclas en pantalla

uno.onclick = function () {
    document.getElementById("resultado").innerHTML = "1";
    console.log('uno');
    operandoa = document.getElementById("uno") = "1"
}
dos.onclick = function () {
    document.getElementById("resultado").innerHTML = "2";
    console.log('dos');
    operandoa = document.getElementById("dos") = "2"
}
tres.onclick = function () {
    document.getElementById("resultado").innerHTML = "3";
    console.log('tres');
}
cuatro.onclick = function () {
    document.getElementById("resultado").innerHTML = "4";
    console.log('cuatro');
}
cinco.onclick = function () {
    document.getElementById("resultado").innerHTML = "5";
    console.log('cinco');
}
seis.onclick = function () {
    document.getElementById("resultado").innerHTML = "6";
    console.log('seis');
}
siete.onclick = function () {
    document.getElementById("resultado").innerHTML = "7";
    console.log('siete');
}
ocho.onclick = function () {
    document.getElementById("resultado").innerHTML = "8";
    console.log('ocho');
}
nueve.onclick = function () {
    document.getElementById("resultado").innerHTML = "9";
    console.log('nueve');
}
cero.onclick = function () {
    document.getElementById("resultado").innerHTML = "0";
    console.log('cero');
}




suma.onclick = function () {
    document.getElementById("resultado").innerHTML = "+";
    console.log('+');



    operandoa = document.getElementById("resultado");
    tipo_operacion = "+";
    limpiar();


}



resta.onclick = function () {
    document.getElementById("resultado").innerHTML = "-";
    console.log('-');
}
division.onclick = function () {
    document.getElementById("resultado").innerHTML = "/";
    console.log('/');
}
multiplicacion.onclick = function () {
    document.getElementById("resultado").innerHTML = "x";
    console.log('x');
}
limpiar.onclick = function () {
    document.getElementById("resultado").innerHTML = " ";
    console.log('');
    operandoa = 0;
    operandob = 0;
    operandoigual = "";
}




//funciones de calculo


