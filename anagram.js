// Given a string, split it into two contiguous substrings, then determine the min number of characters to change to make the two substrings into anagrams of one another

function anagrams(s) {
    // If the string isn't even, return -1 because substrings won't be the same length
    if (s.length % 2 !== 0) {
        return -1;
    }

    // Set substrings to variables
    let stringA = s.substring(0, s.length / 2);
    let stringB = s.substring(s.length / 2, s.length);

    // Variable to track changes
    let minChanges = 0;

    // Loop through the length of the strings
    for (let i = 0; i < stringA.length; i++) {
        // If B includes the character at the index of A, replace the character in B to space to indicate it's been used
        if (stringB.includes(stringA[i])) {
            stringB = stringB.replace(stringA[i], "");
        }
        // Else add to changes
        else {
            minChanges++
        }
    }

    return minChanges;

}

// console.log(anagrams("aaabbb"))
// console.log(anagrams("ab"))
// console.log(anagrams("abc"))
// console.log(anagrams("mnop"))
// console.log(anagrams("xyyx"))
// console.log(anagrams("xaxbbbxx"))
console.log(anagrams("fdhlvosfpafhalll"))