const fabricantes = ["Mercedes", "BMW", "Audi"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);

fabricantes.forEach((fabricante) => {
  console.log(fabricante);
});

//exemplo sem callback

const notas = [7.1, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

const notasBaixas1 = [];

for (let i in notas) {
  if (notas < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);

//com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});
console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => {
  return nota < 7;
});
console.log(notasBaixas3);
