// length me fala o tamanho de uma string, u.s.g = biblioteca.length = 10
function tamanhoNomeCompleto(nome, sobrenome){
    let contar = nome + " " + sobrenome;
    contar = contar.length;
    return contar;
}
function hojeSeJoga(diaDaSemana){
    if (diaDaSemana=="domingo"){
        return "Hoje é dia de futebol!!!";
    }
    else{
        return "Hoje não é dia de futebol :(";
    }
}    
function exerciciosanteriores(){
    let diaDeSemana = "domingo";
    console.log(hojeSeJoga(diaDeSemana))
    
    if  (diaDeSemana == "domingo") {
        console.log("Hoje é dia de futebol!!!")
    }
    else {
        a = "Mattheus";
        b = "Bebiano";
        console.log(tamanhoNomeCompleto(a,b));
        Math.abs(-330);
        Math.round(10.6);
        Math.floor(10.3);
        Math.max(10,3);
        Math.min(3,10);
        console.log(Math.random());
    }
    return diaDeSemana;
}
function podeSeAposentar(idade, sexo,anosContribuicao){
    return (anosContribuicao>=30&&((sexo == "M"&& idade >=65) || (sexo== "F" && idade >= 60)));
}

let tmpContribui= 30;
let  idade = 63;
let sexo = 'F'
console.log(podeSeAposentar(idade,sexo,tmpContribui));

