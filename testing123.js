var number = function (array) {
  return array.map((e, i) => `${i + 1}:${e}`);
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
