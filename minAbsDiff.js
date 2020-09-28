// Given an array of integers, find and print the minimum absolute difference between any two elements in the array

function minimumAbsoluteDifference(arr) {
    // Sort Array
    let sortedArray = arr.sort((a, b) => {return a-b});

    // Set minimum variable
    let minAD = Math.abs(sortedArray[0] - sortedArray[sortedArray.length - 1]);

    for (let i = 0; i < sortedArray.length; i++) {

        let absDiff = Math.abs(sortedArray[i] - sortedArray[i + 1])

        if (absDiff < minAD) {
            minAD = absDiff;
        }
    }

    return minAD;

}

console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));