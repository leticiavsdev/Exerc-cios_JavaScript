function exercicioL01A(){
    alert("Exercício L01A: Temperatura")

    let celsius = parseFloat(prompt("Converter de Celsius para Fahrenheit. Digite a temperatura em Celsius: "))

    let fahrenheit = ((9 * celsius + 160) / 5)

    alert(`O valor em Fahrenheit é ${fahrenheit.toFixed(2)}`)
}