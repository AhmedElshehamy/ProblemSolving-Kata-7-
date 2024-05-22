function reverseWords(str) {
  // Go for it
  //   let arr = [];
  //   for (let i = str.length; i >= 0; i--) {
  //     arr.push(str[i]);
  //   }
  //   return arr.join("").split(" ").reverse().join(" ");

  // ANOTHER solution
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("This is an example!"));
