function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .map((e) => +e)
      .join("")
  );
}

console.log(descendingOrder(0));
console.log(descendingOrder(123456789));
