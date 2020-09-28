// Determine which cat will reach the mouse first
// Assuming mouse does not move and cats travel at equal speed
// If cats reach mouse at same time, mouse wins



function catAndMouse(x, y, z) {
    // Set variables for the absolute difference between mouse and both cats
    let distanceCatA = Math.abs(z - x);
    let distanceCatB = Math.abs(z - y);

    // Check how the distance compares and return strings accordingly
    if (distanceCatA === distanceCatB) {
        return "Mouse C";
    } else if (distanceCatA < distanceCatB) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}

console.log(catAndMouse(1, 2, 3));