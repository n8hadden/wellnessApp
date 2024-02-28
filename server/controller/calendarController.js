// Importing the calendarModels module which contains functions related to calendar data
const model = require("../models/calendarModels");

// Function to handle retrieving days from the calendar for a specific user
async function getDays(req, res) {
    // Extracting user_id from the request body
    const { user_id } = req.body;

    try {
        // Calling the getDays function from the calendarModels module to retrieve mood data for the specified user
        const { moodData } = await model.getDays(user_id);
        // Sending the retrieved mood data as a JSON response
        res.status(201).json({ moodData });
    } catch (err) {
        // Handling errors: logging the error and sending an internal server error response
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Function to handle adding a day to the calendar
async function addDay(req, res) {
    // Extracting data from the request body

    console.log(req.body);
    res.json({message: "testing"}); 
    /*
    const { day, user_id, mood_id, note } = req.body;

    try {
        // Calling the addDay function from the calendarModels module to add the day to the calendar
        await model.addDay(day, user_id, mood_id, note);
        // Sending a success message as a JSON response
        res.status(201).json({ message: "Day added to database" });
    } catch (err) {
        // Handling errors: logging the error and sending an internal server error response
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
    */
}

// Exporting the functions to be used in other modules
module.exports = {
    getDays,
    addDay,
}