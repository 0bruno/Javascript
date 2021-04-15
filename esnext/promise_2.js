//criando funcion promisse
function esperaPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('executando');
      //chamando resolve
      resolve('Executou');
    }, tempo);
  });
}
//chamando then
esperaPor(5000)
  .then(() => {
    esperaPor();
  })
  .then(esperaPor)
  .then(esperaPor);
