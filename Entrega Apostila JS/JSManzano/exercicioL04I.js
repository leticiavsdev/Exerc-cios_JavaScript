function exercicioL04I() {
    alert("Exercício L04I: Lê valores inteiros até que um valor menor ou igual a zero/negativo seja digitado, informando o maior e o menor valor lidos.")

    let valor = parseInt(prompt("Digite um valor positivo:"))

    if (valor < 0) {
        alert("Nenhum valor positivo foi informado.")
        return
    }

    let maior = valor
    let menor = valor

    do {
        if (valor > maior) {
            maior = valor
        }

        if (valor < menor) {
            menor = valor
        }

        valor = parseInt(prompt("Digite outro valor positivo (ou um número negativo/zero para parar):"))
    } while (valor > 0)

    alert("Maior valor informado: " + maior + "\nMenor valor informado: " + menor)
}