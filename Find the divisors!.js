function divisors(integer) {
  //   let arr = [];
  //   for (let i = 2; i < integer; i++) {
  //     if (integer % i == 0) {
  //       arr.push(i);
  //     }
  //   }
  //   if (arr.length == 0) {
  //     return `${integer} is prime`;
  //   }
  //   return arr;
  // Another Solution
  //   const array = Array.from({ length: integer - 1 }, (_, i) => i + 1)
  //     .slice(1)
  //     .filter((el) => integer % el == 0);
  //   return array.length ? array : `${integer} is prime`;
  // Another Solution

  const array = [...Array(integer).keys()]
    .slice(2)
    .filter((el) => integer % el == 0);
  return array.length ? array : `${integer} is prime`;
}
console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));
