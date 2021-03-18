const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //removendo ultima posição

pilotos.push("Verstappen"); // Adicionando após o ultimo elemento do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona como primeiro elemento

//splice pegar pedaço do array
pilotos.splice(2, 0, "Botas", "Massa"); // adicionando a aprtir do indice dois

pilotos.splice(2, 1); // a partir do indice 2 demover um

const pilotos2 = pilotos.slice(2); // a partir do 2 indice retorna um novo array para pilotos 2

const pilotos3 = pilotos.slice(1, 4); //do 1 até o 4 retorna um novo array até o indice 4, este por sinal nao entra
