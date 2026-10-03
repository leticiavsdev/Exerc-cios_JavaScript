function exercicio35() {
    alert("Exercício-35: Posto de Combustíveis")

    let litros = parseFloat(prompt("Digite o número de litros vendidos:"))
    let combustivel = prompt("Digite o tipo de combustível (A-Álcool, G-Gasolina):").toUpperCase()

    let precoLitro = 0
    let desconto = 0

    if (combustivel === "A") {
        precoLitro = 2.90
        if (litros <= 20) {
            desconto = 0.03
        } else {
            desconto = 0.05
        }
    } else if (combustivel === "G") {
        precoLitro = 3.30
        if (litros <= 20) {
            desconto = 0.04
        } else {
            desconto = 0.06
        }
    } else {
        alert("Tipo de combustível inválido!")
        return // Encerra a função se o tipo for inválido
    }

    let valorTotal = litros * (precoLitro * (1 - desconto))

    alert(`Valor a ser pago: R$ ${valorTotal.toFixed(2)}`)
}