const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito de paradigmas funcionao e OO

const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa();

/*bind voce passa o  objeto no qual voce quer que seja resolvido o this
cria uma função que quando chamado tem sua chave this definida com o valor
forncecido*/
