const records = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function numberOfRecords(scores) {

    let highestRecord = scores[0];
    let highestBroken = 0;
    let lowestRecord = scores[0];
    let lowestBroken = 0;

    for (let i = 1; i < records.length; i++) {
        if (scores[i] > highestRecord) {
            highestRecord = scores[i];
            highestBroken++
        }

        if (scores[i] < lowestRecord) {
            lowestRecord = scores[i];
            lowestBroken++
        }
    }
    console.log(`${highestBroken} ${lowestBroken}`)
}

numberOfRecords(records);