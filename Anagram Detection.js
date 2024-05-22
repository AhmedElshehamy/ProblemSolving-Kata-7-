// write the function isAnagram
var isAnagram = function (test, original) {
  //   return (
  //     test.length == original.length &&
  //     test
  //       .toLowerCase()
  //       .split("")
  //       .sort()
  //       .join("")
  //       .includes(original.toLowerCase().split("").sort().join(""))
  //   );

  // Another Solution
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("foefet", "toffee")); // True
console.log(isAnagram("Buckethead", "DeathCubeK")); // True
console.log(isAnagram("dumble", "bumble")); // False
console.log(isAnagram("ound", "round")); // False
