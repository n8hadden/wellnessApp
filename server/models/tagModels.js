// Importing the database utility module
const database = require('../utils/database');

// Function to retrieve tags associated with a user
async function getTags(userId){
    // Constructing the SQL query to select tags associated with the user
    let query = `SELECT b.* FROM users 
    a JOIN tags b ON 
    b.tag_id = ANY(a.tags) 
    WHERE user_id = '${userId}'`;
    
    // Executing the SQL query using the database utility function and returning the result
    return (await database.getData(query));
}

// Function to remove a tag from a user's tags array
async function removeTag(userId, tagId){
    // Constructing the SQL query to remove a tag from the user's tags array
    let query = `UPDATE users SET tags = 
                ARRAY_REMOVE(tags, '${tagId}') 
                WHERE user_id = '${userId}';`

    // Executing the SQL query using the database utility function
    await database.setData(query);
}

// Function to add a tag to a user's tags array
async function addTag(userId, tagId){
    // Constructing the SQL query to add a tag to the user's tags array
    let query = `UPDATE users SET tags = 
                ARRAY_APPEND(tags, '${tagId}') 
                WHERE user_id = '${userId}';`

    // Executing the SQL query using the database utility function
    await database.setData(query);
}

async function getId(tagName){
    let query = `SELECT * FROM tags where tag_name like '${tagName}'`

    return (await database.getData(query))[0].tag_id;
}

// Exporting the functions to be used by other modules
module.exports = {
    getTags,
    addTag,
    removeTag,
    getId
}
