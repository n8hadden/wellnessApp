// Importing the express library
const express = require('express');

// Creating a new router instance from Express
const router = express.Router();

// Importing the controller module responsible for handling mood-related operations
const controller = require("../controller/moodController");

// Defining a POST route '/getMood' which will be handled by the getMoodInfo function from the moodController module
router.post('/getMood', controller.getMoodInfo);
router.post('/getMoodId', controller.getMoodId);
// Exporting the router object so it can be used in other parts of the application
module.exports = router;
