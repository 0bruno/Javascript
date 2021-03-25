//referencia do file system
const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

//sincrono
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//assincrono
//callback chamada quando o arquivo estiver carregado
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}: ${config.db.port}`);
});

//lendo arquievo json de forma simples
const config = require("./arquivo.json");
//ja retorna um objeto sem precisar do json.parse
console.log(config.db);

//lendo pasta
//callback com erro e arquivos presentes no dretorio
fs.readdir(__dirname, (err, arquivos) => {
  console.log("conteudo da pasta");
  console.log(arquivos);
});
