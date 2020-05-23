function acontece(alunoQueEntram, quantidadeMinima){
    var quantidade=[];
    for(var i=0;i<alunoQueEntram.length;i++){
        if(alunoQueEntram[i]<=0){
            quantidade.push(alunoQueEntram[i]);
        }
    }
    return quantidadeMinima<=quantidade.length;
}
function aberturas(arrayAberturas, quantidadeMinima){
    var quantidade=[];
    var quantidadeTotal=[];
    var guardaArray=[];
    for(var i=0; i<arrayAberturas.length;i++){
        guardaArray=arrayAberturas[i];
        for(var j=0;j<guardaArray.length;j++){
            if(guardaArray[j]<=0){
                quantidade.push(guardaArray[j]);
            }
        }
        if(quantidadeMinima<=quantidade.length){
            quantidadeTotal.push(true);
        }
        else{
            quantidadeTotal.push(false);
        }
        quantidade=[];
    }
    return quantidadeTotal;
}


let alunosDaSegunda=[10, -5, 3, 0];
let alunosDaTerca=[-10, -5, 3, 0];
let alunosDaQuarta=[10, 5, 3, 0];
let alunosDaQuinta=[10, 5, 3, 0];
let alunosDaSexta=[10, -5, -3, 0];
let alunosArrays=[alunosDaSegunda, alunosDaTerca, alunosDaQuarta, alunosDaQuinta, alunosDaSexta];
//console.log(acontece(alunosDaSexta,2));
console.log(aberturas(alunosArrays,3));