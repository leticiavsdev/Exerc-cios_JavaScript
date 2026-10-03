function exercicioL03K() {
    alert("Exercício L03K: Calcula a área de cada cômodo informado pelo usuário e exibe a área total acumulada da residência.")

    let areaTotal = 0
    let continuar = "SIM"

    while (continuar !== "NAO") {
        let nomeComodo = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"))
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"))

        let areaComodo = largura * comprimento;
        areaTotal += areaComodo

        alert("Área do cômodo " + nomeComodo + ": " + areaComodo.toFixed(2) + " m²")

        continuar = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)").toUpperCase()
    }

    alert("Área total da residência: " + areaTotal.toFixed(2) + " m²")
}