function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 5000);
  });
}

//com then()
retornaValor().then((valor) => console.log(valor));

//com async await
