// import and use express to setup a server
const express = require('express');
const router = express.Router();

const controller = require("../controller/affirmController");

router.get('/get', controller.getAffirmation);

module.exports = router;