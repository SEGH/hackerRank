// Given an array of integers, find the minimum number of deletions so that all the elements are equal

function equalizeArray(arr) {
    // // Find element that repeats the most
    // let elementHash = {};

    // for (let i = 0; i < arr.length; i++) {
    //     if (!elementHash[arr[i]]) {
    //         elementHash[arr[i]] = 1;
    //     } else {
    //         elementHash[arr[i]]++
    //     }
    // }
    
    // let mostRepeats = Object.keys(elementHash).reduce((a, b) => { 
    //     if (elementHash[a] >= elementHash[b]) {
    //         return elementHash[a];
    //     } else {
    //         return elementHash[b];
    //     }
    // })

    // // Return the array length minus the element most repeated
    // return arr.length - mostRepeats;

        // Find element that repeats the most
        arr.sort();

        let currentElement = 0;
        let timesRepeated = 0;
        let mostRepeats = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != currentElement) {
                currentElement = arr[i];
                timesRepeated = 1;
            } else {
                timesRepeated++
            }

            if (timesRepeated > mostRepeats) {
                mostRepeats = timesRepeated;
            }
        }
    
        // Return the array length minus the element most repeated
        return arr.length - mostRepeats;

}

console.log(equalizeArray([1, 2, 2, 3]));