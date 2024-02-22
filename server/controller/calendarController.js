const model = require("../models/calendarModels");

async function getDays(req, res) {
    const { user_id } = req.body;

    try {
        const { moodData } = await model.getDays(user_id);
        res.status(201).json({ moodData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

async function addDay(req, res) {
    const { data } = req.body;

    try {
        await model.addDay(data);
        res.status(201).json({ message: "Day added to database" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    getDays,
    addDay,
}