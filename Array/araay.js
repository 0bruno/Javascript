const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //removendo ultima posição

pilotos.push("Verstappen"); // Adicionando após o ultimo elemento do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona como primeiro elemento

//splice
pilotos.splice(2, 0, "Botas", "Massa"); // adicionando a aprtir do indice dois

pilotos.splice(2, 1); // a partir do indice 2 demover um
