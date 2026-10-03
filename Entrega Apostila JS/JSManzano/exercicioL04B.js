function exercicioL04B() {
    alert("Exercício L04B: Calcula e apresenta o somatório de todos os valores pares existentes na faixa de 1 até 500.")

    let numero = 1
    let pares = 0

    do {
        if (numero % 2 === 0) {
            pares = pares + numero
        }
        numero = numero + 1
    } while (numero < 501)

    alert("Resultado do somatório dos números pares de 1 a 500: " + pares)
}