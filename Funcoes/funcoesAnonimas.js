const soma = function (x, y) {
  return x + y;
};

const imprimiResultado = function (a, b, operacao = soma) {
  console.log(operacao(3, 4));
};
