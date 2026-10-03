function exercicioL04D() {
    alert("Exercício L04D: Calcula o somatório do número de grãos de trigo em um tabuleiro de xadrez (dobrando a cada casa até a 64ª).")

    let graos = 1
    let total = 0
    let contadora = 1

    do {
        total = total + graos
        graos = graos * 2
        contadora = contadora + 1
    } while (contadora <= 64)

    alert("Somatório do número de grãos de trigo: " + total)
}