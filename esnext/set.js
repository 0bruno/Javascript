//nao aceita repetição // nao indexada

const times = new Set();
times.add('vasco');
times.add('Flamengo').add('São Paulo').add('Botafogo');

console.log(times);
console.log(times.has('ituano'));
times.delete('vasco');
console.log(times);

const nomes = ['Raquel', 'Bruno', 'Cintia', 'Lucas'];

const nomesSet = new Set(nomes);
console.log(nomesSet);
