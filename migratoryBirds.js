function migratoryBirds(array){
    // Sort array
    let sortedArray = array.sort();
    let mostCommon = 0;
    let mostTimesSeen = 0;

    let currentBird = sortedArray[sortedArray.length - 1];
    let timesSeen = 1;
    for (let i = sortedArray.length - 2; i >= 0; i--){
        // If the next bird is the same we continue to increment timesSeen
        if (sortedArray[i] === currentBird) {
            timesSeen++
        } 
        // If it's different, we check whether the current timesSeen is >= the mostTimesSeen
        else if (timesSeen >= mostTimesSeen) {
            // If so, set the most variables to it
            mostCommon = currentBird;
            mostTimesSeen = timesSeen;
            timesSeen = 0;
        }

        currentBird = sortedArray[i];
    }
    return mostCommon;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));