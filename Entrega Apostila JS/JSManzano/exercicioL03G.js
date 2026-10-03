function exercicioL03G() {
    alert("Exercício L03G: Apresenta a série de Fibonacci até o décimo quinto termo (1, 1, 2, 3, 5, 8, ...).")

    let anterior = 1
    let atual = 1
    let contadora = 1
    let resultado = "Série de Fibonacci (até o 15º termo):\n\n"

    while (contadora <= 15) {
        resultado += atual + "\n"

        let proximo = anterior + atual
        anterior = atual
        atual = proximo

        contadora = contadora + 1
    }

    alert(resultado)
}