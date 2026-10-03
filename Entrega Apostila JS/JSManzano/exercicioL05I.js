function exercicioL05I() {
    alert("Exercício L05I: Apresenta a série de Fibonacci até o décimo quinto termo.")

    let anterior = 1
    let atual = 1
    let resultado = "Série de Fibonacci (15 primeiros termos):\n\n"

    for (let contadora = 0; contadora < 15; contadora++) {
        resultado += (contadora + 1) + "º termo: " + atual + "\n"

        let proximo = anterior + atual
        anterior = atual
        atual = proximo
    }

    alert(resultado)
}