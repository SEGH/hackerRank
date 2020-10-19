// Given an unordered array find the min number of swaps required to sort the array in ascending order
function minimumSwaps(arr){

    // Function to swap
    function swap(a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    // Count swaps
    let swaps = 0;

    // Loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            swap(i, arr.indexOf(i + 1))
            swaps++
        }
    }

    return swaps

}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
