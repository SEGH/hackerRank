// Given two strings, s and t, and an integer k, determine whether you can turn s into t in k operations

function appendAndDelete(s, t, k) {
    // Find number of common characters in a row
    let commonCharacters = 0;
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s.charAt(i) === t.charAt(i)) {
            commonCharacters++
        } else {
            break;
        }
    }

    // If k is less than the difference between the length of both strings, print No
    let characterDifference = (s.length + t.length) - (2 * commonCharacters);
    if (k < characterDifference) {

        return "No";
    }

    // If the number of different characters between the strings is odd and k is odd OR
    // If the number of different character bewteen the strings is even and k is even, print Yes
    if (k % 2 === characterDifference % 2) {

        return "Yes";
    }

    // Check whether string t can be built from an empty string in leftover moves after deleting all characters
    if (s.length + t.length - k < 0) {

        return "Yes";
    }

    else {

        return "No"
    }

}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));