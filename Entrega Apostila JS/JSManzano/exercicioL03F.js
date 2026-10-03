function exercicioL03F() {
    alert("Exercício L03F: Calcula a potência de uma base qualquer elevada a um expoente qualquer sem utilizar o operador de exponenciação.")

    let base = parseInt(prompt("Escreva a base:"))
    let expoente = parseInt(prompt("Escreva o expoente:"))

    let potencia = 1
    let contador = 0                

    while (contador < expoente) {
        potencia = potencia * base
        contador = contador + 1
    }

    alert("O resultado de " + base + " elevado a " + expoente + " é: " + potencia)           
}