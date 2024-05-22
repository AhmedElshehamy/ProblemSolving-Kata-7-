function removeSmallest(numbers) {
  //   return numbers.filter((_, i) => i != numbers.indexOf(Math.min(...numbers)));
  //   Another Solution
  let idexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, idexOfMin), ...numbers.slice(idexOfMin + 1)];
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([169, 382, 170]));
// console.log(removeSmallest([]));
