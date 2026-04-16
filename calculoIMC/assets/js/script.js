// capturar evento de submit do formulário


const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    event.preventDefault()
    //pega os valores dos inputs
    const inputPeso = e.target.querySelector('#peso'); // dispara um evento - clique, digitação ou input
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso || !altura){
        setResultado('Peso ou altura inválidos!', false);
    }else{
        console.log(peso, altura)
    }
})

function criaP(){
    const p = document.createElement('p');
    return p; 
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}