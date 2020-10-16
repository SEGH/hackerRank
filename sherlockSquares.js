// Given a range of integers, return how many are square integers

function squares(a, b) {
    // // Set array to push square integers
    // let result = [];

    // // While loop currentNumber is less than b
    // let currentNumber = a;

    // while (currentNumber <= b) {

    //     // Check if that number is a square integer
    //     if (Math.sqrt(currentNumber) % 1 === 0) {
    //         result.push(currentNumber);
    //     }

    //     currentNumber++
    // }
    
    // return result.length;

    // Find the first and last square integers in the range
    let startSq = Math.ceil(Math.sqrt(a));
    let endSq = Math.floor(Math.sqrt(b));

    // Result is the number of integers in the range of start to end
    return endSq - startSq + 1;
}

console.log(squares(20, 55))