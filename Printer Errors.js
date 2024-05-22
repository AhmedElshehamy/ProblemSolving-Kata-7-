function printerError(s) {
  // your code
  //   let pattern = s.match(/[n-z]/gi);
  //   if (pattern === null) {
  //     return `0/${s.length}`;
  //   } else {
  //     return `${pattern.length}/${s.length}`;
  //   }
  //Another Solution
  //   return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
  //Another Solution
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
      sum++;
    }
  }
  return `${sum}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm")
);
