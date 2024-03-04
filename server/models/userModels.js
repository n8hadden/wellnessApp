// Importing the 'query' function from the 'express' package
const { query } = require("express");

// Importing the database utility module
const database = require("../utils/database");

// Function to retrieve all users from the database
async function getUsers(){
    // Constructing the SQL query to select all users
    let query = "SELECT * FROM users";

    // Executing the SQL query using the database utility function and returning the result
    return await database.getData(query);
}

// Function to retrieve a user by their ID from the database
async function getUserById(id){
    // Constructing the SQL query to select a user by their ID
    let query = `SELECT * FROM users WHERE user_id = ${id}`;

    // Executing the SQL query using the database utility function and returning the result
    return (await database.getData(query))[0];
}

// Function to retrieve a user by their username from the database
async function getUserByUsername(username){
    // Constructing the SQL query to select a user by their username
    let query = `SELECT * FROM users WHERE username = '${username}'`;
    
    // Executing the SQL query using the database utility function and returning the result
    return (await database.getData(query))[0];
}

// Function to retrieve a user by their email from the database
async function getUserByEmail(email){
    // Constructing the SQL query to select a user by their email
    let query = `SELECT * FROM users WHERE email = '${email}'`;
    
    // Executing the SQL query using the database utility function and returning the result
    return (await database.getData(query))[0];
}

// Function to create a new user in the database
async function createUser(username, email, password){
    // Constructing the SQL query to insert a new user
    let query = `INSERT INTO users (username, email, password, tags)
        VALUES ('${username}', '${email}', '${password}', [])`;

    // Executing the SQL query using the database utility function
    let user = await database.setData(query);
    console.log(user)
}

// Function to retrieve user information by their session key from the database
async function getUserBySession(sessionKey){
    // Constructing the SQL query to select user information by session key
    let query = `SELECT username, email, password 
    FROM users INNER JOIN sessions 
    ON users.id = sessions.user_id
    WHERE session_key='${query}';`;

    // Executing the SQL query using the database utility function and returning the result
    return (await database.getData(query))[0];
}

// Exporting all functions to be used by other modules
module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    getUserBySession,
    createUser
}
