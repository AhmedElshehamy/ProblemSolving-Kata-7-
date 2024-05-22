function roundToNext5(n) {
    // ...
    // if (n <= 0) {
    //     return Math.trunc(n / 5) * 5
    // } else if (n % 5 == 0) {
    //     return n
    // } else {
    //     return (Math.trunc(n / 5) + 1) * 5
    // }


    // Another Solution

    // return n <= 0 ? Math.trunc(n / 5) * 5 : n % 5 == 0 ? n : Math.trunc((n / 5) + 1) * 5

    // Another Solution

    // return Math.ceil(n / 5) * 5

    while (n % 5 !== 0) n++
    return n

}
console.log(roundToNext5(0))
console.log(roundToNext5(3))
console.log(roundToNext5(2))
console.log(roundToNext5(7))
console.log(roundToNext5(8))
console.log(roundToNext5(12))
console.log(roundToNext5(23))
console.log(roundToNext5(27))
console.log(roundToNext5(30))
console.log(roundToNext5(-2))
console.log(roundToNext5(-5))
console.log(roundToNext5(0))

console.log(roundToNext5(5))
