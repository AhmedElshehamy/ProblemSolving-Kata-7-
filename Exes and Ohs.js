function XO(str) {
  //   let arrStr = str.split("").map((e) => e.toLowerCase());
  //   let arrX = [];
  //   let arrO = [];
  //   for (let i = 0; i < arrStr.length; i++) {
  //     if (arrStr[i] == "x") {
  //       arrX.push(arrStr[i]);
  //     } else if (arrStr[i] == "o") {
  //       arrO.push(arrStr[i]);
  //     }
  //   }
  //   if (arrX.length == arrO.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // Another Solution
  //   let arrayX = Array.from(str).filter((e) => {
  //     return e.toLowerCase() === "x";
  //   });
  //   let arrayO = Array.from(str).filter((e) => {
  //     return e.toLowerCase() === "o";
  //   });
  //   if (arrayX.length === arrayO.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // Another Solution
  //   return str.split(/o/gi).length == str.split(/x/gi).length;
  // Another Solution
  return (
    str.toLowerCase().match(/o/g || [])?.length ===
    str.toLowerCase().match(/x/g || [])?.length
  );
}

console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("ooxXm")); // true
