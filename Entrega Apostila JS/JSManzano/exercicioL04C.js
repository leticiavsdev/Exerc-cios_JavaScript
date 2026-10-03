function exercicioL04C() {
    alert("Exercício L04C: Apresenta todos os números divisíveis por 4 que sejam menores que 200.")

    let numero = 1
    let resultado = "Números divisíveis por 4 menores que 200:\n\n"

    do {
        if (numero % 4 === 0) {
            resultado += "Número divisível por 4: " + numero + "\n"
        }
        numero = numero + 1
    } while (numero < 200)

    alert(resultado)
}