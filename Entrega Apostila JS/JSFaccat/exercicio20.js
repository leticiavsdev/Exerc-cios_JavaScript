function exercicio20() {
    alert("Exercício 20 — Ordenação de Dois Valores em Ordem Crescente");

    let valor1 = parseInt(prompt("Digite o valor 1: "));
    let valor2 = parseInt(prompt("Digite o valor 2: "));

    if (valor1 > valor2) {
        alert(`O menor é: ${valor2}`);
        alert(`O maior é: ${valor1}`);
    } else {
        alert(`O menor é: ${valor1}`);
        alert(`O maior é: ${valor2}`);
    }
}