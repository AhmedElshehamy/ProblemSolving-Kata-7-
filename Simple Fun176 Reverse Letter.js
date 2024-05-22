function reverseLetter(str) {
    //coding and coding..

    return str.match(/[a-z]/g).reverse().join("")

    // Another Solution
    // let pattern = /[a-z]/g
    // let arr = str.match(pattern)
    // let newArr = []
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     newArr.push(arr[i])
    // }
    // return newArr.join("")
}

console.log(reverseLetter("krishan"))
console.log(reverseLetter("ultr53o?n"))