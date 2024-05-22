function rowSumOddNumbers(n) {
  // TODO
  // return Math.pow(n, 3);
  // Another Solution
  // let frist = n * (n - 1) + 1;
  // let sum = 0;
  // for (let i = 0; i < n; i++) {
  //   sum += frist;
  //   frist += 2;
  // }
  // return sum;

  let newArr = [];
  let first = n * (n - 1) + 1;
  for (let i = first; i <= 100000; i += 2) {
    newArr.push(i);
  }
  return newArr.slice(0, n).reduce((cur, acc) => cur + acc);
  // Shortcut For This
  return Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1)
    .slice(-n)
    .reduce((a, b) => a + b);

  // Another Solution

  return (
    [...Array(n).keys()] // generate an array with values 0 to n
      .map((cur, idx) => Math.pow(n, 2) - (n - 1) + idx * 2) // map over each value, calculate the first value in the "row", then add the required
      // number of 2's to each so we generate all values for a given row
      .reduce((a, b) => a + b)
  );
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(10));
console.log(rowSumOddNumbers(42));
// console.log(rowSumOddNumbers(10000000));
