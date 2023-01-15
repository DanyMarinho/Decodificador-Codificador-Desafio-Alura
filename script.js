var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar() {
    var texto = textInput.Value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat")


    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto +
    '<textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.Value;

    var resultCripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "ober").replace(/ufat/g, "u")


    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto +
    '<textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}
