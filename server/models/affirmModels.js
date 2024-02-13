const { Query } = require("pg");
const database = require("../utils/database");

async function getAffirm(user_id) {
    let query = `SELECT * FROM daily_affirmations WHERE user_id = ${user_id} LIMIT 1`

    return (await database.getData(Query))[0];
}

async function setDailyAffirm() {
     
}