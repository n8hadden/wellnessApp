// Importing the express library
const express = require('express');

// Creating a new router instance from Express
const router = express.Router();

// Importing the controller module responsible for handling chat-related operations
const controller = require("../controller/chatController");

// Defining a GET route '/getMessages' which will be handled by the getMessages function from the chatController module
router.post('/getMessages', controller.getMessages);

// Exporting the router object so it can be used in other parts of the application
module.exports = router;
