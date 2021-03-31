//configurando o express
const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

//urlencoded e uma funcao que retorna uma funcao midlleware que vai fazer
// um parse no body da requisicao e tranformar em objeto para poder ser acessado
//como nao foi passado uma url vai ser disparado pra todas as req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
  // res.send({ nome: 'Notebook', preco: 123.45 }); //conveter para json send converte automatico
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  //req.params  == local onde tenho os parametros que coloquei na url
  res.send(bancoDeDados.getProduto(req.params.id));
});

//submeter os dados e salvar um novo produto salvando
app.post('/produtos', (req, res, next) => {
  //passando objeto para ser salvo
  const produto = bancoDeDados.salvarProduto({
    //pegando a aprtir do corpo da requisicao
    //forma para pegar no servidor as requisicoes vindas
    nome: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

//Alterando com put
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor está  executando na porta ${porta}`);
});

//instalando body parser, vai fazer um parser no body da requisição
//npm i  --save body-parser
//analisa o que veio no bady e transforma em objeto para que possa ser acessado req.body.name,
