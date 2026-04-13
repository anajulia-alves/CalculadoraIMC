// capturar evento de submit do formulário


const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault()
    //pega os valores dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

})

function criaP(){
    const p = document.createElement('p');
    return p; 
}

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    resultado.appendChild(p)
}