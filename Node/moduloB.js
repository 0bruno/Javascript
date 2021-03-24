// outra forma de exportar com objeto
//ao usar dessa forma usar com module.exports
module.exports = {
  bomdia: "Bom dia",
  boaNoite() {
    return "Boa Noite";
  },
};

//ES6
export const bomdia = "Bom dia";
export function boaNoite() {
  return "Boa Noite";
}
