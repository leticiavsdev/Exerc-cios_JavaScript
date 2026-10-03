function exercicio7() {
    alert("Exercício 07 — Idade Convertida em Dias")

    let anos = parseInt(prompt("Quantos anos você tem?"))
    let meses = parseInt(prompt("Quantos meses você tem?"))
    let dias = parseInt(prompt("Quantos dias você tem?"))

    total = (anos * 365) + (meses * 30) + dias

    alert(`A quantidade total de dias é: ${total}`)
}