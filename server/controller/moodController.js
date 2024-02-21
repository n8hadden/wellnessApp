const model = require("../models/moodModels");

async function getMoodInfo(req, res) {
    const { data } = req.body;

    // Code to determine the highest rated score
    /*
    let moodScores = [];

    for(var i=0; i<=data.length; i++) {
        moodScores.push(data[1]);
    }

    */

    const mood = {};

    try {
        const moodInfo = await model.getMoodInfo(mood);
        res.status(201).json({ moodInfo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}