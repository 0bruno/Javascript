const alunos = [
  { nome: "Bruno", nota: 7.3, bolsista: false },
  { nome: "Luna", nota: 7.1, bolsista: true },
  { nome: "Rubia", nota: 7.9, bolsista: true },
  { nome: "Cintia", nota: 9.4, bolsista: true },
];

//todos os alunos sao bolsistas
const bolsistas = (a) => a.bolsista; //map
const todosBolsistas = (resultado, bolsista) => resultado && bolsista; //reduce
console.log(alunos.map(bolsistas).reduce(todosBolsistas));

//algum e bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista; //reduce
console.log(alunos.map(bolsistas).reduce(algumBolsista));
