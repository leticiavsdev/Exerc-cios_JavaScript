function exercicioL02D() {
    alert("Exercício L02D: Lê quatro notas escolares e calcula a média (aprovação com média 7). Caso reprovado, pede a nota de recuperação para calcular a nova média (aprovação em exame com média 5).")

    let matematica, portugues, historia, educacaofisica, total, totalsegundanota, Novanota

    matematica = parseFloat(prompt("Nota final em matemática:"))
    portugues = parseFloat(prompt("Nota final em português:"))
    historia = parseFloat(prompt("Nota final em história:"))
    educacaofisica = parseFloat(prompt("Nota final em educação física:"))

    total = (matematica + portugues + historia + educacaofisica) / 4

    if (total >= 7) {
        alert("Você foi aprovado com a média: " + total)
    } else {
        Novanota = parseFloat(prompt("Qual é a nota da recuperação:"))

        totalsegundanota = (total + Novanota) / 2

        if (totalsegundanota >= 5) {
            alert("Você foi aprovado com a média: " + totalsegundanota)
        } else {
            alert("Você foi reprovado com a média: " + totalsegundanota)
        }
    }
}