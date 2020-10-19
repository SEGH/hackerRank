// After contemplating the popular approach for solving this, here is how I wrapped my head around it.
// For every input line of a-b-k, you are given the range (a to b) where the values increase by k. So instead of keeping track of actual values increasing, just keep track of the rate of change (i.e. a slope) in terms of where the rate started its increase and where it stopped its increase. This is done by adding k to the "a" position of your array and adding -k to the "b+1" position of your array for every input line a-b-k, and that's it. "b+1" is used because the increase still applied at "b".
// The maximum final value is equivalent to the maximum accumulated "slope" starting from the first position, because it is the spot which incremented more than all other places. Accumulated "slope" means to you add slope changes in position 0 to position 1, then add that to position 2, and so forth, looking for the point where it was the greatest.

// function arrayManipulation(n, queries) {
//     // Loop inital array
//     let array = []
//     for (let i = 0 ; i < n; i++) {
//         array.push(0);
//     }

//     // Loop queries to track rate of change
//     for (let i = 0; i < queries.length; i++) {
//         array[queries[i][0]] += queries[i][2];
//         array[queries[i][1] + 1] -= queries[i][2];
//         console.log(array);
//     }

//     // Loop through to find the max slope
//     let currentSlope = array[0];
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         currentSlope += array[i];

//         if (currentSlope > max) {
//             max = currentSlope;
//         }
//     }

//     return max;
// }

function arrayManipulation(n, queries) {
    // Loop inital array
    let array = []
    for (let i = 0 ; i < n; i++) {
        array.push(0);
    }

    // Loop queries to apply changes
    for (let i = 0; i < queries.length; i++) {
        // Account for 1-indexing
        for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
            array[j] += queries[i][2];
        }
        console.log(array);
    }

    // Return max
    return Math.max(...array);
}

console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));
console.log(arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]));
console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));