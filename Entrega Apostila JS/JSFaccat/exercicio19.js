function exercicio19(){
    alert("Exercício 19 — Verificação do Maior entre Dois Valores")
    valor1 = parseInt(prompt("Digite o primeiro valor: "))
    valor2 = parseInt(prompt("Digite o segundo valor: "))
    if (valor1 > valor2){
        alert(`O maior é: ${valor1} e o menor é: ${valor2}`)
    }else{
        alert(`O maior é: ${valor2} e o menor é: ${valor1}`)
    }
    
}