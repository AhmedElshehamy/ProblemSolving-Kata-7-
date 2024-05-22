function triangular(n) {
    // Return the nth triangular number

    // This Is Equation (n(n+1) / 2)

    return n < 0 ? 0 : (n * (n + 1) / 2)
}

console.log(triangular(2))
console.log(triangular(4))
console.log(triangular(-454))