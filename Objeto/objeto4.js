function aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new aula("Brm vindo", 123);

//simulando o new
function novo(f, ...paramns) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, paramns);
  return obj;
}

const aula3 = novo(aula, "Bem vindo", 123);
