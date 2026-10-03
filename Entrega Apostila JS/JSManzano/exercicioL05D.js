function exercicioL05D() {
    alert("Exercício L05D: Apresenta o somatório de todos os valores pares existentes na faixa de 1 até 500.")

    let pares = 0

    for (let numero = 1; numero <= 500; numero++) {
        if (numero % 2 === 0) {
            pares = pares + numero
        }
    }

    alert("Resultado do somatório dos pares: " + pares)
}