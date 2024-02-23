// Importing the database utility module
const database = require("../utils/database");

// Defining an asynchronous function to retrieve mood information based on a given mood object
async function getMoodInfo(mood) {
    // Constructing a SQL query to select mood information based on mood type and score
    let query = `SELECT * FROM moods
    WHERE mood_type LIKE '${mood.type}' AND mood_score <= ${mood.score} LIMIT 1`;

    // Executing the SQL query using the database utility function and returning the result
    return await database.getData(query);
}

async function getMoodId(mood){
    let query = `SELECT * FROM moods WHERE mood_name LIKE ${mood}`;

    return (await database.getData(query))[0].mood_id;
}

// Exporting the getMoodInfo function so it can be used in other modules
module.exports = {
    getMoodInfo,
    getMoodId
}
