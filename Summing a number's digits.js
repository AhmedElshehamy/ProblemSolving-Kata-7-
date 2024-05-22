function sumDigits(number) {
    // let arr = Array.from(String(number))
    // return arr.filter((e) => e !== "-").map((e) => parseInt(e)).reduce((cur, acc) => cur + acc)

    // Another Solution 

    // return Math.abs(number).toString().split("").reduce((cur, acc) => +cur + +acc)

    // Another Solution 

    return [...Math.abs(number) + ""].reduce((cur, acc) => cur + Number(acc), 0)
}


console.log(sumDigits(10))
console.log(sumDigits(99))
console.log(sumDigits(-32))