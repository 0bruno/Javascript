// servidor pra prover os dados estaticos
const bodyParser = require('body-parser'); // deixa os ddos dentro do request pronto para ser manupulados dentro desse arquivo
const express = require('express');
const app = express();

//definindo middlewares, funcoao executada quando determinada requisição chegar
app.use(express.static('.')); //provendo os arquivos etaticos a partir desse middlware
