const database = require("../utils/database");

async function getMoodInfo(mood) {
    let query = `Select * FROM moods
    WHERE mood_type like ${mood.type} AND mood_score <= ${mood.score} LIMIT 1`;

    return await database.getData(query);
}