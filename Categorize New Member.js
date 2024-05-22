function openOrSenior(data) {
  // ...
  //   let arr = [];
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i][0] >= 55 && data[i][1] > 7) {
  //       arr.push("Senior");
  //     } else {
  //       arr.push("Open");
  //     }
  //   }
  //   return arr;
  // Another Solution

  //   return data.map((e, i) => (e[0] >= 55 && e[1] > 7 ? "Senior" : "Open"));
  // Another Solution

  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
  //   (For Test)
  //   return data[2][0];
  //   return data[2][1];
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); // ['Open', 'Senior', 'Open', 'Senior'])
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
); // ['Open', 'Open', 'Open', 'Open'])
