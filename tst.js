
function sinal(numero) {
    let retorno;
    if (numero > 0){
        retorno = "positivo";
        return retorno;
    }
    if (numero < 0){
        retorno = "negativo";
        return retorno;
    }
    else{
        retorno = "zero";
        return retorno;
    }
}
function possoIrAoBanco(dia, hr){
    return dia!="sábado"&&dia!="domingo"&&hr>=9&&hr<=15;
}
function filosofoHipster(profissao,nacionalidade,kmDia,){
    return profissao=="Músico"&&nacionalidade=="Brasil"&&kmDia>2;
}

let prof = "Músico";
let nacio = "Brasil";
let km = 5;
console.log(filosofoHipster(prof, nacio, km));
prof = "Músico";
nacio = "Argentina";
km = 1;
console.log(filosofoHipster(prof, nacio, km));
prof = "Docente";
nacio = "Canadá";
km = 10;
console.log(filosofoHipster(prof, nacio, km));