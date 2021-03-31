//constantes disponiveis globalmente dentro do node
// __dirname objeto global, objeto process -> ler dados do teclado do usuario

const { stdout } = require('node:process');

//se estiver presente dentro a lista de argumentos - a ele retorna verdadeiro
const anonimo = process.argv.indexOf('-a') !== -1;

//stdout standart output saida padrao
//sdtin.on (entrada padrao)
if (anonimo) {
  process.stdout.write('Fala anonimo');
  process.exit();
} else {
  process.stdout.write('Informe o seu nome');
  process.stdin.on('data', (data) => {
    const nome = data.toString().replace(' ');
    process.stdout.write(`Fala ${nome}`);
    process.exit();
  });
  //evento on data acontece depois que voce digita algo e aperta enter
}

process.stdout.write(); //Informa algo na tela
process.stdin.on('data'); //pega o que foio digitado
