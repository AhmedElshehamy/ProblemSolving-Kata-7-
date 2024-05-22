function minMax(arr) {
  //   return [Math.min(...arr), Math.max(...arr)];
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1]));
console.log(minMax([2334454, 5]));
