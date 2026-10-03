function exercicioL03C() {
    alert("Exercício L03C: Calcula e apresenta o somatório dos valores pares existentes na faixa de 1 até 500.")

    let contador = 0
    let soma = 0

    while (contador <= 500) {
        if (contador % 2 === 0) {
            soma = soma + contador
        }
        contador = contador + 1
    }

    alert("O somatório dos valores pares de 1 até 500 é: " + soma)
}