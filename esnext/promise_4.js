function geraNumeroEntr(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fato) + 1;
      resolve(aleatorio);
    }, tempo);
  });
}
