
const calculo = document.getElementById('calcule');


function calc(){
    const primeiro = document.getElementById('num1');
    const segundo = document.getElementById('num2');
    const resultado = document.getElementById('result')

    if (primeiro.value > segundo.value){
        alert ('Errado, o valor do Campo B deve ser maior que o do Campo A')        
    }
    else {
        alert ('Parabens!')
    }
}

calculo.addEventListener('click', calc );


