// Given an ad that begins with 5 recipients and each day after half of the new recipients like and share the add with 3 friends,
// How many likes does an add get after n days?

function viralAdvertising(n) {
    // Track likes
    let totalLikes = 0;
    // Loop through number of days
    let recipients = 5;

    for (let i = 1; i <= n; i++) {
        totalLikes += Math.floor(recipients / 2);
        recipients = Math.floor(recipients / 2) * 3;
    }

    return totalLikes;
}

console.log(viralAdvertising(5));