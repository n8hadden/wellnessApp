const database = require("../utils/database")

async function getUsers(){
    let query = "SELECT * FROM users";

    return await database.getData(query);
}

async function getUserById(id){
    let query = `SELECT * FROM users WHERE id = ${id}`;

    return (await database.getData(query))[0];
}

async function getUserByUsername(username){
    let query = `SELECT * FROM users WHERE username = '${username}'`;
    
    return (await database.getData(query))[0];
}

async function getUserByEmail(email){
    let query = `SELECT * FROM users WHERE email = '${email}'`;
    
    return (await database.getData(query))[0];
}

async function createUser(username, email, password){
    let query = `INSERT INTO users (username, email, password)
        VALUES ('${username}', '${email}', '${password}')`;

    await database.setData(query);
}

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    createUser
}