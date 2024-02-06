const model = require('../models/tagModels');

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

async function getTags(req, res) {
    try {
        const { tags } = await model.getTags();
        res.status(201).json({ tags });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    addTags,
    removeTags, 
    getTags,
}