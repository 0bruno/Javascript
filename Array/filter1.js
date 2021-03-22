const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4449, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plastico", preco: 18.99, fragil: false },
];

//solucao alternativa
const caro = (produto) => {
  return produto.preco >= 2499;
};

const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
