function getDivisorsCnt(n) {
  // todo
  //   return [...Array(n + 1).keys()].filter((e) => n % e == 0).length;
  //   return Array.from({ length: n }, (_, i) => i + 1).filter((e) => n % e == 0)
  //     .length;
  //   let count = 0;
  //   for (let i = 1; i <= n; i++) {
  //     if (n % i == 0) {
  //       count++;
  //     }
  //   }
  //   return count;

  let count = 0;

  // Iterate up to the square root of n
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      // If i is a divisor, increment count
      count++;

      // If i is not equal to n / i, then n / i is also a divisor
      if (i !== n / i) {
        count++;
      }
    }
  }

  return count;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
