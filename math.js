let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", function () { somar(Number(valor1.value), Number(valor2.value)); });

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

let btSubtrair = document.getElementById("btSubtrair");
btSubtrair.addEventListener("click", function () { subtrair(Number(valor1.value), Number(valor2.value)); });

function subtrair(a, b) {
    let subtrair = a - b;
    resultado.innerHTML = subtrair;
}

let btMultiplicar = document.getElementById("btMultiplicar");
btMultiplicar.addEventListener("click", function () { multiplicar(Number(valor1.value), Number(valor2.value)); });

function multiplicar(a, b) {
    let multiplicar = a * b;
    resultado.innerHTML = multiplicar;
}

let btDividir = document.getElementById("btDividir");
btDividir.addEventListener("click", function () { dividir(Number(valor1.value), Number(valor2.value)); });

function dividir(a, b) {
    let dividir = a / b;
    resultado.innerHTML = dividir;
}