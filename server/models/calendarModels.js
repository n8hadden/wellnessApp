const database = require("../utils/database");

async function getDays(user_id) {
    const query = `SELECT * FROM calendar_days
    WHERE user_id = ${user_id}`;

    return await database.getData(query);
}

async function addDay(data) {
    const query = `INSERT INTO calendar_days 
    (day, user_id, mood_id, note)
    VALUES (${data.day}, ${data.user_id}, ${data.mood_id}, ${data.note})`;

    return await database.setData(query);
}

module.exports = {
    getDays,
    addDay,
}