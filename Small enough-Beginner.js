function smallEnough(a, limit) {
    // let sort = a.sort((a, b) => a - b)
    // return sort[a.length - 1] > limit ? false : true
    // Another Solution

    let test = a.map((e) => e > limit ? false : true)

    // return test.includes(false) ? false : true
    return test.indexOf(false) == -1 ? true : false
}

console.log(smallEnough([66, 101], 200))

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))