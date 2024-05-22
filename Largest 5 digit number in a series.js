function solution(digits) {

    // let largestFiveDigitNumber = 0;

    // for (let i = 0; i <= digits.length - 5; i++) {
    //     const fiveDigitNumber = +digits.slice(i, i + 5);
    //     largestFiveDigitNumber = Math.max(largestFiveDigitNumber, fiveDigitNumber);
    // }
    // return largestFiveDigitNumber

    // Another Solution

    let arr = []
    for (let i = 0; i < digits.length; i++) {
        arr.push(+digits.slice(i, i + 5))
    }
    return arr
}

console.log(solution('1234567898765'))
console.log(solution("731674765"))


// 9834775899890938471234 => 99890