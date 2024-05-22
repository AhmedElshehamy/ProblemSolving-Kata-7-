function calculateYears(principal, interest, tax, desired) {
  // your code
  //   let p = principal + principal * interest - principal * interest * tax;
  //   let arr = [];
  //   if (principal == desired) {
  //     return 0;
  //   } else {
  //     while (p <= desired) {
  //       p = p + p * interest - p * interest * tax;
  //       arr.push(p);
  //     }
  //     arr.push(principal);
  //   }
  //   return arr.length;

  // Another Solution
  let years = 0;

  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
console.log(calculateYears(1000, 0.05, 0.18, 1100));
