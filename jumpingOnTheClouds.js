// Given array of clouds c and k is the length of one jump
// Energy starts at 100 and it takes one unit of energy to make each jump the length of k
// If the value of the index landed on is 1, energy decreases and additional 2 units
// Return an integer representing the energy level after jumping the whole cloud array

const cloudsOne = [0, 0, 1, 0, 0, 1, 1, 0];
const cloudsTwo = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
const cloudsThree = [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1];

function jumpingOnClouds(c, k) {
    let energy = 100;

    // If one jump takes us back to zero, then we can skip this...
    if (k != c.length) {
        // Loop through the clouds based on jump size k until we land back on zero
        let i = 0 + k;
        while (i > 0) {
            // Check what kind of cloud is landed on and reduce energy accordingly
            if (c[i] === 1) {
                energy -= 2;
            }

            energy--
            console.log(`${i}: ${c[i]}, energy: ${energy}`)

            // Increase i using modulo operation to keep i within the length of the array
            i = (i + k) % c.length;
        }
    }

    // Account for landing on zero
    if (c[0] === 1) {
        energy -= 2;
    }
    energy--

    return energy;
}

console.log(jumpingOnClouds(cloudsThree, 19))