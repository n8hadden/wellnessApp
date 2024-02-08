// Importing the database utility module
const database = require("../utils/database");

// Function to add a session to the database
async function addSession(userId, sessionId){
    // Constructing the SQL query to insert or update session information
    let query = `INSERT INTO sessions (user_id, session_key) 
    VALUES ('${userId}', '${sessionId}') 
    ON CONFLICT(user_id) 
    DO 
    UPDATE SET session_key = '${sessionId}'`;

    // Executing the SQL query using the database utility function and waiting for the result
    await database.setData(query);
}

// Exporting the addSession function to be used by other modules
module.exports = {
    addSession
}