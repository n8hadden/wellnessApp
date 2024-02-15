const { Query } = require("pg");
const database = require("../utils/database");
const dateHelper = require("../utils/DateHelper");

async function getDailyAffirm(user_id) {
    let query = `SELECT * FROM daily_affirmations WHERE user_id = ${user_id} LIMIT 1`

    return (await database.getData(query))[0];
}

async function setDailyAffirm(user_id, affirm_id) {
    const newDate = dateHelper.getDate24HRAhead(Date.now());

    let query = `
    INSERT INTO daily_affirmations (user_id, aff_id, tmr_timestamp) 
    VALUES (${user_id}, ${affirm_id}, ${newDate})
    ON CONFLICT(user_id)
    DO
    UPDATE SET aff_id = ${affirm_id}, tmr_timestamp = ${newDate};`

    await database.setData(query);
}

async function getAffirm(affirm_id){
    let query = `SELECT * FROM affirmations where aff_id = ${affirm_id};`
    return (await database.getData(query))[0];
}

async function getRandomAffirm(user_id){
    let query = 
    `SELECT b.* FROM users
    a JOIN affirmations b ON 
    b.tag_id = ANY(a.tags) 
    WHERE user_id = ${user_id} 
    ORDER BY RANDOM() 
    LIMIT 1;`

    return (await database.getData(query))[0];
}

module.exports = {
    getDailyAffirm,
    setDailyAffirm,
    getAffirm,
    getRandomAffirm,
}
