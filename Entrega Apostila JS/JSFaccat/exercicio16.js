function exercicio16() {
    alert("Exercício 16 — Cálculo do Custo Total das Maçãs")
    let macas = parseInt(prompt("Quantas macãs foram compradas: "))
    if (macas >= 12) {
        let total1 = macas * 1.0
        alert(`O total a pagar é: R$${total1}`)
    } else {
        let total2 = macas * 1.30
        alert(`O total a pagar é: R$${total2}`)
    }

}