var isSquare = function (n) {
  //   if (n < 0) {
  //     return false;
  //   }
  //   let squreRoot = Math.sqrt(n);
  //   return squreRoot === Math.ceil(squreRoot);
  // Another Solution
  //   return n % Math.sqrt(n) == 0 || n == 0;
  // Another Solution
  return Number.isInteger(Math.sqrt(n));
};
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(5));
console.log(isSquare(25));
