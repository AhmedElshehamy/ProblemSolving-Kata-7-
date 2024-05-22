function squareDigits(num) {
  let arr = num.toString();
  return Number(
    [...arr]
      .map((e) => +e)
      .map((e) => e ** 2)
      .join("")
  );
}

console.log(squareDigits(3212));
