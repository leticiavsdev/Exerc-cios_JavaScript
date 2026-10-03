function exercicio18() {
    alert("Exercício 18 — Verificação de Elegibilidade para Votar");

    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
    let anoAtual = parseInt(prompt("Digite o ano atual:"));

    let idade = anoAtual - anoNascimento;

    if (idade < 16) {
        alert(`Você tem ${idade} anos e não pode votar!`);
    } else if (idade < 18) {
        alert(`Você tem ${idade} anos e pode votar, mas não é obrigatório!`);
    } else {
        alert(`Você tem ${idade} anos e é obrigado a votar!`);
    }
}