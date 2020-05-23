function acontece(alunoQueEntram, quantidadeMinima){
    var quantidade=[];
    for(var i=0;i<alunoQueEntram.length;i++){
        if(alunoQueEntram[i]<=0){
            quantidade.push(alunoQueEntram[i]);
        }
    }
    console.log(quantidade);
    return quantidadeMinima<=quantidade.length;
}

let alunosDaSegunda=[10, -5, 3, 0];
console.log(alunosDaSegunda.length);
console.log(acontece(alunosDaSegunda, 2));