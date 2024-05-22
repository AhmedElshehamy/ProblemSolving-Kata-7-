function friend(friends) {
  //   return friends.filter((e) => e.length == 4);
  // Another Solution
  let arr = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      arr.push(friends[i]);
    }
  }
  return arr;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
