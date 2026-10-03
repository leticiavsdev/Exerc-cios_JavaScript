function exercicio11(){
    alert("Exercício 11 — Cálculo do Salário Final do Vendedor")
     let quantidadeCarros = parseInt(prompt("Digite a quantidade de carros vendidos: "))
     let valorTotalVendas = parseInt(prompt("Digite o valor total das vendas: ")) 
     let salarioFixo = parseInt(prompt("Digite o salário fixo:"))
     let valorPorCarro = parseInt(prompt("Digite o valor recebido por carro vendido:"))

     let salarioFinal = salarioFixo + (quantidadeCarros * valorPorCarro) + (valorTotalVendas * 5 / 100)

     alert(`O salário final do vendedor é: R$${salarioFinal}`)
}