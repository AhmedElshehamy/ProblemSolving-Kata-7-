function findShort(s) {
  //   let arr = s.split(" ");
  //   let arrLength = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     arrLength.push(arr[i].length);
  //   }
  //   return Math.min(...arrLength);
  //Another Solution
  //   return s
  //     .split(" ")
  //     .map((ele) => ele.length)
  //     .sort((a, b) => a - b)[0];
  //Another Solution

  return Math.min(...s.split(" ").map((ele) => ele.length));
}

console.log(findShort("Let's travel abroad shall we"));
console.log(
  findShort(
    "Waves ProofOfWork Bitcoin Lisk Waves Factom ProofOfWork DarkCoin Steem BTC Dogecoin Ripple Lisk Bitcoin DarkCoin Factom LiteCoin BTC Bitcoin"
  )
);
