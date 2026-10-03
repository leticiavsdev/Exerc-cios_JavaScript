function exercicioL05A() {
    alert("Exercício L05A: Apresenta os quadrados dos números inteiros de 15 a 200.");

    let resultado = "PROGRAMA DE QUADRADOS 15 a 200\n\n";

    for (let contadora = 15; contadora <= 200; contadora++) {
        let quadrado = contadora * contadora;
        resultado += "O quadrado de " + contadora + " é " + quadrado + ".\n";
    }

    alert(resultado);
}