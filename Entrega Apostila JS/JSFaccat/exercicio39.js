function exercicio39(){
    // Atribuição dos valores iniciais
    let A = true;
    let B = true;
    let C = false;

   // Atribuição dos valores iniciais
    let resA = (A && B) || (A !== B);
    let resB = (A || B) && (A && C);
    let resC = A || (C && B) !== (A && !B);
    
    // Exibição dos resultados
    alert("a) (A e B) ou (A xou B) = " + resA);
    alert("b) (A ou B) e (A e C) = " + resB);
    alert("c) A ou C e B xou A e não B = " + resC);
}
