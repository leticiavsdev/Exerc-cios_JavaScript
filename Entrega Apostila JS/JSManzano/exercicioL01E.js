function exercicioL01E(){
    alert("Exercício L01E - calculo prestação em atraso")

    let valor = parseFloat(prompt("Digite o valor da prestação: "))
    let dia = parseInt(prompt("Digite a quantidade de dias em atraso: "))

    let taxa = parseFloat(prompt("Digite a taxa de juros (em %): "))

    let prestacao = valor + ( valor * (taxa / 100) * dia)

    alert(`O valor da prestação com juros: ${prestacao.toFixed(2)}`)
}