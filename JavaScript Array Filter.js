function getEvenNumbers(numbersArray) {
    // filter out the odd numbers

    // return numbersArray.filter(n => n % 2 === 0)

    let arr = []

    for (let i in numbersArray) {
        !(numbersArray[i] % 2) ? arr.push(numbersArray[i]) : ''
    }
    return arr
}


console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]))