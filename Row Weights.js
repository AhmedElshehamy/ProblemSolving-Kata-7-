function rowWeights(array) {
    //your code here

    // if (array.length == 1) {
    //     return [array[0], 0]
    // }
    // return [array.filter((e, i) => !(i % 2)).reduce((cur, acc) => cur + acc), array.filter((e, i) => (i % 2)).reduce((cur, acc) => cur + acc)]

    let team_1 = 0
    let team_2 = 0

    for (let i = 0; i < array.length; i++) {
        if (!(i % 2)) {
            team_1 += array[i]
        } else {
            team_2 += array[i]
        }
    }
    return [team_1, team_2]
}

console.log(rowWeights([80]))
console.log(rowWeights([0]))
console.log(rowWeights([100, 50]))
console.log(rowWeights([50, 60, 70, 80]))
console.log(rowWeights([13, 27, 49]))