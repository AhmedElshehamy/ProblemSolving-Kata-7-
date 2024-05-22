const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  //   let arr = [];
  //   for (let i = begin; i <= end; i += step) {
  //     arr.push(i);
  //   }
  //   return begin > end
  //     ? 0
  //     : begin == end
  //     ? begin
  //     : arr.reduce((acc, cur) => acc + cur);
  // Another Solution

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
console.log(sequenceSum(2, 1, 3));
console.log(sequenceSum(2, 2, 3));
