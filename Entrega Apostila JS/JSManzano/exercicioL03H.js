function exercicioL03H() {
    alert("Exercício L03H: Apresenta a tabela de conversão de graus Celsius para Fahrenheit, de 10 em 10°C (de 10°C até 100°C).")

    let celsius = 10
    let fahrenheit
    let resultado = "Tabela de Conversão (Celsius -> Fahrenheit):\n\n"

    while (celsius <= 100) {
        fahrenheit = (9 * celsius + 160) / 5
        resultado += "Celsius: " + celsius + "°C | Fahrenheit: " + fahrenheit + "°F\n"
        celsius = celsius + 10
    }

    alert(resultado)
}