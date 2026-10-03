function exercicio22(){
    alert("Exercício 22 — Cálculo do Salário com Horas Extras")

    let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas:"))
    let salarioTotal = parseFloat(prompt("Digite o salário total:"))

    let salarioHora = salarioTotal / 160

    if(horasTrabalhadas > 160){
        let horasExtras = horasTrabalhadas - 160
        let valorHoraExtra = salarioHora + (salarioHora * 0.5)

        salarioTotal = (160 * salarioHora) + (horasExtras * valorHoraExtra)
    } else {
        salarioTotal = horasTrabalhadas * salarioHora
    }

    alert(`O salário total é: R$${salarioTotal}`)
}