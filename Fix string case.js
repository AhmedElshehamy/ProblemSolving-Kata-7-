function solve(s) {
    //..

    let patternOne = s.match(/[a-z]/g)
    let patternTwo = s.match(/[A-Z]/g)
    // if (patternOne == null || patternTwo == null) {
    //     return s.toLowerCase()
    // } else if (patternOne.length > patternTwo.length || patternOne.length == patternTwo.length) {
    //     return s.toLowerCase()
    // } else {
    //     return s.toUpperCase()
    // } // Short For This

    // return patternOne == null || patternTwo == null ? s.toLowerCase() : (patternOne.length > patternTwo.length || patternOne.length == patternTwo.length) ? s.toLowerCase() : s.toUpperCase()

    // return s.split("").map((w) => w.charCodeAt(0)) => For Learning
}

console.log(solve("code"))
console.log(solve("CODe"))
console.log(solve("COde"))
console.log(solve("Code"))
