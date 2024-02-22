const models = require("../models/messageModels");
const tagModels = require("../models/tagModels");

async function OnChat(io, socket, data){
    try{
        const {content, sender, group} = data;
        
        const id = await tagModels.getId(group);
        console.log(id + " id");

        if(!await models.isUserInGroup(id, sender))
        await models.addToGroup(id, sender);
    
        await models.addMessage(content, sender, id);

        console.log(content + " chat content");
        io.to(group).emit("new_chat", {content, sender, group});
    }
    catch(e){
        console.log(e);
    }
}

async function joinChat(io, socket, data){
    const {group} = data;
    socket.join(group);
}

async function getMessages(req, res){
    try{
        const {group} = req.body;

        let chats = models.getMessages(group);
        res.status(200).json({
            chats,
            group
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send("Internal Error");
    }
}

module.exports = {
    OnChat,
    getMessages,
    joinChat
}