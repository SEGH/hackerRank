// For each given array, perform a number of right circular rotations and return the value of the element at a given index
const array = [3, 4, 5];

function circularArrayRotation(a, k, queries) {

    // For the number of rotations, pop off the end and stick it on the front
    for (let i = 0; i < k; i++) {
        a.unshift(a.pop());
    }

    let result = [];
    // Push the values at indices in queries
    for (let i = 0; i < queries.length; i++) {
        result.push(a[queries[i]]);
    }

    return result;

}

console.log(circularArrayRotation(array, 2, [1, 2]));