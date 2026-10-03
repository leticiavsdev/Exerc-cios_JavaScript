function exercicioL05B() {
    alert("Exercício L05B: Apresenta a tabuada de multiplicar de 1 a 10 para um número informado.")

    let tabuada = parseInt(prompt("Escolha a tabuada que quer saber:"))

    if (isNaN(tabuada)) {
        alert("Por favor, informe um número válido.");
        return
    }

    let resultado = "Tabuada do " + tabuada + ":\n\n"

    for (let numero = 1; numero <= 10; numero++) {
        resultado += tabuada + " x " + numero + " = " + (tabuada * numero) + "\n"
    }

    alert(resultado)
}