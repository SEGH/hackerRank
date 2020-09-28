// Lena can't lose more than k number of important contests (denoted by 1)
// But if she loses a contest, she gets more luck!
// Return an integer representing the maximum luck balance achievable

const contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]];

function luckBalance(k, contests) {
    //Set luck balance
    let luck = 0;
    let importantLuck = [];
    // Find luckiest important contests to further investigate, simply add unimportant luck
    for (let i = 0; i < contests.length; i++) {
        if (contests[i][1] === 1) {
            importantLuck.push(contests[i][0]);
        } else {
            luck += contests[i][0];
        }
    }

    // Sort luck with highest first
    importantLuck.sort((a, b) => {return b-a});

    let importantLosses = 1;
    // Loop through importantLuck, adding number of acceptable misses
    for (let i = 0; i < importantLuck.length ; i++) {

        if (importantLosses <= k) {
            luck += importantLuck[i];
            importantLosses++;
        } else {
            luck -= importantLuck[i];
        }

    }    

    return luck;
}

console.log(luckBalance(3, contests));