function exercicio38(){
    alert("38) Autenticação de Usuário e Controle de Permissão")
    let codigo = parseInt(prompt("Digete o código do usuário: "))

    if(codigo !== 1234){
        alert("Usuário inválido!")
    } else {
        let senha = parseInt(prompt("Digite a senha: "))

        if(senha !== 9999){
            alert("Senha inválida!")
        } else {
            alert("Usuário autenticado com sucesso!")
        }
    }
     
}