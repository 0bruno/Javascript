//declarando atraves da classe uma funcao construtora
function Pessoa(nome) {
  //metodo publico
  this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const pessoa = new Pessoa("Joao");

pessoa.falar();

// da classe para funcao construtora removo o construtor
/*constructor(nome) {
    this.nome = nome;
}*/
