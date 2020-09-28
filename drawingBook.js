function pageCount(n, p){
    let turnsFromFront = Math.floor(p / 2);
    let turnsFromBack = Math.floor(n / 2) - Math.floor(p / 2);
    
    if (turnsFromBack > turnsFromFront) {
        return turnsFromFront
    } else {
        return turnsFromBack
    }
}

console.log(pageCount(5, 3));