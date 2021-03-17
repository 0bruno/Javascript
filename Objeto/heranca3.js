function MeuObjeto() {}
console.log(MeuObjeto.prototype); // {}

//objeto instanciado a partir de uma funcao
//prototype desse objeto passa a ser a funcao

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(ob1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__); //true

MeuObjeto.prototype.nome = "Anonimo";
MeuObjeto.prototype.falar = function () {
  console.log("Bom Dia");
};

obj1.falar();
obj2.nome = "Bruno";
obj2.falar();

const obj3 = {};

//definindo prototipe do objeto3 para a funcao MeuObjeto
obj3.__proto__ = MeuObjeto.prototype;
