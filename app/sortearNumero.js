const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroaleatorio()

function gerarNumeroaleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto: ', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTMl = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor