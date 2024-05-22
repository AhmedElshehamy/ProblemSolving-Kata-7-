function factorial(n) {
    // Calculate the factorial here
    if (n >= 0 && n <= 12) {
        return n == 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((cur, acc) => cur * acc)
    } else if (!(n >= 0 && n <= 12)) {
        throw new RangeError("The argument must be between 0 and 12.")
    }
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(12))
console.log(factorial(100))