// Given a sequence of n integers where 1 <= p(x) <= n and 1<= x <= n
// Find and print integer y where p(p(y)) === x

function permutationEquation(p) {
    let array = [];
    // Starting at one, iterate through the integers in p from lowest to highest
    // Push the index of the integer that is the index of y
    for (let y = 1; y <= p.length; y++) {
        // Use indexOf and add one to account for 0 indexing vs 1 indexing
        array.push(p.indexOf(p.indexOf(y)+1)+1)
        
    }
    return array;


}

console.log(permutationEquation([4, 3, 5, 1, 2]));