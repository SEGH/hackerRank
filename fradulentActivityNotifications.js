// Given a number of trailing days d and an array of total daily expenditures
// Find and print the number of times the client will receive a notification over all n days

function activityNotifications(expenditure, d) {
    let notifications = 0;

    // Loop through expenditure starting at index d and examine the trailing days
    for (let i = d; i < expenditure.length; i++) {
        let trailingDays = expenditure.slice(i - d, i).sort((a, b) => a - b);
        // console.log(trailingDays);

        // Find median
        let median;
        if (d % 2 === 0) {
            median = (trailingDays[d / 2] + trailingDays[(d / 2) - 1]) / 2
        } else {
            let math = Math.floor(d / 2);
            median = trailingDays[math];
        }

        // console.log(median);

        // Compare to current day's expenditure
        if (expenditure[i] >= (2 * median)) {
            notifications++
        }
    }

    return notifications;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
console.log(activityNotifications([10, 20, 30, 40, 50], 3));