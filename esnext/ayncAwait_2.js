function geraNumerosEntre(min, max, numeroRepetido) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numeroRepetido.includes(aleatorio)) {
      reject('Numero Repetido');
    } else {
      resolve(aleatorio);
    }
  });
}

//gerando numeros
geraNumerosEntre(1, 5, [1, 2, 4])
  .then(console.log)
  .catch((err) => console.log(err));
