function exercicioL05G() {
    alert("Exercício L05G: Apresenta os resultados das potências de base 3, variando do expoente 0 até 15.")

    let resultado = "Potências de 3 (expoentes de 0 a 15):\n\n"
    let potencia = 1

    for (let expoente = 0; expoente <= 15; expoente++) {
        resultado += "3 ^ " + expoente + " = " + potencia + "\n"
        potencia = potencia * 3
    }

    alert(resultado)
}