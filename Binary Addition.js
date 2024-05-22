function addBinary(a, b) {
  //   let bin = 0;
  //   let rem,
  //     i = 1;
  //   let x = a + b;
  //   while (x != 0) {
  //     rem = x % 2;
  //     x = parseInt(x / 2);
  //     bin = bin + rem * i;
  //     i = i * 10;
  //   }
  //   return bin.toString();
  // Another Solution
  //   return (a + b).toString(2);
  // Another Solution
  let sum = a + b,
    bin = "";
  while (sum > 0) {
    bin = (sum % 2) + bin;
    sum = Math.floor(sum / 2);
  }
  return bin;
}

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));
