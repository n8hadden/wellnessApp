// Importing the express library
const express = require('express');

// Creating a new router instance from Express
const router = express.Router();

// Importing the controller module responsible for handling affirmation-related operations
const controller = require("../controller/affirmController");

// Defining a GET route '/get' which will be handled by the getAffirmation function from the affirmController module
router.get('/get', controller.getAffirmation);

// Exporting the router object so it can be used in other parts of the application
module.exports = router;
