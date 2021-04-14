function esperaPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('executando');
      resolve();
    }, tempo);
  });
}
