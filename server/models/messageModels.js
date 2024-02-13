const database = require('../utils/database');

async function getMessages(groupId){
    let query = `SELECT * FROM messages WHERE group_id=${groupId}`;

    return (await database.getData(query))
}

async function addMessage(content, user_id, group_id){
    let query = `INSERT INTO message (sender_id, content, group_id) VALUES 
                (${user_id}, '${content}', ${group_id})`

    await database.setData(query)
}

async function isUserInGroup(chat_id, user_id){
    let query = `SELECT 1 FROM chatgroups 
    WHERE chat_id = ${chat_id} 
    AND user_id = ${user_id} LIMIT 1`;

    return (await database.client.query(query)).rowCount > 0;
}

async function addToGroup(chat_id, user_id){
    let query = `INSERT INTO chatgroups (chat_id, user_id) 
                VALUES (${chat_id}, ${user_id}?)`;

    await database.getData(query);
}

module.exports = {
    getMessages,
    addMessage,
    isUserInGroup,
    addToGroup
}

