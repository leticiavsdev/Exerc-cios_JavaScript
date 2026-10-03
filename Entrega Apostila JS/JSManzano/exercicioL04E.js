function exercicioL04E() {
    alert("Exercício L04E: Lê 15 valores inteiros e apresenta o somatório do fatorial de cada valor lido.")

    let numero = 1
    let total = 0

    do {
        let valor = parseInt(prompt("Escreva o " + numero + "º valor:"))
        let fatorial = 1
        let tempValor = valor

        do {
            if (tempValor > 0) {
                fatorial = fatorial * tempValor;
                tempValor = tempValor - 1;
            }
        } while (tempValor >= 1)

        total = total + fatorial
        numero = numero + 1
    } while (numero <= 15)

    alert("Segue o valor da somatória dos fatoriais: " + total)
}