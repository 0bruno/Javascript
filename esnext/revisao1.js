//Destructuring
const [a, b, ...c] = 'Bruno';
console.log(a, b, c);

//Destructuring Array
const [d, e, f] = [1, 2, 3];
console.log(d, e, f);

//Destructuring Bojeto
const { nome: renomeando, idade } = { nome: 'Bruno', idade: 31 };
console.log(renomeando, idade);
