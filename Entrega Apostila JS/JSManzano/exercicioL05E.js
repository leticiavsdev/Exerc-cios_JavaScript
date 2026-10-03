function exercicioL05E() {
    alert("Exercício L05E: Apresenta todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20.")

    let resultado = "Números ímpares na faixa de 0 a 20:\n\n"

    for (let contadora = 0; contadora <= 20; contadora++) {
        if (contadora % 2 !== 0) {
            resultado += contadora + "\n"
        }
    }

    alert(resultado)
}