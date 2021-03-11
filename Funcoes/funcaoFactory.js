//factory simples
function criarPessoa() {
  return {
    nome: "Bruno",
    sobrenome: "Ribeiro",
  };
}

console.log(criarPessoa());

//factory passando parametros

function criarProduto(nome, preco) {
    return {
        nome = this.nome,
        preco,
        desconto: 0.1
    }
}
 

console.log(criarProduto('Notbook', 2.199))