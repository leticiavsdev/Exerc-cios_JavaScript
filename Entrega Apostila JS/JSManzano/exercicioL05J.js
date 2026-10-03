function exercicioL05J() {
    alert("Exercício L05J: Apresenta os valores de conversão de graus Celsius em Fahrenheit de 10 em 10 graus (de 10°C a 100°C).")

    let resultado = "Tabela de Conversão (Celsius para Fahrenheit):\n\n"

    for (let celsius = 10; celsius <= 100; celsius += 10) {
        let fahrenheit = (9 * celsius + 160) / 5
        resultado += "Celsius: " + celsius + "°C  |  Fahrenheit: " + fahrenheit.toFixed(1) + "°F\n"
    }

    alert(resultado)
}