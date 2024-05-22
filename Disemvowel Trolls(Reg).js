function disemvowel(str) {
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  //   let emptyArr = [];
  //   let strArr = str.split("");
  //   for (let i = 0; i < strArr.length; i++) {
  //     if (!arr.includes(strArr[i])) {
  //       emptyArr.push(strArr[i]);
  //     }
  //   }
  //   return emptyArr.join("");
  // Another Solution
  //   return str
  //     .split("")
  //     .filter((e) => !arr.includes(e))
  //     .join("");
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
