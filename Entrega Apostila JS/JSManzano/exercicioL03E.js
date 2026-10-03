function exercicioL03E() {
    alert("Exercício L03E: Apresenta os resultados das potências de 3, variando do expoente 0 até o expoente 15.")

    let numero = 0
    let potencia = 1
    let resultado = "Potências de 3 (3^0 até 3^15):\n\n"

    while (numero <= 15) {
        resultado += "3 ^ " + numero + " = " + potencia + "\n";
        potencia = potencia * 3
        numero = numero + 1
    }

    alert(resultado)
}