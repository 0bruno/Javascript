function esperaPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('executando');
      resolve('Executou');
    }, tempo);
  });
}

esperaPor(5000).then((texto) => {
  console.log(texto[0]);
});
