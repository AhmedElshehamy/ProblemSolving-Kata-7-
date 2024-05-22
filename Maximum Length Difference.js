function mxdiflg(a1, a2) {
    // your code
    let a1Max = (Math.max(...a1.map((e) => e.length)))
    let a1Min = (Math.min(...a1.map((e) => e.length)))
    let a2Max = (Math.max(...a2.map((e) => e.length)))
    let a2Min = (Math.min(...a2.map((e) => e.length)))
    return a1.length == 0 || a2.length == 0 ? -1 : Math.max((a1Max - a2Min), (a2Max - a1Min))
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))