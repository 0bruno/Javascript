const aprovados = ["Bruno", "Cintia", "Rubia", "Luna", "Cacau"];

//indice, nome, array
//posso nao passar nada, porem se quiser o indice tenho que passar o nome
aprovados.forEach(function (nome, indice) {
  console.log(`${indice}) ${nome}`);
});

aprovados.forEach((nome) => {
  console.log(nome);
});

const exibirAprovados = (aprovado) => {
  console.log(aprovado);
};

aprovados.forEach(exibirAprovados);
