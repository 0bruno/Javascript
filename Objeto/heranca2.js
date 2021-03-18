const pai = { nome: "Pedro", corCabelo: "Preto" };

//define o objeto pai como protopido do filho
const filha1 = Object.create(pai);
filha1.nome = "Rúbia";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: {
    value: "Bia",
    writable: false,
    enumerable: true,
  },
});

console.log(filha2.nome, filha2.corCabelo);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

//verificando se apropriedade pertence ou nao ao objeto
for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança ${key}`);
}
