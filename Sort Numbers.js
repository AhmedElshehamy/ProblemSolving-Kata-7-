function solution(nums) {
  //   if (nums === null || nums.length === 0) {
  //     return [];
  //   }
  //   if (nums.length > 0) {
  //     return nums.sort((a, b) => a - b);
  //   }
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

console.log(solution([20, 2, 10]));
console.log(solution([]));
console.log(solution(null));
