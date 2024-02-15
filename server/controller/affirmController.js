const models = require("../models/affirmModels");
const dateHelper = require("../utils/DateHelper");

async function getAffirmation(req, res) {
    const {user_id} = req.body;
     try{
        let affirm = await models.getDailyAffirm(user_id);

        if(affirm == undefined || affirm.tmr_timestamp == null){
            models.setDailyAffirm(user_id, 1);
            affirm = await models.getDailyAffirm(user_id);
        }

        if(dateHelper.isPastDay(Date.now(), affirm.tmr_timestamp)){
            const newAffirm = await models.getRandomAffirmation(user_id);
            models.setDailyAffirm(user_id, newAffirm.aff_id);
            affirm = await models.getDailyAffirm(user_id);
        }

        const affirmText = (await models.getAffirmation(affirm.aff_id)).affirmation;
        res.status(200).json({
            affirmation: affirmText
        })
     }
     catch(e){
        console.log(e);
     }
}

module.exports = {
    getAffirmation
}
