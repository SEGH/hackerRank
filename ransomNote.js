// Given an array of strings, magazine, can the array of strings, note, be formed using the strings in magazine?

function checkMagazine(magazine, note) {
    // Find lengths and make sure that the magazine has as many or more words as the note
    if (magazine.length < note.length) {
        return "No"
    }

    // Find how many of each word in the magazine there are
    let magazineMap = {}

    for (let i = 0; i < magazine.length; i++) {
        if (!magazineMap[magazine[i]]) {
            magazineMap[magazine[i]] = 1;
        } else {
            magazineMap[magazine[i]]++
        }
    }

    // Loop through note array and subtract from magazineMap values, if a value is less than zero, return No
    for (let i = 0; i < note.length; i++) {
        if (magazineMap[note[i]]) {
            magazineMap[note[i]]--
        } else {
            return "No"
        }

        if (magazineMap[note[i]] < 0) {
            return "No"
        }
    }

    return "Yes"
}

console.log(checkMagazine(["ive", "got", "a", "lovely", "bunch", "of", "coconuts"], ["ive", "got", "some", "coconuts"]));