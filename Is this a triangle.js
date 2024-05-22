function isTriangle(a, b, c) {
  let arr = [a, b, c].sort((a, b) => a - b);

  return arr[0] + arr[1] > arr[2] ? true : false;
  // Sample Solution

  //   [a, b, c] = [a, b, c].sort((a, b) => a - b);
  //   return a + b > c;
}
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(-1, 2, 2)); // false
console.log(isTriangle(0, 2, 2)); // false
console.log(isTriangle(4, 4, 8)); // false
