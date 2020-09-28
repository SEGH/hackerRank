// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1

const array = [84, 43, 11, 41, 2, 99, 31, 32, 56, 53, 42, 14, 98, 27, 64, 57, 16, 33, 48, 21, 46, 61, 87, 90, 28, 12, 62, 49, 29, 77, 82, 70, 80, 89, 95, 52, 13, 19, 9, 79, 35, 67, 51, 39, 7, 1, 66, 8, 17, 85, 71, 97, 34, 73, 75, 6, 91, 40, 96, 65, 37, 74, 20, 68, 23, 47, 76, 55, 24, 3, 30, 22, 55, 5, 69, 86, 54, 50, 10, 59, 15, 4, 36, 38, 83, 60, 72, 63, 78, 58, 88, 93, 45, 18, 94, 44, 92, 81, 25, 26];

function pickingNumbers(a) {
    // Sort array
    let sortedArray = a.sort((a, b) => { return a-b});

    // Declare result length
    let result = 0;
    // loop through checking absolute differences, check length of subarrays
    for (let j = 0; j < sortedArray.length; j++) {
        for (let i = sortedArray.length - 1; i > 0; i--) {
            if (Math.abs(sortedArray[j] - sortedArray[i]) <= 1) {
                let subarray = sortedArray.slice(j, i + 1);
                console.log(subarray);
                if (subarray.length > result) {
                    result = subarray.length;
                }
            }

        }
    }

    return result;
}

console.log(pickingNumbers(array));