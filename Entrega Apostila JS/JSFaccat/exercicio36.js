function exercicio36() {
    alert("36) Combinação de Idades por Extremos de Faixa Etária")
    let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
    let homem2 = parseInt(prompt("Digite a idade do segundo homem: "));
    let mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
    let mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

    let homemVelho, homemNovo;
    let mulherVelha, mulherNova;

    // Identifica o homem mais velho e o mais novo
    if (homem1 > homem2) {
        homemVelho = homem1;
        homemNovo = homem2;
    } else {
        homemVelho = homem2;
        homemNovo = homem1;
    }

    // Identifica a mulher mais velha e a mais nova
    if (mulher1 > mulher2) {
        mulherVelha = mulher1;
        mulherNova = mulher2;
    } else {
        mulherVelha = mulher2;
        mulherNova = mulher1;
    }

    let soma = homemVelho + mulherNova;
    let produto = homemNovo * mulherVelha;

    alert(`Soma do homem mais velho (${homemVelho}) com a mulher mais nova (${mulherNova}): ${soma}`);
    alert(`Produto do homem mais novo (${homemNovo}) com a mulher mais velha (${mulherVelha}): ${produto}`);
}
