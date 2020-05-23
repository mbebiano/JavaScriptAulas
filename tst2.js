// exercicio 9
function somarMoedasDe25(quantidadeDeVezes){
    var moedas=0;
    for(var i=0; i<quantidadeDeVezes;i++){
        moedas=moedas+0.25;
    }
    return moedas;
}
var quantidadeDeVezes=7;
somarMoedasDe25(quantidadeDeVezes);

// exercicio 10
function somaDosPares(x){
    var acumulador=0;
    for(var i=0;i<=x;i+=2){
        acumulador=i+acumulador;
    }
    return acumulador;
}
var x=10;
console.log(somaDosPares(x));
//exercicio 11
function somatoria(x){
    var acumulador=0;
    for(var i=0;i<x;i++){
        acumulador = i + acumulador;
    }
    return acumulador;
}

var x = 4;
console.log(somatoria(x));
//exercicio12
function caloriasDeTrote(numeroDeVoltas){
    var acumulador=0;
    var calorias=5;
    for(var i=1;i<=numeroDeVoltas;i++){
        acumulador= acumulador+(i*calorias);
    }
    return acumulador;
}
var numeroDeVoltas = 3;
console.log(caloriasDeTrote(numeroDeVoltas));

//exercicio 6
var numerosDeLoteria = [22,40,12];
var numLot= numerosDeLoteria.length;
var arrayvazio = [];
var array = [4, 3];
var arrayvazio2 = arrayvazio.length;
var array2 = array.length;
console.log(array2);
console.log(numLot);
console.log(arrayvazio.length);

//exercico 7
var pertences = ["espada", "escudo", "crossbow"];
console.log(pertences);
pertences.push("cross");
console.log(pertences);
//exercicio 8 
function mover(umArray,outroArray){
    var guarda;
    guarda=umArray.pop();
    outroArray.push(guarda);
    console.log(umArray);
    console.log(outroArray);
}
var umArray = [1, 2, 3];
var outroArray = [4, 5];
mover(umArray,outroArray);

//exercicio 9


//exercico 10
function contem(array, numero){
    if (array.indexOf(numero)>=0){
        return true;
    }
    else{
        return false;
    }
}

var array = [1, 6, 7, 6];
var numero = 7;
console.log(contem(array,numero));

//exercicio11
var umArray=[];
var outroArray=["1", "2"];
console.log(umArray[0]);
console.log(outroArray[48]);
//exercicio 12
function medalhaDeAcordoComPosto(numero){
    var postos=["ouro", "prata", "bronze", "nada", "nada"];
    for(var i=0;i<numero;i++){
        postos.push("nada");
    }
    numero = numero-1;
    return postos[numero];
}
// exercicio 13
function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

umSemestre = [1,2,3,4,5,6];
umTrimestre = [1,2,3];
umQuadrimestre = [1,2,3,4];
console.log(somaLucroSemestre(umTrimestre));
console.log(somaLucroSemestre(umQuadrimestre));
console.log(somaLucroSemestre(umSemestre));

//exercicio14
