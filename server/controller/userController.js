const model = require("../models/userModels");
const sessionModel = require("../models/sessionModels");

const bcrypt = require('bcrypt');
const randomKey = require("../utils/randomKey");

// Set the number of times to hash the passwords.
const saltRounds = 12; 

// Login the user
async function verifySession(req, res){
    let { session } = req.body;
    
    if(session != undefined)
    {
        let user = await model.getUserBySession(session);

        if(user != null){
            res.status(200).json({
                user: user,
                sessionKey: session
            });
        }
        else{
            res.status(404).json({error: "session does not exist"});
        }
    }
    else{
        res.status(404).json({error: "No Session Provided"});
    }
}



async function login(req, res) {
    let { username, password } = req.body;

    const user = await model.getUserByUsername(username);
    console.log(user);

    bcrypt.compare(password, user.password, async (err, isMatch) => {
        console.log(isMatch);
        if (isMatch) {

            session = randomKey();

            console.log(user, session);

            await sessionModel.addSession(user.user_id, session);

            const data = {
                user,
                session
            }

            res.status(200).json(data);

        } else {
            res.status(404).json({ error: "Internal Server Error" });
        }
    });
}

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
    let { username, email, password } = req.body;

    await bcrypt.hash(password, saltRounds).then(hash => {
        password = hash;
    }) 

    try {
        await model.createUser(username, email, password);
        res.status(200).json({ message: "user added" });
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
        const user = await model.getUserByEmail(email);
        res.status(201).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Get a user by a given username
async function getUserByUsername(req, res) {
    console.log(req.body);
    const { username } = req.body;

    try {
        const user = await model.getUserByUsername(username);
        res.status(201).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    login,
    getUsers,
    createUser,
    getUserById,
    getUserByEmail,
    getUserByUsername,
    verifySession
}