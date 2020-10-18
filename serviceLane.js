// Given an array of widths and cases specifying a range of indices, determine the smallest width from each case

function serviceLane(widthArray, cases) {
    let results = []
    // Loop through all cases
    for (let i = 0; i < cases.length; i++) {
        // Set first index in cases to variable
        let smallestWidth = widthArray[cases[i][0]];
        
        // Loop through segement of n specified by indices listed in case
        for (let j = cases[i][0]; j <= cases[i][1]; j++) {
            if (widthArray[j] < smallestWidth) {
                smallestWidth = widthArray[j]
            }
        }

        results.push(smallestWidth);
    }

    return results;
}

console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]))