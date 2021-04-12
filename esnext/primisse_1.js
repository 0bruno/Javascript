//promisse algo que vai resolver no futuro
let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Caio']);
});

p.then((valor) => valor[0]).then((mostrarLetra) => console.log(mostrarLetra));
//resultado do metodo Then() e passado pro proximo metodo e assim opr diante
