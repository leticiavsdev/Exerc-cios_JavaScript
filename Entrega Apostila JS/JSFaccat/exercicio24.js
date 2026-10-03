function exercicio24(){
    alert("Exercício 24 — Cálculo do Salário com Comissão sobre Vendas")

    let salario = parseFloat(prompt("Digite o seu salário fixo: "))
    let vendas = parseFloat(prompt("Digite o valor das vendas: "))

    let comissao

    if (vendas <= 1500){
        comissao = vendas * 0.03
    } else {
        comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05)
    }

    alert(`O seu salário será: R$${salario + comissao}`)
}