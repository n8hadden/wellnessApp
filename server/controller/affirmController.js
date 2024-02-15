const models = require("../models/affirmModels");
const dateHelper = require("../utils/DateHelper");

async function getAffirmation(req, res) {
    const {user_id} = req.body;
     try{
        const affirm = await models.getDailyAffirm(user_id);

        if(affirm == undefined){
            models.setDailyAffirm(user_id, 1);
            affirm = await models.getDailyAffirm(user_id);
        }

        if(dateHelper.isPastDay(date.Now(), affirm.tmr_timestamp)){

        }

        console.log(affirm);
        res.status(200);
     }
     catch(e){

     }
}

module.exports = {
    getAffirmation
}