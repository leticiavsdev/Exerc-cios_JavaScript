function exercicio26(){
    alert("Exercício 26 — Cálculo da Quantidade Média e Verificação de Compra")

    let quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque: "))
    let quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque: "))
    let quantidadeMinina = parseInt(prompt("Digite a quantidade mínima em estoque: "))

    let quantidadeMedia = (quantidadeMaxima + quantidadeMinina) / 2

    alert(`Quantidade média em estoque: ${quantidadeMedia}`)

    if (quantidadeAtual >= quantidadeMedia){
        alert(`Não efetuar compra`)
    } else {
        alert(`Efetuar compra`)
    }
}