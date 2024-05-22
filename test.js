function addWithoutPlus(a, b) {

    let carry = a & b;
    a = a ^ b;
    b = carry << 1;

    return a;
}

console.log(addWithoutPlus(1, 10))