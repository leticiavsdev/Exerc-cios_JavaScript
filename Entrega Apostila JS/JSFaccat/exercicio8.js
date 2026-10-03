function exercicio8() {
    // Seção de Comandos, procedimento, funções, operadores, etc...
    alert("Exercício 08 — Percentual de Votos Brancos, Nulos e Válidos")
    let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "))
    let brancos = parseInt(prompt("Digite o número de votos brancos: "))
    let nulos = parseInt(prompt("Digite o número de votos nulos: "))
    let validos = parseInt(prompt("Digite o número de votos válidos:"))
    //Faz o cálculo do percentual para apresentar na tela
    let percentualBrancos = (brancos * 100) / totalEleitores
    let percentualNulos = (nulos * 100) / totalEleitores
    let percentualvalidos = (validos * 100) / totalEleitores

    alert(`Percentual de votos brancos: ${percentualBrancos}%`)
    alert(`Percentual de votos nulos: ${percentualNulos}%`)
    alert(`Percentual de votos válidos: ${percentualvalidos}%`)
}