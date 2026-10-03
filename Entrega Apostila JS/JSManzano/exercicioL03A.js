function exercicioL03A() {
    alert("Exercício L03A: Apresenta os resultados da tabuada de multiplicar do número 2 (de 1 até 10).");

    let numero = 1;
    let tabuada = 2;
    let resultado = "";

    while (numero <= 10) {
        resultado += tabuada + " x " + numero + " = " + (tabuada * numero) + "\n";
        numero = numero + 1;
    }

    alert(resultado);
}