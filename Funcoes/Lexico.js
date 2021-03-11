const valor = "Gobal";

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();
