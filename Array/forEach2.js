

Array.prototype.forEach2 = function (callback){
    for(let i = 0 ; i< this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ["Bruno", "Cintia", "Rubia", "Luna", "Cacau"];

//indice, nome, array
//posso nao passar nada, porem se quiser o indice tenho que passar o nome
aprovados.forEach2(function (nome, indice) {
  console.log(`${indice}) ${nome}`);
});