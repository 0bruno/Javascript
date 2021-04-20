function retornaValor(valor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valor);
    }, 5000);
    reject('Não foi passado nada');
  });
}

//com then()
retornaValor(10)
  .then((valor) => console.log(valor))
  .catch((err) => console.log(`Ocorreu um erro: ${err}`));

//com async await
