function exercicio28() {
    alert("Exercício-28 Ler 3 valores e escrever o maior deles.")
    
    let valor1 = parseInt(prompt("Escreva o valor 1: "))
    let valor2 = parseInt(prompt("Escreva o valor 2: "))
    let valor3 = parseInt(prompt("Escreva o valor 3: "))
    
    let maior // Declara a variável fora para estar acessível no alert

    if (valor1 > valor2 && valor1 > valor3) {
        maior = valor1
    } else if (valor2 > valor3) {
        maior = valor2
    } else {
        maior = valor3
    }
    alert(`O maior valor é: ${maior}`)
}