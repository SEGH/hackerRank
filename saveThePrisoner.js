// given a starting point and a number of candies, determine the chair number that will receive the last candy
// n: number of prisoners, m: number of candies, s: starting point

function saveThePrisoner(n, m, s) {
    // Add the starting point to the number of candies, accounting for 1 indexing
    // (Are we adding candies? Maybe, but it doesn't matter if the the beginning chairs got candy at the beginning or not, we want to find who gets the last candy)
    // Find the remainder of candies after evenly dividing-- that's the chair number who gets the last candy
    // If the remainder is zero, that means all the candies evenly divide, so the last chair (the number of prisoners) gets the last candy
    return (m + s - 1) % n || n;
    
}

console.log(saveThePrisoner(715950220, 876882456, 195550680));
console.log(saveThePrisoner(7, 19, 2));