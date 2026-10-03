function exercicioL02G() {
    alert("Exercício L02G: Lê quatro números inteiros e verifica, para cada um, se é divisível por 2 e por 3 simultaneamente.")
    
    let A = parseInt(prompt("Digite o primeiro número (A):"));
    let B = parseInt(prompt("Digite o segundo número (B):"));
    let C = parseInt(prompt("Digite o terceiro número (C):"));
    let D = parseInt(prompt("Digite o quarto número (D):"));

    let resultado = "Números divisíveis por 2 e 3:\n\n";

    if (A % 2 === 0 && A % 3 === 0) {
        resultado += "O número (" + A + ") é divisível por 2 e 3\n";
    } else {
        resultado += "O número (" + A + ") não é divisível por 2 e 3\n";
    }

    if (B % 2 === 0 && B % 3 === 0) {
        resultado += "O número (" + B + ") é divisível por 2 e 3\n";
    } else {
        resultado += "O número (" + B + ") não é divisível por 2 e 3\n";
    }

    if (C % 2 === 0 && C % 3 === 0) {
        resultado += "O número (" + C + ") é divisível por 2 e 3\n";
    } else {
        resultado += "O número (" + C + ") não é divisível por 2 e 3\n";
    }

    if (D % 2 === 0 && D % 3 === 0) {
        resultado += "O número (" + D + ") é divisível por 2 e 3\n";
    } else {
        resultado += "O número (" + D + ") não é divisível por 2 e 3\n";
    }

    alert(resultado);
}