let operandoa;
let operandob;
let tipo_operacion;


let resultado = document.getElementById("resultado");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");



function limpiar() {
  resultado.innerHTML = "";

}

uno.onclick = function () {
  resultado.innerHTML += 1;
  console.log(resultado.innerHTML);
};
dos.onclick = function () {
  resultado.innerHTML += 2;
  console.log("dos");
};
tres.onclick = function () {
  resultado.innerHTML += 3;
  console.log("tres");

};
cuatro.onclick = function () {
  resultado.innerHTML += 4;
  console.log("cuatro");

};
cinco.onclick = function () {
  resultado.innerHTML += 5;
  console.log("cinco");

};
seis.onclick = function () {
  resultado.innerHTML += 6;
  console.log("seis");

};
siete.onclick = function () {
  resultado.innerHTML += 7;
  console.log("siete");

};
ocho.onclick = function () {
  resultado.innerHTML += 8;
  console.log("ocho");

};
nueve.onclick = function () {
  resultado.innerHTML += 9;
  console.log("nueve");

};
cero.onclick = function () {
  resultado.innerHTML += 0;
  console.log("cero");

};



suma.onclick = function () {
  operandoa = parseInt(resultado.innerHTML);
  console.log(operandoa);
  tipo_operacion = "+";
  limpiar();
};
resta.onclick = function () {
  operandoa = resultado.innerHTML;
  console.log(operandoa);
  tipo_operacion = "-";
  limpiar();
};
division.onclick = function () {
  operandoa = resultado.innerHTML;
  console.log(operandoa);
  tipo_operacion = "/";
  limpiar();
};
multiplicacion.onclick = function () {
  operandoa = resultado.innerHTML;
  console.log(operandoa);
  tipo_operacion = "*";
  limpiar();
};




//funciones de calculo


igual.onclick = function () {

  operandob = parseInt(resultado.innerHTML);
  console.log(operandob);
  console.log(tipo_operacion)
  console.log(operandoa + operandob)


  switch (tipo_operacion) {
    case "+":
      resultado.innerHTML = operandoa + operandob

      break;
    case "-":
      resultado.innerHTML = operandoa - operandob
      break;

    case "/":
      resultado.innerHTML = operandoa / operandob
      break;
    case "*":
      resultado.innerHTML = operandoa * operandob
      break;
  }

}


