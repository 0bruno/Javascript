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
          //resolve a promisse
          resolve(JSON.parse(resultado));
        } catch (e) {
          //caso nao for resolvida vai ser executado esse codigo
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

//posso passar varias promisses pra ela
//quando todas as promisses forem resolvidas ela chama o then
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])

  //o then va iesperar a requisicao a terminar toda para pode manipular os dados vindos de getTurma()
  //apos as promisses for resolvidas comeca a chamar a cadeia de Then()
  //fazer um spread da matriz
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  //catch vai tratar qualquer eventual problema que aconteca durante a execução
  .catch((e) => console.log(e.message));
