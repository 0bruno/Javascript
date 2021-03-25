const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

//client http, faz requisicoes pra obetr informacoes de algo que esta remoto
const axios = require("axios");

//obter informacoes do servidor com promisse
//obter a mulher chinesa com menor salario
const chineses = (funcionario) => funcionario.pais === "China";
const mulheres = (funcionario) => funcionario.genero === "F";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
});
