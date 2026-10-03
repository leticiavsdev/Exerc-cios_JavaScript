function exercicioL03D() {
    alert("Exercício L03D: Apresenta todos os números ímpares situados na faixa de 0 a 20.")

    let contadora = 0
    let resultado = "Números ímpares de 0 a 20:\n\n"

    while (contadora <= 20) {
        if (contadora % 2 !== 0) {
            resultado += contadora + "\n"
        }
        contadora = contadora + 1
    }

    alert(resultado);
}