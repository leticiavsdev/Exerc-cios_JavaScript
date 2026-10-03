function exercicioL03J() {
    alert("Exercício L03J: Apresenta a soma e a média aritmética dos valores pares situados na faixa de 50 a 70.")

    let soma = 0
    let quantidade = 0
    let numero = 50

    while (numero <= 70) {
        soma = soma + numero
        quantidade = quantidade + 1
        numero = numero + 2
    }

    let media = soma / quantidade

    alert("Soma dos valores pares: " + soma + "\nMédia aritmética: " + media.toFixed(2))
}