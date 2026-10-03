function exercicioL04H() {
    alert("Exercício L04H: Calcula a área de cada cômodo informado pelo usuário e apresenta a área total acumulada da residência.")

    let areaTotal = 0
    let continua

    do {
        let nomeComodo = prompt("Digite o nome do cômodo:")
        let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"))
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"))

        let areaComodo = largura * comprimento
        areaTotal = areaTotal + areaComodo

        alert("Área do cômodo " + nomeComodo + ": " + areaComodo.toFixed(2) + " m²")

        continua = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)").toUpperCase()
    } while (continua !== "NAO")

    alert("Área total da residência: " + areaTotal.toFixed(2) + " m²")
}