const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //removendo ultima posição

pilotos.push("Verstappen"); // Adicionando após o ultimo elemento do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona como primeiro elemento
