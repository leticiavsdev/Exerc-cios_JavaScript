function exercicio29() {
    alert("Exercício-29 Ler 3 valores e escrever a soma dos 2 maiores.")
    let valor1 = parseInt(prompt("Escreva o valor 1: "))
    let valor2 = parseInt(prompt("Escreva o valor 2: "))
    let valor3 = parseInt(prompt("Escreva o valor 3: "))
    let soma
    if (valor1 < valor2 && valor1 < valor3) {
        soma = valor2 + valor3
    } else if (valor2 < valor1 && valor2 < valor3) {
        soma = valor1 + valor3
    } else {
        soma = valor1 + valor2
    }
    alert(`Soma dos maiores valores é: ${soma}`)
}