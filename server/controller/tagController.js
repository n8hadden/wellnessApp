// import the model from models
const model = require('../models/tagModels');

// function that gets a user and a tag and adds it to that user in the database
async function addtag(req, res) {
    const { userId, tagId } = req.body;

    try {
        await model.addTags(userId, tagId);
        res.status(201);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"});
    }
}

// function that gets a user and a tag and removes it from that user in the database
async function removeTag(req, res) {
    const { userId, tagId } = req.body;

    try {
        await model.removeTags(userId, tagId);
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
    addTag,
    removeTag, 
    getTags,
}