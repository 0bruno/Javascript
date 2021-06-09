/*Divisivel por 5 por 3 e por 3 e 5 */

function fizzbuzz(entrada) {
  if (typeof entrada !== 'number') return 'NOT A NUMBER';
  if (entrada % 3 == 0 && entrada % 5 == 0) return 'FIZZBUZZ';
  if (entrada % 3 == 0) return 'FIZZBUZZ';
  if (entrada % 5 == 0) return 'FIZBUZZ';
  return entrada;
}

console.log(fizzbuzz(11));
