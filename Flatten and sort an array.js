"use strict";

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    // return [].concat(...array).sort((a, b) => a - b)

    // return array.reduce((acc, cur) => acc + cur).split(",").join("").split("").map((e) => Number(e)).sort((a, b) => a - b)

    // return array.flat().sort((a, b) => a - b)

    // return array.reduce((cur, acc) => [...cur, ...acc]).sort((a, b) => a - b)


    // Implementation (concat Method)

    let result = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j])
        }
    }
    // Implementation (Sort Method)

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length - 1; j++) {
            if (result[i] > result[j]) {
                [result[i], result[j]] = [result[j], result[i]]
            }
        }
    }
    return result
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
console.log(flattenAndSort([[], []]))