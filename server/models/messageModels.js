const database = require('../utils/database');

async function getMessages(groupId){
    let query = `SELECT * FROM messages WHERE group_id=${groupId}`;

    return (await database.getData(query))
}

async function addMessage(content, user_id, group_id, messages_id){
    
    
    let query = `INSERT INTO message (sender_id, content, group_id) VALUES 
                (${user_id}, '${content}', ${group_Id});`

    (await database.setData(query))
}

