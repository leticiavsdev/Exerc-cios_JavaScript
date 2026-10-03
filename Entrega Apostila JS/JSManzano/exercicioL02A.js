function exercicioL02A() {
    alert("Exercício L02A: Lê dois números inteiros e exibe a diferença do maior pelo menor.");
    let numero1 = parseInt(prompt("Diferença do maior pelo menor\n\nDigite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    let diferenca;

    if (numero1 > numero2) {
        diferenca = numero1 - numero2;
    } else {
        diferenca = numero2 - numero1;
    }

    alert("A diferença é: " + diferenca);
}