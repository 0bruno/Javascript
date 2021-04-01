//processa o template dentro de uma funlçao

//recebe os valores do template e o que foi interpolado retornando 2 array com valores e interpolacao

function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Other thing';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag`${aluno} está ${situacao}`);
