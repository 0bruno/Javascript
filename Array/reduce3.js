Array.prototype.reduce3 = function (callback) {
  let acumulador = this[0];
  for (let i = 1; this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const alunos = [
  { nome: "Bruno", nota: 7.3, bolsista: false },
  { nome: "Luna", nota: 7.1, bolsista: true },
  { nome: "Rubia", nota: 7.9, bolsista: true },
  { nome: "Cintia", nota: 9.4, bolsista: true },
];

//todos os alunos sao bolsistas
const bolsistas = (a) => a.bolsista; //map
const todosBolsistas = (resultado, bolsista) => resultado && bolsista; //reduce
console.log(alunos.map(bolsistas).reduce3(todosBolsistas));

//algum e bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista; //reduce
console.log(alunos.map(bolsistas).reduce3(algumBolsista));

//
