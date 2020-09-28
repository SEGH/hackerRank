// How many doses of magic potion must a character take to clear all the hurdles? Return 0 if character can already clear all
// One dose increases jump by one height unit

function hurdleRace(k, height) {
    // Set doses variables
    let doses = 0;

    // check difference of each hurdle in height array against k
    for (let i = 0; i < height.length; i++) {
        let clearance = k - height[i];

        // If clearance is less than 0, you need magic
        if (clearance < 0 && Math.abs(clearance) > doses) {
            doses = Math.abs(clearance);
        }
    }

    return doses;
}

console.log(hurdleRace(1, [1, 2, 3, 3, 2]));