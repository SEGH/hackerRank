// Return the second largest number in an array

function getSecondLargest(nums) {
    // In order to find the second largest, we'll need to know the largest. Let's store it in a variable
    let largestNumber = 0;

    // As we update the largest, we can move the previously held largest to the second largest variable
    let secondLargest = 0;

    // Loop through to compare numbers
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            secondLargest = largestNumber;
            largestNumber = nums[i];
        }

        // If we've already reached a number that is larger than the second largest, we'll need to compare the current number to the secondLargest variable, as long as it's not the same number as the largestNumber
        else if (nums[i] > secondLargest && nums[i] !== largestNumber) {
            secondLargest = nums[i];
        }

        console.log(`largest:${largestNumber}`);
        console.log(`second:${secondLargest}`);
    }

    return secondLargest;

    // An alternative, but perhaps less efficient way would be to sort the array highest to low and check for the first index that is not the same as index 0
    // let sortedNumbers = nums.sort((a, b) => {return b - a});
    // let secondLargest = null;
    // let i = 1;

    // while (secondLargest === null) {
    //     if (sortedNumbers[i] !== sortedNumbers[0]) {
    //         secondLargest = sortedNumbers[i];
    //     }

    //     i++
    // }

    // return secondLargest;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));