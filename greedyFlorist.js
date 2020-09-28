// A florist sets the price of flowers like so:
// (number of previous purchases + 1) * cost
// Therefore, if you are a new customer (only buying one) you get the flower at cost
// If you got a bunch of friends together and had the new customers buy the most expensive flowers, you'd get them at a good deal
// Return the minimum total to purchase all of the flowers

const flowerCosts = [1, 3, 5, 7, 9];

function getMinimumCost(k, c) {
    let total = 0;
    // Sort flower costs to determine which ones you want to get a deal on
    let sortedCosts = c.sort((a, b) => {return b-a});


    let friends = k;
    let purchased = 0;
    for (let i = 0; i < sortedCosts.length; i++) {
        // Starting with the most expensive, have each friend buy one
        let price = (purchased + 1) * sortedCosts[i];
        total += price;
        friends--;

        // Check if everyone has bought one round, then add to purchased and reset friends
        if (friends === 0) {
            purchased++;
            friends = k;
        }
    }
    return total;
}

console.log(getMinimumCost(3, flowerCosts));