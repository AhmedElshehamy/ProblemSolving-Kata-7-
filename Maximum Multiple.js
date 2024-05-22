function maxMultiple(divisor, bound) {
    //your code here
    // let arr = Array.from({ length: bound }, (_, i) => i + 1)
    // let newArr = arr.filter((e, i) => e * divisor <= bound)
    // return newArr[newArr.length - 1] * divisor

    // Another Solution
    // return Array.from({ length: bound }, (_, i) => i + 1).filter((e, i) => e * divisor <= bound).slice(-1).reduce((cur) => cur) * divisor

    // Another Solution
    return Math.floor(bound / divisor) * divisor
}

console.log(maxMultiple(2, 7))
console.log(maxMultiple(3, 10))
console.log(maxMultiple(7, 17))
console.log(maxMultiple(10, 50))