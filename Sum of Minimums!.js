function sumOfMinimums(arr) {
    // your code here
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(Math.min(...arr[i]))
    // }
    // return newArr.reduce((cur, acc) => cur + acc)

    // return arr.map((e) => Math.min(...e)).reduce((cur, acc) => cur + acc)


    // let total = 0

    // for (let i = 0; i < arr.length; i++) {
    //     total += Math.min(...arr[i])
    // }
    // return total


    let total = 0, temp = 0

    for (let i = 0; i < arr.length; i++) {
        temp = arr[i][0]
        for (let j = 1; j < arr[i].length; j++) {
            if (temp > arr[i][j]) {
                temp = arr[i][j]
            }
        }
        total += temp
    }
    return total
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))