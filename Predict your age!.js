function predictAge(...ages) {
    // your code

    // return Math.trunc(Math.sqrt([...arguments].map((e) => e * e).reduce((cur, acc) => cur + acc)) / 2)
    // return Math.trunc(Math.hypot(...ages) / 2)

    let sum = 0
    for (let i = 0; i < ages.length; i++) {
        sum += (ages[i] * ages[i])
    }
    return Math.trunc(Math.sqrt(sum) / 2)

}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))