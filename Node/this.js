console.log(this === global); // false
console.log(this === module); //false

console.log(this === module.exports); //true aponta para o module.exports
console.log(this === exports); //true

function logThis() {
  console.log("Dentro da função");
  console.log(this === exports); // false aponta para o global
  console.log(this === module.exports); //false aponta para o  global
}

//this dentro de uma funcao apota para o global
//this fora da funcao aponta pro module.exports

logThis();
