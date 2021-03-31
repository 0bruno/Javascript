//operador ...rest(jubntar) /spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const funcionario = { nome: 'Bruno', salaroi: 14850.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

//usar spread com array
const grupoA = ['Bruno', 'Cintia', 'Rubia'];
const grupoB = ['Nice', 'Tamiris'];
const grupoFinal = [...grupoA, ...grupoB];
console.log(grupoFinal);
console.log(...grupoA, ...grupoB);
