const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click',mostraPalavrasChaves );

function mostraPalavrasChaves (){
    const texto = document .querySelectorAll('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras;
}