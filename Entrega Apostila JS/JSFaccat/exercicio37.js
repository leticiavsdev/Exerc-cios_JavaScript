function exercicio37(){
     let kgMorango = parseFloat(prompt("Digite a quantidade (em Kg) de morangos: "))
     let kgMacas = parseFloat(prompt("Digite a quantidade (em Kg) de maçãs: "))

     3
    let precoMorango, precoMacas

    // Definição do preço do morango
     if( kgMorango <= 5){
        precoMorango = 2.50
     } else {
        precoMorango = 2.20
     }
    // Definição do preço da maçãs 
    if(kgMacas <= 5){
        precoMacas = 1.80
    } else {
        precoMacas = 1.50
    }
   let valorMorango = kgMorango * precoMorango
   let valorMaca = kgMacas * precoMacas
   let valorTotal = valorMorango + valorMaca
   let kgTotal = kgMorango + kgMacas

   if( kgTotal > 8 || valorTotal > 25){
    valorTotal = valorTotal * 0.90
   }

   alert(`Valor total a ser pago: R$${valorTotal.toFixed(2)}`)
}