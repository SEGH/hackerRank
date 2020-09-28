const array = [1, 2, 1, 3, 2];
const birthday = [3, 2];
function birthdays(s, d, m){
    // variable to track possible ways to add
    let howMany = 0;

    // loop
    for (let i = 0; i < s.length; i++){
        let arrayToCheck = s.slice(i, m + i);

        if (arrayToCheck.reduce((a, b) => a + b) === d) {
            howMany++
        }
    }
    return howMany;
}

console.log(birthdays(array, birthday[0], birthday[1]));