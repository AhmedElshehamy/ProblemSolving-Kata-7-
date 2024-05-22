function nbDig(n, d) {
  // your code
  return Array.from({ length: n + 1 }, (_, e) => e ** 2)
    .join("")
    .match(new RegExp(d, "g")).length;
  //   .map((e) => (e ** 2).toString())
  //   .reduce((cur, acc) => cur + acc)
  //   .split("")
  //   .map((e) => +e)
  //   .filter((e) => e === d).length;
}

console.log(nbDig(12, 1));
console.log(nbDig(10, 1));
console.log(nbDig(25, 0));
console.log(nbDig(5750, 0));
// console.log(nbDig(11011, 2));
// console.log(nbDig(12224, 8));
// console.log(nbDig(11549, 1));
