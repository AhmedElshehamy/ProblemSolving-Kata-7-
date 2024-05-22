function getSum(a, b) {

  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(8, 2));
console.log(getSum(2, 2));
console.log(getSum(5, -1));
