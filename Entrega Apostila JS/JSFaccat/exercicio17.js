function exercicio17() {
    alert("Exercício 16 — Cálculo da Média e Aprovação do Aluno");

    let soma = 0;

    for (let i = 0; i < 2; i++) {
        let nota = parseInt(prompt(`Digite a nota da prova ${i + 1}:`));
        soma = soma + nota;
    }

    let total = soma / 2;

    if (total >= 6) {
        alert("Você foi aprovado com a média: " + total);
    } else {
        alert("Você foi reprovado com a média: " + total);
    }
}