function exercicio23(){
    let nome = prompt("Digite o seu nome: ")
    let sexo = prompt("Digite o seu sexo (M/F): ")
    let altura = parseFloat(prompt("Digite sua altura: "))

    let pesoIdeal

    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58
    } else {
        pesoIdeal = (62.1 * altura) - 44.7
    }

    alert(`Nome: ${nome}`)
    alert(`Peso ideal: ${pesoIdeal} Kg`)
}