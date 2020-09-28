const budget = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

// // function to find the combination of one of each electronic that will be the most expensive total within the budget

function getMoneySpent(keyboards, drives, b){
    let result = -1;

    // Looping through both arrays
    for (let i = 0; i < keyboards.length; i++){
        for (let j = 0; j < drives.length; j++){
            let price = keyboards[i] + drives[j];

            if (price <= b && price > result) {
                result = price;
            }
        }
    }

    return result;
}

console.log(getMoneySpent(keyboards, drives, budget));