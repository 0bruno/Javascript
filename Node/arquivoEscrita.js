const fs = require('fs');

//persistindo e salvando em disco com writeFile()
const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15,
};

//gerando aruivo.json e salvando em disco com o writeFile()
fs.writeFile(
  __dirname + '/arquivoGerado.json',
  JSON.stringify(produto),
  (err) => {
    console.log(err || 'Arquivo salvo');
  }
);

//lendo arquivo direto no require, tem que passar extensao.json
const leitura = require('./arquivo.json');
console.log(leitura);
