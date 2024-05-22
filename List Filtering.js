function filter_list(l) {
  return l.filter((l) => typeof l == "number");
}
console.log(filter_list([1, 2, "a", "b"]));
