function exercicioL04A() {
    alert("Exercício L04A: Apresenta os quadrados dos números inteiros de 15 a 200.")

    let contadora = 14
    let numero
    let quadrado
    let resultado = "Quadrados dos números inteiros de 15 a 200:\n\n"

    do {
        numero = contadora + 1
        quadrado = numero * numero
        resultado += "O quadrado de " + numero + " é " + quadrado + ".\n"
        contadora = contadora + 1
    } while (contadora < 201)

    alert(resultado)
}