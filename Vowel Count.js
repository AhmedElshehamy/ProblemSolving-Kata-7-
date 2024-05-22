function getCount(str) {
  //   let arr = ["a", "e", "i", "o", "u"];

  //   return str.split("").filter((ele) => arr.includes(ele)).length;

  // Another Solution
  let vowls = "aeiou";
  let count = 0;
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (vowls.includes(strArr[i])) {
      count++;
    }
  }
  return count;
}

console.log(getCount("abracadabra"));
