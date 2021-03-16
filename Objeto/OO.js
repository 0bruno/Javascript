//coleçao dinâmicas de pares  chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["Marca do produto"] = "Generica";
produto.preco = 220;

delete produto.preco;
delete produto["Marca do produto"];

const carro = {
    modelo: 'A4',
    valor : 89000,
    proprietario = {
        nome: 'Bruno',
        idade: 32,
        endereco = {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores = [{
        nome: 'Bruno',
        idade: 32
    }, {
        nome: 'Cintia',
        idade: 24
    }],
    calcularValorSeguro = function() {
        //.........
    }   
    
}

carro.proprietario.numero = 202
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'

//deletando carro condutores
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro