function retornaValor() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 5000);
  });
}

//exemplo com then()
/*retornaValor(10)
  .then((valor) => console.log(valor))
  .catch((err) => console.log(`Ocorreu um erro: ${err}`));*/

//execplo com async await
async function executar() {
  let valor = await retornaValor();
  console.log(`Valor e ${valor}`);
  return valor + 3;
}

//para acessar o valor diretamente da funcao executar preciso usar o then()
executar().then((valor) => console.log(valor));
