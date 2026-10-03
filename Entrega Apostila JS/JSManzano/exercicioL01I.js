function exercicioL01I(){
    alert("A diferença entre valores quadadrados")

    const A = parseInt(prompt("Escolha o primeiro valor (A): "));
    const B = parseInt(prompt("Escolha o segundo valor (B:"));

    const resultado = (A - B) ** 2

    const mensagem = `O QUADRADO DA DIFERENÇA (${A} - ${B})^2 É: ${resultado}`

    alert(mensagem)
}