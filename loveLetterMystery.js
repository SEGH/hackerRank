// Given a string whose characters can be manipulated by reducing the value of one in one operation
// How many operations are required to convert a string into a palindrome?

function theLoveLetterMystery(s) {
    // Variables for first half and last half
    let firstHalf = s.substring(0, s.length / 2);
    let lastHalf = s.substring(s.length / 2 + 1);
    if (s.length % 2 === 0) {
        lastHalf = s.substring(s.length / 2);
    }

    // Reverse lastHalf
    let reversedLast = lastHalf[lastHalf.length - 1];
    for (let i = lastHalf.length - 2; i >= 0; i--) {
        reversedLast = reversedLast.concat(lastHalf[i]);
    }

    // Check if already palindrome
    if (firstHalf === reversedLast) {
        return 0;
    }

    // Variable for operation count
    let operationCount = 0;
    // Loop through to check whether indices match and calculate distance from character it needs to be, keeping track of operation count
    for (let i = 0; i < firstHalf.length; i++) {
        const firstHalfCharacter = firstHalf.charCodeAt(i);
        const lastHalfCharacter = reversedLast.charCodeAt(i);

        if (firstHalfCharacter !== lastHalfCharacter) {
            operationCount += Math.abs(firstHalfCharacter - lastHalfCharacter);
        }
    }

    return operationCount;
}

// console.log(theLoveLetterMystery("abcba"));
// console.log(theLoveLetterMystery("abcd"));
console.log(theLoveLetterMystery("bafhaef"));