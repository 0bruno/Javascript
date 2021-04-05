function falarDepois(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepois(3, 'Estou falando')
  .then((frase) => {
    console.log(frase);
  })
  .catch((e) => console.log('Erro'));
