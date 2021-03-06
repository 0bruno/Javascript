// servidor pra prover os dados estaticos
const bodyParser = require('body-parser'); // deixa os ddos dentro do request pronto para ser manupulados dentro desse arquivo
const express = require('express');
const app = express();

//definindo middlewares, funcoao executada quando determinada requisição chegar
app.use(express.static('.')); //provendo todos os arquivos etaticos pra essa pasta atual a partir desse middlware
app.use(express.urlencoded({ extended: true })); // se vier algum formato a partir de um submit de um form esse codigo le e os transforma em objeto
app.use(express.json()); //se vier json na requisição este codigo o transforma em objeto

//criando rota teste
app.get('/teste', (req, res) => res.send('Ok'));
app.listen(3000, () => console.log('Excutando'));
