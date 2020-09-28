function russianProgrammerDay(year) {
    if (year > 1918){
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            return "12.09." + year;
        } else {
            return "13.09." + year;
        }
    } else if (year < 1918){
        if (year % 4 === 0) {
            return "12.09." + year;
        } else {
            return "13.09." + year;
        }
    } else if (year === 1918){
        return "04.10.1918";
    }
}

console.log(russianProgrammerDay(1700));
console.log(russianProgrammerDay(2017));