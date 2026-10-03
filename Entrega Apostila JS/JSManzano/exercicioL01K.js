function exercicioL01K(){
    alert("exercício L01K - Cotação do Real para Dólar")

    let real = parseFloat(prompt("Digite o valor em reais: "))

    let cotacao = parseFloat(prompt("Digite a cotação do real: "))

    let dolar = real / cotacao

    alert(`O valor em dólar é: ${dolar.toFixed(2)}`)
}