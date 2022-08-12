'use stric'

const media = function() {
    const nota01 = parseFloat(document.getElementById('valor01').value)
    const nota02 = parseFloat(document.getElementById('valor02').value)
    const nota03 = parseFloat(document.getElementById('valor03').value)
    const nota04 = parseFloat(document.getElementById('valor03').value)
    const resultado = document.getElementById('result')
    const numberForm = document.getElementById('number-form')

    if (numberForm.reportValidity()) {
        let status
        let calculo = (nota01 + nota02 + nota03 + nota04) / 4;

        if (calculo >= 5) {
            status = 'aprovado.'
        } else {
            status = 'reprovado'
        }
        resultado.textContent = `${status} ${calculo.toFixed(2)}`
    }
}

const calcular = document.getElementById('calcular').addEventListener('click', media)