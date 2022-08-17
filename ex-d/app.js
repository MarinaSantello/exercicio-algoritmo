'use stric'

const mediaExame = function() {
    let nota01 = parseFloat(document.getElementById('valor01').value)
    let nota02 = parseFloat(document.getElementById('valor02').value)
    let nota03 = parseFloat(document.getElementById('valor03').value)
    let nota04 = parseFloat(document.getElementById('valor04').value)
    const resultado = document.getElementById('result')
    const numberForm = document.getElementById('number-form')

    if (numberForm.reportValidity()) {
        let status
        let calculo = (nota01 + nota02 + nota03 + nota04) / 4;

        if (calculo >= 7) {
            status = 'aprovado.'

            resultado.textContent = `${status} ${calculo.toFixed(2)}`
        } else {
            let exame = window.prompt('Informe a nota do exame');
            let calculoExame = (calculo + parseFloat(exame)) / 2;

            if (calculoExame >= 5) {
                status = 'aprovado no exame';
            } else {
                status = 'reprovado no exame';
            }
            resultado.textContent = `${status} ${calculoExame.toFixed(2)}`
        }
    }

}

const calcular = document.getElementById('calcular').addEventListener('click', mediaExame)