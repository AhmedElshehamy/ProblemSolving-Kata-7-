function minValue(values) {
    //your code here
    let arr = []

    // for (let i in values) {
    //     if (!arr.includes(values[i])) {
    //         arr.push(values[i])
    //     }
    // } => Using Set

    // return Array.from(new Set(values))
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length - 1; j++) {

    //         if (arr[i] > arr[j]) {
    //             [arr[i], arr[j]] = [arr[j], arr[i]]
    //         }
    //     }
    // }
    // return arr

    // return Number(arr.sort((a, b) => a - b).join(""))
}


console.log(minValue([1, 3, 1]))
console.log(minValue([4, 8, 1, 4]))