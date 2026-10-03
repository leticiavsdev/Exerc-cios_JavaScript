function exercicio9() {
    alert("Exercício 09 — Cálculo do Novo Salário com Reajuste")
    let salarioAtual = parseInt(prompt("Digite o salório mesal atual: "))
    let percentualreajuste = parseInt(prompt("Digite o percentual de reajuste: "))
    //Calculo simples do sálario
    let novoSalario = salarioAtual + (salarioAtual * percentualreajuste / 100)

    alert(`O novo salário é: ${novoSalario}`)

}