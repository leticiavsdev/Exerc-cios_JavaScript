function exercicioL01F(){
    alert("Exercício L01F -  Troca de Valores")
    let banana = parseInt(prompt("Digite o valor da banana: "))
    let uva = parseInt(prompt("Digite o valor da uva: "))

    bananaTrocaUva = uva
    uvaTrocaBanana = banana

    alert(`O valor da banana é: ${bananaTrocaUva} e o valor da uva é: ${uvaTrocaBanana}`)
}