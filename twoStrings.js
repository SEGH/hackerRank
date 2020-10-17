// Given two strings, determine if they share a common substring, which may be as small as one character

function twoStrings(s1, s2) {
    // Map characters in s1 to object
    let stringOneMap = {}

    for (let i = 0; i < s1.length; i++) {
        if (stringOneMap[s1[i]]) {
            stringOneMap[s1[i]]++
        } else {
            stringOneMap[s1[i]] = 1;
        }
    }

    // Loop through s2 and if there's a match, return Yes
    for (let i = 0; i < s2.length; i++) {
        if (stringOneMap[s2[i]]) {
            return "YES"
        }
    }

    return "NO"
}

console.log(twoStrings("hi", "world"));