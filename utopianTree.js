// Given a tree that has 2 growth cycles per year where in one cycle its height doubles and the other it grows one meter,
// Find its height after n growth cycles

function utopianTree(n) {
    let height = 1;
    // Even cycle numbers will double the height and odd will add one meter
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            height = height * 2
        } else {
            height += 1;
        }
        console.log(height);
    }

    return height;
}

console.log(utopianTree(5));