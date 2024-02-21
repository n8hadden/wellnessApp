const database = require("../utils/database");

async function getMoodInfo(mood) {
    let query = `Select * FROM moods
    WHERE mood_type like ${mood.type} AND mood_score == ${mood.score}`;

    return await database.getData(query);
}