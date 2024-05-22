var number = function (busStops) {
  // Good Luck!
  //   let arr = [].concat(...busStops);
  //   let addArr = [];
  //   let sArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2 == 0) {
  //       addArr.push(arr[i]);
  //     } else {
  //       sArr.push(arr[i]);
  //     }
  //   }
  //   return (
  //     addArr.reduce((acc, cur) => acc + cur) -
  //     sArr.reduce((acc, cur) => acc + cur)
  //   );
  //   let arr = [].concat(...busStops);
  //   return (
  //     arr.filter((e, i) => i % 2 == 0).reduce((acc, cur) => acc + cur) -
  //     arr.filter((e, i) => i % 2).reduce((acc, cur) => acc + cur)
  //   );
  // Another Solution
  //   let sum = 0;
  //   for (let i = 0; i < busStops.length; i++) {
  //     sum += busStops[i][0] - busStops[i][1];
  //   }
  //   return sum;
  // Another Solution
  return busStops.reduce(($, b) => $ + b[0] - b[1], 0);
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
