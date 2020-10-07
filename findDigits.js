// Given integer n, for each digit that makes up the integers, determine whether it is a divisor
// Return the number of divisors

function findDigits(n) {
    // Declare variable to increment as count
    let count = 0;

    // Make n a string that we can loop over
    let stringOfN = n.toString();

    for (let i = 0; i < stringOfN.length; i++) {
        // If the remainder of n divided by the digit is zero, we know it's a divisor
        if (n % stringOfN[i] === 0) {
            count++
        }
    }

    return count;
}

console.log(findDigits(1012));