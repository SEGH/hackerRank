// Given an array of weights
// Each container can carry items that weigh less than or equal to 4 units plus the weight of the min weight item
// What is the smallest number of containers that can be contracted to ship the items

function toys(w) {
    // Sort Array
    let sortedArray = w.sort((a, b) => { return a - b});

    // Loop and check what can be grouped together
    let currentMinItem = w[0]
    let groupCount = 1;

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] > (currentMinItem + 4)) {
            currentMinItem = sortedArray[i]
            groupCount++
        }
    }

    return groupCount
}

console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]));