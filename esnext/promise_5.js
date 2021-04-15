function funcionarouNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject('Ocorreu um Erro');
    } else {
      resolve(valor);
    }
  });
}

funcionarouNao('Testando', 0.5).then(console.log);
