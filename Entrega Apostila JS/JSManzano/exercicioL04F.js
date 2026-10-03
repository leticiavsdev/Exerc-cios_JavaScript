function exercicioL04F() {
    alert("Exercício L04F: Lê valores positivos sucessivamente até que um valor negativo seja digitado, apresentando o somatório, a média e o total de valores lidos.")

    let somatorio = 0
    let total_lidos = 0
    let valor

    do {
        valor = parseFloat(prompt("Escreva um valor positivo (ou um número negativo para sair):"))

        if (valor >= 0) {
            somatorio = somatorio + valor
            total_lidos = total_lidos + 1
        }
    } while (valor >= 0)

    if (total_lidos > 0) {
        let media = somatorio / total_lidos
        alert(
            "Total do somatório: " + somatorio + "\n" +
            "Total de valores lidos: " + total_lidos + "\n" +
            "Média aritmética: " + media.toFixed(2)
        )
    } else {
        alert("Nenhum valor positivo foi digitado.")
    }
}