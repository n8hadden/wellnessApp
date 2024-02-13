// import and use express to setup a server
const express = require('express');
const router = express.Router();

const controller = require("../controller/chatController");

router.get('/getMessages', controller.getMessages);

module.exports = router;