//promisse algo que vai resolver no futuro
let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Caio']);
});

//acrescentando paradigma funcional

function primeiroElemento(array) {
  return array[0];
}

function primeiraLetra(string) {
  return string[0];
}

function letraMinuscula(letra) {
  return letra.toLowerCase();
}

p.then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  //then recebe  um unico parametro posso passar o console direto
  .then(console.log);
//resultado do metodo Then() e passado pro proximo metodo e assim opr diante
