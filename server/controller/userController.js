const model = require("../models/userModels");

// Get and show all users
async function getUsers(req, res) {
    
    try {
        const users = await model.getUsers();
        res.status(201).json({ users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Create a user
async function createUser(req, res)  {
    const { username, email, password } = req.body;

    try {
        const newUser = await model.createUser(username, email, password);
        res.status(201).json({ newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Get a certain user by a given id
async function getUserById(req, res) {
    const { _id } = req.body;

    try {
        const user = await model.getUserById(_id);
        res.status(201).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Get a user by a given email
async function getUserByEmail(req, res) {
    const { email } = req.body;

    try {
        const user = await model.getUserById(email);
        res.status(201).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Get a user by a given username
async function getUserByUsername(req, res) {
    const { username } = req.body;

    try {
        const user = await model.getUserById(username);
        res.status(201).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    getUserByEmail,
    getUserByUsername,
}