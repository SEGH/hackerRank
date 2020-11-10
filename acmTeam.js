// Given a number of attendees and a bit string of their knowledge of a number of topics
// Return an array with the maximum number of topics any 2-person team can know and the number of teams that can be formed that know that number of topics

function acmTeam(topic) {
    // Declare most topics known so far
    let mostTopics = 0;

    // Variable for how many teams know the topics
    let topTeams = 0;

    // Loop through and check if team knows that many topics
    for (let i = 0; i < topic.length - 1; i++) {

        for (let j = i + 1; j < topic.length; j++) {

            let topicsKnown = 0;

            for (let t = 0; t < topic[i].length; t++) {
                if (topic[i][t] == 1 || topic[j][t] == 1) {
                    topicsKnown++
                }
            }

            if (topicsKnown > mostTopics) {
                mostTopics = topicsKnown;
                topTeams = 1;
            } else if (topicsKnown === mostTopics) {
                topTeams++
            }
        }
    }

    return ([mostTopics, topTeams]);
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]));