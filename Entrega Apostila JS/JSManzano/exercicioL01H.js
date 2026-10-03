function exercicioL01H(){
    alert("exercício L01H -  Calcular o  volume de uma caixa retangular")

    let comprimento = parseFloat(prompt("Digite o comprimento da caixa: "))
    let largura = parseFloat(prompt("Digite a largura da caixa: "))
    let altura = parseFloat(prompt("Digite a altura da caixa: "))

    let volume = comprimento * largura * altura

    alert(`O volume do retangulo é: ${volume}`)
}