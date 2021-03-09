function Pessoa() {
  this.idade = 0;

  self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();
