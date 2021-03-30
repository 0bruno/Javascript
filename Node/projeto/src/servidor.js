//configurando o express
const porta = 3003;

const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.get('/produtos', (req, res, next) => {
  // res.send({ nome: 'Notebook', preco: 123.45 }); //conveter para json send converte automatico
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  //req.params  == local onde tenho os parametros que coloquei na url
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.listen(porta, () => {
  console.log(`Servidor está  executando na porta ${porta}`);
});
