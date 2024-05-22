function noOdds(values) {
    // Return all non-odd values
    // return values.filter((e) => !(e % 2)) // Implementation Filter Build-in Function
    let arr = []
    for (let i of values) {
        if (!(i % 2)) {
            arr.push(i)
        }
    }
    return arr
}

console.log(noOdds([0, 1]))
console.log(noOdds([0, 1, 2, 3]))