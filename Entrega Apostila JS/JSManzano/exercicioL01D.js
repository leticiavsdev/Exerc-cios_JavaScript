function exercicioL01D(){
    alert("Exercício L01D - Determinar a quantidade de litros de combustível gasta em uma viagem.")
    let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas): "))
    let velocidade = parseFloat(prompt("Digite a velocidade media da viagem (em Km/h): "))

    let distancia = (tempo * velocidade)
    let litros = (distancia / 12)

    alert(`A quantidade de litros de combustível gasta na viagem é: ${litros.toFixed(2)} litros`)
    alert(`A quantidade de Km percorridos na viagem é: ${distancia.toFixed(2)} Km`)
    alert(`O tempo gasto na viagem é: ${tempo.toFixed(2)} horas`)
    alert(`A velocidade media da viagem é: ${velocidade.toFixed(2)} Km/h`)
}
