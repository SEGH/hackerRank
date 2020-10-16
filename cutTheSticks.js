// Given a number of sticks of varying lengths,
// Loop through the sticks and cut the length of the shortest stick from the rest and discard all sticks of the shortest length
// Print the number of sticks that are left before each iteration

function cutTheSticks(arr) {
    // Sort array so we can loop through from smallest stick lengths to largest
    arr.sort((a, b) => {
        return a - b;
    });

    // Declare a results array with the full stick array length as first element
    let result = [arr.length];

    // Set current number to smallest stick and count to 1
    let currentNumber = arr[0];
    let count = 1;

    console.log(arr);
    // Loop through sticks checking if they are the same size
    for (let i = 1; i < arr.length; i++) {
        console.log(`current: ${currentNumber}`)
        if (arr[i] != currentNumber) {
            console.log(`count: ${count}`);
            result.push(result[result.length - 1] - count);
            currentNumber = arr[i]
            count = 1;
        } else {
            count++
        }
    }

    return result;
}

console.log(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]));