const models = require("../models/affirmModels");
const dateHelper = require("../utils/DateHelper");

async function getAffirmation(req, res) {
    const {user_id} = req.body;
     try{
        let afferm = await models.getDailyAffirm(user_id);

        if(afferm == undefined || afferm.tmr_timestamp == null){
            models.setDailyAffirm(user_id, 1);
            afferm = await models.getDailyAffirm(user_id);
        }

        if(dateHelper.isPastDay(Date.now(), afferm.tmr_timestamp)){
            const newAfferm = await models.getRandomAffermation(user_id);
            models.setDailyAffirm(user_id, newAfferm.aff_id);
            afferm = await models.getDailyAffirm(user_id);
        }

        const affermText = (await models.getAffermation(afferm.aff_id)).affirmation;
        res.status(200).json({
            affermation: affermText
        })
     }
     catch(e){
        console.log(e);
     }
}

module.exports = {
    getAffirmation
}