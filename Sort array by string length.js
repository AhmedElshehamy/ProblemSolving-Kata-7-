function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest

  //   return array.sort((a, b) => a.length - b.length);
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i].length > array[j].length) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
