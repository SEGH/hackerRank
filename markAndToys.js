// Given a list of prices and a budget, what is the maximum number of toys Mark can buy?

const toyPrices = [1, 12, 5, 111, 200, 1000, 10];

function maximumToys(prices, k) {
    // Bubble Sort -- fails larger arrays
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = 0; j < prices.length; j++) {
    //         if (prices[j] > prices[j + 1]){
    //             let temp = prices[j];
    //             prices[j] = prices[j + 1];
    //             prices[j + 1] = temp;
    //         }
    //     }
    // }

    // Quick Sort -- only passing a few... errors in code?
    // function partition(array, left, right) {
    //     // Find mid element
    //     let pivot = array[Math.floor((left + right) / 2)];
    //     let i = left;
    //     let j = right;

    //     while ( i <= j) {
    //         while (array[i] < pivot) {
    //             i++
    //         }
    //         while (array[j] > pivot) {
    //             j--;
    //         }

    //         if (i <= j) {
    //             let temp = array[i];
    //             array[i] = array[j];
    //             array[j] = temp;
    //             i++;
    //             j--;
    //         }
    //     }
    //     return i;
    // }

    // function quickSort(array, left, right) {
    //     let index;
    //     if (array.length > 1) {
    //         index = partition(array, left, right);
    //         if (left < index - 1) {
    //             quickSort(array, left, index - 1);
    //         }
    //         if (index < right) {
    //             quickSort(array, index, right);
    //         }
    //     }
    //     return array;
    // }
    // quickSort(prices, prices[0], prices[prices.length - 1]);

    prices.sort((a, b) => {return a-b});

    // Buy as many of them cheap toys as you can
    let totalCost = 0;
    let numberOfToys = 0;

    for (let i = 0; i < prices.length; i++) {
        if (totalCost + prices[i] < k) {
            totalCost += prices[i];
            numberOfToys++;
        }
    }

    return numberOfToys;
}

console.log(maximumToys(toyPrices, 50))