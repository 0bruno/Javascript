function geraNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + 1;
      resolve(aleatorio);
    }, tempo);
  });
}

//gerando 1 x
geraNumerosEntre(1, 10, 3000).then(console.log);

//gerando varioas vezes com promisse all
function gerarVarios() {
  return Promise.all([
    //promise all executa todas as promisse para  so depois chamar o then()
    geraNumerosEntre(1, 10, 4000),
    geraNumerosEntre(1, 10, 400),
    geraNumerosEntre(1, 10, 5000),
    geraNumerosEntre(1, 10, 6000),
  ]);
}

gerarVarios().then(console.log);
