function exercicioL02H() {

    alert("Exercício L02H: Lê cinco números inteiros e identifica qual é o maior e qual é o menor valor informado.")
    
    let numero1 = parseInt(prompt("Escolha o número 1:"));
    let numero2 = parseInt(prompt("Escolha o número 2:"));
    let numero3 = parseInt(prompt("Escolha o número 3:"));
    let numero4 = parseInt(prompt("Escolha o número 4:"));
    let numero5 = parseInt(prompt("Escolha o número 5:"));

    let maior, menor;

    if (numero1 >= numero2) {
        maior = numero1;
        menor = numero2;
    } else {
        maior = numero2;
        menor = numero3;
    }

    if (numero3 >= maior) {
        maior = numero3;
    } else {
        if (menor >= numero3) {
            menor = numero3;
        }
    }

    if (numero4 >= maior) {
        maior = numero4;
    } else {
        if (menor >= numero4) {
            menor = numero4;
        }
    }

    if (numero5 >= maior) {
        maior = numero5;
    } else {
        if (menor >= numero5) {
            menor = numero5;
        }
    }

    alert("O maior número é: " + maior + "\n\nO menor número é: " + menor);
}