function exercicio32() {
    alert("Exercício-32: Placar do jogo e vencedor.")
    let time1 = prompt("Digite o nome do primeiro time: ")
    let gols1 = parseInt(prompt(`Digite o número de gols do ${time1}: `))
    let time2 = prompt("Digite o nome do segundo time: ")
    let gols2 = parseInt(prompt(`Digite o número de gols do ${time2}: `))
    if (gols1 > gols2) {
        alert(`vencedor: ${time1} com ${gols1} `)
    } else if (gols2 > gols1) {
        alert(`vencedor: ${time2} com ${gols2}`)
    } else {
        alert("EMPATE")
    }
}