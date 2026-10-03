function exercicioL03I() {
    alert("Exercício L03I: Lê 10 valores numéricos, calcula o somatório total e apresenta a média aritmética deles.")

    let soma = 0
    let contador = 1
    let numero

    while (contador <= 10) {
        numero = parseFloat(prompt("Escreva o número " + contador + ":"))
        soma = soma + numero
        contador = contador + 1
    }

    let media = soma / 10

    alert("A soma de todos os números é: " + soma.toFixed(2) + "\nA média de todos os números é: " + media.toFixed(2))
}