//acrescentando paradigma funcional

const primeiroElemento = (string) => string[0];

const primeiraLetra = (string) => string[0];

const letraMinuscula = (letra) => letra.toLowerCase();

//promisse algo que vai resolver no futuro
new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Caio']);
})

  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  //.then(v => console.log(v))
  .then(console.log);
//then recebe  um unico parametro posso passar o console direto
//resultado do metodo Then() e passado pro proximo metodo e assim opr diante
