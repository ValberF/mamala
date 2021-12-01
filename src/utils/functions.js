function calculaIdade(dataNasc) {
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let anoNascParts = dataNasc.split("/");
  let diaNasc = anoNascParts[0];
  let mesNasc = anoNascParts[1];
  let anoNasc = anoNascParts[2];
  let idade = anoAtual - anoNasc;
  let mesAtual = dataAtual.getMonth() + 1;
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (mesAtual < mesNasc) {
    idade--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (mesAtual == mesNasc) {
      if (new Date().getDate() < diaNasc) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--;
      }
    }
  }
  return idade;
}

function formatData(date) {
  date = date.split("T");
  date = date[0];
  date = date.split("-");
  date = date[2] + "/" + date[1] + "/" + date[0];

  return date;
}

function formatDataForDB(date) {
  date = date.split("/");
  date = date[2] + "-" + date[1] + "-" + date[0];

  return date;
}

module.exports = { calculaIdade, formatData, formatDataForDB };
