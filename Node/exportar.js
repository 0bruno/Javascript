console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

console.log(module.exports);

exports = {
  nome: "Bruno",
};

//ao importar um novo objeto fazer com module.exports
module.exports = { nome: "Bruno" };
console.log(module.exports);
