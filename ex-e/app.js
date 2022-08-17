'use stric'

const divisao = function(){
    let valor01 = parseInt(document.getElementById('valorA').value);
    let valor02 = parseInt(document.getElementById('valorB').value);
    let valor03 = parseInt(document.getElementById('valorC').value);
    let valor04 = parseInt(document.getElementById('valorD').value);
    let valorA = '';
    let valorB = '';
    let valorC = '';
    let valorD = '';
    const resultado = document.getElementById('result');
    const numberForm = document.getElementById('number-form');

    if (numberForm.reportValidity()) {
        if (valor01%2 == 0 || valor01%3 == 0) {
            valorA = valor01;
        } if (valor02%2 == 0 || valor02%3 == 0) {
            valorB = valor02;
        } if (valor03%2 == 0 || valor03%3 == 0) {
            valorC = valor03;
        } if (valor04%2 == 0 || valor04%3 == 0) {
            valorD = valor04;
        }

        resultado.textContent = `${valorA} ${valorB} ${valorC} ${valorD}`;
    }
}

const calcular = document.getElementById('calcular').addEventListener('click', divisao);