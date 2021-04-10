//funcao que fara um parser em todas as variaveis
//interpoladas e aplicar uma mascara de dinheiro em cima delas

function real(partes, ...valores) {
  resultado = [];

  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join('');
}

const preco = 29.9;
const precoParcela = 11;
//escrevendo tagged template
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
