function isPowerOfTwo(n) {
    //.. should return true or false ..

    // let arr = Array.from({ length: 20 }, (_, i) => i + 1).map((e) => Math.pow(2, e))
    // arr.push(1)
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.includes(n)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // return Number.isInteger(Math.log2(n))


    let ex = 0

    while (true) {
        if (2 ** ex > n) {
            return false
        } else if (2 ** ex == n) {
            return true
        }
        ex += 1
    }
}

console.log(isPowerOfTwo(2)) // True
console.log(isPowerOfTwo(1)) // True
console.log(isPowerOfTwo(0)) // false
console.log(isPowerOfTwo(5)) // False
console.log(isPowerOfTwo(4096)) // true
console.log(isPowerOfTwo(1024)) // true