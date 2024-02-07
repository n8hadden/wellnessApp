// import the model from models
const model = require('../models/tagModels');

// function that gets a user and a tag and adds it to that user in the database
async function addTag(req, res) {
    const { userId, tagId } = req.body;

    try {
        await model.addTag(userId, tagId);
        res.status(201).json({"message": "The tag was added successfully."});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"});
    }
}

// function that gets a user and a tag and removes it from that user in the database
async function removeTag(req, res) {
    const { userId, tagId } = req.body;

    try {
        await model.removeTag(userId, tagId);
        res.status(201).json({"message": "The tag was removed successfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// function that gets a userId and returns all the tags associated with the user
async function getTags(req, res) {
    const userId = req.body;

    console.log(userId);

    try {
        const tags  = await model.getTags(userId);
        console.log(tags);
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