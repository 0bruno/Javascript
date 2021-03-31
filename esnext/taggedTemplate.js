//processa o template dentro de uma funlçao

function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Other thing';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag`${aluno} está ${situacao}`);
