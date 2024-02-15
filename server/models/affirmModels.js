const { Query } = require("pg");
const database = require("../utils/database");
const dateHelper = require("../utils/DateHelper");

async function getDailyAffirm(user_id) {
    let query = `SELECT * FROM daily_affirmations WHERE user_id = ${user_id} LIMIT 1`

    return (await database.getData(query))[0];
}

async function setDailyAffirm(user_id, afferm_id) {
    const newDate = dateHelper.getDate24HRAhead(date.Now());

    let query = `
    INSERT INTO daily_affirmations (user_id, aff_id, tmr_timestamp) 
    VALUES (${user_id}, ${afferm_id}, ${newDate})
    ON CONFLICT(user_id)
    DO
    UPDATE SET aff_id = ${afferm_id}, tmr_timestamp = ${newDate};`

    await database.setData(query);
}

async function getAffermation(afferm_id){
    let query = `SELECT * FROM affermations where aff_id = ${afferm_id};`
    return (await database.getData(query))[0];
}

async function getRandomAffermation(){

}

module.exports = {
    getDailyAffirm,
    setDailyAffirm
}