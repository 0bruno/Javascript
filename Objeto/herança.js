//Cadeia de prototipos
Object.prototype.attr0 = "0"; //não é recomendado fazer

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr3: "3" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);
