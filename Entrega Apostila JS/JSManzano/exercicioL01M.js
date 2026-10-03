function exercicioL01M(){
alert("Exercício L01M: Quadrado da soma")

let A = parseFloat(prompt("Digite o valor de A: "));
let B = parseFloat(prompt("Digite o valor de B: "));
let C = parseFloat(prompt("Digite o valor de C: "));

let resultado = (A + B + C) * (A + B + C)

alert(`O resultado da soma dos quadrados é: ${resultado}`)
}