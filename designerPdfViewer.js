// Using given letter heights, determine the area in mm squared of the rectangle highlighting them, assuming all letters are 1mm wide
const letterHeights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

function designerPdfViewer(h, word) {
    // Set alphabet array to use for finding letter index
    const alphArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Find max height in word
    let maxHeight = 0;

    // Match index number to find letter height in array h
    for (let i = 0; i < word.length; i++) {
        let thisHeight = h[alphArray.indexOf(word[i])];
        // console.log(thisHeight);

        if (thisHeight > maxHeight) {
            maxHeight = thisHeight;
        }
    }

    // console.log(maxHeight);
    // Return word character length x highest word height
    return word.length * maxHeight;
}

console.log(designerPdfViewer(letterHeights, "abc"));