function gimme(triplet) {
    return triplet.map((e) => e > Math.min(...triplet) && e < Math.max(...triplet)).indexOf(true)
}

console.log(gimme([2, 3, 1]))
console.log(gimme([2.1, 3.2, 1.4]))
console.log(gimme([5.9, 10.4, 14.2]))