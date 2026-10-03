function exercicioL01G() {
    alert("SOMA E MULTIPLICAÇÃO");

    // Entrada de dados via prompt do navegador
    const A = parseInt(prompt("Escolha o valor do A:"));
    const B = parseInt(prompt("Escolha o valor do B:"));
    const C = parseInt(prompt("Escolha o valor do C:"));
    const D = parseInt(prompt("Escolha o valor do D:"));

    // Adições
    let mensagemAdicao = "=== RESULTADOS DAS ADIÇÕES ===\n" +
        `A + B = ${A + B}\n` +
        `A + C = ${A + C}\n` +
        `A + D = ${A + D}\n` +
        `B + C = ${B + C}\n` +
        `B + D = ${B + D}\n` +
        `C + D = ${C + D}\n\n`

    //  Multiplicações
    let mensagemMultiplicacao = "=== RESULTADOS DAS MULTIPLICAÇÕES ===\n" +
        `A * B = ${A * B}\n` +
        `A * C = ${A * C}\n` +
        `A * D = ${A * D}\n` +
        `B * C = ${B * C}\n` +
        `B * D = ${B * D}\n` +
        `C * D = ${C * D}`

    // Exibição via caixa de alerta no navegador
    alert(mensagemAdicao + mensagemMultiplicacao);
}