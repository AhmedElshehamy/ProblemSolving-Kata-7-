function stray(numbers) {
  //   let repeat = 0;
  //   let sortNumber = numbers.sort((a, b) => a - b);
  //   return sortNumber;
  //   for (let i = 0; i < sortNumber.length; i++) {
  //     if (numbers[i] != numbers[i + 1]) {
  //       repeat = numbers[i];
  //     }
  //   }
  //   return repeat;
  //   let count = {};
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (count[numbers[i]]) {
  //       count[numbers[i]] += 1;
  //     } else {
  //       count[numbers[i]] = 1;
  //     }
  //   }
  //   for (let prop in count) {
  //     if (count[prop] == 1) {
  //       return +prop;
  //     }
  //   }
  //   let min = Math.min(...numbers);
  //   let max = Math.max(...numbers);
  //   return numbers.filter((x) => x === max).length == 1 ? max : min;
  //   for (let i in numbers) {
  //     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
  //       return numbers[i];
  //     }
  //   }

  return numbers.reduce((x, y) => x ^ y);
}

console.log(stray([1, 2, 1]));
console.log(stray([1, 1, 2]));
console.log(stray([2, 1, 1]));
console.log(stray([17, 17, 17, 3, 17, 17]));
console.log(stray([1, 1, 1, 1, 0]));
