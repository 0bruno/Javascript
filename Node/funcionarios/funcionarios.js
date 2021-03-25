const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

//client http, faz requisicoes pra obetr informacoes de algo que esta remoto
const axios = require("axios");

//obter informacoes do servidor com promisse
//obter a mulher chinesa com menor salario
const chinesas = (funcionarios) => funcionarios.pais === "China";
const mulheres = (funcionarios) => funcionarios.genero === "F";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const func = funcionarios
    .filter(chinesas)
    .filter(mulheres)
    .reduce(menorSalario);
  console.log(func);
});
