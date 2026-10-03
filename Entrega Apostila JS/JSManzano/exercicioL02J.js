function exercicioL02J() {
    alert("Exercício L02J: Lê um valor e verifica se ele está na faixa permitida de 1 a 9.");

    let numero = parseInt(prompt("Escreva um número de 1 a 9:"));

    if (numero >= 1 && numero <= 9) {
        alert("O valor está na faixa permitida!");
    } else {
        alert("O valor está fora da faixa permitida!");
    }
}