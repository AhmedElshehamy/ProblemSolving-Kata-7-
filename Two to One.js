function longest(s1, s2) {
  //   return Array.from(new Set(s1 + s2))
  //     .sort()
  //     .join(""); // Using Array From Method And Set Method
  // Another Solution

  //   return [...new Set(s1, s2)].sort().join(""); // Using Spread Method And Set Method
  //   Another Solution
  return (s1 + s2)
    .split("")
    .sort()
    .join("")
    .replace(/(.)\1+/g, "$1"); // USing RegExp
}

console.log(longest("aretheyhere", "yestheyarehere"));
