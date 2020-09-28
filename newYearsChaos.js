function minimumBribes(q) {
    // Function to swap
    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    // Count bribes
    let bribes = 0;

    // Loop backwards through array
    for (let i = q.length - 1; i > 0; i--) {
        // Check if number is in right spot, if so, move on
        if (q[i] !== (i + 1)) {
            // Check if number in front should be in its spot
            if (q[i - 1] >= 0 && q[i - 1] === (i + 1)) {
                swap(q, i - 1, i);
                console.log(q[i]);
                bribes++
            } 
            // Else check if number two places ahead should be in its spot
            else if (q[i - 1] >= 0 && q[i - 2] === i + 1 ) {
                swap(q, i - 2, i - 1);
                swap(q, i - 1, i);
                console.log(q[i]);
                bribes += 2
            }
        }
    }
    console.log(q);
    return bribes;
}

console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));