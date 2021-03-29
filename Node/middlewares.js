const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1';
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2';
  next();
};

const passo3 = (ctx, next) => {
  ctx.valor3 = 'mid3';
};

//funcao que executa os middlewares
const exec = (ctx, ...middlewares) => {
  //executa os passo passado na lista
  const exePasso = (indice) => {
    middlewares &&
      indice < middlewares.length &&
      //passando ctx e next de cada passo
      middlewares[indice](ctx, () => exePasso(indice + 1));
  };
  exePasso(0);
};

const ctx = {};
exec(ctx, passo1, passo2, passo3);
console.log(ctx);
