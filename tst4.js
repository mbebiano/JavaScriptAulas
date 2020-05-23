/* Você atingiu o nível necessário para ganhar um prêmio pelo seu excelente desempenho. Agora que você conhece bastante JavaScript, o júri de um torneio de programação nos pediu para desenvolver a função medalhaSegundoOPosto, que retorna a medalha correspondente às posições, de acordo com a seguinte lógica:

primeiro lugar: corresponde "ouro"
segundo lugar: corresponde "prata"
terceiro lugar: corresponde "bronze"
outros lugares: corresponde "Continue participando"
Se executarmos a função com as seguintes posições, o resultado seria assim:

 medalhaSegundoOPosto(1)
"ouro"
 medalhaSegundoOPosto(2)
"prata"
 medalhaSegundoOPosto(3)
"bronze"
medalhaSegundoOPosto(5)
"Continue participando"
Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.*/

function saldoDeMesesComLucro(umPeriodo){
    var outroArray=[];
    for (let mes=0; mes< umPeriodo.length; mes++) {
      if (umPeriodo[mes] > 0){
        outroArray.push(umPeriodo[mes]);
      } 
    }
    return outroArray;
  }

var meses=[100, 20, 0, -10, 10];
console.log(saldoDeMesesComLucro(meses));
