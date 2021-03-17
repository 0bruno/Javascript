const a = 1;
const b = 2;
const c = 3;

//before ES6
const obj1 = { a: a, b: b, c: c };

//After ES6
const obj2 = { a, b, c };

const nomeAttr = "nota";
const valorAttr = 7.89;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
const obj4 = { [nomeAttr]: valorAttr };

const obj5 = {
  function1: function () {
    //.........
  },
  function2() {
    //.......
  },
};
