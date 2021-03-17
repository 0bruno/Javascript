//Cadeia de prototipos
Object.prototype.attr0 = "0"; //não é recomendado fazer

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B", attr3: "3" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual} Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  //__proto__: carro,
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  //__proto__: carro,
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

//definindo relacao objeto /prototipo
//carro e prototipo de ferrari
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
