// import the model from models
const model = require('../models/tagModels');

// function that gets a user and some tags and adds it to that user in the database
async function addTags(req, res) {
    const { user, tagIds } = req.body;

    try {
        await model.addTags(user, tagIds);
        res.status(201);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"});
    }
}

// function that gets a user and some tags and removes it from that user in the database
async function removeTags(req, res) {
    const { user, tagIds } = req.body;

    try {
        await model.removeTags(user, tagIds);
        res.status(201);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// function that gets a userId and returns all the tags associated with the user
async function getTags(req, res) {
    const { userId } = req.body;

    try {
        const { tags } = await model.getTags(userId);
        res.status(201).json({ tags });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// export the methods to be used elsewhere
module.exports = {
    addTags,
    removeTags, 
    getTags,
}