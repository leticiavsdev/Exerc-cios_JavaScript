function exercicio10(){
    alert("Exercício 10 — Cálculo do Custo Final de um Carro")
   let custoFabrica = parseInt(prompt("Digite o custo fábrinca do carro: ")) 

   let custoFinal = custoFabrica + (custoFabrica * 28 / 100) + (custoFabrica * 45 / 100) 

   alert("O custo final do carro é: R$"+ custoFinal)


}