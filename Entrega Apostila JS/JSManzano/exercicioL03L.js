function exercicioL03L() {
    alert("Exercício L03L: Lê valores inteiros positivos até que um número negativo seja digitado, informando ao final o maior e o menor valor lidos.")

    let valor = parseInt(prompt("Digite um valor positivo:"))

    if (valor < 0) {
        alert("Nenhum valor positivo foi informado.")
        return
    }

    let maior = valor
    let menor = valor

    while (valor >= 0) {
        if (valor > maior) {
            maior = valor
        }

        if (valor < menor) {
            menor = valor
        }

        valor = parseInt(prompt("Digite outro valor positivo (ou um número negativo para parar):"))
    }

    alert("Maior valor informado: " + maior + "\nMenor valor informado: " + menor)
}