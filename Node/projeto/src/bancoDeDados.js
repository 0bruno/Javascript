const sequence = {
  _id: 1,
  get id() {
    //retorna sempre o proximo valor de id
    return this._id++;
  },
};

//chave do objeto vai ser cada um do id do produto, e o valor o proprio produto
const produtos = {};

function salvarProduto(produto) {
  //se o id nao estiver setado
  if (!produto.id) produto = sequence.id;
  produtos[produto.id] = produto;
  //produto retornado ja possui id
  return produto;
}
