function exercicioL05H() {
    alert("Exercício L05H: Calcula a potência de uma base qualquer elevada a um expoente qualquer sem utilizar o operador de exponenciação.")

    let base = parseInt(prompt("Escreva a base:"))
    let expoente = parseInt(prompt("Escreva o expoente:"))
    let potencia = 1

    for (let contador = 1; contador <= expoente; contador++) {
        potencia = potencia * base
    }

    alert("O resultado de " + base + " elevado a " + expoente + " é: " + potencia)
}