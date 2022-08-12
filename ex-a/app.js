'use stric'

const calcularSub = function() {
    const numero01 = document.querySelector('#valor01').value;
    const numero02 = document.querySelector('#valor02').value;
    const numberForm = document.querySelector('#number-form');
    let resultado = document.querySelector('#result');

    if (numberForm.reportValidity()) {
        let calculo
        if (numero01 > numero02) {
            calculo = numero01 - numero02;
        } else if (numero02 > numero01) {
            calculo = numero02 - numero01;
        }

        resultado.textContent = calculo
    }
}

const calcular = document.getElementById('calcular').addEventListener('click', calcularSub)