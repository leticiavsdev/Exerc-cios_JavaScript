function exercicioL04G() {
    alert("Exercício L04G: Apresenta o resultado do fatorial de todos os valores ímpares na faixa de 1 a 10.")

    let numero = 1
    let resultado = "Fatorial dos números ímpares de 1 a 10:\n\n"

    do {
        if (numero % 2 !== 0) {
            let fatorial = 1
            let i = numero

            do {
                fatorial = fatorial * i
                i = i - 1
            } while (i >= 1)

            resultado += "O fatorial do número ímpar " + numero + " é: " + fatorial + "\n"
        }
        numero = numero + 1
    } while (numero <= 10)

    alert(resultado)
}