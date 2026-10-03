function exercicioL01J(){
    alert("exercício L01J - Cotação do Dólar para Real")

    let dolar = parseFloat(prompt("Digite o valor do dolar: "))

    let cotacao = parseFloat(prompt("Digite a cotação do dolar: "))

    let real = dolar * cotacao

    alert(`O valor em reais é: ${real.toFixed(2)}`)

}