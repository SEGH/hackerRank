// Given the number of needed black gifts, the number of needed white gifts and their costs
// And that Taum is able to convert one gift to the other for a fee
// Find out the least amount Taum needs to spend to purchase the gifts

function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);
    
    let bestDeal;
    // Compare the cost of both types of gifts
    // If one type's cost plus the conversion fee is less than the other type's cost, Taum should convert
    if (bc + z < wc) {
        // Calculate the total costs
        bestDeal = (b * bc) + (w * (bc + z));
    } else if (wc + z < bc) {
        bestDeal = (w * wc) + (b * (wc + z));
    } else {
        // Otherwise, Taum should just buy the gifts
        bestDeal = (b * bc) + (w * wc);
    }
        
    return bestDeal
    
}

console.log(taumBday(3, 5, 3, 4, 1));