function exercicioL02I() {
    alert("Exercício L02I: Lê um número inteiro e informa se ele é par ou ímpar.")

    let numero = parseInt(prompt("Escreva um número:"));

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par");
    } else {
        alert("O número " + numero + " é ímpar");
    }
}