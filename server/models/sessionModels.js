const database = require("../utils/database");

async function addSession(userId, sessionId){
    let query = `INSERT INTO sessions (user_id, session_key) 
    VALUES ('${userId}', '${sessionId}')
    ON CONFLICT(user_id)
    DO
    UPDATE SET session_key = '${sessionId}'`

    await database.setData(query);
}

module.exports = {
    addSession
}