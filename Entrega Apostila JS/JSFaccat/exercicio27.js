function exercicio27() {
    alert("Exercício-27 Ler um valor e escrever se é positivo, negativo ou zero.")
    let valor = parseInt(prompt("Escreva um valor: "))

    if (valor > 0) {
        alert(`O ${valor} é positivo!`)
    } else if (valor === 0) {
        alert(`O ${valor} é zero!`)
    } else {
        alert(`O ${valor} é negativo!`)
    }
}