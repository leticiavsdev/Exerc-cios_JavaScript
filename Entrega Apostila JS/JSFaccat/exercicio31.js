function exercicio31(){
  alert("Exercício-31: Verificar se 3 lados formam um triângulo.")
  let A = parseInt(prompt("Digite o valor do lado A: "))
  let B = parseInt(prompt("Digite o valor do lado B: "))
  let C = parseInt(prompt("Digite o valor do lado C: "))

  if ((A < B + C) && (B < A + C) && (C < A + B)){
    alert("Os valores formam um triâgulo.")
  } else {
    alert("O valores não forman um triângulo.")
  }
}