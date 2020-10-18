// Given an array of integers representing calories in each cupcake, print how many miles Marc must walk to burn the calories
// To be the min number of calories burned, he should eat the highest calorie cupcakes first
// 2 to the power of (number of cupcakes eaten before current cupcake, aka the current index) times the calories

function marcsCakewalk(calorie) {
    // Sort the array so that Marc will eat the highest calorie cupcakes first
    calorie.sort((a, b) => {
        return b - a
    });

    // Set miles to zero and add to it while looping through array
    let miles = 0;
    for (let i = 0; i < calorie.length; i++) {
        miles += (Math.pow(2, i) * calorie[i])
    }

    return miles;
}

console.log(marcsCakewalk([7, 4, 9, 6]));