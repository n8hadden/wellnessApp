// Importing the messageModels module which contains functions related to messages
const models = require("../models/messageModels");

// Importing the tagModels module which contains functions related to tags
const tagModels = require("../models/tagModels");

// Function to handle chat events
async function OnChat(io, socket, data){
    try{
        // Destructuring data object to extract content, sender, and group
        const {content, sender, group} = data;
        
        // Retrieving the id for the given group from the tagModels module
        const id = await tagModels.getId(group);
        console.log(id + " id");

        // Checking if the sender is already in the group, if not, adding the sender to the group
        if(!await models.isUserInGroup(id, sender))
            await models.addToGroup(id, sender);
    
        // Adding the message to the group in the database
        await models.addMessage(content, sender, id);

        // Logging chat content
        console.log(content + " chat content");

        // Emitting the new chat event to all sockets in the group
        io.to(group).emit("new_chat", {content, sender, group, });
    }
    catch(e){
        console.log(e);
    }
}

// Function to handle joining a chat room
async function joinChat(io, socket, data){
    // Extracting group from data object
    const {group} = data;

    // Logging the group
    console.log(group + " group");

    // Joining the socket to the specified group
    socket.join(group);
}

// Function to handle getting messages for a particular group
async function getMessages(req, res){
    try{
        // Extracting group from request body
        console.log(req.body)

        const { group } = req.body;

        // Retrieving messages for the specified group
        let chats = (await models.getMessages(group));

        // Sending the messages along with the group identifier as a response
        res.status(200).json({
            chats,
            group
        });
    }
    catch(e){
        // Logging any errors and sending an internal error response
        console.log(e);
        res.status(500).send("Internal Error");
    }
}

// Exporting the functions to be used in other modules
module.exports = {
    OnChat,
    getMessages,
    joinChat
}
