// Given n to spend, c for cost of chocolate, and m wrappers needed to get a free chocolate bar
// Retur how any bars of chocolate you can eat after spending all your money and using all your wrappers

function chocolateFeast(n, c, m) {
    // Declare variable for chocolate eaten to bars bought with money
    let totalChocolate = Math.floor(n / c);

    // Declare variable for unused wrappers
    let unusedWrappers = totalChocolate;

    // Loop while unused wrappers >= m
    while (unusedWrappers >= m) {
        // Find the number of wrappers that can be used to buy chocolate
        let usedWrappers = unusedWrappers - unusedWrappers % m;

        // And the amount of chocolate they can buy
        let newChocolate = usedWrappers / m;

        // Add to totalChocolate and then subtract the used wrappers from unused and add the amount of new chocolate to the unused, as it has just been devoured
        totalChocolate += newChocolate;
        unusedWrappers -= usedWrappers;
        unusedWrappers += newChocolate;
    }

    return totalChocolate;
}

console.log(chocolateFeast(15, 3, 2));