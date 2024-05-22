String.prototype.toJadenCase = function () {
  //   return this.split(" ")
  //     .map((ele) => ele[0].toUpperCase() + ele.substring(1))
  //     .join(" ");
  // Another Solution
  let s = this.split(" ").map((ele) =>
    ele.replace(ele[0], ele[0].toUpperCase())
  );
  return s.join(" ");
};
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
