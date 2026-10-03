function exercicioL02F() {
    alert("Exercício L02F / L03G: Lê três valores inteiros e os exibe organizados em ordem crescente.")
    
    let A = parseInt(prompt("Escreva o número 1:"));
    let B = parseInt(prompt("Escreva o número 2:"));
    let C = parseInt(prompt("Escreva o número 3:"));

    if (A <= B && B <= C) {
        alert("A ordem crescente é: " + A + ", " + B + ", " + C);
    } else {
        if (A <= C && C <= B) {
            alert("A ordem crescente é: " + A + ", " + C + ", " + B);
        } else {
            if (B <= A && A <= C) {
                alert("A ordem crescente é: " + B + ", " + A + ", " + C);
            } else {
                if (B <= C && C <= A) {
                    alert("A ordem crescente é: " + B + ", " + C + ", " + A);
                } else {
                    if (C <= A && A <= B) {
                        alert("A ordem crescente é: " + C + ", " + A + ", " + B);
                    } else {
                        alert("A ordem crescente é: " + C + ", " + B + ", " + A);
                    }
                }
            }
        }
    }
}