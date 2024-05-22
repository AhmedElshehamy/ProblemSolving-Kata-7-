function factorial(n) {
    //your code here

    // return n == 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((cur, acc) => cur * acc)

    let r = 1

    while (n > 1) r *= n--
    return r

}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(7))
console.log(factorial(17))