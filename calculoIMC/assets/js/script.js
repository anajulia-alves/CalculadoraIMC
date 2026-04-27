// capturar evento de submit do formulário


const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault()
    //pega os valores dos inputs
    const inputPeso = event.target.querySelector('#peso'); // dispara um evento - clique, digitação ou input
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }


    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
})

/* 
Menos que 18,5	-> Abaixo do Peso
Entre 18,5 e 24,9 -> Peso normal
Entre 25 e 29,9	-> Sobrepeso
Entre 30 e 34,9	-> Obesidade 1
Entre 35 e 39,9	-> Obesidade 2
Mais que 40	-> Obesidade 3

*/ 

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade 1', 'Obesidade 2', 'Obesidade 3'];
    if(imc >= 39.9) return nivel[5]
    
    if(imc >= 34.9) return nivel[4]
    
    if(imc >= 29.9) return nivel [3]
    
    if(imc >= 24.9) return nivel [2]
    
    if(imc >= 18.5) return nivel[1]
    
    if( imc <18.5)  return nivel[0]
}

function getImc(peso, altura){
    const imc = peso/altura ** 2;
    return imc.toFixed(2)
}

function criaP(){
    const p = document.createElement('p');
    return p; 
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}