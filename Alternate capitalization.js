function capitalize(s) {
    let first = Array.from(s).map((e, i) => !(i % 2) ? e.toUpperCase() : e).join("")
    let second = Array.from(s).map((e, i) => (i % 2) ? e.toUpperCase() : e).join("")
    let result = [first, second]
    return result
};

console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))