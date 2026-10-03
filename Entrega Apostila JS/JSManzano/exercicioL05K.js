function exercicioL05K() {
    alert("Exercício L05K: Calcula e apresenta o fatorial dos números ímpares no intervalo de 1 a 10.")

    let resultado = "Fatorial dos números ímpares de 1 a 10:\n\n"

    for (let numero = 1; numero <= 10; numero++) {
        if (numero % 2 !== 0) {
            let fatorial = 1

            for (let i = numero; i >= 1; i--) {
                fatorial = fatorial * i
            }

            resultado += "O fatorial do número ímpar " + numero + " é: " + fatorial + "\n"
        }
    }

    alert(resultado)
}