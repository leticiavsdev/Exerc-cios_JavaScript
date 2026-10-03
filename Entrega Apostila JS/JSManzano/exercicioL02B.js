function exercicioL02B() {
    alert("Exercício L02B: Lê um número inteiro (positivo ou negativo) e exibe o seu valor absoluto (módulo/positivo).");
    let numero = parseInt(prompt("Digite um número:"));

    if (numero < 0) {
        numero = numero * -1;
    }

    alert("O número é: " + numero);
}