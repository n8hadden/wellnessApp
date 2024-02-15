const models = require("../models/affirmModels");
const dateHelper = require("../utils/DateHelper");

async function getAffirmation(req, res) {
    const {user_id} = req.body;
     try{
        const afferm = await models.getDailyAffirm(user_id);

        if(afferm == undefined){
            models.setDailyAffirm(user_id, 1);
            afferm = await models.getDailyAffirm(user_id);
        }

        if(dateHelper.isPastDay(date.Now(), afferm.tmr_timestamp)){

        }

        console.log(afferm);
        res.status(200);
     }
     catch(e){

     }
}

module.exports = {
    getAffirmation
}