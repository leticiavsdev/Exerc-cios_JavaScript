function exercicio33(){
    alert("Exercício-33: Comparar dois valores.")
    let valor1 = parseInt(prompt("Digite o primeiro valor: "))
    let valor2 = parseInt(prompt("Digite o segundo valor: "))
    if(valor1 == valor2){
        alert(`Os números são iguais`)
    } else if( valor1 > valor2){
        alert("Primeiro é maior")
    } else {
        alert("segundo é maior")
    }
}