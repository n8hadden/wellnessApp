// import the model from models
const model = require('../models/tagModels');

async function getTagNameById(req, res) {
    const { id } = req.body;

    try {
        const name = await model.getTagNameById(id);
        res.status(201).json({ name });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getTagIdByTagName(req, res) {
    const { name } = req.body;

    try {
        const id = await model.getTagIdByTagName(name);
        res.status(201).json({ id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getAllTags(req, res) {
    
    try {
        const tags = await model.getAllTags();
        res.status(201).json({ tags });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

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
    const { userId } = req.body;

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
    getTagNameById,
    getTagIdByTagName,
    addTag,
    removeTag, 
    getTags,
    getAllTags
}