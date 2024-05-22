function validatePIN(pin) {
  //return true or false
  //   let pattern = /^\d{4}$|^\d{6}$/;
  //   return pattern.test(pin);
  // ShortCut Solution
  //   return /^\d{4}$|^\d{6}$/g.test(pin);
  // Another Solution (Try Not Accuracy)
  //   return pin.length == 4 || pin.length == 6 ? true : false;
  let arr = pin.split("").map((e) => +e);
  //   return arr;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) {
      return false;
    } else if (arr.length != 6 && arr.length != 4) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(validatePIN("12345")); // False
console.log(validatePIN("1")); //false
console.log(validatePIN("12")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN("1234")); // true
console.log(validatePIN("000000")); // true
