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

//promisse algo que vai resolver no futuro
new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Caio']);
})

  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log);
//then recebe  um unico parametro posso passar o console direto
//resultado do metodo Then() e passado pro proximo metodo e assim opr diante
