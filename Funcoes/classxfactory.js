//classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome e ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();

//factory
const criarPessoa = (nome) => {
  return {
    falar: () => {
      console.log(`Meu nome e ${nome}`);
    },
  };
};

const p2 = new criarPessoa("João");
p2.falar();
