const alunos = [
  { nome: "Bruno", nota: 7.3, bolsista: false },
  { nome: "Luna", nota: 7.1, bolsista: false },
  { nome: "Rubia", nota: 7.9, bolsista: true },
  { nome: "Cintia", nota: 9.4, bolsista: true },
];

console.log(alunos.map((a) => a.nota));

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador.toFixed(1), atual.toFixed(1));
    return acumulador + atual;
  });
