function bonAppetit(bill, k, b){
    bill.splice(k, 1);

    let totalToSplit = 0;

    for (let i = 0; i < bill.length; i++){
        totalToSplit += bill[i];
    }

    let annaPays = totalToSplit / 2
    if (b === annaPays){
        return "Bon Appetit";
    } else {
        return b - annaPays;
    }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));