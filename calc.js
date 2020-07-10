let operandoa;
let operandob;
let operandoigual;
let tipo_operacion;

// Gonzalo: Te sugiero que saques las variables que no se limiten en
// su scope a solo la funcion operación.
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


// Gonzalo: Sugerencia de función limpiar.
function limpiar() {
  // Estás variables se vuelven a vacío.
  resultado.innerHTML = "";
  operandoa = "";
  operandob = "";
}

// function operacion() {
//   //variables
// }

// Gonzalo: El método .innerHTML reemplaza todo lo que hay previo,
// lo que no es conveniente para digitar más de un dígito. Salvo...
uno.onclick = function () {
  resultado.innerHTML += 1;
  console.log("uno");
  operandoa = document.getElementById("uno") = "1";
  // document.getElementById("resultado").innerHTML = "1";
  // Gonzalo: Mi propuesta, ve que es distinto.

  // Gonzalo: ¿Cuál es el objetivo de esto?
  // Si quieres darle el valor del número presionado a la
  // variable "operandoa" puedes solo darle el valor de 1, así:
  // operandoa = 1;
  // Aquí haces una igualación triple, lo que no es válido.
  //   operandoa = document.getElementById("uno") = "1"

};
dos.onclick = function () {
  resultado.innerHTML += 2;
  console.log("dos");
  operandoa = document.getElementById("dos") = "2";
  // Gonzalo: Acá pasa lo mismo de arriba, sin embargo, si quieres
  // hacer el número 11 o 22 o cualquier combinación, ¿Cómo lo harías?
  // Te sugiero que al momento de hacer la operación, leas que valor
  // hay en pantalla, por lo tanto, en ese caso, sería conveniente
  // tener una variable a guardar lo que esté en pantalla.

  // Gonzalo: Tu variable resultado es tu pantalla.

};
tres.onclick = function () {
  resultado.innerHTML += 3;
  console.log("tres");
  operandoa = document.getElementById("tres") = "3";
};
cuatro.onclick = function () {
  resultado.innerHTML += 4;
  console.log("cuatro");
  operandoa = document.getElementById("cuatro") = "4";
};
cinco.onclick = function () {
  resultado.innerHTML += 5;
  console.log("cinco");
  operandoa = document.getElementById("cinco") = "5";
};
seis.onclick = function () {
  resultado.innerHTML += 6;
  console.log("seis");
  operandoa = document.getElementById("seis") = "6";
};
siete.onclick = function () {
  resultado.innerHTML += 7;
  console.log("siete");
  operandoa = document.getElementById("siete") = "7";
};
ocho.onclick = function () {
  resultado.innerHTML += 8;
  console.log("ocho");
  operandoa = document.getElementById("ocho") = "8";
};
nueve.onclick = function () {
  resultado.innerHTML += 9;
  console.log("nueve");
  operandoa = document.getElementById("nueve") = "9";
};
cero.onclick = function () {
  resultado.innerHTML += 0;
  console.log("cero");
  operandoa = document.getElementById("cero") = "0";
};



suma.onclick = function () {
  operandoa = resultado;
  console.log(operandoa);
  tipo_operacion = "+";
  limpiar();
};

resta.onclick = function () {
  operandoa = resultado;
  console.log(operandoa);
  tipo_operacion = "-";
  limpiar();
};
division.onclick = function () {
  operandoa = resultado;
  console.log(operandoa);
  tipo_operacion = "/";
  limpiar();
};
multiplicacion.onclick = function () {
  operandoa = resultado;
  console.log(operandoa);
  tipo_operacion = "x";
  limpiar();
};


// limpiar.onclick = function () {
//   document.getElementById("resultado").innerHTML = " ";
//   console.log("");
//   operandoa = 0;
//   operandob = 0;
//   operandoigual = "";
// };

//funciones de calculo


igual.onclick = function () {

  operandoa = resultado;
  console.log(operandoa);
  tipo_operacion = "x";
  limpiar();

}