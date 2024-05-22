var capitals = function (word) {
  // Write your code here

  let pattern = word.match(/[A-Z]/g)
  // return pattern // ['C', 'E', 'W', 'R']
  // return pattern.map((element) => word.indexOf(element))

  // Another Solution

  let newArr = []

  for (let element of pattern) {
    newArr.push(word.indexOf(element))
  }
  return newArr
};

console.log(capitals("CodEWaRs"));
