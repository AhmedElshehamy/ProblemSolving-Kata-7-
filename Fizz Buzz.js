// Return an array
function fizzbuzz(n) {
    //

    // let arr = Array.from({ length: n }, (_, i) => i + 1)

    // for (let i = 0; i < arr.length; i++) {
    //     if (Number.isInteger((arr[i] / 5) / 3)) {
    //         arr[i] = 'FizzBuzz'
    //     }
    //     if (Number.isInteger(arr[i] / 3)) {
    //         arr[i] = 'Fizz'
    //     }
    //     if (Number.isInteger(arr[i] / 5)) {
    //         arr[i] = 'Buzz'
    //     }

    // }
    // return arr

    return Array.from({ length: n }, (_, i) => i + 1).map((e) => e % 15 == 0 ? 'FizzBuzz' : e % 5 == 0 ? 'Buzz' : e % 3 == 0 ? 'Fizz' : e)
}


console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(20))