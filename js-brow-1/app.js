const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const button = document.querySelector('.btn');
        
button.addEventListener('click', function() {
    const texto = input.value;
    const minTexto = texto.toLowerCase();
    const quitaEspacios = minTexto.replace(/\s+/g, '');
    const palabaraReversa = quitaEspacios.split('').reverse().join('') == quitaEspacios;
    if (palabaraReversa == true) {
        resultado.textContent = texto + ", es una expresión palindroma.";
    }else {
        resultado.textContent = texto + ", no es una expresión palindroma.";
    }            
});