function accum(s) {
  //   let arr = [];
  //   for (let i = 0; i < s.length; i++) {
  //     arr.push(`${s[i].toUpperCase()}${s[i].repeat(i).toLowerCase()}`);
  //   }
  //   return arr.join("-");
  // Another Solution
  return s
    .split("")
    .map((e, i) => e.toUpperCase() + e.repeat(i).toLowerCase())
    .join("-");
}

console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
