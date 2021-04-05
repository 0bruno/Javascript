//com promisse
const http = require('http');

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = '';
      res.on('data', (dados) => {
        //dados vao ser concatenados todos em resultado
        resultado += dados;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

let nomes = [];

//Then espera a requisicao acabar e depois (then)
//que ela acabar realiza as operações que estao aqui nesse bloco

//o then va iesperar a requisicao a terminar toda para pode manipular os dados vindos de A
getTurma('A').then((alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma('A').then((alunos) => {
    nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
    getTurma('A').then((alunos) => {
      nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));

      console.log(nomes);
    });
  });
});
