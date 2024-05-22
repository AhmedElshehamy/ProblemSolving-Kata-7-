const binaryArrayToNumber = (arr) => {
  //   return arr
  //     .reverse()
  //     .map((e, i) => e * Math.pow(2, i))
  //     .reduce((cur, acc) => cur + acc);
  // Another Solution
  //   let newArr = [];
  //   arr.reverse();
  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(arr[i] * Math.pow(2, i));
  //   }
  //   return newArr.reduce((acc, cur) => acc + cur);
  // Another Solution
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
