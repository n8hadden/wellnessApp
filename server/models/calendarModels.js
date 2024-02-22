const database = require("../utils/database");

async function getDays(user_id) {
    let query = `SELECT * FROM calendar_days
    WHERE user_id = ${user_id}`;

    return await database.getData(query);

}