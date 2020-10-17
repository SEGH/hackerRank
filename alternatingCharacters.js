// Given a string containing A and B characters, find the min number of deletions so that there are no matching adjacent characters

function alternatingCharacters(s) {
    // Track previous character and deletions with variables
    let previousCharacter = s[0];
    let deletions = 0;

    // Loop through string to check if characters need to be deleted
    for (let i = 1; i < s.length; i++) {
        if (s[i] === previousCharacter) {
            deletions++
        } else {
            previousCharacter = s[i];
        }
    }

    return deletions;
}

console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("BABABA"));
console.log(alternatingCharacters("AAABBB"));
