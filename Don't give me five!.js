function dontGiveMeFive(start, end) {
  let arr = [];
  // for (let i = start; i <= end; i++) {
  //   arr.push(i);
  // }
  // return arr.map((e) => e.toString()).filter((e) => !e.includes("5")).length;

  // Another Solution

  // for (let i = start; i <= end; i++) {
  //   if (!i.toString().includes("5")) {
  //     arr.push(i);
  //   }
  // }
  // return arr.length;

  // Another Solution
  for (let i = start; i <= end; i++) {
    if (!/5/i.test(i)) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(4, 50));
console.log(dontGiveMeFive(4, 100));
