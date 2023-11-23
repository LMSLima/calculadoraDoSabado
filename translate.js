const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./Idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "./Idiomas/english.js";
document.head.appendChild(linguaInglesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./Idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "./Idiomas/francais.js";
document.head.appendChild(linguaFrancesa);

let idioma = document.getElementById("idioma")
idioma.addEventListener("change", function (){
    translate(this.value);
});

function translate(idioma){
    let traducao = 
    (idioma == "br") ? portugues()
    : (idioma == "en") ? english()
    : (idioma == "es") ? espanol()
    : (idioma == "fr") ? francais()
    : null;
    setlanguage(traducao);
};

function setlanguage(traducao) {
    btSomar = document.getElementById("btSomar");
    btSomar.value = traducao.soma;
    btSubtrair = document.getElementById("btSubtrair");
    btSubtrair.value = traducao.subtracao;
    btMultiplicar = document.getElementById("btMultiplicar");
    btMultiplicar.value = traducao.multiplicacao;
    btDividir = document.getElementById("btDividir");
    btDividir.value = traducao.divisao;
    titulo = document.getElementById("titulo");
    titulo.innerHTML = traducao.titulo;
    boasVindas = document.getElementById("boasVindas");
    boasVindas.innerHTML = traducao.boasVindas;
};