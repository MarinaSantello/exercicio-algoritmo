'use stric'

const modulo = function() {
    const numero01 = document.getElementById('valor01').value;
    const numberForm = document.getElementById('number-form');
    const resultado = document.getElementById('result')

    if (numberForm.reportValidity()) {
        let calc;
        
        if (numero01 < 0) {
            calc = numero01 * -1;   
        } else {
            calc = numero01;
        }
        resultado.textContent = `${calc}`;
    }
}

const calcular = document.querySelector('#calcular').addEventListener('click', modulo)