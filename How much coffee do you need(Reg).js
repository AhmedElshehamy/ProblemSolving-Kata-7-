function howMuchCoffee(e) {
  //   let coffeesNeeded = 0;
  //   let pattern = "(cw|dog|cat|movie)";
  //   let lowerPattern = new RegExp(pattern, "g");
  //   let upperPattern = new RegExp(pattern.toUpperCase(), "g");
  //   coffeesNeeded += events.filter((e) => e.match(lowerPattern)).length;
  //   coffeesNeeded += events.filter((e) => e.match(upperPattern)).length * 2;
  // return coffeesNeeded <= 3 ? coffeesNeeded : "You need extra sleep";
  // Another Solution
  //   let count = 0;
  //   for (let i = 0; i < e.length; i++) {
  //     if (e[i] == "cw" || e[i] == "cat" || e[i] == "dog" || e[i] == "movie") {
  //       count++;
  //     }
  //     if (e[i] == "CW" || e[i] == "CAT" || e[i] == "DOG" || e[i] == "MOVIE") {
  //       count += 2;
  //     }
  //   }
  //   return count > 3 ? "You need extra sleep" : count;
  // Another Solution
  var count = 0;
  e.forEach(function (el) {
    if (/^(CW|CAT|DOG|MOVIE)$/.test(el)) count += 2;
    if (/^(cw|cat|dog|movie)$/.test(el)) count++;
  });
  if (count > 3) return "You need extra sleep";
  return count;
}

console.log(howMuchCoffee(["cw", "CAT", "cw=others"]));
console.log(howMuchCoffee(["cw", "CAT", "DOG"]));
