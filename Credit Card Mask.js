// return masked string
function maskify(cc) {
  //   if (typeof cc === "undefined") {
  //     return undefined;
  //   } else if (typeof cc === "string") {
  //     if (cc.length <= 1) {
  //       return cc;
  //     } else if (cc.length == 5) {
  //       return cc.replace(cc[0], "#");
  //     } else {
  //       return cc.replaceAll(cc.slice(0, -4), "#".repeat(cc.slice(0, -4).length));
  //     }
  //   }
  // Another Solution

  //   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);

  // Another Solution
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("Skippy"));
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("11111"));
console.log(maskify("Nananananananananananananananana Batman!"));
// console.log(maskify(undefined));
