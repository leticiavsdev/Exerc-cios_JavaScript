function exercicioL02E() {
    alert("Exercício L02E: Lê os valores de A, B e C para calcular uma equação do 2º grau (fórmula de Bhaskara) e exibe as raízes X1 e X2.")
    
    let A = parseFloat(prompt("Digite o valor de a:"));
    let B = parseFloat(prompt("Digite o valor de b:"));
    let C = parseFloat(prompt("Digite o valor de c:"));

    if (A !== 0) {
        let delta = (B ** 2) - (4 * A * C);

        if (delta >= 0) {
            let X1 = (-B + Math.sqrt(delta)) / (2 * A);
            let X2 = (-B - Math.sqrt(delta)) / (2 * A);

            alert("x1 = " + X1 + "\nx2 = " + X2);
        } else {
            alert("A equação não possui raízes reais (delta negativo).");
        }
    } else {
        alert("O valor de a deve ser diferente de zero.");
    }
}