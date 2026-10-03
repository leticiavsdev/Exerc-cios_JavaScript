function exercicio25(){

    alert("Exercício 25 — Cálculo e Verificação do Saldo Atual")

    let numeroConta = parseInt(prompt("Digite o número da conta do cliente: "))

    let saldo = parseFloat(prompt("Digite o saldo inicial: R$ "))

    let debito = parseFloat(prompt("Digite o valor do débito: R$ "))

    let credito = parseFloat(prompt("Digite o valor do crédito: R$ "))

    let saldoAtual = saldo - debito + credito

    alert("Conta: " + numeroConta)

    alert("Saldo Atual: R$ " + saldoAtual.toFixed(2))

    if (saldoAtual >= 0){

        alert("Mensagem: Saldo positivo")

    }else{

        alert("Mensagem: Saldo negativo")

    }

}