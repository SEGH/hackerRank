// Given expected and actual return dates for a book, calculate fine
// If a book is returned after the expected return day, but within the calendar month and year: fine = 15 Hackos x (number of days late)
// If the book is returned after the expected return month, but within the calendar year: fine = 500 Hackos x (number of months late)
// If the book is returned after the expected calendar year: fine = 10000 Hackos

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // If the return year is greater than the due year, it's the maximum fine
    if (y1 > y2) {
        return 10000
    }

    // Else if the years are the same, but the return month is greater than the due month, calculate that fine
    else if (y1 === y2 && m1 > m2) {
        return 500 * (m1 - m2);
    }

    // Else if the years and months are the same, but the day is greater calucate find based on days
    else if (y1 === y2 && m1 === m2 && d1 > d2) {
        return 15 * (d1 - d2);
    }

    // Else it's on time or early
    else {
        return 0;
    }
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
console.log(libraryFine(15, 7, 2014, 1, 7, 2015));