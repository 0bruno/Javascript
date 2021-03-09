function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1, 2, 3, "Teste"));
console.log(soma("a", "b", "c"));

//apresentando in arguments, um array interno que toda funcao tem disponivel
// com a possibilidade de obter todos os parametros passados a partir
// da chamada da funcao, hoje subistituido por REST SPREED.
