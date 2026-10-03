function exercicioL01C(){
    alert("Exercício L01C - Calcular o volume de uma lata")
    let altura = parseFloat(prompt("Digite a altura da lata: "))
    let raio = parseFloat(prompt("Digite o raio da lata: "))
    let volume = 3.14 * (raio * raio) * altura
    alert("Volume da lata: " + volume)
}