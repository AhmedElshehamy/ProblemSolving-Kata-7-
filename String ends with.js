function solution(str, ending) {
  // TODO: complete
  //   For Testing
  // (    if (str.length < 3) {
  //       return str.slice(2).includes(ending);
  //     } else {
  //       return str.slice(2).includes(ending);
  //     }
  //   Another Solution
  //     return str.substr(ending.length - 1).includes(ending);)
  // Another Solution
  //   return str.slice(-ending.length).includes(ending);
  //   Another Solution
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); // True
console.log(solution("abcde", "abc")); // False
console.log(solution("samurai", "ra")); // False
console.log(solution("abc", "abc"));
