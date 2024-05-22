function DNAStrand(dna) {
  //   let arr = dna.split("");
  //   let emptyArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] == "A") {
  //       arr[i] = "T";
  //       emptyArr.push(arr[i]);
  //     } else if (arr[i] == "T") {
  //       arr[i] = "A";
  //       emptyArr.push(arr[i]);
  //     } else if (arr[i] == "C") {
  //       arr[i] = "G";
  //       emptyArr.push(arr[i]);
  //     } else {
  //       arr[i] = "C";
  //       emptyArr.push(arr[i]);
  //     }
  //   }
  //   return emptyArr.join("");
  // Another Solution
  //   let paris = { A: "T", T: "A", C: "G", G: "C" };
  //   return dna.replace(/./g, (c) => paris[c]);
  // Another Solution
  return dna
    .replace(/A/g, "t")
    .replace(/T/g, "a")
    .replace(/C/g, "g")
    .replace(/G/g, "c")
    .toUpperCase();
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
