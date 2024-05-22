function findNextSquare(sq) {
  //   return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
  //   return Number.isInteger(Math.sqrt(sq))
  //     ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
  //     : -1;
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(342786627)); // -1
