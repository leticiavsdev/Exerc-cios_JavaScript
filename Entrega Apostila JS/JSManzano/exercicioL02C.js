function exercicioL02C() {
    alert("Exercício L02C: Lê quatro notas escolares, calcula a média simples e informa se você foi aprovado ou reprovado (média mínima 5).")

    let matematica, portugues, historia, educacaofisica, total

    matematica = parseFloat(prompt("Nota final em matemática:"))
    portugues = parseFloat(prompt("Nota final em português:"))
    historia = parseFloat(prompt("Nota final em história:"));
    educacaofisica = parseFloat(prompt("Nota final em educação física:"))

    total = (matematica + portugues + historia + educacaofisica) / 4

    if (total >= 5) {
        alert("Você foi aprovado com a média: " + total);
    } else {
        alert("Você foi reprovado com a média: " + total);
    }
}