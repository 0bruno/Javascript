const tecnologias = new Map();
tecnologias.set('React', { framework: false });
tecnologias.set('Angular', { framework: true });
console.log(tecnologias.get('Angular'));

const chavesVarias = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Numero'],
]);

chavesVarias.forEach((vl, ch) => {
  console.log(ch, vl);
});
//setando em chaves Variadas
chavesVarias.set(456, 'b');

console.log(chavesVarias);
