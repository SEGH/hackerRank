// Given the arrival time of each student and a number of students the professor must have for class, determine if class is cancelled

function angryProfessor(k, a) {
    // Find how many students arrived on time and compare to k
    let onTime = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTime++
        }
    }

    if (onTime >= k) {
        return "NO";
    } else {
        return "YES";
    }
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
