function exercicioL05C() {
    alert("Exercício L05C: Apresenta o total da soma dos cem primeiros números inteiros (1+2+3+...+100).")

    let soma = 0

    for (let contadora = 1; contadora <= 100; contadora++) {
        soma = soma + contadora
    }

    alert("O total da soma dos 100 primeiros números inteiros é: " + soma)
}