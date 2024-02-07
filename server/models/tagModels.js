const database = require('../utils/database');

async function getTags(userId){
   let query = `SELECT b.* FROM users
   a JOIN tags b ON 
   b.tag_id = ANY(a.tags) 
   WHERE user_id = '${userId}'`;
   
   return (await database.getData(query));
}

async function removeTag(userId, tagId){
    let query = `UPDATE users SET tags = 
                ARRAY_REMOVE(tags, '${tagId}') 
                WHERE user_id = '${userId}';`

    await database.setData(query);
}

async function addTag(userId, tagId){
    let query = `UPDATE users SET tags = 
                ARRAY_APPEND(tags, '${tagId}') 
                WHERE user_id = '${userId}';`

    await database.setData(query);
}

module.exports = {
    getTags,
    addTag,
    removeTag
}