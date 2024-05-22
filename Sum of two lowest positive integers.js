function sumTwoSmallestNumbers(numbers) {
  //   return numbers
  //     .sort((a, b) => a - b)
  //     .slice(0, 2)
  //     .reduce((cur, acc) => cur + acc);
  // Another Solution

  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
