for (let letra of 'Cod3r') {
  console.log(letra);
}
// for of percorre em cima de valores
const assuntoEcma = ['map', 'set', 'promises'];
for (let i of assuntoEcma) {
  console.log(i);
}

//for in percorre em cima de indices
for (let i in assuntoEcma) {
  console.log(i);
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);

//for in em cima de um map percorrendo chave valor
for (let i of assuntosMap) {
  console.log(i);
}

//pegando somente a chave com for in
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}
