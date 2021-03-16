//usando literal
const obj1 = {};

//Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//Funções Construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoDesconto = () => {
    return preco + (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Celular, 1850", 0.1);

console.log(p1.getPrecoDesconto());
