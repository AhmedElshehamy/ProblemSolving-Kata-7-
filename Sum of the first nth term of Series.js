function SeriesSum(n) {
  // Happy Coding ^_^
  //   return Array(n)
  //     .fill(0)
  //     .map((_, i) => 3 * i + 1)
  //     .reduce((s, e) => s + 1 / e, 0)
  //     .toFixed(2);

  return Array(n)
    .fill(0)
    .map((_, i) => i * 3 + 1)
    .reduce((s, e) => s + 1 / e, 0)
    .toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2)); // 1 + .25
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));
console.log(SeriesSum(6));
