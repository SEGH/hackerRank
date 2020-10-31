// There is a sale on video games: the first game you buy will be sold at p dollars, but evey subsequent game will be sold at d dollars less than the cost of the previous game you bought, continuing until the cost becomes <= m dollars, when every game you buy will cost m dollars
// You have s dollars; how many games can you buy?

function howManyGames(p, d, m, s) {
    // Set s to variable wallet
    let wallet = s;
    // Track games bought with variable
    let gamesBought = 0;
    // Track current price
    let currentPrice = p;
    // Loop while you have money to make a purchase  use conditional statements to track games bought and update wallet
    while (wallet - currentPrice >= 0) {
        console.log(currentPrice);
        if (gamesBought === 0) {
            wallet -= currentPrice;
            
            if (currentPrice - d <= m) {
                currentPrice = m;
            } else {
                currentPrice -= d;
            }

            gamesBought++
        } else if (currentPrice > m) {
            wallet -= currentPrice;

            if (currentPrice - d <= m) {
                currentPrice = m;
            } else {
                currentPrice -= d;
            }

            gamesBought++
        } else {
            wallet -= m;
            currentPrice = m;
            gamesBought++
        }

    }
    // Return games bought
    return gamesBought;
}

// console.log(howManyGames(100, 99, 81, 180));
console.log(howManyGames(20, 3, 6, 80));