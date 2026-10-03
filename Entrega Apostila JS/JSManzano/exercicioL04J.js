function exercicioL04J() {
    alert("Exercício L04J: Calcula o quociente inteiro da divisão de dois números por meio de subtrações sucessivas (sem usar o operador DIV).")

    let dividendo = parseFloat(prompt("Escreva o dividendo:"))
    let divisor = parseFloat(prompt("Escreva o divisor:"))

    if (divisor <= 0) {
        alert("O divisor deve ser maior que zero.")
        return
    }

    let resultado = 0
    let sobra = dividendo

    if (sobra >= divisor) {
        do {
            sobra = sobra - divisor
            resultado = resultado + 1
        } while (sobra >= divisor)
    }

    alert("A quantidade de vezes divididas (quociente) foi: " + resultado)
}