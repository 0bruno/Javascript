//es/ Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
//retorna os valores do objeto
console.log(Object.values(obj));

//retorna um array de array com chave valor
console.log(Object.entries(obj));

//melorias na notacao literal
const nome = 'Bruno';
const obj2 = {
  nome,
  ola() {
    return 'Oi';
  },
};
console.log(obj2.ola());
