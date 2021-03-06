//gerando valor padrao
function soma1() {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0));

//sempre procurar por valor padrao em parametro de funcao

function soma2() {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(1, 2, 3));

//metodo ec2015

function soma(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(1, 2, 3));
