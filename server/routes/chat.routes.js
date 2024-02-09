// Importing the Router class from the socket.io utility module
const { Router } = require("../utils/socket.io");

// Importing the chat controller module
const controller = require("../controller/chatController");

// Creating a new instance of the Router class
const router = new Router();

// Registering a handler for the "test" event
// When the "test" event is received, it will trigger the controller's OnChat function
router.On("test", controller.OnChat);

// Exporting the router instance to be used by other modules
module.exports = router;

