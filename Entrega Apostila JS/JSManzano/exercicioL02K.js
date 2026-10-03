function exercicioL02K() {
    alert("Exercício L02K: Lê um número inteiro e só o apresenta se ele não for maior que três (ou seja, menor ou igual a 3).");

    let numero = parseInt(prompt("Escreva um número menor que 3:"));

    if (numero <= 3) {
        alert("O valor escolhido é: " + numero);
    } else {
        alert("Fim do programa, pois foi escolhido um número maior que 3!");
    }
}