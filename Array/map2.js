const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

const paraObjeto = (json) => {
  return JSON.parse(json);
};

const apenasPreco = (produto) => {
  return produto.preco;
};

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
