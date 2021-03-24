//ao criar uma referencia para lodah usar _
const _ = require("lodash");

//funcao gerando aleatorio com lodash
setInterval(() => {
  console.log(_.random(1, 50));
}, 2000);
