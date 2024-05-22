function digits(n) {
    // TODO
    // return new String(n).length

    // return n.toString().length

    // return (n + "").length

    return `${n}`.length
}

console.log(digits(0))
console.log(digits(9))
console.log(digits(12345))
console.log(digits(9007199254740991))