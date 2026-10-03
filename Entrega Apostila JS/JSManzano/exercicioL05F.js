function exercicioL05F() {
    alert("Exercício L05F: Apresenta todos os números divisíveis por 4 menores que 200.")

    let resultado = "Números divisíveis por 4 (menores que 200):\n\n"

    for (let i = 1; i < 200; i++) {
        if (i % 4 === 0) {
            resultado += i + "\n"
        }
    }

    alert(resultado)
}