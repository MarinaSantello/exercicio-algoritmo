'use stric'

const maior3 = function(){
    let valor01 = parseInt(document.getElementById('valorA').value);
    let valorA;
    const resultado = document.getElementById('result');
    const numberForm = document.getElementById('number-form');

    if (numberForm.reportValidity()) {
        if (valor01 < 3) {
            valorA = true;
        }
        if (!valorA) {
            resultado.textContent = 'Maior que 3'
        } else {
            resultado.textContent = `${valor01}`;
        }
    }
}

const calcular = document.getElementById('calcular').addEventListener('click', maior3);