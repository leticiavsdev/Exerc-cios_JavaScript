function exercicio34() {
    alert("Exercício-34: Cálculo e classificação do resultado.")

    let x = parseFloat(prompt("Digite o valor de X:"))
    let y = parseFloat(prompt("Digite o valor de Y:"))

    let z = (x * y) + 5
    let resposta;

    if (z <= 0) {
        resposta = "A"
    } else if (z <= 100) {
        resposta = "B"
    } else {
        resposta = "C"
    }

    alert(`Valor calculado (Z): ${z} Categoria: ${resposta}`)
}