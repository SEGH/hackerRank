// Given an integer k and two arrays, permute the arrays so that a[i] + b[i] >= k

function twoArrays(k, A, B) {
    // Sort array A ascending and B descending to match the highest and lowest from each array
    let arrayA = A.sort((a, b) => {return a - b})
    let arrayB = B.sort((a, b) => {return b - a})

    // Loop to check condition
    for (let i = 0; i < arrayA.length; i++) {

        if (arrayA[i] + arrayB[i] < k) {
            return "NO"
        }
    }

    return "YES"
}

console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));