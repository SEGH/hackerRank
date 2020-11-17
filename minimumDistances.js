// Given an array of numbers, find the minimum distance between to pairs of numbers

function minimumDistances(a) {
    // Loop and check for pairs, record distance if smaller
    let minDist = a.length;
    for (let i = 0; i < a.length - 1; i++) {
        let currentValue = a[i];
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                if (j - i < minDist) {
                    minDist = j - i;
                }
            }
        }
    }

    // If the minDist is still the length of the array, there weren't any matches
    if (minDist === a.length) {
        return -1
    }

    return minDist;
}

console.log(minimumDistances([7, 1, 3, 4, 7]));