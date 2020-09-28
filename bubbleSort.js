// Given array of integers, use bubble sort to sort array in ascending order
// Print three lines:
//"Array is sorted in numSwaps swaps"
//"First Element: firstElement"
// "Last Element: lastElement"

function countSwaps(a) {
    function swap(array, a, b) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    let numSwaps = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
                numSwaps++
            }
        }
    }
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
    return numSwaps;
}

console.log(countSwaps([6, 4, 1]));