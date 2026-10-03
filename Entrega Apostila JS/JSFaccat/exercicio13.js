function exercicio13(){
    alert("Exercício 13 — Cálculo da Média Ponderada do Aluno")
    let nota1 = parseInt(prompt("Digite a primeira nota: "))
    let nota2 = parseInt(prompt("Digite a segunda nota: "))
    let nota3 = parseInt(prompt("A média final do aluno é:"))
    let media = (nota1 + nota2 + nota3 * 5 ) / 10

    alert(`A média final do aluno é: ${media}`)


}