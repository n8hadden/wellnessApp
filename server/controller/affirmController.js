// Importing the affirmModels module which contains functions related to affirmations
const models = require("../models/affirmModels");

// Importing the DateHelper utility module
const dateHelper = require("../utils/DateHelper");

// Function to handle retrieving daily affirmations for a specific user
async function getAffirmation(req, res) {
    // Extracting user_id from the request body
    const { user_id } = req.body;
    
    try {
        // Retrieving daily affirmation information for the specified user
        let affirm = await models.getDailyAffirm(user_id);

        // Checking if there is no daily affirmation set or if it's not set for tomorrow
        if (affirm == undefined || affirm.tmr_timestamp == null) {
            // If not set or undefined, set a new daily affirmation for the user
            models.setDailyAffirm(user_id, 1);
            // Retrieving the newly set daily affirmation for the user
            affirm = await models.getDailyAffirm(user_id);
        }

        // Checking if the timestamp for tomorrow's affirmation is in the past
        if (dateHelper.isPastDay(Date.now(), affirm.tmr_timestamp)) {
            // If it's in the past, fetch a new random affirmation for the user
            const newAffirm = await models.getRandomAffirmation(user_id);
            // Set the new daily affirmation for the user
            models.setDailyAffirm(user_id, newAffirm.aff_id);
            // Retrieving the newly set daily affirmation for the user
            affirm = await models.getDailyAffirm(user_id);
        }

        // Retrieving the text of the daily affirmation
        const affirmText = (await models.getAffirmation(affirm.aff_id)).affirmation;

        // Sending the daily affirmation text as a JSON response
        res.status(200).json({
            affirmation: affirmText
        });
    }
    catch (e) {
        // Logging any errors that occur
        console.log(e);
    }
}

// Exporting the getAffirmation function to be used in other modules
module.exports = {
    getAffirmation
}
