const nums = [1, 2, 3, 4, 5];

//For com proposito
let resultado = nums.map(function (e) {
  return e * 2;
});
//criando funcao
const soma10 = (e) => {
  return e + 10;
};
//criando funcao
const triplo = (e) => e * 3;

const paraDinheiro = (e) => `R$${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
