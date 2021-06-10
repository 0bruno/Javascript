/**Velocidade máxima de até 70 KM
 * a cada 5KM acima do limite voce recebe 1 ponto
 * Math.floor() arredonda para o decimal mais perto
 * Se pontos > 12 enta ocarteira suspensa
 */

function velocidadeMax(velocidade) {
  const velocidadePermitida = 70;
  const punicaoPonto = 5;
  const limitePontos = 12;
  //recebendo pontos de acordo com velocidade acima do permitido
  const pontos = Math.floor((velocidade - velocidadePermitida) / punicaoPonto);

  if (velocidade <= velocidadePermitida) {
    console.log(`${velocidade} é uma velocidade permitida`);
  } else if (pontos >= limitePontos) {
    console.log(
      `Você teve a carteira suspensa por estar a ${velocidade} KM/h e atingir ${pontos} pontos do limite de ${limitePontos} pontos`
    );
  } else {
    console.log(
      `Voce esta a ${velocidade} KM/h e recebeu ${pontos} pontos pela infração`
    );
  }
}

velocidadeMax(80);
