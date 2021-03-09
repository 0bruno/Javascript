//gerando valor padrao
function soma1() {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma(), soma(3), soma(1, 2, 3));
