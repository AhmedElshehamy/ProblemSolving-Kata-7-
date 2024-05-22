function inAscOrder(arr) {
    // Code your algorithm here :)

    // Hmmm ... maybe we should try our luck out ...
    // if (Math.random() > 0.5) {
    //  return true;
    // } else {
    //  return false;
    // }

    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] - arr[i + 1] < 0) {
    //         newArr.push(i)
    //     }
    // }
    // return newArr.length === arr.length - 1

    // Another Solution

    // return arr.join("") === arr.sort((a, b) => a - b).join("")

}

console.log(inAscOrder([1, 2, 4, 7, 19]))
console.log(inAscOrder([1, 2, 3, 4, 5]))

console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))