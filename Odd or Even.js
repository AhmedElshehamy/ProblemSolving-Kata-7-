function oddOrEven(array) {
  //   return array.length == 0
  //     ? "even"
  //     : array.reduce((acc, cur) => acc + cur) % 2
  //     ? "odd"
  //     : "even";
  // Another Solution

  return array.reduce((acc, cur) => acc + cur, 0) % 2 ? "odd" : "even";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([]));
