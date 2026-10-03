function exercicio21() {
    alert("Exercício 21 — Cálculo da Duração de um Jogo de Xadrez")
    let horaInicio = parseInt(prompt("Horário de início da partida:"))
    let horaFinal = parseInt(prompt("Horário do fim do jogo: "))
    if (horaInicio < horaFinal){
        let duracao = horaFinal - horaInicio
        alert("A duração foi: "+ duracao)
    } else {
        duracao = (24 - horaInicio) + horaFinal
        alert("A duração foi: "+ duracao)
    }
}