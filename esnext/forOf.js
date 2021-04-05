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

//for in em cima de um map
for (let i of assuntosMap) {
  console.log(i);
}
