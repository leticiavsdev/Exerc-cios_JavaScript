function exercicioL02L() {
    alert("Exercício L02L: Lê o nome e a opção de sexo de uma pessoa e exibe uma mensagem de saudação personalizada.");

    let nome = prompt("Escreva seu nome:");
    let opcao = parseInt(prompt("Escolha seu sexo:\n1 - Feminino\n2 - Masculino"));

    switch (opcao) {
        case 1:
            alert("Seja bem-vinda Sra. " + nome + "!");
            break;
        case 2:
            alert("Seja bem-vindo Sr. " + nome + "!");
            break;
        default:
            alert("Não temos essa opção!");
            break;
    }
}