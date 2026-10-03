function exercicioL01B(){
    alert("Exercício L01A: Converte temperatura de Fahrenheit para Celsius")

    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))

    let celsius = ((fahrenheit - 32) * 5) / 9

    alert(`O valor em Celsius é ${celsius.toFixed(2)}`)
}