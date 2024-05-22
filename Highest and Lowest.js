function highAndLow(numbers) {
  //   let str = numbers.replaceAll(" ", ",");
  //   arr = str.split(",");
  //   let arrNum = arr.map((ele) => Number(ele));
  //   let max = Math.max(...arrNum);
  //   let min = Math.min(...arrNum);
  //   return `${max} ${min}`;

  // another solution
  let numbersArray = numbers
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);
  return `${numbersArray[numbersArray.length - 1]} ${numbersArray[0]} `;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
