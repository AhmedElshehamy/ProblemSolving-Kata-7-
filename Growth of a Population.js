function nbYear(p0, percent, aug, p) {
  // your code
  let arr = [];
  let sum = p0 + p0 * (percent / 100) + aug;
  while (sum < p) {
    sum = Math.floor(sum + sum * (percent / 100) + aug);
    arr.push(sum);
  }
  arr.push(p0 + p0 * (percent / 100) + aug);
  return arr.sort().length;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
