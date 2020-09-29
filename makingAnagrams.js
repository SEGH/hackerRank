// Given two strings determine the min num of character deletions required to make them anagrams

function makeAnagram(a, b) {
    let alteredA = {};
    let alteredB = {};

    // Count number of each character in string a that is also in string b, record in alteredA object
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            if (!alteredA[a[i]]) {
                alteredA[a[i]] = 1;
            } else {
                alteredA[a[i]]++;
            }
        }
    }

    // Count number of each character in string b that is also in string a, record in alteredB object
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            if (!alteredB[b[i]]) {
                alteredB[b[i]] = 1;
            } else {
                alteredB[b[i]]++;
            }
        }
    }

    // Variable to track the number of characters that are needed to make the anagram
    let charactersNeeded = 0;

    for (const value in alteredB) {
        // If there are more of one character in A than B, count the ones in B and multiply by two (since they are also in A)
        if (alteredA[value] > alteredB[value]) {
            charactersNeeded += alteredB[value] * 2;
        }
        // If there are equal, you can count the total of both
        else if (alteredA[value] === alteredB[value]) {
            charactersNeeded += alteredA[value] + alteredB[value];
        }
        // If more in B than A, count ones in A and multiply by two
        else if (alteredB[value] > alteredA[value]) {
            charactersNeeded += alteredA[value] * 2;
        }
    }

    // Find deletions needed by subtracting the total lengths of both strings minus the charactersNeeded
    let deletions = a.length + b.length - charactersNeeded;

    return deletions;
}

console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"));
console.log(makeAnagram("abc", "cde"));