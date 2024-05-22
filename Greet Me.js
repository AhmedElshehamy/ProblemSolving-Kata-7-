var greet = function (name) {

    // let lower = ''

    // for (let i = 0; i < name.length; i++) {
    //     lower += name[i].toLowerCase();
    // }
    // let specialLower = lower.split('').map((e, i) => i == 0 ? e.toUpperCase() : e).join('')

    // return `Hello ${specialLower}!`

    // return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`

    let arr = []

    for (let i = 0; i < name.length; i++) {
        if (i == 0) {
            arr.push(name[0].toUpperCase())
        } else {
            arr.push(name[i].toLowerCase())
        }
    }

    return arr
};

console.log(greet('riley'))
console.log(greet('JACK'))
console.log(greet('BILLY'))